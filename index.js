/*
PARTE 1: 
Oggi analizzeremo un problema molto comune: realizzare algoritmi di ricerca.
Il tuo compito è creare una funzione che cercherà per posizione lavorativa E posizione geografica. Questi due valori verranno passati come parametri
Ti abbiamo fornito un array chiamato "jobs" in fondo al file, NON modificarlo in alcun modo.
L'algoritmo che devi realizzare cercherà SIA per posizione lavorativa che per posizione geografica.
Prendi queste tre inserzioni ad esempio:

      job1:  location: "NY, US",     title: "java dev"
      job2:  location: "Genoa, IT"   title: "web dev"
      job3:  location: "US"      title: "dev"

Cercando contemporaneamente come posizione lavorativa "dev" e posizione geografica "US", dovresti ottenere come risultato solamente job1 e job3,
in quanto job2 non soddisfa la condizione posta sulla posizione geografica.

REQUISITI:
- il tuo algoritmo deve tornare i risultati nella seguente forma:
{
  result: [], <-- inserisci qui le inserzioni che rispecchiano la posizione lavorativa e la posizione geografica richiesta
  count: 0 <-- inserisci qui il numero totale delle inserzioni trovate
}

- da ogni inserzione trovata, elimina i campi "description", "requirements", "benefits" e "company_profile" per semplificare il risultato

- la tua ricerca deve essere "case insensitive" (non deve essere influenzata da lettere maiuscole o minuscole nelle parole cercate). Questo e' possibile trasformando tutto in lettere minuscole con .toLowerCase()


PARTE 2: 
Nella pagina HTML, inserisci 2 input di tipo testo (uno per la location e uno per il titolo lavorativo, ricordati di diversificarli con un id) e un bottone con valore “cerca”

Al click del bottone, il codice deve raccogliere i valori dei due input e darli in pasto alla funzione che hai creato nella parte 1. 

Dopo aver raccolto ed elaborato i dati, e’ il momento di mostrare i risultati sulla pagina: 
    Puoi scegliere tu se utilizzare un semplice ul / li oppure una tabella 
    Vai passo per passo e usa molti console.log per capire eventualmente dove sbagli
    SUGGERIMENTO: ti servira’ un ciclo for!

*/

// NON MODIFICARE QUESTO ARRAY!
const jobs = [
    { title: "Marketing Intern", location: "US, NY, New York" },
    {
      title: "Customer Service - Cloud Video Production",
      location: "NZ, Auckland",
    },
    {
      title: "Commissioning Machinery Assistant (CMA)",
      location: "US, IA, Wever",
    },
    {
      title: "Account Executive - Washington DC",
      location: "US, DC, Washington",
    },
    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    {
      title: "Lead Guest Service Specialist",
      location: "US, CA, San Francisco",
    },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    {
      title: "Customer Service Associate - Part Time",
      location: "US, AZ, Phoenix",
    },
    {
      title: "ASP.net Developer Job opportunity at United States,New Jersey",
      location: "US, NJ, Jersey City",
    },
    {
      title: "Talent Sourcer (6 months fixed-term contract)",
      location: "GB, LND, London",
    },
    {
      title: "Applications Developer, Digital",
      location: "US, CT, Stamford",
    },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    {
      title: "VP of Sales - Vault Dragon",
      location: "SG, 01, Singapore",
    },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    {
      title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
      location: "GB, SOS, Southend-on-Sea",
    },
    { title: "Visual Designer", location: "US, NY, New York" },
    {
      title: "Process Controls Engineer - DCS PLC MS Office - PA",
      location: "US, PA, USA Northeast",
    },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    {
      title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
      location: "US, CA, Carlsbad",
    },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    {
      title: "HAAD/DHA Licensed Doctors Opening in UAE",
      location: "AE, AZ, Abudhabi",
    },
    {
      title: "Talent Management Process Manager",
      location: "US, MO, St. Louis",
    },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    {
      title: "Customer Service Technical Specialist",
      location: "US, MA, Waltham",
    },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    {
      title: "English Teacher Abroad",
      location: "US, NY, Saint Bonaventure",
    },
  ]
  
//svolgimento

function searchJobs(titleQuery, locationQuery) {
    const result = []; //array vuoto result che conterrà i risultati della ricerca.
    const lowercaseTitleQuery = titleQuery.toLowerCase(); //lettere minuscole dei parametri di ricerca assegnati alle variabili 
                                      //lowercaseTitleQuery e lowercaseLocationQuery, rispettivamente. Ciò assicura che la ricerca non 
                                      //sia sensibile alle maiuscole/minuscole.
    const lowercaseLocationQuery = locationQuery.toLowerCase();
    let count = 0; //La variabile count viene inizializzata a 0 per rappresentare il numero totale di inserzioni che soddisfano i criteri di ricerca.
  
    for (let i = 0; i < jobs.length; i++) {    //Ciclo for per scorrere l'array jobs consente di esaminare ogni singola inserzione di lavoro 
                                              //all'interno dell'array jobs e di eseguire le operazioni necessarie su ciascuna inserzione
      const job = jobs[i]; //Ad ogni iterazione del ciclo, l'elemento corrispondente dell'array jobs viene assegnato alla variabile job
      const lowercaseTitle = job.title.toLowerCase();        
      const lowercaseLocation = job.location.toLowerCase();

  //Viene verificato se sia il lowercaseTitle che il lowercaseLocation contengono le corrispondenti 
  //stringhe di ricerca lowercaseTitleQuery e lowercaseLocationQuery
//Se entrambe le condizioni sono vere, l'oggetto job viene aggiunto all'array result e il contatore count viene incrementato di 1
      if (
        lowercaseTitle.includes(lowercaseTitleQuery) &&
        lowercaseLocation.includes(lowercaseLocationQuery)
      ) {
        result.push(job);
        count++;
      }
    }
  
    //la funzione restituisce un oggetto contenente l'array result con gli oggetti job che corrispondono
    // alla ricerca e il valore del contatore count che rappresenta il numero totale di inserzioni trovate
    return { result, count };
  }
  
  //
//La funzione searchJobs cerca gli annunci di lavoro che corrispondono ai criteri di ricerca specificati per il titolo e la località.
// Confronta i titoli e le località degli annunci di lavoro con le stringhe di ricerca convertite in lettere minuscole.
  
  //richiamo funzione

//searchJobs("Dev", "US");
//console.log(searchJobs("Dev","US"));


// Funzione per mostrare i risultati sulla pagina

//questa funzione  si occupa di creare gli elementi HTML necessari per visualizzare i risultati della ricerca all'interno di un contenitore nel documento HTML. 
function displayResults(result, count) {
  const resultsContainer = document.querySelector("#results-container"); 
  //Viene selezionato l'elemento con l'ID results-container all'interno del documento HTML 
  //utilizzando il metodo querySelector(). Questo elemento sarà il contenitore in cui visualizzeremo i risultati della ricerca.


//Viene creato un nuovo elemento paragrafo <p> utilizzando il metodo document.createElement('p'). Questo elemento sarà utilizzato per mostrare il numero totale di inserzioni trovate
  const countElement = document.createElement('p'); 
  //In questo modo, il paragrafo visualizzerà il testo "Risultati trovati: " seguito dal valore di count poiche Il contenuto testuale
  // del paragrafo creato viene impostato sulla base del numero totale di inserzioni trovate utilizzando l'istruzione 
  countElement.textContent = 'Risultati trovati: ' + count; 
  //L'elemento paragrafo countElement viene aggiunto come figlio dell'elemento resultsContainer utilizzando il
  // metodo appendChild(countElement). Ciò significa che il paragrafo sarà inserito all'interno del contenitore dei 
  //risultati e verrà visualizzato nel documento HTML.
  resultsContainer.appendChild(countElement);

  const ul = document.createElement('ul'); //Questo elemento rappresenterà una lista in cui verranno visualizzate le singole inserzioni di lavoro.
  resultsContainer.appendChild(ul); //utilizzando il metodo appendChild(ul). In questo modo, l'elemento <ul> verrà inserito all'interno del contenitore dei risultati.

  //Viene avviato un ciclo for che scorre gli elementi dell'array result, che contiene gli oggetti di lavoro corrispondenti ai criteri di ricerca.
  for (let i = 0; i < result.length; i++) {
    const job = result[i];
    
    const li = document.createElement('li'); //utilizzando questo metedo verrà rappresentata  una singola voce di lista in cui verrà visualizzata un'inserzione di lavoro.
    li.textContent = job.title + job.location; //In questo modo, l'elemento di lista visualizzerà il titolo del lavoro seguito dalla posizione geografica.
    ul.appendChild(li); //l'elemento di lista sarà inserito all'interno della lista.
  }
}



// Funzione per gestire il click del bottone di ricerca
//la funzione handleSearch recupera i valori inseriti  negli elementi di input per il titolo e la posizione, 
//esegue la ricerca utilizzando la funzione searchJobs, e visualizza i risultati ottenuti utilizzando la funzione displayResults.

function handleSearch() {
  //per selezionare l'elemento nel documento HTML che ha l'ID title-input viene utilizzata la proprietà .value per ottenere il 
  //valore inserito dall'utente. il valore inserito viene assegnato alla variabile titleQuery mediante l'istruzione const titleQuery 
  const locationQuery = document.querySelector('#location-input').value;
  const titleQuery = document.querySelector('#title-input').value; 
  //Questi valori rappresentano i criteri di ricerca inseriti per il titolo del lavoro e la posizione geografica.

  const searchResult = searchJobs(titleQuery, locationQuery);
  //Viene chiamata la funzione searchJobs con i valori titleQuery e locationQuery come argomenti. La funzione searchJobs restituirà 
  //un oggetto contenente l'array dei risultati e il conteggio totale delle inserzioni trovate. 

  displayResults(searchResult.result, searchResult.count); //visualizzerà i risultati della ricerca nel documento HTML
}

// Aggiungi l'evento click al bottone di ricerca

const searchButton = document.querySelector('#search-button'); //utilizzo questo metodo per selezionare l'elemento nel documento HTML che ha l'ID search-button
searchButton.addEventListener('click', handleSearch); //quando l'evento 'click' si verifica sul bottone di ricerca, la funzione handleSearch verrà eseguita.


// Quando si fa clic sul bottone di ricerca, la funzione handleSearch viene eseguita per recuperare i valori inseriti negli input