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
    }
  )
})    