$(document).ready(function() {
  var testNumLength = function(number) {
		if (number.length > 15) {
			return "Err";
		} else if (number.length > 9) {
			return number.substr(number.length - 9, 9);
		} else {
			return number;
		}
  };

  var number = "";
  var newnumber = "";
  var operator = "";
  var totaldiv = $("#total");

  totaldiv.text("0");

  $("#numbers a").not("#clear,#clearall,#operator,#equals,#decimal").click(function() {
    number += $(this).text();
		console.log('this is the number', number)
		console.log('this is the newnumber', newnumber)
    totaldiv.text(testNumLength(number));
  });

  $("#operators a").not("#equals").click(function() {
    operator = $(this).text();
    newnumber = number + operator;
    number = "";
		console.log('this is the number', number)
		console.log('this is the newnumber', newnumber)
    totaldiv.text(number);
  });

  $("#clear,#clearall").click(function() {
    number = "";
    totaldiv.text("0");
    if ($(this).attr("id") === "clearall") {
      newnumber = "";
    }
  });

  $("#decimal").click(function(){
    number = number + ".";
    newnumber = newnumber + ".";
  });

  $("#equals").click(function() {
		newnumber += number;
		console.log('new numbeer after concatenation', newnumber)
		number = eval(newnumber)
		totaldiv.text(number);
  });

});
