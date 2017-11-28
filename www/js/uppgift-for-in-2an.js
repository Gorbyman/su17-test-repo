let lang = 'es';

let persons = [
  {
    firstName: 'Anna',
    lastName: 'Andersson',
    birthDate: '1991-05-03',
    phone: '040-12 34 56'
  },
  {
    firstName: 'David',
    lastName: 'Davidsson',
    birthDate: '1957-05-07',
    phone: '046-19 18 17'
  },
  {
    firstName: 'Emilia',
    lastName: 'Efraimsdotter',
    birthDate: '1942-01-01',
    phone: '08-123 45 67'
  },
  {
    firstName: 'Fredrik',
    lastName: 'Fransson',
    birthDate: '2005-03-08',
    phone: '076-192 15 16'
  }
];

function renderPersons(labels){

  // Empty the person-list div
  $('#person-list').empty();

  // A counter that we will add 1 to for each loop iteration
  let co = 0;

  for(let person of persons){

    // Create a Bootstrap accordion for each person
    $('#person-list').append(`
      <div class="card">
        <div class="card-header" role="tab" id="headingOne">
          <h5 class="mb-0">
            <a data-toggle="collapse" href="#collapse${co}" aria-expanded="true" aria-controls="collapseOne">
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

    // Loop through the object person
    // and fill in the details (object properties) in the
    // .detailed-info div...
    for(let key in labels){
      let label = labels[key];
      if(key !== lang){
        continue;
      }
      for(let key2 in label){
        let val = label[key2];
        let myPerson = person[key2];
        $('.detailed-info').last().append(`
          <div>${val}: ${myPerson}</div>
        `); // <div>${key2}: ${val}</div> innan ändring
      }
    }
    co++;
  }

}

// renderPersons();

$.getJSON('/json/labels.json', renderPersons);