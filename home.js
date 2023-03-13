//subscribe empty input validation
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Email must be filled out");
      return false;
    }
  }