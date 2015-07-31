$( document ).ready(function() {

// Collapsible Content Sections
	$( '.work' ).click(function() {
    	$( '.work_cont' ).slideToggle();
    });

	$( '.education' ).click(function() {
    	$( '.education_cont' ).slideToggle();
    });

	$( '.contact' ).click(function() {
    	$( '.contact_cont' ).slideToggle();
    });

	$( '.skill' ).click(function() {
    	$( '.skill_cont' ).slideToggle();
    });

    $( '.interest' ).click(function() {
          $( '.interest_cont' ).fadeToggle();
    });
// Animated Scroll
    $( 'header' ).click(function() {
    	console.log('Header was clicked');
    	$( 'body' ).animatescroll();
    });
// Tooltip
    $('.tooltip').tooltipster();
});
