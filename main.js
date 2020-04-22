// exercise 2:
// create an assignments array, which has several assignment objects in it
// assignment should have: title, dueDate, topic, notes
// loop over assignments array, and create 'cards' for each assignment
// bonus points for using printToDom to print them to the dom
// hint: create a div for the assignment cards to go to


const assignments = [
  { title:"Dino-Cards", dueDate:"4/21/20", topic:"print-to-dom", notes:"Learn Print to Dom" },
  { title:"Dino-Cards", dueDate:"4/21/20", topic:"print-to-dom", notes:"Learn Print to Dom" },
  { title:"Dino-Cards", dueDate:"4/21/20", topic:"print-to-dom", notes:"Learn Print to Dom" },
  { title:"Dino-Cards", dueDate:"4/21/20", topic:"print-to-dom", notes:"Learn Print to Dom" }
];

  const printToDom = (selector, textToPrint) => {
    console.log('in printToDom', selector, textToPrint);
    const selectedDiv = document.querySelector('#assignment-cards');
    selectedDiv.innerHTML = textToPrint;
  }

  const assignmentCard = () => {
    let domString = '';

    for (let i = 0; i < assignments.length; i++) {
domString += '<div class="card" style="width: 18rem;">';
domString += '<img class="img card-img-top" src="https://static.scientificamerican.com/blogs/cache/file/15FE462A-E256-45D7-85D0302504B221BD_source.jpg?w=590&h=800&D9301959-CE94-4235-9BA99A771721E91F" alt="T-REX">';
domString += '<div class="card-body">';
domString += `<h5 class="card-title">${assignments[i].title}</h5><p class="card-text"></p>`;
domString += `<p>${assignments[i].dueDate} ${assignments[i].topic}</p>`;
domString += '</div>';
domString += '</div>';
    }
    printToDom('assignment-cards', domString);
  }



const init = () => {
  assignmentCard();

}

init();
