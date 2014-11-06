$(document).ready(function(){

  Parse.initialize("I3Ib0xEnJ731WocbB53cUhJVqHC77mAz8h37935B", "3kayE9rK6Ky7Pt0abliWu54EZ22AJbKJ2UciTraJ");

  $('#my-form').submit(function(e){
    e.preventDefault();

    var data = {
      name: $('#name').val(),
      email: $('#email').val(),
      message: $('#message').val()
    };


    Parse.Cloud.run("sendEmail", data, {
      success: function(object) {
        $('#response').html('Email sent!').addClass('success').fadeIn('fast');
      },

      error: function(object, error) {
        console.log(error);
        $('#response').html('Error! Email not sent!').addClass('error').fadeIn('fast');
      }
    });
  });

});
