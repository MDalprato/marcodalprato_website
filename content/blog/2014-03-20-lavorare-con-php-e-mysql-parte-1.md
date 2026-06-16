---
title: "Lavorare con PHP e MySQL [ 1 ]"
date: "2014-03-20"
slug: "2014-03-20-lavorare-con-php-e-mysql-parte-1"
excerpt: "Ho deciso, dopo averlo utilizzato (ed odiato) per mesi e mesi (quasi anni) di scrivere una serie di guide sul meraviglioso mondo del PHP e della sua integrazione con i..."
image: "https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?auto=format&fit=crop&w=1600&q=80"
---

Ho deciso, dopo averlo utilizzato (ed odiato) per mesi e mesi (quasi anni) di scrivere una serie di guide sul meraviglioso mondo del PHP e della sua integrazione con i database SQL.

In questa prima lezione getterò le basi su come creare e mettere in “moto” un semplice sito web direttamente in locale sul proprio Mac (o PC che sia).

Cose’è il PHP.

Il php è un linguaggio di programmazione interpretato, utile per realizzare siti dinamici, interazioni tra pagine web e e per poter dialogare con altri strumenti tra cui, per esempio, i database SQL.

Il mio sito, ovvero quello che state leggendo ora, altro non è che un insieme di pagine HTML e PHP che prelevano i dati da un database SQL (il testo che leggete non è realmente presente in questa pagina, ma viene caricato dinamicamente ogni volta che la visitate).

Molti di voi si chiederanno come mai è nata la necessità di utilizzare un altro linguaggio di programmazione per le pagine web oltre all’HTML; la risposta è semplice e sta tutta nella dinamicità delle pagine e nella possibilità di far eseguire del codice direttamente sul server per poter “buttare” in uscita del codice comprensibile al browser web.

Già qui, quindi, vediamo due grandi differenze tra l’HTML e il PHP: il primo è un insieme di tag e codici che vengono interpretati dal browser web ogni volta che viene aperta una determinata pagina “index.html” (ma potrebbe essere anche “prova.html”, ho scelto index.html perché è la pagina standard che viene caricata di default quando si visita un sito web) mentre il codice PHP viene interpretato ed “eseguito” dal server su cui risiedono le pagine, senza quindi dover far interpretare il codice al browser web.

Questa differenza permette al PHP di essere utilizzato per poter creare pagine dinamiche di interfacciarsi con database e altre pagine php il tutto direttamente sul server su cui “gira” il sito web.

Concetti di PHP.

Il php è un linguaggio relativamente semplice, ovviamente il primo approccio dipende da quanto siete ferrati in programmazione (specialmente con il “Linguaggio C”).

I concetti standard della programmazione ci sono tutti: if, switch, case, variabili, operazioni matematiche ecc… quindi come comprensione è tutto abbastanza semplice e comprensibile; ciò che è complesso è scrivere codice semplice, facile da interpretare e sopratutto efficiente.

Quando si lavora con le pagine web, con fogli di stile e con i linguaggi HTML, PHP, JAVASCRIPT è necessario ricordarsi che, a differenza di un linguaggio di programmazione basato su una piattaforma unica, le pagine web devono poter essere interpretate da diversi browser web (Safari, Opera, Firefox … purtroppo Internet Explorer e così di seguito) quindi è sempre bene controllare ogni apertura e chiusura di tag, ogni “;” mancante e che l’organizzazione del codice sia pressoché perfetto.

Le regole fondamentali del PHP sono: In una pagina mista (quindi con codice PHP e codice HMTL) le parti di codice in PHP vanno racchiuse dentro i tag “<?” e “?>”; se si vuole essere precisi si può aprire il PHP con il tag “<?php”.

Tutte le righe si concludono con il simbolo “;” (semicolon without apexs).

Il codice PHP può creare codice HTML mentre l’HTML non può creare codice PHP.

Primo esempio di utilizzo del PHP PHP <?php

$variabile; // dichiarazione di una variabile generica</pre> $nome = "Marco"; // dichiarazione di una variabile a cui viene attribuito un valore (testuale)

echo "Ciao ". $nome. "<br>"; // con il comando "echo" viene stampato a video il testo "Ciao Marco"

?><b>Puoi uscire dal codice PHP e scrivere in HTML quando vuoi</b> <br><?

echo "<b><i> Questo testo è in grassetto e in corsivo </i></b>";

?> 1 2 3 4 5 6 7 8 9 10 11 12 <?php $variabile; // dichiarazione di una variabile generica</pre> $nome = "Marco"; // dichiarazione di una variabile a cui viene attribuito un valore (testuale) echo "Ciao ". $nome.

"<br>"; // con il comando "echo" viene stampato a video il testo "Ciao Marco"?> < b > Puoi uscire dal codice PHP e scrivere in HTML quando vuoi < / b > < br > <?

echo "<b><i> Questo testo è in grassetto e in corsivo </i></b>";?> Il codice che trovate qui sopra, per esempio, vi mostra come sia semplice poter passare dal codice PHP al codice HTML, come si possa “stampare” a video direttamente del codice HTML utilizzando il PHP e come vengano gestite le variabili dal PHP.

Ovviamente le potenzialità del PHP non si fermano qui ma è possibile eseguire un’infinità di applicazioni complesse e sopratutto molto articolare: Secondo esempio di utilizzo del PHP PHP <?php

$valore1 = "50"; $valore2 = "10"; $password = "ciao";

$somma = $valore1 + $valore2; $moltiplicazione = $valore1 * $valore2;

$md5 = md5($password);

echo $somma; echo "<br>"; echo $moltiplicazione; echo "<br>"; echo $md5;

/* L'output, sarà questo:

60 500 6e6bc4e49dd477ebc98ef4046c067b5f

*/

?> 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 <?php $valore1 = "50"; $valore2 = "10"; $password = "ciao"; $somma = $valore1 + $valore2; $moltiplicazione = $valore1 * $valore2; $md5 = md5 ( $password ); echo $somma; echo "<br>"; echo $moltiplicazione; echo "<br>"; echo $md5; /* L'output, sarà questo: 60 500 6e6bc4e49dd477ebc98ef4046c067b5f */?> Il codice che vedete qui sopra è leggermente più complesso e in pratica esegue tre operazioni: la somma di due valori “valore1″ e “valore2″, la moltiplicazione dei valori precedenti e il calcolo dell’algoritmo md5 della parola “ciao”.

MAMP & XAMPP Dato che la pratica è meglio della teoria partiamo subito com le basi per poter iniziare a sviluppare in locale le nostre prime pagine in PHP (e anche ovviamente in HTML).

Per poter iniziare a sviluppare in locale è necessario procurasi un server Apache e (dato che lo useremo più avanti) anche un server MySQL.

Sia per OSX che per Windows esistono due programmi che integrano Apache e MySQL e sono MAMP (per OSX) e XAMPP (per Windows, Linux e OSX).

Potete scaricare MAMP qui e XAMPP qui.

Installare MAMP Tutte le guide da qui in poi sono riferite all’app MAMP poiché la trovo più semplice e rapido da utilizzare ma il procedimento è simile anche con XAMPP.

Procedete a scaricare MAMP dal sito web ufficiale qui e terminato il download avviare l’installer che procederà a copiare tutti i file necessari direttamente sul vostro Mac.

Pagina iniziale di MAMP Prima di procedere con l’attivazione di MAMP dovete controllare alcune impostazioni di base.

La prima configurazione da controllare è quella delle porte; per facilitare la realizzazione di pagine web (personalmente) preferisco utilizzare MAMP sulla porta “80″ e MySQL sulla porta “8889″.

Configurazione porte di MAMP La seconda “parte” della configurazione riguarda il percorso dove andremo a salvare tutte le nostre pagine che si chiama “ htdocs “.

Questa cartella diventerà il nostro punto di riferimento dove al suo interno creeremo tutti i file necessari per poter sviluppare le nostre pagine web.

Configurazione del percorso “htdocs” Ora che abbiamo configurato tutto possiamo procedere avviando il server Apache e MySQL cliccando su “Avvia il server” nella schermata principale (vi verrà richiesta la password di amministratore).

Prova sul campo.

Dato che la soluzione migliore per capire come funziona una cosa è provarla è giunto il momento di realizzare la nostra prima “pagina web”.

Per fare ciò dobbiamo andare dentro la cartella “ htdocs ” di cui parlavo prima che, di default, si trova in “ /Applications/MAMP/htdocs “.

Ovviamente la cartella sarà vuota e pronta a “ricevere” le nostre pagine web.

Per poter scrivere pagine html o php può bastare anche un semplice editor di testo come “textedit” o “notepad” (Windows user, ogni tanto vi penso) ma il mio consiglio è quello di scaricare “ TextWrangler ” (OSX) o “ Notepad++ ” (Windows) che permettono di lavorare più velocemente e sopratutto con una formattazione automatica molto comoda.

Per comodità tutte le immagini e le guide che vedrete da qui in poi si riferiscono a TextWrangler ma sono applicabili anche a Notepad o a Notepad++.

Per iniziare la nostra prova sul campo aprite TextWrangler (ovviamente dovete prima scaricarlo e installarlo).

TextWrangler su OSX (Nuovo documento) Dopo averlo avviato vi troverete in una situazione simile a quella mostrata nell’immagine qui sopra (il vostro TextWrangler avrà lo sfondo bianco ma non preoccupatevi).

Ora proviamo a creare una pagina molto semplice: Semplice pagina di esempio in HTML <!DOCTYPE html> <html> <head> <title>Titolo della pagina WEB</title> </head> <body> Qui potete scriverci tutto quello che volete.<br> <b>Grassetto</b><br> <i>Corsivo</i><br> <h3>Header in formato H3</h3> </body> </html> 1 2 3 4 5 6 7 8 <!

DOCTYPE html > < html > < head > < title > Titolo della pagina WEB < / title > < / head > < body > Qui potete scriverci tutto quello che volete.

< br > < b > Grassetto < / b > < br > < i > Corsivo < / i > < br > < h3 > Header in formato H3 < / h3 > < / body > < / html > Copiate il codice che trovate qui sopra nel nuovo file appena aperto con TextWrangler e salvatelo (cmd+”s”) dentro la cartella “ htdocs ” con il nome “ index.html “.

Ora il codice che avete scritto verrà auto-formattato con colori differenti in base al tipo di tag (un “tag” è un indicatore all’interno del codice HTML, per esempio “<b>” è il tag che fa diventare bold il testo).

Ora che avete scritto il codice è tempo di vederlo in “azione”.

Per fare ciò aprite Safari (o un browser web) e digitate, nella barra degli indirizzi, l’url “localhost” oppure “127.0.0.1″.

Come vedete nell’immagine qui sotto la nostra pagina in HTML è stata caricata e interpretata dal Browser web che ci mostra il testo da noi inserito e lo formatta esattamente come abbiamo deciso noi.

Risultato della nostra prima pagina in HTML Sia localhost che 127.0.0.1 indicano sempre il PC locale su cui state lavorando e di conseguenza non sono indirizzi che “escono” dal PC ma vengono risolti in locale.

Nel nostro caso, chiamando dal browser l’indirizzo localhost esso si vede costretto a caricare la pagina da noi creata “index.html” e ad interpretarla per potercela mostrare in modo comprensibile.

In pratica localhost e 127.0.0.1 corrispondono alla nostra “Home” che contiene i nostri file “htdocs”.

Htdocs, localhost e 127.0.0.1 Immaginatevi di avere una casa dove al suo interno vi sono 3 librerie, la prima si chiama “commedie”, la seconda “horror” e la terza “viaggi”.

Ogni libreria contiene (ovviamente) dei libri e ogni libro ha un nome univoco.

Per esempio nella libreria “Viaggi” ci sarà il libro “New York”, nella libreria “horror” ci sarà il libro “Dracula” e così via.

La struttura della nostra cartella localhost è del tutto simile alla struttura della Casa\Libreria\Libro.

Se, dal browser web, volessimo “leggere” il libro di di “New York” ci basterebbe digitare l’indirizzo “ http://localhost/Viaggi/New-York “.

Stesso concetto se volessimo leggere Dracula di Bram Stoker, ci basterebbe andare in “ http://localhost/Horror/Dracula “.

Se invece volessimo visualizzare, per esempio, la pagina 30 del libro di Dracula la struttura sarebbe questa: “ http://localhost/Horror/Dracula/pagina30.html” poiché se non ci fosse la “pagina30.html” il browser web ci re-indirizzerebbe alla pagina iniziale “ index.html “.

Il nostro “localhost” è corrispondente alla nostra pagina “htdocs” in locale e la “root” della pagina è la nostra cartella iniziale.

Le regole dell’HTML sono troppe per poter essere scritte tutte in una sola guida, e i tag sono praticamente infiniti ed in continuo aggiornamento, trovate una lista completa a questo indirizzo.

Ora che abbiamo visto come funziona l’HTML passiamo direttamente alla nostra prima pagina in PHP.

La prima grande modifica da fare è quella di cambiare l’estensione del nostro file da “index.html” a “index.php”.

Ricordatevi sempre che una pagina in “html” non può contenere codice in PHP (nel caso in cui lo contenga esso non verrà interpretato) mentre una pagina in “php” può contenere codice in HTML.

Ora che avete rinominato il file in “index.php” provate a ricaricare la pagina “localhost” del vostro computer: noterete che non cambierà assolutamente nulla, questo perché tutto ciò che non è racchiuso tra “<?” e “?>” viene interpretato come codice HTML.

Aumentiamo il livello Sostituite il codice che avete scritto prima nella pagina “index.php” con questo codice: Codice PHP di un semplice programma PHP <?php // dichiarazioni variabili $data = date("j, n, Y"); // 10, 3, 2014 $anno = date("Y"); // 2014 $anno_compleanno = "1990"; $messaggio; // calcolo degli anni $anni_passati = $anno - $anno_compleanno; // creazione del messaggio if($anni_passati < "30") { $messaggio = "Sei givane"; // se $anni_passati è inferiore a 30, mostro "Sei giovane" } else { $messaggio = "Sei vecchio"; // se $anni_passati è maggiore di 30, mostro "Sei vecchio" } // Primo messaggio scritto interamente in PHP echo "Oggi ".

$data. " sono passati ". $anni_passati.

" anni da quando sei nato"; // FINE del codice in PHP?> <!-- Inizio del codice in HTML --> <br> <!-- Con BR vado a capo di una riga --> <br> <!-- Con BR vado a capo di una riga --> <i><?=$messaggio?></i> <!-- Stampo il messaggio in PHP racchiuso tra tag HTML --> 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 <?php // dichiarazioni variabili $data = date ( "j, n, Y" ); // 10, 3, 2014 $anno = date ( "Y" ); // 2014 $anno_compleanno = "1990"; $messaggio; // calcolo degli anni $anni_passati = $anno

$anno_compleanno; // creazione del messaggio if ( $anni_passati < "30" ) { $messaggio = "Sei givane"; // se $anni_passati è inferiore a 30, mostro "Sei giovane" } else { $messaggio = "Sei vecchio"; // se $anni_passati è maggiore di 30, mostro "Sei vecchio" } // Primo messaggio scritto interamente in PHP echo "Oggi ". $data. " sono passati ". $anni_passati. " anni da quando sei nato"; // FINE del codice in PHP?> <!

## Inizio del codice in HTML

> < br > <!

## Con BR vado a capo di una riga

> < br > <!

## Con BR vado a capo di una riga

> < i > <? = $messaggio?> < / i > <!

## Stampo il messaggio in PHP racchiuso tra tag HTML

> Cambiate il valore della variabile “$anno_compleanno” con, ovviamente, l’anno del vostro compleanno e caricate nuovamente la pagina “localhost”.

Vedrete un output simile a questo: Output della pagina appena creata Il codice che avete appena scritto è molto semplice e non fa altro (come avrete intuito) che calcolare la data attuale, sottrarre l’anno corrente al proprio anno di nascita e mostrare un messaggio che può assumere due valori in base alla vostra età.

Tutto questo è un semplice esempio delle potenzialità che il PHP può offrire.

Nella prossima guida spiegherò come configurare un database MySQL e come far “dialogare” pagine in PHP con il database.

Stay Tuned.
