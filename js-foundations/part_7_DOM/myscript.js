// DOM manipulation => 1. Get thr element, 2. Event Listening

//Example 1
//Getting the element
//document.querySelector('#') // # for ids and . for classes

// situation says id given so use id function
document.getElementById('changeTextButton').addEventListener("click", function (){
    //grabbing the para by id to change it
    let p = document.getElementById("myParagraph");
    p.textContent = "The paragraph is changed ahhhh!"
})

// if we use an arrow function here the current context will be global and it will return window instead of the local button context.


//Example 2
document.getElementById("highlightFirstCity").addEventListener("click", function (){
    let cities = document.getElementById("citiesList")
    console.log(cities.firstElementChild.classList.add("highlight"));
})

//Example 3 
document.getElementById("changeOrder").addEventListener("click", function(){
    let c = document.getElementById("coffeeType")
    c.textContent = "Espresso";
    c.style.backgroundColor = "lime"
    c.style.padding = "5px"
})

// Example 4
document.getElementById("addNewItem").addEventListener("click", function(){
    let l = document.getElementById("shoppingList")
    let n = document.createElement('li')
    n.textContent = "Eggs"
    l.appendChild(n)
})


//Example 5
document.getElementById("removeLastTask").addEventListener("click", function(){
    let r = document.getElementById("taskList")
    r.lastElementChild.remove()
})

//Example 6
document.getElementById("clickMeButton").addEventListener('mouseover', function(){
    alert("chaicode")
})

//Example 7
document.getElementById("teaList").addEventListener('click', function(event){
    if(event.target && event.target.matches('.teaItem')) //start with # for id
    alert("You selected: " + event.target.textContent)
})

//Example 8
document.getElementById("feedbackForm").addEventListener('submit', function(event){
    event.preventDefault()
    let feedback = document.getElementById('feedbackInput').value;
    let x = document.getElementById('feedbackDisplay')
    
    x.textContent = `Feedback is: ${feedback}`
    x.style.backgroundColor = 'blue'
    x.style.fontSize = "28px"
    x.style.color = 'lime'
})

//Example 9
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('domStatus').textContent = "DOM fully loaded"
})

//Example 10
document.getElementById('toggleHighlight').addEventListener('click', function(){
    let dt = document.getElementById('descriptionText');
    dt.classList.toggle('highlight');

})