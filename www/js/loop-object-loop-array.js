// En array av objekt
/* Skapad med JSON istället

  let persons = [
  {
    firstName: 'Anna',
    lastName: 'Andersson',
    birthDate: '1991-05-03',
    phone: '040-123456'
  },
  {
    firstName: 'David',
    lastName: 'Davidsson',
    birthDate: '1957-05-07',
    phone: '040-191817'
  }, 
  {
    firstName: 'Emilia',
    lastName: 'Efraimsdotter',
    birthDate: '1942-01-01',
    phone: '08-1234567'
  }, 
  {
    firstName: 'Fredrik',
    lastName: 'Fransson',
    birthDate: '2005-03-08',
    phone: '076-1924567'
  }
];

console.log(JSON.stringify(persons,'','  '));
*/

function renderPersons(persons){
  // Töm #person-list div
  $('#person-list').empty();

  let co = 0;
  // Loopa genom arrayen persons

  for (let person of persons){
    
    $('#person-list').append(`
      <div class="card">
        <div class="card-header" role="tab" id="headingOne">
          <h5 class="mb-0">
            <a data-toggle="collapse" href="#collapse${co}" aria-expanded="true" aria-controls="collapse${co}">
              ${person.firstName} ${person.lastName}
            </a>
          </h5>
        </div>

        <div id="collapse${co}" class="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
          <div class="card-body">
            <div class="detailed-info"></div>
          </div>
        </div>
      </div>
    `);

    for (let key in person){
      let val = person[key];
        if (key == 'firstName'){
          key = 'Förnamn';
        }
        if (key == 'lastName'){
          key = 'Efternamn';
        }
        if (key == 'birthDate'){
          key = 'Född';
        }
        if (key == 'phone'){
          key = 'Telefonnummer';
        }
      // console.log(key + ': ' + val);
      $('.detailed-info').last().append(`
        <div>${key}: ${val}</div>
        `);
    }
    co++;
  }
}

// Skriv ut förnamn med index 1
//console.log('Person index 1 förnamn = ', persons[1].firstName);
//console.log('Person index 1 förnamn = ', persons[1]['firstName']);

// Hämta JSON-fil med jQuery, skapa JavaScript-array och skicka sedan innehållet som inparameter till renderPersons-funktionen
$.getJSON('/json/persons.json', renderPersons);