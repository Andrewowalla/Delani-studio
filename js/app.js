$(document).ready(function()  {


     // Design: Hide image and show paragraph
    $(".design-initially-showing").click(function() {
      $(".design-initially-hidden").slideToggle();
      $(".design-initially-showing").slideToggle(slow);
    });
    // Design: Hide paragraph and show image
    $(".design-initially-hidden").click(function() {
       $(".design-initially-hidden").slideToggle();
       $(".design-initially-showing").slideToggle();
    });
    // Development: Hide image and show paragraph
    $(".dev-initially-showing").click(function() {
       $(".dev-initially-hidden").slideToggle();
       $(".dev-initially-showing").slideToggle(slow);
    });   
    // Development: Hide paragraph and show image
    $(".dev-initially-hidden").click(function() {
      $(".dev-initially-hidden").slideToggle();
      $(".dev-initially-showing").slideToggle();
    });
    // Product Management: Hide image and show paragraph
    $(".p-mgt-initially-showing").click(function() {
       $(".p-mgt-initially-hidden").slideToggle();
       $(".p-mgt-initially-showing").slideToggle(slow);
    });
    // Product Management: Hide paragraph and show image
    $(".p-mgt-initially-hidden").click(function() {
      $(".p-mgt-initially-hidden").slideToggle();
      $(".p-mgt-initially-showing").slideToggle();
    });
    // Hover effect on portfolio images
    $("#work1").hover(function() {
       $("#pla").hide();
    },
    function(){
       $("#pla").show();
    });
    $("#work2").hover(function() {
      $("#ont").show();
   },
   function(){
      $("#ont").hide();
   });
   $("#work3").hover(function() {
      $("#pri").show();
   },
   function(){
      $("#pri").hide();
   });
   $("#work4").hover(function() {
      $("#we").show();
   },
   function(){
      $("#we").hide();
   });
   $("#work5").hover(function() {
      $("#ab").show();
   },
   function(){
      $("#ab").hide();
   });
   $("#work6").hover(function() {
      $("#but").show();
   },
   function(){
      $("#but").hide();
   });
   $("#work7").hover(function() {
      $("#bur").show();
   },
   function(){
      $("#bur").hide();
   });
   $("#work8").hover(function() {
      $("#gr").show();
   },
   function(){
      $("#gr").hide();
   });
   $("#form").submit( function(e){
      e.preventDefault();
      var user=$("input#name").val()
      alert(user+" Your message has been received")
   });


    $("#button").click(function() {
    event.preventDefault();
    });
    $(button)
})