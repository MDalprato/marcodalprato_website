---
title: "Guida definitiva a Time Machine"
date: "2013-06-19"
slug: "2013-06-19-guida-definitiva-a-time-machine"
excerpt: "In decine di persone mi hanno chiesto come funziona esattamente Time Machine e soprattutto se è veramente utile per “archiviare” la cronologia dei dati del proprio Mac. Ora..."
image: "https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?auto=format&fit=crop&w=1600&q=80"
---

In decine di persone mi hanno chiesto come funziona esattamente **Time Machine** e soprattutto se è veramente utile per “archiviare” la cronologia dei dati del proprio Mac.

Ora, come probabilmente molti di voi sapranno la parola backup deriva dall’inglese e sta ad indicare “scorta”, “copia di sicurezza” ed è un operazione che viene eseguita con l’obbiettivo fondamentale di archiviare per un’eventuale consultazione futura i dati precedentemente “backuppati”.

Di norma, un backup viene eseguito per salvare i dati presenti all’interno del proprio PC in un’altro dispositivo (normalmente esterno) ad intervalli più o meno regolari.

Il backup può essere eseguito in vari modo, con varie tecniche e differenti metodi ma, normalmente, esistono due tipi di backup: Backup differenziale Backup incrementale
- **Backup differenziale**: Viene eseguita una copia completa del disco e nei backup successivi si esegue un confronto tra la copia precedente e la copia attuale sostituendo solo i file cambiati, in questo modo si avrà SEMPRE l’ultima immagine del disco, senza però avere una “cronologia storica” dei cambiamenti fatti fino ad oggi.

- **Backup incrementale**: Viene eseguita una copia completa del disco e nei backup successivi si esegue un confronto tra la copia precedente e la copia attuale salvando i soli file cambiati, in questo modo si avrà sempre una “cronologia storica” dei cambiamenti e la possibilità di ritornare sempre ad un certo “istante”.

Come si può facilmente intuire il Backup Incrementale è il più esoso di spazio ma anche il più “sicuro” proprio per le sue “fotografie” storiche di un determinato istante.

**Time Machine** è un backup di tipo Semi-Incrementale, all’interno del quale viene salvato il primo backup completo (eseguito solo la prima volta) e successivamente tutti i file che sono stati cambiati dal primo backup fino ad oggi.

Il punto di forza di TM sta nella semplicità e nell’immediatezza della sua configurazione a differenza dei vari software per Windows che spesso rendono complicato anche solo ripristinare un file di testo.

## Cosa Serve

Se, dunque, avete necessità o voglia di provare **Time Machine** ecco cosa vi serve:

- Un Mac con **OS X** 10.5 Leopard o successivo
- Un disco esterno USB
- Una base **Airport Extreme** Ovviamente nel caso in cui abbiate una base **Time Capsule**, il disco esterno e la Base Aiport Extreme non vi servono.

Io ho preferito optare per la combinazione tra **Airport Extreme** e disco USB poiché in questo modo posso salvare non soltanto il backup di TM ma anche i miei video, film e musica in maniera “sciolta”.

Ovviamente con **Time Capsule** la procedura è nettamente più rapida e semplice ma anche con l’**Airport Extreme** non vi è nulla di “difficile” (come in tutto il mondo Apple, d’altro canto).

Nel caso in cui abbiate un disco USB connesso direttamente al Mac, la strada è semplice.

La prima operazione da fare dopo aver collegato il disco è la sua formattazione (se non avete già provveduto prima).

Per fare ciò cercate su ****Spotlight**** “****Utility Disco****”, selezionate nel menu a sinistra il disco che vi interessa (riquadro rosso), selezionate nel menu a tendina “Formato” l’opzione “Mac OS esteso (journaled)” (riquadro giallo) e poi confermate con con “Inizializza”.

Una volta eseguita questa operazione, che per dischi molto capienti può richiedere alcuni minuti, il vostro disco sarà pronto per poter essere utilizzato come backup di **Time Machine**.

Per attivare **Time Machine** dovete semplicemente cercare il programma “**Time Machine**” dalla ricerca con ****spotlight**** (esattamente come avete fatto precedentemente per ****Utility Disco****) e lanciarlo.

Una volta avviato, vi comparirà una schermata simile a questa (nel mio caso sono presenti due Hard disk che utilizzo per il Backup).

Per impostare su quale disco eseguire il Backup è necessario cliccare su “Aggiungi/Rimuovi disco di backup…” e una volta eseguita questa operazione vi verrà chiesto su qualche dispositivo attivare **Time Machine**.

Una volta selezionato il disco, la configurazione base di **Time Machine** è già settata correttamente e quindi possiamo tranquillamente dimenticarci di averlo attivato.

Ovviamente, nel caso in cui abbiate una base **Airport Extreme** o una base **Time Capsule** non dovete fare altro che selezionare dal menu a tendina quale disco utilizzare come Backup (come potete vedere, nel mio caso sono selezionati due dischi di backup connessi ad una base **Airport Extreme**).

A questo punto Time machine procederà ad eseguire il primissimo Backup, che normalmente richiede molto tempo poiché devono essere copiati tutti i file presenti sul “**Macintosh HD**” (ovvero il disco rigido principale del mac).

Nel caso in cui vogliate escludere qualche cartella/file presente nel Mac dal backup, potete impostarlo cliccando sul pulsante “Opzioni” e selezionando quali cartelle/file escludere dal backup.

Io, per esempio, ho escluso tutta la cartella “download” per evitare di “intasare” troppo il disco di backup con tutti i miei file scaricati.

Ovviamente la durata di questo primo backup cambia sia in base a quanti file avete presente nel Mac, sia al metodo di connessione tra il Mac e il disco di backup.

Se per esempio avete un iMac connesso ad un disco rigido esterno via thunderbolt i tempi di backup saranno nettamente inferiori di quelli di quelli necessari per un backup via **Wi-Fi** (consiglio preferibilmente di utilizzare un **Wi-Fi** a 5 Ghz 802.11 n/ac).

Di default **Time Machine** esegue il backup ogni ora, soluzione che generalmente preferisco poiché con un utilizzo normale del Mac in un ora il quantitativo di dati salvati non è mai esagerato e di conseguenza i backup non saranno mai troppo grandi.

Nel caso in cui vogliate modificare la frequenza con cui TM dovrà eseguire il backup, potete farlo digitando questa stringa nel ****Terminale di OSX**** sudo defaults write /System/Library/LaunchDaemons/com.apple.backupd-auto StartInterval -int 3600 Dove il valore “3600” indica i secondi che devono passare tra un backup ed un altro (di default è 3600 proprio perché la frequenza è di 1 ora, se per esempio volete spostare la frequenza a 10 ore, basterà inviare il comando scritto sopra sostituendo 3600 con 36000).

Un’altra opzione molto interessante è la possibilità di effettuare il backup del proprio Mac su più dischi contemporaneamente.

Tale funzione risulta molto comoda nel caso in cui i dati contenuti nel nostro Mac siano molto importanti e sopratutto sia necessario eseguire un backup multiplo in modo tale da poter essere “sicuri” di non incorrere in eventuali problemi che potrebbero sorgere con un unico disco di backup.

Per esempio, nel caso in cui avessimo sia una Base **Time Capsule** sia una Base **Airport Express**, potremmo impostare un backup principale sulla TC e uno secondario sulla AE in modo tale da avere sempre una copia del backup a nostra disposizione.

L’unica procedura aggiuntiva da eseguire rispetto a quella sopracitata è data dalla necessità di formattare un altro disco rigido esterno e di cliccare sulla voce “Aggiungi/Rimuovi disco di backup…”.

Una volta selezionato il secondo disco e avendo confermato con “Utilizza il disco” il backup sul secondo disco partirà entro pochi minuti.

Ovviamente anche in questo caso le tempistiche dipendono sempre dalla quantità di file presenti sul nostro Mac.

Personalmente sto utilizzando due dischi di backup, ambedue connessi all’**Airport Extreme** via porta USB.

## Recuperare un file

Capiterà quasi sicuramente che dopo qualche settimana/mese abbiate cancellato un file dal vostro mac che successivamente volete recuperare.

Per fare ciò basterà utilizzare l’interfaccia grafica di **Time Machine**, realizzata in modo molto semplice ed intuitivo.

Per recuperare un file procedete in questo modo: Cliccate sull’icona di **Time Machine** nella barra alta del Mac (quella vicina all’orario, per intenderci) e selezionate la voce “Entra in **Time Machine**” Una volta che avrete selezionato tale menu, verrà aperta la finestra del Finder a automaticamente vi ritroverete in una “Macchina del tempo” nella quale potrete scorrere tra i vari “periodi storici” del vostro Hard Disk e trovare quel particolare file che vi interessa.

Come potete vedere nell’immagine qui sopra, vi ritroverete in un una vera e propria macchina del tempo, dentro la quale potete scorrere tra i vari momenti storici (cliccando nei vari tab a sinistra) e poterete recuperare qualsiasi file semplicemente cliccando con il pulsante destro su un qualsiasi file/cartella e selezionando la voce “Ripristina nomefile su …” Ora avete ripristinato il file (ovviamente più il file da ripristinare è grande, più il tempo richiesto per il suo ripristino sarà maggiore).

## Backup Locali e poi basta

L’ultimo accenno importante su **Time Machine** riguarda i “local backup” di **Time Machine**, quest’ultima funzione è molto utile nel caso in cui abbiate un macbook (pro).

In pratica oltre ad eseguire il backup sul disco esterno / **Time Capsule**, **Time Machine** esegue anche un backup locale sul disco rigido presente sul mac, in modo da fornire sempre e comunque una “cronologia degli eventi” anche nel caso in cui il macbook non sia connesso al disco di backup.

Un esempio su tutti: Avete configurato il mac per eseguire il backup sul vostro **Time Capsule** a casa, quindi appena il mac si collegherà alla vostra rete **Wi-Fi** partirà automaticamente il backup.

Nell’ipotesi in cui partiate per un viaggio, magari a New York (strano vero?!), il vostro Mac continuerà ad eseguire il backup dei cambiamenti in una partizione interna del mac e appena si ricollegherà alla vostra rete **Wi-Fi** (o al disco di TM) copierà automaticamente tutto il disco di backup interno verso quello esterno, mantenendo però la “cronologia” degli eventi, geniale no?.

Potete verificare quanto spazio occupa il backup locale sul vostro mac andando in “Informazioni su questo Mac”, “Più informazioni” e selezionando il tab “Archivio” vedrete una voce chiamata “Backup”.

Nel caso in cui per qualche motivo vogliate rimuovere i backup locali ( io lo sconsiglio ) basterà andare nel Terminale di **OS X** e digitare questo comando: sudo tmutil disablelocal Subito dopo vi verrà richiesta la password del Mac, inseritela e confermate con OK.

Da questo momento non avrete più i backup locali, funzione forse utile nel caso in cui abbiate sostituito il disco rigido del vostro Mac con un SSD (i dischi a stato solido soffrono di più i cicli di lettura e scrittura rispetto a quelli meccanici).

Ovviamente per riattivare i Backup Locali basterà sostituire “disablelocal” con “enablelocal”.

Con quest’ultima informazione ho concluso la mia guida su **Time Machine**, sperando sia stata utile e sopratutto abbia chiarito le idee a qualche Mac User.

Per qualsiasi domanda, scrivete nei commenti qui sotto, vi risponderò il prima possibile.

Stay Tuned.
