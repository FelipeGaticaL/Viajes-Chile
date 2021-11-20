
/* Smooth scroll */

$( document ).ready( function (){
  // Add smooth scrolling to all links
  $( "a" ).on( 'click' , function (event) {
  // Make sure this.hash has a value before overriding default behavior
  if ( this .hash !== "" ) {
  // Prevent default anchor click behavior
  event.preventDefault();
  // Store hash
  var hash = this .hash;
  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (800) specifies the number of milliseconds     it takes to scroll to the specified area
  $( 'html, body' ).animate({
  scrollTop: $(hash).offset().top
  }, 300, function (){
    // Add hash (#) to URL when done scrolling (default click behavior)
  
    window.location.hash = hash;
  
});
} // End if
});
});


/* Tooltip */

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})

/* Ocultar secciones desde el tutulo */


$(document).ready(function(){
$("#jq-button1").on ('click', function()
{	$("#view1").toggle();
           }
  
);
});

$(document).ready(function(){
$("#jq-button2").on ('click', function()
{	$("#view2").toggle();
           }
  
);
});

$(document).ready(function(){
$("#jq-button3").on ('click', function()
{	$("#view3").toggle();
           }
  
);
});

