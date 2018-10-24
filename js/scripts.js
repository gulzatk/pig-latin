$(document).ready(function(){
  $("form#sentence").submit(function(event){
    event.preventDefault();

    var sentence = $("input#sentence").val();
    var result = output(sentence);
    $("#result").text(result);

  });

});
