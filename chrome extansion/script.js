const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

const myLeads = [];

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log("Button clicked");
})

for (let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i]);
    
}