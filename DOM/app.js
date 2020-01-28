document.addEventListener('DOMContentLoaded', () => {

  // 1
  let button = document.createElement('button');
  button.innerText = 'Alert';
  document.body.append(button);

  button.addEventListener('click', () => {
    alert('Message')
  })

  // 2
  
  let inputBtn = document.getElementById('inputBtn');
  document.body.append(inputBtn);
  
  inputBtn.addEventListener('click', ()=> {
    let inputVal = document.getElementById('text').value;

    alert(inputVal);
  })

 

  // 3

  let box = document.getElementById('box');
  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "red";

  });

  box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "black";

  });


  // 4
  let graph = document.createElement('p');
  graph.innerText = 'Some text in a paragraph';
  document.body.append(graph);

  graph.addEventListener('click', () => {
    graph.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    graph.style.width = '10%';

  })
  var colors = ['red', 'green', 'blue', 'orange', 'yellow', 'aqua', 'brown'];

  //5
  let buttonTwo = document.createElement('button');
  buttonTwo.innerText = 'NAME';
  document.body.append(buttonTwo);

  let div = document.createElement('div');
  document.body.append(div);

  buttonTwo.addEventListener('click', () => {

    let span = document.createElement('span');
    span.innerText = 'Your name';
    document.body.append(span);
  })

  // 6

  let Fbtn = document.getElementById('friendBtn');
  Fbtn.innerText = 'Friends List';
  let ul = document.getElementById('friendUl');
  document.body.append(Fbtn);
  let friend = ['Luke', 'Lisa', 'Lester', 'Landon', 'Lane', 'Landry', 'Larson', 'Lance', 'Leon', 'Lexi'];



  Fbtn.addEventListener('click', () => {

    friend.forEach(function (friend) {
      let li = document.createElement('li');
      li.innerText = friend;
      ul.appendChild(li);


    })

  })











})

