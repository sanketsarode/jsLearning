$(document).ready(function () {
    $("form[name='registration']").validate({
        messages: {
            firstname: {
                required: "Please enter firstname!"
            },
            lastname: {
                required: "Please enter lastname!"
            },
            password: {
                required: "Please enter password!"
            },
            email: {
                required: "Please enter email!"
            }
        }
    });
});