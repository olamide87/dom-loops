
const colors = ['red', 'orange', 'white','blue', 'gold', 'yellow', 'violet'];



// Exercise 1:
// create an array of instructor objects, each with firstName and lastName properties (keys/values)
// create a function that will loop over the instructors array
// console.log() full instructor names i.e. "Luke Lancaster", "Matt Gill", etc etc etc etc
// call the function in init()

// Exercise 1.2:
// instead of console.log-ing out the names
// build up a domString of <h2>INSTRUCTOR NAME HERE</h2>
// log out the final domString after the loo

const instructors = [
  { firstName: 'Luke', lastName: 'Lancaster' },
  { firstName: 'Michael', lastName: 'Clark' },
  { firstName: 'Matt', lastName: 'Gill' },
];

  const instructorLoop = () => {
    let domString = '';
    for (let i = 0; i < instructors.length; i++) {
      domString += `<h2>${instructors[i].firstName} ${instructors[i].lastName}</h2>`;
    }
    console.log(domString);
  }
  
  
  // const init = () => {
  //   instructorLoop();
  // }
  
  // init();
 
