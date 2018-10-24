var output = function(array) {
  if (array.length === 1) {
    return true;
  } else if (array.charAt(0) === "a" || array.charAt(0) === "e" || array.charAt(0) === "i" || array.charAt(0) === "o" || array.charAt(0) === "u") {
      return true;
    } else if (array.slice(0,2) === "qu") {
        return true;
      } else if (array.charAt(0,1) !== "a" || array.charAt(0,1) !== "e" || array.charAt(0,1) !== "i" || array.charAt(0,1) !== "o" || array.charAt(0,1) !== "u" || array.charAt(0)
   !== "y") {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function(){
  $("form#form1").submit(function(event){
    event.preventDefault();

    var sentence = $("input#sentence").val();
    var array = sentence.split(" ");

    var result = output(sentence);

    // for (var index = 0; index < array.length; index += 1) {
    //   if (vowels.includes(array[index])) {break;}
    // }
    $("#result").text(result);

  });

});
