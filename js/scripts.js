// Business logic

var vowels = ["a", "e", "i", "o", "u", "A", "E","I","O", "U"]

function toPigLatin(arrays) {
  var output = arrays.map(function(array) {
    if (array.length === 1) {
      return array + "ay";
    }
    else if (vowels.includes(array[0])){
      for (i = 0; i < vowels.length; i ++) {
        if (vowels.includes(array[i])) {
          return array + "way";
        }
      }
    } else if (array.slice(0,2) === "qu") {
      return array.slice(2, array.length) + array.slice(0,2) + "ay";

    } else if (!vowels.includes(array[0])){
      for (i = 0; i < vowels.length; i ++) {
        if (vowels.includes(array[i])) {
          return array.slice(i, array.length) + array.slice(0, i) + "ay";
        }
      }
    } else {
      return "Not a word";
    }
  });
  return output;
}

// User Interface
  $(document).ready(function(){
    $("form#form1").submit(function(event){
      event.preventDefault();
      var sentence = $("textarea#sentence").val();
      var arrays = sentence.split(" ");
      var piggy = toPigLatin(arrays);
      var newArrays = piggy.join(" ");
      $("#result").text(newArrays);

    });
  });
