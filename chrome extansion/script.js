const inputBtn = document.getElementById("input-btn");

function saveLead() {
    console.log("Button clicked!");
}

inputBtn.addEventListener("click", function(){
    console.log("Button clicked from addeventlistener");
})