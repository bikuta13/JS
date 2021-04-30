function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
$("#submitButton").click(function () {
    var errorMessage = "";
    var fieldMissing = "";

    if ($("#email").val() == "") {
        fieldMissing += "<br>Email"
    }
    if ($("#phone").val() == "") {
        fieldMissing += "<br>Telephone"
    }
    if ($("#password").val() == "") {
        fieldMissing += "<br>Password"
    }
    if ($("#passwordConfirm").val() == "") {
        fieldMissing += "<br>Confirm Password"
    }
    if (fieldMissing != ""){
        errorMessage += "<p>Имеются не заполненные поля</p>" + fieldMissing;
    }

    if (isEmail($("#email").val()) == false) {
        errorMessage += "<p>Вы ввели некорректный email</p>"
    }
    if ($.isNumeric($("#phone").val())==false) {
        errorMessage += "<p>Вы ввели некорректный телефон</p>"
    }
    if ($("#password").val() != $("#passwordConfirm").val()) {
        errorMessage += "<p>Вы ввели разные пароли</p>"
    }
    if (errorMessage != "") {
        $("#errorMessage").html(errorMessage);
    } else {
        $("#succesMessage").show();
        $("#errorMessage").hide();

    }
});