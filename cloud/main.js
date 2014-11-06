Parse.Cloud.define("sendEmail", function(request, response) {
  var sendgrid = require("sendgrid");
  sendgrid.initialize("<%= sendgrid.username %>", "<%= sendgrid.password %>");

  var name = request.params.name;
  var email = request.params.email;
  var message = request.params.message;

  sendgrid.sendEmail({
   to: "myemail@foo.bar",
   from: email,
   fromname: name,
   subject: "Email from my website",
   text: "Name: "+name+"\nEmail: "+email+"\nMessage:\n\n"+message
   }, {
     success: function(httpResponse) {
       console.log(httpResponse);
       response.success("Email sent!");
    },
     error: function(httpResponse) {
       console.error(httpResponse);
       response.error("Uh oh, something went wrong");
    }
  });
});
