$(document).ready(function(){


/* ex1
$('button').click(function(){
 alert("Hello");
});*/

//ex2
$('#btn1').on('click',function(){
 alert("Hello");
});

//ex3
$('#btns').on('click',function(){
 $('#lorem1').show();
});
//ex4
$('#btnh').on('click',function(){
 $('#lorem1').hide();
});
//ex5
$('#btnt').on('click',function(){
 $('#lorem1').toggle();
});
//ex6
$('p').on('click',function(){
 $(this).hide();
});

//ex7
$('#btnfo').on('click',function(){
 $('#lorem2').fadeOut(3000);
})
//ex8
 $('#btnfi').on('click',function(){
 $('#lorem2').fadeIn(1000);
});
 //ex9
 $('#btnft').on('click',function(){
 $('#lorem2').fadeToggle("slow");
});

//ex10
function showWidth( ele, w ) {
  $( "div" ).text( "The width for the " + ele + " is " + w + "px." );
}
$("#getw").on( "click", function() {
  showWidth( "window", $( window ).width() );
} );

//ex11
$("#para").on( "click", function() {
  showWidth( "paragraph", $( "p" ).width() );
} );

//ex12
$( "#add_s" ).add( "span" ).css( "background", "yellow" );

//ex13

$( "li" ).add( "add_p" ).css( "background-color", "red" );

//ex14
$( ".inner" ).after( "<p>Test</p>" );


//ex15
$( document ).on( "ajaxSend", function() {
  $( ".log" ).text( "Triggered ajaxSend handler." );
} );

/* ex16
$( "#clickme" ).on( "click", function() {
  $( "#buskt" ).animate({
    opacity: 0.25,
    left: "+=50",
    height: "toggle"
  }, 5000, function() {
  });
});*/

//ex17
$( "#clickme" ).on( "click", function() {
  $( "#buskt" ).animate({
    width: "toggle",
    height: "toggle"
  }, {
    duration: 5000,
    specialEasing: {
      width: "linear",
      height: "easeOutBounce"
    },
    complete: function() {
      $( this ).after( "<div>Animation complete.</div>" );
    }
  });
});

//ex18
$( "#run" ).on( "click", function() {
 $( "div:animated" ).toggleClass( "colored" );
});

//ex19

$( ".bef" ).before( "<p>Test</p>" );

//ex20
$( "#blurb" ).on( "click", function() {
  $( "#blurp" ).trigger( "blur" );
} );

//ex21
$( "#blurp" ).trigger( "blur" );

});

//ex22
$( "#other" ).on( "click", function() {
  $( ".target" ).trigger( "change" );
} );


//ex23
$( "ul.level-2" ).children().css( "background-color", "red" );

//ex24
$( "#alerting" ).on( "dblclick", function() {
  alert("Double clicked already!");
} );

//25
$( "#side" ).on( "click", function() {
  $( "div.first" ).slideUp( 300 );
  $( "div.second" ).slideUp( 500 );
});
