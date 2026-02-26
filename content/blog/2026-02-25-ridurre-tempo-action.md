---
title: "Ridurre i tempi di build con buildx su Github"
date: "2026-02-16"
excerpt: "Ridurre il build time su un'action di github del 60% usando caching e matrix runner"
image: "/assets/images/mcp.png"
---

## Il tempo è prezioso.

Lo sappiamo che il tempo è prezioso, troppo prezioso pertanto non vale la pena sperecarlo in tempi di deployment biblici che riducono la produttività del team e la voglia di sviluppare nuove features.

Qualche giorno fa mi sono trovato ad affrontare un problema: un'action di github che buildava multiarch 13 immagini docker e pushava i rispettivi container su repo privati di docker hub.

Ogni dockerfile aveva una fase di pull, checkout, installazzione dei node moodules, generazione del bundle e push che richiedeva, in media ***6/7 minuti a progetto***.
Capite che, sommando tutto insieme il tempom compelssivo superava spesso i 50 minuti senza considerare la totale assenza di controlli sull'hashing dei tag per evitare re-pushing di immagini già presenti.

## L'approccio

Il primo step è stato quello di utilizzare il concetto di 'buildcache' di docker che permette di salvare e recuperare i layer di build da un registry remoto, in questo modo è possibile evitare di ricostruire layer che non sono cambiati tra una build e l'altra.

   docker buildx build \
              --platform="${PLATFORMS}" \
              --build-arg MONGO_VERSION=latest \
              --cache-from=type=registry,ref="${IMAGE_NAME}:buildcache" \
              --cache-to=type=registry,ref="${IMAGE_NAME}:buildcache",mode=max \
              -f "${DOCKERFILE}" \
              -t "${IMAGE_NAME}:${TAG}" \
              --push "${BUILD_CONTEXT}"

Per ogni progetto, ho configurato l'action in modo da utilizzare un'immagine di base comune che contiene tutte le dipendenze necessarie per la build, in questo modo è possibile sfruttare il caching dei layer di build e ridurre significativamente i tempi di build.

## Matrixing 

Il secondo step è stato quello di utilizzare la funzionalità di matrix runner di github actions per parallelizzare le build su più runner, in questo modo è possibile ridurre ulteriormente i tempi di build.

   strategy:
      matrix:
        project: [project1, project2, project3, project4, project5, project6, project7, project8, project9, project10, project11, project12, project13] 
        platform: [linux/amd64, linux/arm64]

Era necessario mantenere le due architetture separate per evitare problemi di compatibilità tra i runner, in questo modo è possibile sfruttare al massimo le risorse disponibili e ridurre i tempi di build.
Ovviamente utilizzando QUEMU per emulare le architetture i tempi di build aumentano, ma è comunque possibile ottenere un miglioramento significativo rispetto alla build sequenziale.

## Risultati

Dopo aver implementato queste modifiche, i tempi di build sono stati ridotti del 60%, passando da circa 50 minuti a circa 20 minuti per tutte le immagini, con un miglioramento significativo della produttività del team e della voglia di sviluppare nuove features.

Inoltre grazie al caching dei layer di build, è stato possibile evitare di ricostruire layer che non sono cambiati tra una build e l'altra, riducendo ulteriormente i tempi di build e migliorando l'efficienza del processo di deployment.