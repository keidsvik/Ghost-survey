$(document).ready(function() {
  $("#userForm").submit(function(event) {
    const personInput = $("input#userInput").val().toUpperCase();
    $("#results").text(personInput);   
    event.preventDefault();
  });
});

