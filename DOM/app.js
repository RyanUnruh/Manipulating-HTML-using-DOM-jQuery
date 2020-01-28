document.addEventListener('DOMContentLoaded', () => {
// 1
  let button = document.createElement('button');
  button.innerText = 'Click Me';
  document.body.append(button);

// 2
  button.addEventListener('click', ()=> {

    alert('Message')
  })


// 3

let box = document.getElementById('box');

box.addEventListener("mouseover", ()=> {
  
 box.style.backgroundColor = "red";

});
box.addEventListener("mouseout", ()=> {
  
 box.style.backgroundColor = "black";

});


// 4
let graph = document.body.createElement('p')
graph.innnerText ='some text in a paragraph'

})
