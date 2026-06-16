---
title: "La bibbia delle reti Apple"
date: "2015-01-01"
slug: "2015-01-01-la-bibbia-delle-reti-apple"
excerpt: "Ho deciso di scrivere, grazie anche alle decide di commenti e domande che ho ricevuto in merito, una guida definitiva, completa e chiara (spero) per cercare di spiegare cos’è..."
image: "https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?auto=format&fit=crop&w=1600&q=80"
---

Ho deciso di scrivere, grazie anche alle decide di commenti e domande che ho ricevuto in merito, una guida definitiva, completa e chiara (spero) per cercare di spiegare cos’è una rete Apple, come configurarla e cosa è possibile creare con i dispositivi Airport e non solo (**Apple TV** in primis).

Questa guida vuole essere un punto di riferimento per chi, avendo notato che Apple non fa solo **iPad** e **iPhone** ma anche Access Point e Router, ha deciso di provare ad investire parte dei sui risparmi comprando una base Airport affascinato dal design, dalle caratteristiche tecniche ma soprattutto dalla facilità di configurazione senza però senza riuscire a capire come sfruttarla al massimo.

Scrivere una guida del genere non è un compito facile e richiede tempo, fatica e notti insonne passate a configurare e riconfigurare i vari dispositivi sparsi per casa, pertanto spero che in qualche modo possa aiutare chi abbia deciso di comprare una base Airport ma che non sa da che parte iniziare.

Cos’è una rete LAN?

Quando parlo di rete Internet intendo, in manera impropria, una L ocal A rea N etwork meglio conosciuta come LAN.

Una LAN è una rete locale e che quindi è delimitata da una zona geografica che può essere grande o piccola come l’ufficio di The Verge al trentesimo piano di un grattacielo a New York o il piccolo ma accogliente appartamento di cinquanta metri quadri in centro a Milano (in questo periodo darei di tutto per vivere a Milano).

Solitamente siamo pensati a credere che una rete LAN sia solamente quella via cavo mentre una rete LAN è un concetto più generico e che indica appunto, tutti i dispositivi che sono all’interno di un’area ben delimitata.

Una rete LAN può essere wired o wireless, può essere comunicante con l’esterno (quindi con Internet) o può essere totalmente isolata e “parlare” solo con i dispositivi presenti all’interno di quella rete (generalmente le reti di questo tipo sono quelle più sicure e vengono utilizzate in situazioni dove la sicurezza è di primaria importanza).

Normalmente una classica rete LAN è composta da un modem (che permette l’accesso ad Internet), un router (che instrada le connessioni tra i vari dispositivi), uno switch (che “splitta” il traffico tra i vari device) e un access point che permette ai dispositivi wireless di connettersi tra di loro e di dialogare con il web.

Data la rapida evoluzione del web e il tentativo di molti produttori di ridurre il numero di dispositivi necessari per creare una rete domestica i prodotti presenti nel mercato sono composti da un modem, un router ed un access point tutti nella stessa “scatola” cosa che ha permesso una notevole riduzione di spazio e di (secondo i produttori) complessità di progettazzione.

Unendo tutto in un unico dispositivo è possibile collegare subito computer, smartphone e altri dispositivi alla rete internet senza doversi preoccupare di come far “dialogare” i vari device all’interno della stessa rete ma semplicemente seguendo le guide che i vari produttori forniscono insieme ai loro router-modem-accesspoint.

L’immagine qui sopra spiega in maniera abbastanza semplice come è strutturata una rete LAN (sia wired che wireless) e quali sono i quattro componenti principali e necessari per poter iniziare a creare una rete LAN.

ADSL MODEM: Il modem ADSL è il dispositivo che si occupa di “dialogare” con il doppino telefonico (o con la fibra) e che riesce a convertire i dati in ingresso in segnali digitali comprensibili ai dispositivi presenti nella rete e viceversa a inviare i dati che l’utente vuole “mandare” verso il web.

ROUTER: Letteralmente “instradatore”, è un dispositivo che si occupa di inviare i dati ai device che devono riceverli evitando quindi di mandare pacchetti a chi non li ha richiesti.

SWITCH: Lo switch è un dispositivo che “moltiplica” una porta di rete in più porte preoccupandosi di non far degenerare il segnale in ingresso e di far arrivare tutti i pacchetti in modo trasparente.

ACCESS POINT: L’access point è quel dispositivo che “trasforma” il segnale cablato in un segnale wireless permettendo a tutti i dispositivi non dotati di una connessione cablata di raggiungere gli altri dispositivi presenti nella rete e di navigare sul web.

Ovviamente ogni dispositivo deve sapere a chi inviare i dati e da chi, eventualmente, aspettarsi una risposta ed è per questo che nelle reti informatiche si fa uso di “indirizzi IP” (del tipo 192.168.10.1) che servono per poter identificare in maniera univoca e inequivocabile un dispositivo presente all’interno della rete.

Il funzionamento è simile a quello di una catena di montaggio dove l’operaio A deve avvitare una vite in un bullone e inviarlo all’operaio B che fornirà un feedback (positivo o negativo) in merito al lavoro svolto da A e provvederà poi a svolgere il suo compito eventualmente saldando il bullone con una lamiera di acciaio ed inviando il tutto a C che continuerà nella sua catena di montaggio.

Quando, per esempio, contattiamo la pagina http://www.google.it stiamo chiedendo al router di indirizzarci verso il modem ADSL che provvederà a contattare i server di Google per ottenere la pagina che abbiamo richiesto.

Ovviamente tutta la procedura che ho appena spiegato avviene in qualche millesimo di secondo ed è completamente automatica ed il risultato lo potete vedere semplicemente andando qui http://www.google.it.

Indirizzi IP, DHCP, SM e Gateway (e anche i DNS).

Come ho spiegato precedentemente per comunicare tra di loro i dispositivi presenti all’interno di una rete LAN hanno la necessità di avere un ID univoco chiamato Indirizzo IP (dove IP sta per Internet Protocol) che permette loro di poter inviare e ricevere dati con altri device (interni o eventualmente anche esterni).

Un indirizzo IP è un codice composto da quattro cifre decimali separate da un punto (.) nel formato “192.168.10.1”.

Esso è composto da 4 byte (o 32 bit) e ogni numero varia da 0 a 255.

Per poter comprendere meglio come funzionano gli Indirizzi IP all’interno una rete è necessario sapere che, come per tutti i dati, i computer e i dispositivi informatici non utilizzano i numeri in formato decimale ma solamente in formato binario, pertanto l’indirizzo IP dell’esempio sopra diventerà 11000000.10101000.00001010.0000001.

Come ho detto prima, ogni dispositivo deve avere un indirizzo IP valido per poter esistere all’intero della rete; l’**iPhone** che avete in tasca avrà l’indirizzo IP 192.168.10.10, il Mac in camera da letto avrà l’IP 192.168.10.11 e così via in modo da poter sempre essere indirizzabile dal router che si occupa, come ho detto prima, di instradare le connessioni di rete.

Dato che con l’introduzione dei nuovi dispositivi mobili le reti domestiche (e anche quelle aziendali) sono diventate dinamiche (ovvero i device cambiano quotidianamente) è nata la necessità di creare un sistema di attribuzione automatica degli Indirizzi IP.

Normalmente un tecnico informatico preferisce impostare in modalità “statica” (ovvero fissa e non mutabile) l’indirizzo di un dispositivo di rete quale un computer o una stampante di rete e via dicendo in modo da poter avere un punto di riferimento sempre costante nel caso in cui si verifichino dei malfunzionamenti.

Ovviamente, dato che non tutti sono tecnici informatici, si è deciso di creare un metodo di attribuzione automatica chiamato DHCP che permette di assegnare un indirizzo IP in maniera automatica senza dover lavorare a livello di configurazioni avanzate di rete.

Questo “protocollo” funziona un po’ come un censimento automatico: appena un nuovo dispositivo prova a collegarsi alla rete, il router gli assegna un indirizzo IP tra quelli che sa essere disponibili.

Per esempio quando colleghiamo il nostro **iPhone** alla rete di casa per la prima volta, il dialogo tra router e **iPhone** sarà più o meno questo: Router >> Ciao **iPhone**, hai un indirizzo IP o se impostato in DHCP? **iPhone** >> Ciao Router, non ho un indirizzo IP statico, sono impostato in DHCP, hai un indirizzo da assegnarmi?

Router >> Certo, da ora in poi il tuo indirizzo IP dinamico sarà 192.168.10.30.

Ovviamente ho cercato di rendere “simpatica” la questione in modo da renderla comprensibile a tutti dato che ho notato che questo concetto del DHCP non è sempre chiaro.

Per sua natura il DHCP assegna indirizzi IP dinamici che dopo un determinato lasso di tempo o per altre ragioni “scadono” o vengono assegnati ad altri dispositivi e questo comporta che se oggi l’indirizzo IP del vostro **iPhone** è 192.168.10.30 domani potrebbe essere 192.168.10.31 perché nel frattempo (siete andati a casa dal lavoro) l’indirizzo IP di ieri è stato assegnato ad un altro dispositivo.

Il DHCP è comodissimo quando si lavora con dispositivi che non necessitano di una “mappatura” all’interno della rete e che quindi possono cambiare IP senza causare danni mentre è sconsigliato per quei dispositivi che devono essere sempre disponibili quasi stampanti di rete o computer collegati via cavo.

Una stampare di rete che il lunedì è raggiungibile all’IP 192.168.10.50 e il venerdì al.70 creerà non pochi danni in una rete aziendale non permettendo più di stampare dato che non più raggiungibile all’indirizzo precedentemente assegnatogli.

Stesso discorso per tutti qui device collegati via cavo: il mio consiglio è di impostarli con un indirizzo IP statico e di segnare tutto su un documento in modo tale da sapere sempre dove sono raggiungibili (segnateli sempre perché prima o poi vi serviranno).

La SM ( Subnet Mask ) è invece un metodo utilizzato per stabilire il range di appartenenza di un host all’interno di una sotto rete: per spiegare bene cos’è una subnet mask è necessario partire dall’inizio.

Come ho detto prima vi è una sostanziale differenza tra cos’è una rete hardware e una rete software; la prima è quella parte di rete visibile e “toccabile” quali il modem, i cavi, i connettori Ethernet ecc… mentre la seconda è quella parte non visibile e “programmata” a livello di codice.

All’intero di un’infrastruttura di rete è quindi possibile creare delle sottorete isolate a livello software e non a livello fisico.

Immaginiamo di vivere in un appartamento composto da due piani: è possibile creare un’unica rete fisica per tutto l’appartamento ma suddividere a livello di classi i due piani.

Sarà quindi possibile assegnare al piano terra la classe “.10″ e al primo piano la classe “.20″ e stabilire a livello di subnet mask che i dispositivi del piano terra non possono “vedere” i dispositivi del primo piano e viceversa (oppure che quelli del primo piano possono raggiungere quelli del secondo mentre quelli del secondo non possono raggiungere quelli del primo e così via).

Per spiegare “rapidamente” (e in maniera non troppo informatica) come funziona una subnet mask cercherò di raccontarvela come l’ho imparata io: Una subnet mask è composta esattamente come un indirizzo IP (quindi del tipo 000.000.000.000) ed indica di quando quel dispositivo può “muoversi” all’interno della rete in cui si trova.

Una subnet mask classica è del tipo 255.255.255.0 dove i “255” sono dei “blocchi” (termine sbagliato ma che mi ha aiutato a capirne il funzionamento) ed impediscono a quel dispositivo di uscire da quel limite.

Per esempio, il mac dal quale sto scrivendo ha come IP 10.0.1.10 e come subnet mask 255.255.255.o e questo gli permette di vedere tutti gli IP compresi nella subnet “10.0.1” ma non quelli, per esempio, compresi nella subnet “192.168.10”.

Il concetto di base è che la subnet mask è un “blocco” dentro al quale un computer può “muoversi” all’intero della rete e che stabilisce cosa può e cosa non può “vedere” pertanto è sempre necessario conoscere la subnet mask di un computer (o di un device che si collega alla rete) in modo da comprendere il perché certi dispositivi siano visibili e altri no.

Ovviamente nel caso in cui il DHCP sia attivo l’impostazione della maschera sottorete è impostata in modo automatico e quindi non dovrete preoccuparvi di configurarla.

Discorso a parte riguarda il Gateway che è un dispositivo di rete che si occupa di instradare i pacchetti al di fuori della rete LAN (quindi non come il router che lavora all’interno della rete) nell’istante in cui un device abbia la necessità di contattare un IP che non è presente nella rete locale.

Immaginatevi quindi il gateway come quel dispositivo che instrada le richieste quando, per esempio, volete contattare il server che contiene le pagine web del sito http://www.apple.com che una volta risolto (per “risolto” si intende la conversione di un indirizzo in un IP) ha come ip 89.858.77.33 (me lo sono inventato).

Dato che l’ip del server di google non può essere locale e quindi non raggiungibile all’interno della rete il gateway si occuperò di instradare la comunicazione verso Internet (ovviamente grazie all’aiuto del modem ADSL o in fibra); facile quindi capire che un computer (o un qualsiasi device di una rete LAN) senza gateway impostato non riuscirà a navigare nel web.

I DNS è invece un sistema utilizzato per “convertire” un indirizzo web (chiamato anche url) in un indirizzo IP.

L’esigenza di creare un sistema di questo tipo è nata dal fatto che per l’essere umano imparare un nome rispetto ad un numero è decisamente più semplice e sarebbe stato assurdo e impossibile pensare di dire ad una persa “apri la pagina 78.444.332.222″ piuttosto che “apri la pagina www.google.it”.

In questo caso, un device senza DNS non riuscirà a risolvere gli indirizzi IP e quindi ad aprire le pagine se cercare come http://www.google.it (mentre se cercare con l’indirizzo IP non vi saranno problemi di navigazione).

Apple e Airport Al momento in cui scrivo esistono tre dispositivi venduti dalla Apple che possono servire per realizzare una rete LAN e sono la base **Airport Extreme**, la base **Airport Express** e la base **Time Capsule** (da ora in poi abbreviate in AExt, AExp e TC).

Riduciamo subito gli elementi in campo col dire che la base AExt e la TC sono praticamente la stessa identica cosa con la sola differenza che la seconda ha un disco interno dedicato al backup con **Time Machine** (e ovviamente costa di più rispetto all’AExt).

Eliminando quindi la base TC rimangono solo due dispositivi che si differenziano sostanzialmente per alcune caratteristiche elencate qui: **Airport Extreme**\**Time Capsule**: Ottimo dispositivo come punto di partenza per la creazione di una rete domestica.

Dotato di quattro porte Ethernet (RJ45) di cui 1 WAN e 3 LAN e di un access point interno a doppia banda con canale di trasmissione automatico, antenne interne e ottima potenza di diffusione wireless.

Possibilità di collegargli una stampante USB o un disco USB (o più device utilizzando un hub USB).

**Airport Express**: decisamente meno potente dal punto di vista wireless; utilizzabile come range-extender di segnale o come router vero e proprio.

Dotato di un uscita AUX/Ottica per la connessione a diffusori esterni digitali o analogici.

Possibilità di collegargli una stampante USB (ma non un disco USB).

Una specifica impostante che voglio fare è che le basi Airport non sono nate per estendere il segnale **Wi-Fi** di dispositivi non Apple, so che qualcuno sul web è riuscito in qualche modo ad estendere il **Wi-Fi** con un’Airport ma è una procedura sconsigliata sia dalla Apple che da me (avere una rete **Wi-Fi** instabile è decisamente più fastidioso che investire 200/300 € per comprare un dispositivo nuovo).

La seconda specifica è che se decidete di creare una rete Apple dovete preparatevi a spendere un 50/60 % in più rispetto a quanto spendereste per una rete “tradizionale” ma ovviamente ne guadagnerete in qualità, affidabilità e facilità di configurazione (i vari dispositivi di rete che vendono al supermercato fanno ridere se confrontati alle basi Airport).

Partendo quindi da questi concetti il mio consiglio principale è quello di procuravi una base AExt (o TC) e un modem ADSL (meglio sarebbe utilizzare un semplice modem e non uno di quei dispositivi assolutamente inutili che vendono nelle varie catene di informatica).

In molti mi hanno chiesto se è meglio iniziare con una **Time Capsule** o una **Airport Extreme** ma di grandi differenze, come ho detto prima, non ve ne sono; l’unico consiglio è di riflettere bene su cosa decidete di comprare perché è sempre meglio investire qualche euro in più subito piuttosto che ingegnarsi per creare qualche soluzione precaria e poco affidabile (utilizzare una base AExt come TC semplicemente collegando un disco USB non è una soluzione vantaggiosa ma solo un tentativo di risparmiare qualche euro senza però avere le stesse prestazioni di una base **Time Capsule**).

Una rete LAN ben progettata è uno strumento fondamentale nel 2015 ed è pertanto fondamentale progettarla in modo che sia adatta (ed adattabile) alle nostre esigenze attuali e future.

Per cominciare è necessario stabile quanti device fissi e quanti device mobili si collegheranno alla nostra rete (e a questo aggiungere sempre un margine di 4/5 dispositivi) ma sopratutto capire quali dispostivi avranno bisogno di una connessione in rame (quindi via cavo) e quanti potranno sfruttrare il wifi.

Ovviamente è logico che per computer desktop, stampanti e per tutti qui device che richiedono una connessione stabile e una larga banda passante di dati è consigliato utilizzare sempre il cavo di rete mentre per smartphone, tablet e computer portatili una connessione **Wi-Fi** (802.11 n) è più che sufficiente.

Preparazione del modem per collegarsi all’**Airport Extreme** Ho già scritto una guida abbastanza approfondita a questa pagina ma ho deciso di riportare qui la configurazione base per poter rendere operativa una base **Airport Extreme** partendo praticamente da zero.

La prima procedura da fare, ovviamente, è quella di preparare il modem ADSL in modo tale che possa comunicare in maniera corretta con la base Airport e per fare questo abbiamo due opzioni differenti: Impostare il modem in modalità Bridge: questa modalità permette di far diventare il modem un dispositivo completamente “passivo” in modo da permettere all’Airport di stabilire la connessione ADSL in maniera autonoma.

Questa modalità offre il vantaggio di poter disattivare la connessione internet quando si preferisce (era utile quando non vi erano le tariffe flat e la connessione veniva interrotta per evitare di pagare inutilmente) e di poter gestire la connessione (username e password) direttamente dall’Airport senza dover entrare nel menu web del modem.

Uno “svantaggio” di questa impostazione è quella di “perdere il controllo” della pagina di gestione del modem (essendo fuori dalla LAN non sarà possibile gestirlo) pertanto non sarà neppure possibile visualizzare quanti dati consumiamo o i valori dello stato della nostra connessione, nel caso vi interessi questa parte dovete configurare il modem in modalità DHCP (devi sotto).

Impostare il modem in modalità DHCP (valido anche per i router tutto in uno): questa modalità è utile nel caso si debba accedere alle impostazioni del modem o nel caso in cui il modem non disponga della modalità bridge (alcuni produttori non vogliono darvi la libertà di scegliere come impostare il vostro modem … e non capirò mai il perché).

In questa modalità le impostazioni ADSL (username, password ecc…) sono da impostare direttamente sul modem che si occuperò anche di attribuire in automatico un indirizzo IP alla base Airport una volta collegato (proprio perché è attivo il DHCP).

Ovviamente questa configurazione apre una piccola “falla” nella rete perché chiunque abbia accesso al vostro **Wi-Fi** o alla vostra rete potrà entrare nel modem e modificare le impostazioni come preferisce.

Ovviamente il mio consiglio è quello di impostare sempre il modem in modalità bridge perché questo permette di poter gestire tutta la rete dall’applicazione Utility Airport (ne parlerò dopo) e sopratutto permette di avere una “visione globale” più ambia e sopratutto un controllo più completo su tutta la rete.

Per configurare un modem ADSL (quello che ho attualmente io è questo ) bisogna prima di tutto collegare il modem direttamente al nostro Mac e modificare la scheda di rete con la quale ci collegheremo in modo da poter “vedere” il modem.

Premessa: io utilizzo il convertitore **Thunderbolt** to Ethernet per poter connettere il mac al modem.

Per modificare le impostazioni del mac cliccate su “Preferenze di Sistema” -> “Network” e selezionate la connessione di rete che state utilizzando (nel mio caso “**Thunderbolt** Ethernet”) e selezionate l’opzione “Manualmente” per la voce “Configura IPv4″ (per ora vi risparmio di spiegarvi la differenza tra IPv4 e IPv6).

Ora dobbiamo impostare un indirizzo IP e una maschera di sottorete e se avete seguito un po’ quello che ho scritto prima dovreste essere in grado di capire come “dialogare” con il modem.

Il concetto è semplice: il modem si trova nella classe “192.168.1” e avendo come subnet mask di default “255.255.255.0” può “navigare” tutti gli ip che vanno da 192.168.1.2 -> 192.168.1.254.

Dato che nella configurazione Computer->ethernet->modem ci sono solo due dispositivi potete scegliere qualsiasi IP presente nel range che ho scritto sopra (io ho scelto il.50 ma potete mettergliene uno qualsiasi).

Ovviamente la regola è la stessa se il vostro modem ha come indirizzo di default 192.168.0.1 o 10.0.0.1 (basterà cambiare la classe dell’IP del computer).

PS: se avete capito questo, siete ad un livello di conoscenze delle reti superiore al 70% della popolazione Italiana, complimenti!

Ora che il computer è nella stessa classe potete entrare nel menu web delle configurazioni del modem ma per fare questo è necessario aprire Safari (o un browser web) e digitare l’indirizzo 192.168.1.1 esattamente come nell’immagine qui sotto.

Una volta digitato l’indirizzo IP (prima vi ho spiegato un po’ cos’è un indirizzo IP quindi non dovreste trovarvi spiazzati) potete cliccare invio e vi verrà richiesto di inserire un nome utente ed una password (per il modem in questione sono “admin” e “admin” ma seguite tranquillamente le indicazioni che troverete con il manuale del vostro modem.

PS.

Segnatevi sempre l’indirizzo IP e le credenziali di accesso del modem (il mio consiglio è di scriverle direttamente sul modem con un adesivo) perché se le perdete dovete resettare il modem e non è mai una bella avventura.

Ora che siente dentro al modem è necessario impostarlo in una delle due opzioni possibili tra quelle che ho elencato prima (bridge o DHCP) e per fare questo dobbiamo selezionare l’opzione “bridge” nella pagina principale ( controllate anche che i valori VPI e VCI corrispondano a quelli richiesti dal vostro Provider ).

Una volta impostato in modalità Bridge possiamo spostarci nella pagina “LAN Setup” che trovate nel menu a sinistra dove possiamo modificare le impostazioni della rete LAN alla quale verrà collegato il modem (in questo caso vero collegato alla porta WAN dell’Airport).

Come vedete dall’immagine sopra le impostazioni di base sono “192.168.1.1” come IP e “255.255.255.0” che come impostazioni di default vanno più che bene perché il modem è impostato in modalità bridge mentre se fosse impostato per fornire il DHCP sarebbe il caso di controllare che l’indirizzo IP del modem sia allineato con quello degli altri dispositivi di rete.

Ora che abbiamo configurato il nostro modem siamo pronti per iniziare la configurazione dell’**Airport Extreme** (o della TC) e per fare questo dobbiamo procedere collegando la base Airport all’alimentazione e la porta WAN presente sul retro della base alla porta LAN del modem ADSL in nostro possesso (ovviamente vi servirà un cavo Ethernet per collegare il modem all’Airport).

PS: Le foto che vedrete si riferiscono alla quinta generazione di basi Airport (la sesta generazione, con la forma a torre, ha come uniche differenze la connessione diretta alla rete elettrica quindi non mediate un trasformatore e i connettori sono posti verticalmente piuttosto che orizzontalmente).

Dopo aver collegato il cavo di rete che proviene dal modem nella porta WAN dell’Airport potete procedere collegando anche gli eventuali altri dispositivi che avete “sparsi” per l’ufficio/la casa in modo da non dover più “rimettere” le mani nella configurazione hardware dell’Airport.

Nel mio caso, alla base Airport sono connessi due computer fissi e la base **Time Capsule** (che vedete nella foto sopra in alto a sinistra) ed infatti tutti i tre connettori Ethernet sono occupati, ovviamente nel vostro caso tutto dipende da quanti dispositivi dove collegare insieme e nel caso in cui ne abbiate più di tre potete optare per acquistare uno switch Gigabit (evitate quelli a 100 Mega) tipo questo.

Ora è tempo di alimentare sia il modem che la base Airport in modo da poter iniziare a configurare il tutto.

Utility Airport A differenza dei vari router o access point che troverete online (o del modem ADSL che abbiamo configurato prima), le basi Airport non si configurano da una pagina web ma direttamente da un’applicazione chiamata “Utility Airport” disponibile sia per Mac che per **iPhone** e **iPad**.

Dato che la prima configurazione di un **Airport Extreme** non è banale preferisco spiegarvi come eseguire la procedura utilizzando un Mac piuttosto che un **iPhone**/**iPad** e per fare questo dovete andare nella cartella “Applicazioni” e cercare l’App “Utility Airport” (se non c’è scaricatela da qui ).

Una volta lanciata l’applicazione visualizzerete una pagina vuota (se è la vostra prima configurazione) e troverete in alto a sinistra un pulsante chiamato “Altri dispositivi **Wi-Fi**” e se la vostra base Airport è accesa e la luce frontale lampeggia di arancione dovreste vedere, cliccando sul pulsante, un nuovo dispositivo con un nome del tipo “Airport” e un codice alfanumerico [Ovviamente per fare questo il **Wi-Fi** del mac deve essere accesso e non è necessario che sia collegato a nessuna rete].

Cliccate sul nuovo dispositivo e attendete che il programma riconosca il nuovo device e provveda con la prima configurazione durante la quale vi verrà richiesto se il nuovo dispositivo deve collegarsi ad una rete già esistente oppure crearne una da zero e dato che è il primo dispositivo Apple che possedete potete procedere semplicemente cliccando su “crea una nuova rete **Wi-Fi**”.

Ora il software vi chiederà alcune informazioni fondamentali per poter procedere con la configurazione quali la password per accedere al dispositivo, quella per il Wi-FI, il nome della rete **Wi-Fi** e sopratutto i dati di accesso per la connessione ad internet.

Dato che abbiamo optato per una configurazione del modem ADSL in modalità Bridge sarà la base Airport a dover avviare la richiesta di connessione e di conseguenza necessiterà di sapere quali sono le credenziali per l’accesso attraverso il protocollo PPPoE.

Ovviamente questi dati deve averveli forniti il vostro Provider (per provider si intende Telecom Italia, Fastweb, Eolo ecc…) e nel caso di Alice (Telecom) li trovate qui.

PS: Ho avuto la fortuna di poter configurare un **Airport Extreme** con una connessione Eolo ed in questo caso i dati di accesso PPPoE non sono di dominio pubblico ma vengono inviati via email al singolo cliente quindi controllate sempre prima in base al tipo di connessione che avete quali sono i vostri dati di accesso (e sopratutto se potete configurare l’Airport con la modalità PPPoE).

Dopo aver confermato tutte le varie richieste la base Airport dovrebbe smettere di lampeggiare arancione e la luce frontale deve rimanere verde fissa e questo conferma la corretta configurazione dell’Airport e del modem ADSL.

Se per qualche ragione la luce continua a lampeggiare arancione le ragioni possono essere varie quali: Non avete collegato il modem all’Airport (fidatevi, controllate SEMPRE che il cavo sia collegato).

Avete collegato il modem ad una porta LAN dell’Airport e non alla porta WAN.

Nona vete accesso il modem.

I dati di accesso del vostro Provider non sono corretti.

Non funziona Internet (chiamate il vostro Provider).

Il modem è rotto (compratene uno nuovo).

Una buona soluzione per capire dove possa essere il problema (ed escludere danni hardware) è quella di escludere momentaneamente la base Airport e di utilizzare esclusivamente il modem impostandolo il modalità DHCP (e quindi inserendo i dati di accesso PPPoE direttamente dentro di esso).

Una volta eseguita questo operazione potete verificare se il modem funziona e se Internet è attivo semplicemente aprendo il browser web e navigando su una pagina qualsiasi: se tutto funziona vuol dire che il problema è lato Airport e quindi il mio consiglio è quello di resettare la base (con una biro potete premere il piccolo pulsante posto sul retro della base per circa 15 secondi) e ripartire da zero.

Le basi: **Airport Extreme** e **Time Capsule** Ovviamente adesso che avete configurato la base Airport dovreste riuscire a navigare sul web senza alcun problema e quindi è arrivato il momento di approfondire la conoscenza di quello che è il miglior router di rete in commercio.

La prima cosa che dobbiamo fare è quella di cliccare sull’icona dell’**Airport Extreme** e selezionare il pulsante “Modifica” (potete bypassare questa parte tenendo premuto il tasto “Alt” e cliccando due volte sull’icona) in questo modo si aprirà una finestra composta da cinque tab differenti.

Il primo tab è chiamato “Base Airport” e all’interno di esso troviamo le impostazioni di base quali: il nome della base, la password el **Wi-Fi** e dell’accesso per modificare le impostazioni dell’Airport e la sezione dedicata a Back to my mac (ebbene si, ho fatto una guida anche su questo).

La pagina successiva invece si chiama “Internet” e permette di modificare quelle impostazioni di cui parlavo precedentemente e che riguardano la connessione ad Internet mediante il modem ADSL.

PS: La voce “Nome servizio” è un semplice testo che potete scrivere per ricordarvi che provider è configurato ma potente anche non scriverci nulla, non è importante.

Passando alla configurazione successiva troviamo la pagina delle impostazioni del **Wi-Fi** dove possiamo impostare il nome della rete, la frequenza di lavoro e se la rete deve essere visibile oppure no.

La configurazione del **Wi-Fi** è sicuramente la parte più interessante tra tutte le varie funzioni presenti nell’**Airport Extreme** (o **Time Capsule**) perché è possibile selezionare quale frequenza attivare (2.4 o 5 GHz) e decidere se la rete deve essere visibile o meno.

Partiamo dalla prima delle due funzioni: la frequenza di lavoro della rete **Wi-Fi**.

Le reti **Wi-Fi** più comuni sono quelle a 2.4 GHz perché sono le più “economiche” e sopratutto coprono un’area geografia decisamente più grande il che le rende ideali nelle installazioni pubbliche o dove è necessario raggiungere più client a discapito di una velocità leggermente più bassa.

Uno dei grandi vantaggi del **Wi-Fi** a 5 GHz è quello di non soffrire di interferenze radio rispetto alla frequenza dei 2.4 GHz che è utilizzata per apparecchi radio e allarmi che sono spesso presenti in casa e possono causare conflitti ed interferenze di rete (e le interferenze radio nella banda del **Wi-Fi** sono sempre complesse da risolvere).

Il mio consiglio è quindi quelli di attivare anche la rete a 5 GHz in modo da avere sempre una doppia rete ed eventualmente sfruttare la velocità massima raggiungibile in base al dispositivo che stiamo utilizzando.

Riguardo invece alla questione dell’SSID nascosto (l’SSID è il nome della rete) vi sono molte opinioni contrastanti tra chi dice che nascondere la rete non è una forma di protezione e che, anzi, può far insospettire un eventuale hacker ma personalmente preferisco mantenere un “low profile” ed evitare che chiunque abbia un dispositivo possa vedere in chiaro il nome della mia rete (con l’SSID nascosto è necessario conoscere sia il nome della rete che la password del **Wi-Fi**).

Oltre all’impostazione “Crea network nascosto” è possibile scegliere anche il canale della rete a 2.4 GHz e 5 GHz e questo è fondamentale se avete problemi di interferenze con l’allarme o con qualche dispositivo wireless in giro per casa.

Nella penultima sezione, chiamata “Network”, è possibile aprire le porte di accesso alla rete dall’esterno, impostare il range del DHCP e creare delle prenotazioni nella sezione DHCP del router.

Come vedete dall’immagine qui sopra, nella pagina “Network” sono presenti due tabelle chiamate rispettivamente “Prenotazioni DHCP” e “Impostazioni porta” dove è rispettivamente possibile creare delle regole per il protocollo DHCP e per l’apertura delle porte con il “mondo esterno”.

La prima funzione (quella delle prenotazioni DHCP) è utilizzata da chi desidera lasciare un dispositivo in DHCP ma assegnargli un indirizzo IP sempre uguale e la sua grande comodità è quella di avere sempre sotto controllo ogni dispositivo nella stessa pagina (tutte le regole saranno raccolte all’interno di quella tabella) quindi se un giorno dovrete cambiare la classe del DHCP la base Airport provvederà automaticamente e non dovrete cambiare gli IP statici manualmente.

Personalmente non sono un fan di questa funzione e preferisco impostare l’indirizzo IP statico su ogni singola dispositivo in modo da avere una mappa chiara e statica della rete (su certe cose sono vecchio stampo) e sopratutto in modo da non dovermi preoccupare di backuppare la configurazione delle prenotazioni.

La funzione “Impostazione Porta” invece riguarda la possibilità di aprire le porte TCP/UDP verso l’esterno ed è utilizzata da chi utilizza software di download (Torrent) e chi ha necessità di raggiungere un dispositivo presente nella rete locale dal web.

Sempre rimanendo nella pagina “Network” e cliccando su “Opzioni Network…” è possibile impostare alcuni parametri quali l’intervallo del DHCP e l’host di default.

L’intervallo del DHCP è quel range nel quale l’Airport può assegnare gli indirizzi IP (esattamente come ho spiegato prima) e vi sono 3 classi possibili (192.168 – 172.16 – 10.0) tra cui scegliere.

Di norma la classe 192.168 è utilizzata per reti piccole/medie, la 172.16 per reti grandi e la 10.0 per reti industriali o comunque composte da più device (io preferisco sempre scegliere quest’utlima perché è più facile da memorizzare).

L’abilitazione dell’host di default server se vogliamo indirizzare tutto il traffico in ingresso dalla rete verso un unico computer presente nella rete ( Un host di default è un computer sul network che è esposto a Internet e riceve tutto il traffico in ingresso.

Un host di default può essere utile se si utilizza un computer sul network AirPort per giochi in rete o se si desidera indirizzare tutto il traffico Internet attraverso un solo computer.

) L’ultimo tab non meno importante è quello chiamato “Dischi” e serve per gestire tutti gli hard drive o le chiavette USB collegate direttamente alla base Airport (utile se vogliamo trasformare un normale hard disk USB in un disco di rete).

Oltre alla gestione dei dischi esterni possiamo anche decidere di proteggere l’accesso attraverso l’uso di un account specifico (utile per tutti questi dispositivi che fanno uso del protocollo SMB) o con la semplice password della base Airport che abbiamo precedentemente impostato.

Ovviamente in questa sezione delle impostazioni, se la base che stiamo impostando è una **Time Capsule**, troveremo tutte le impostazioni per la gestione del disco rigido integrato all’intero del dispositivo (per una guida su come utilizzare **Time Machine** potete guardare qui ).

Ora che abbiamo visto come impostare i parametri principali della nostra base **Airport Extreme** (o **Time Capsule**) possiamo proseguire con l’espansione della nostra rete.

Range Extender: **Airport Express** Lentamente ma con un occhio al futuro possiamo iniziare a pensare come progettare la nostra rete domestica (o per l’ufficio) pensando dove e cosa dobbiamo collegare all’interno del nostro edificio.

Come ho detto precedentemente, i dispositivi che richiedono un grande traffico di rete (quindi molta banda) sono da preferire se collegati con il cavo in rame piuttosto che pensare ad una soluzione wireless mentre i dispositivi mobili (smartphone, table e computer portatili) possono tranquillamente utilizzare il **Wi-Fi**.

Ovviamente se abbiamo un impianto particolare (vide-sorveglianza o demotica) sarà necessario provvedere con la realizzazione di una rete Gigabit Ethernet collegata alla base Airport in modo da gestire tutto sempre e comunque da un unico dispositivo.

Dopo aver analizzato la base Extreme e la **Time Capsule** è giunto il momento di vedere nel dettaglio come funziona e a cosa può servire l’**Airport Express**.

Quest’ultimo device è molto utile nel caso in cui vogliamo espandere la portata della nostra rete **Wi-Fi** perché magari abbiamo un giardino, una piscina oppure perché vogliamo rafforzare la potenza del segnale principale (generato da una Base **Airport Extreme** o TC).

La funzione probabilmente più comoda offerta dalla base Express, oltre ad aumentare la portata del **Wi-Fi**, è quella di offrire un uscita audio analogica/digitale (Toslink) e quindi di poter remotizzare l’audio che proviene da un dispositivo iOS o da **iTunes** (sul Mac e anche su Windows).

**Airplay** (altra guida fatta da me) è una tecnologia che permette di riprodurre l’audio proveniente da un dispositivo iOS o da **iTunes** direttamente su un dispositivo che supporta questa funzione e la base Airport è tra questi.

Se quindi state progettando una nuova rete LAN il mio consiglio è quello di considerare anche l’eventuale disposizione delle casse audio: per esempio io amo fare la doccia con un po’ di musica e quindi ho installato una base **Airport Express** anche in bagno oppure nel corridoio in modo da avere una filodiffusione “compresa nel prezzo”.

Il mio consiglio è quindi quello di organizzare la rete in modo da far convivere le due cose: Wireless e streaming audio.

La nuova base Express, rispetto alla precedente, offre anche una porta Ethernet (100 Mega) e quindi è possibile comunque collegare anche un dispositivo di rete che non dispone di una connessione Wireless senza dover “stendere” dei cavi in casa.

Normalmente la struttura di una rete Apple è costituita da una base **Airport Extreme**/TC al centro e i satelliti sono i vari **Airport Express** (ma nulla vieta che anche una base Extreme possa esser utilizzata come estensore di rete).

Quella che vedete qui sopra, per esempio, è la struttura della mia rete **Wi-Fi** e notate che la base Extreme si occupa di ricevere il segnale Internet dal modem ADSL e di “inviarlo” a tutte le altre basi.

L’Airport **Time Capsule** è collegato via cavo (si nota dalla linea continua) mentre l’**Airport Express** Bagno e Camera da letto sono collegati sfruttando il wireless.

Questa struttura mi permette di avere un dispositivo generale che fa da gateway, router e access point al quale fanno capo tutti gli altri device.

Non avendo una villa (non ancora) e quindi distanze elevate tra un dispositivo e l’altro, i due Airport sono ovviamente collegati alla stessa base Extreme mentre se le distanze da percorrere fossero superiori si organizzerebbero in modo da “agganciarsi” in maniera automatica al device più vicino.

Per la configurazione dell’**Airport Express** possiamo procedere esattamente come abbiamo fatto con l’Extreme ma, a differenza di quest’ultima, non dovremmo scegliere di creare una nuova rete ma semplicemente di estendere la rete esistente.

Ovviamente per ridurre la possibilità di errore e facilitare la configurazione dell’Airport, il software estenderà in automatico la rete **Wi-Fi** a cui siete connessi (quella dell’Extreme/TC) quindi è necessario procedere sempre in ordine: prima la base che deve generare la rete e poi tutti i saltelli che devono agganciarsi ad essa.

Evito di riportare tutta la configurazione dell’Express poiché (nell’ultima generazione) è praticamente identica a quella dell’Extreme tranne che per la voce “**Airplay**”.

Come potete vedere l’**Airport Express** offre la funzione “**Airplay**” che come ho spiegato prima permette di riprodurre l’audio direttamente sugli altoparlanti ad essa connessa; ovviamente tale funzione deve essere abilitata ed è necessario inserire anche un nome identificativo della base **Airplay** in modo da poterla individuare quanto prima.

Oltre al nome è anche possibile inserire una password che permette di proteggere l’utilizzo degli altoparlanti ai non autorizzati (In questo caso è utile utilizzare una “rete ospite” che limita l’accesso al solo web escludendo tutte le periferiche di rete collegate.

Una volta impostato il nome **Airplay** per la/le base/basi Airport è possibile completare la configurazione cliccando su “Aggiorna” e la nostra rete inizierà a prendere forma.

Stampanti e HD di rete Come ho accennato precedentemente è possibile collegare una stampante e un hard disk nella porta USB dell’**Airport Extreme**/**Time Capsule** mentre è possibile collegare solo una stampante alla base **Airport Express** e questo apre notevolmente le possibilità di espansione dei nostri dispositivi di rete.

La configurazione di una stampante USB collegata ad una base Airport è relativamente semplice se effettuata su un Mac: basta collegare la stampante alla porta USB mentre la base Airport è accesa e selezionare la voce “Stampanti e Scanner” presente nel pannello “Preferenze di sistema” del Mac.

A questo punto basterà cliccare su pulsante “+” in basso a sinistra e (controllando che la stampante sia accesa) attendere che la stampante collegata alla base compaia tra quelle disponibili nel tab “Default”.

Una volta trovata la stampante selezionatela e cliccate su “Aggiungi” in basso a destra.

Dopo averla aggiunta la troverete nella lista delle stampanti disponibili e potrete già utilizzarla per stampare senza dovervi preoccupare di driver o software di installazioni vari (ovviamente le stampanti multifunzione funzioneranno solo come normali stampanti).

Come vedete dalla foto sopra la mia unica stampante USB è collegata alla **Time Capsule** che è l’unico dispositivo di rete dotato di un indirizzo IP statico.

Questa impostazione si è rilevata obbligata perché condividendo tale stampante con dei computer Windows (stupidi per loro natura) nasce la necessità di mantenere statica la stampante poiché un eventuale ri-assegnazione dell’IP renderebbe irraggiungibile il dispositivo e non permetterebbe di stampare su di esso.

Un computer **OS X**, invece, non ha necessità di raggiungere il dispositivo mediante IP ma semplicemente attraverso il protocollo Bonjour che scansione la rete in modo completamente automatico.

La condivisione dei dischi in rete, invece, è decisamente più immediata e l’utilizzo risulta estremamente semplice: basta collegare il disco (o la pendrive USB) alla base (non mi stancherò mai di ripeterlo ma questa funzione è utilizzabile solamente sulla base **Airport Extreme** o **Time Capsule**) e stabilire quali utenti possono accedere al disco di rete.

Il mio consiglio, in questo caso, è quello di creare una account specifico in modo da poter, eventualmente in futuro, stabilire quali utenti possono accedere al disco e sopratutto sapere sempre chi sta utilizzando quel percorso di rete.

Questa funzione di condivisione di rete permette di trasformare un disco in un vero e proprio percorso SMB utilizzabile da qualsiasi dispositivo che utilizzi questo protocollo (NAS, Telecamere di rete ecc …).

Analisi della rete Purtroppo non tutte le installazioni di rete sono uguali e può capitare che qualche volta si verifichino dei problemi durante la fase di configurazione/installazione dei vari dispositivi all’interno dell’edificio (purtroppo anche le interferenze di rete con allarmi o impianti che “viaggiano” a 2.4 GHz non aiutano).

Il mio consiglio, prima di tutto, è quello di capire quali dispositivi possono collegarsi alla rete a 5 GHz e quali non hanno la possibilità di agganciarsi a questa rete (potete aiutarvi cercando su internet le caratteristiche tecniche del vostro device).

Sempre come suggerimento (ovviamente del tutto personale) vi consiglio se possibile, di collegarvi SEMPRE alla rete a 5GHz proprio per evitare interferenze ma anche e soprattutto per avere una banda di trasmissione decisamente maggiore e più affidabile.

L’altro mio consiglio è quello di analizzare sempre la velocità di connessione alla rete internet dalla “base” e confrontarla con quella dei vari device sparsi per la casa/ufficio in modo da capire se ci sono perdite di potenza durante il rimbalzo della rete wireless.

Potete tranquillamente utilizzare www.speedtest.net oppure cnet.com (quest’ultimo è consigliato dalla Apple stessa) e ovviamente potete scaricare anche l’app per **iPhone** e **iPad** in modo da non dover giare per la casa con il portatile.

Ovviamente per fare questo test il mio consiglio è quello di spegnere tutti i vari Airport sparsi per la casa e lasciare collegata solamente la base Extreme (o TC) collegata direttamente al modem e verificare, in questo modo, quale è la velocità media di download e upload.

Una volta segnati questi dati sarà necessario proseguire iniziando ad “accendere” le varie basi Airport e collegarsi direttamente ad esse spostandosi dalla zona principale in modo da farsi un’idea di dove possono essere i “cali” di velocità.

Potete ottenere maggiori informazioni sulla connessione **Wi-Fi** del vostro mac semplicemente tenendo premuto “Alt” e cliccando sull’icona del **Wi-Fi** mentre siete collegati alla rete: si aprirà un menu più ampio del normale dove saranno descritte alcune caratteristiche chiave della vostra rete.

Il dato probabilmente più importante è l’RSSI (Received signal strength indication) che indica la potenza del segnale del **Wi-Fi** alla quale siamo connessi e che ci permette di capire se ci sono problemi dovuti proprio alla forza con il **Wi-Fi** ci viene inviato.

L’ideale è avere un RSSI il più vicino possibile a “-70 dBm/-80dBm”.

L’altra informazione utile è quella chiamata “Frequenza Tx” che corrisponde alla velocità di trasmissione dei dati tra la base Airport e il Mac e dipende esclusivamente dalla quantità di rumore del segnale e dalla frequenza con la quale siamo collegati (di norma un **Wi-Fi** 802.11/n ha una trasmissione di 300/350 Mb).

Possiamo avere una raccolta di informazioni più “precise” se apriamo Utility Ariport e (mentre teniamo premuto sempre il tasto “Alt”) clicchiamo due volte sull’icona della base Airport che ci interessa analizzare.

Come potete vedere dall’immagine qui sopra, si aprirà una finestra chiamata “Riepilogo” dove è possibile vedere in diretta quali dispositivi sono collegati alla base in questione e alcune informazioni dettagliate sulla qualità della connessione.

Ovviamente la qualità e affidabilità della rete si basa sulla posizione dei vari elementi, della dimensione delle pareti che il **Wi-Fi** deve passare e dal numero di dispositivi collegati (se avete qualche dubbio che il wireless possa vere difficoltà è meglio prevenire e stendere un bel cavo di rete CAT6 e avete risolto un buon 70% dei vostri possibilità prolemi).

## Conclusioni

Ora che avete creato e personalizzato la vostra rete **Wi-Fi** potete collegarci qualsiasi device: **iPhone**, **iPad**, iPod e **Apple TV** (ovviamente anche PC Windows e Android).

Anche per l’**Apple TV** trovare qualcosa sul mio sito ( qui ) e posso garantirvi che avere una rete wireless Apple permette notevoli comodità come per esempio la possibilità di sfruttare **Airplay** direttamente dall’**Apple TV** (potete ascoltare l’audio di un film dalle casse collegate ad una base Express il tutto senza dover “stendere” nessun cavo).

In conclusione il mio consiglio rimane quello di investire qualche centinaia di euro sui dispositivi di rete Apple piuttosto che dover impazzire con range extender e router di marche commerciali che spesso hanno istruzioni complesse e offrono poco supporto.

Ovviamente commentare pure qui sotto o mandatemi un email a dalpmarc@hotmail.it se avete bisogno di aiuto.

Stay Tuned.

PS: dato che se state seguendo questa guida probabilmente non avete una connessione a Internet, ho provveduto a salvare questa pagina in PDF, la trovate qui sotto.

Download “La bibbia delle reti Apple” la_bibbia_delle_reti_apple_v1.1.pdf – Downloaded 50 times – 17 MB
