$( document ).ready(function() {

// Collapsible Content Divs

	$( '.center_1' ).click(function() {
    	$( '.hidden_1' ).slideToggle();
    });

	$( '.center_2' ).click(function() {
    	$( '.hidden_2' ).slideToggle();
    });

	$( '.center_3' ).click(function() {
    	$( '.hidden_3' ).slideToggle();
    });

	$( '.center_4' ).click(function() {
    	$( '.hidden_4' ).slideToggle();
    });

    $( '.center_5' ).click(function() {
          $( '.hidden_5' ).fadeToggle();
    });

});
