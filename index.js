fetch("https://raw.githubusercontent.com/davidegiambona/prova/main/index.json")
.then(res => console.log(res.json()))
// Create an object:
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
