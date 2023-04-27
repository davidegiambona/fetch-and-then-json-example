fetch("https://raw.githubusercontent.com/davidegiambona/fetch-and-then-json-example/main/index.json")
.then(response => console.log(response.json()))
.then(json => parseText(json))
// Create an object:

function parseText(myJson){
    let fullResponse = myJson; 
    console.log(fullResponse);

    let keys = Object.keys(fullResponse); // estrae le chiavi del dizionario
    for (let k = 0; k < keys.length; k++){ // per ogni chiave
      let currentKey = keys[k]; // estrare l'elemento corrente      
      if (currentKey == "div"){ // se l'elemento corrente è un div
         let div = document.createElement("div"); // crea un div
         div.id = fullResponse[currentKey]["id"]; // assegna l'id
         div.innerHTML = fullResponse[currentKey]["innerHTML"]; // assegna il contenuto del div
         document.body.appendChild(div); // visualizza l'elemento in fondo alla pagina html
      }      
    }

/*
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object:
document.getElementById("demo").innerHTML = person.fullName();
*/
