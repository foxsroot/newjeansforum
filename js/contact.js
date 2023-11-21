$(document).ready(function () {
  $("#submit").click(function () {
    ValidateForm();
  });
});

function ValidateForm() {
  var formInvalid = false;
  $("form").each(function () {
    if ($(this).val() === "") {
      formInvalid = true;
    }
  });

  if (formInvalid) {
      alert("Terimakasih telah mengisi");
  }
}

