$( document ).ready(function() {

// Collapsible Content Divs
	$( '.work' ).click(function() {
    	$( '.hidden_1' ).slideToggle();
    });

	$( '.education' ).click(function() {
    	$( '.hidden_2' ).slideToggle();
    });

	$( '.contact' ).click(function() {
    	$( '.hidden_3' ).slideToggle();
    });

	$( '.skill' ).click(function() {
    	$( '.hidden_4' ).slideToggle();
    });

    $( '.interest' ).click(function() {
          $( '.hidden_5' ).fadeToggle();
    });

    $( 'header' ).click(function() {
    	console.log('Header was clicked');
    	$( 'body' ).animatescroll();
    });

});
