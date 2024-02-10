let inputField = document.getElementById('inputField')
let toAddbutton = document.getElementById('toAddButton')
let toDoContainer = document.getElementById('todoContainer')

toAddbutton.addEventListener('click', function(){
    let paragraph = document.createElement('p')
    paragraph.innerText = inputField.value
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through'
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})