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
    $(".container img").hover(function() {
       $(".col-3").addClass("image");
       $(".img-fluid").show();
    });
    $("#button").click(function() {
    event.preventDefault();
    });
    $(button)
})