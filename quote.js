
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
//set opacity animation to text
      $('.text').animate({
    'opacity': '0'
      }, 700,
    function(){
    $('.text').animate({
    'opacity' : '1'
      })
      }
    );
    var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    var color;
    color = Math.floor(Math.random() * colors.length);
      $("main").animate({
        backgroundColor: colors[color],
        color: colors[color]
      }, 1000);
      $(".button").animate({
        backgroundColor: colors[color]
      });
      $('.text').text(data[random].name);
      //  alert(data.name);
    },
    error: function(xhr, textStatus, errorThrown){
      // error
    }
  });
});
});