$(document).ready(function() {
  $("#submit").click(function(event) {
    event.preventDefault();
    debugger;

    var num1 = parseInt($("input#number1").val());
    var num2 = parseInt($("input#number2").val());
    var numbers = [];


    for (var i = num2; i < num1; i+= num2) {
      numbers.push(i);
    }
    alert(numbers);
      });

  });
