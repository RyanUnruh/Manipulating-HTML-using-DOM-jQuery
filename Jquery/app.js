$(document).ready(function () {

  // 1
  let btn = $("<button>Alert</button>")
  let div = $("<div></div>")


  $("body").append(div)
  div.append(btn)

  $(btn).click(function () {
    alert("Message");
  });

  // 2
  $("#myBtn").click(function () {
    var str = $("#myInput").val();
    alert(str);
  });

  // 3
  $('.box').hover(
    function () {
      $('.box').css("backgroundColor", 'red');
    },
    function () {
      $(this).css("backgroundColor", "#fff");
    })

  // 4

  $("body").append("<p>Some appended text.</p>");

  $("p").click(function () {
    var back = ["#ff0000", "blue", "gray"];
    var rand = back[Math.floor(Math.random() * back.length)];
    $('p').css('color', rand);
  });

  // 5

  let span = $('<span>My name</span>');
  let spDiv = $('<div></div>');
  let nameBtn = $("<button id='nameBtn'> MyName</button>");
  $("body").append(nameBtn);
  $("body").append(spDiv);

  $("#nameBtn").click(function () {
    $(spDiv).append(span);
  });

  // 6

  let items = new Array('Luke', 'Lisa', 'Lester', 'Landon', 'Lane', 'Landry', 'Larson', 'Lance', 'Leon', 'Lexi');
  let ulBtn = $("#ulBtn");
  
  $(ulBtn).click(function () {

    $.each(items, function (index, value) {
      let ul = ("#list");
      var li = $('<li>').append(value);

      $(ul).append(li);

    });
    
  });

})    