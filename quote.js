
$(function(){
$("#button").on("click", function(){
    var random;
    $(".quote_view").html("<b>quote machine</b>");
    $.ajax({
    url: "test.json",
    dataType: "json",
    cache: false,
    success: function(data, textStatus){
    //success
    random = Math.floor(Math.random()*Number(data.length));
    console.log(random);
 if (typeof data === 'string') {
       data = JSON.parse(data); 
      }
      $('.div1').text(data[random].name);
      //  alert(data.name);
    },
    error: function(xhr, textStatus, errorThrown){
      // error
    }
  });
});
});