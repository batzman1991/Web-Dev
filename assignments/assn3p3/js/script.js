"use strict" 

  
   $( document ).ready(function() {  
  

  var uExist=false;
  $("#username").on("blur", function(ev){
    var $aerror = $("#ajaxerror");
    var $error = $("#usernameerror");
    var $ajaxmessage = $("#ajaxmessage");
      $error.text("");
      $aerror.text("");
    $.get( "checkusername.php", { username:$("#username").val() } )
     
     .done(function( data ) {

       if(data>0){
        $aerror.text("Your username already exist " + "="+ $("#username").val());
        uExist = true;
       }

     })

     .fail(function(jqXHR, textStatus, errorThrown) {
      $ajaxmessage.text(jqXHR.responseText);
     //alert("AJAX completed");
     });
  
  });


  
  $("button").eq(0).on("click", function(ev){
    var valid = true;

    if($("#email").val().length==0){
      $("#emailerror").addClass("error");
      $("#emailerror").removeClass("noerror");
      valid=false;
    }else{
      $("#emailerror").addClass("noerror");
      $("#emailerror").removeClass("error");
    }

      if($("#name").val().length==0){
      $("#nameerror").addClass("error");
      $("#nameerror").removeClass("noerror");
      valid=false;
    }else{
      $("#nameerror").addClass("noerror");
      $("nameerror").removeClass("error");
    }


      if($("#title").val().length==0){
      $("#titleerror").addClass("error");
      $("#titlerror").removeClass("noerror");
      valid=false;
    }else{
      $("#titleerror").addClass("noerror");
      $("#titleerror").removeClass("error");
    }
  
    if(!valid)
      ev.preventDefault();
  });

   //=================================================================//
var $delete = $( '.delete' );

var $li = $( '#editDelete' ).parent();
  $( "#dialog-confirm" ).dialog({autoOpen: false});

$delete.on('click', function(ev) {
  ev.preventDefault();
  var $this = $( this );
  var $link = $this.attr( 'href' );
  var $item = $this.parent().parent();
  $( "#dialog-confirm" ).dialog({
    autoOpen: true,
    resizable: false,
    height: "auto",
    width: 400,
    modal: true,
    buttons: {
      "Delete Item": function() {
        $.post( $link )
        .done(function(){
          $( '#dialog-confirm' ).dialog( "close" );
          $item.remove();
        });
      },
      Cancel: function() {
        $( '#dialog-confirm' ).dialog( "close" );
      }
    }
  });   
});

//=================================================================//
$( function() {
  $( "#fromdate" ).datepicker();
});

$( function() {
  $( "#todate" ).datepicker();
});

//=================================================================//
var $details = $('.details');

var dialogBox2 = $( "#dialog-wish-details" ).dialog({
  autoOpen:false,
  resizable: false,
  height: "auto",
  width: 400,
  modal: true,
});

// made a variable called details and then on click 
$details.on('click', function(ev){
  ev.preventDefault(); // preventing the default function 
  var $this = $( this ); // this = this is storing the click of the button into this variable 
  var $link = $this.attr('href'); // making a varible called link that then uses the this. calling href attribute 
  dialogBox2.load($link); // diaglog box2.load loads the link 
  dialogBox2.dialog('open'); // this is shown on open of the dialog box 
});

    // jQuery(function($) { 
    //     $('#field').pwstrength(); 
    // });
            

   /*PASSWORD*/
    var $password = $('#password');
    console.log($password);
    $password.pwstrength(); 

});

