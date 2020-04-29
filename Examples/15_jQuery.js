/*
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

document.getElementById();
$("#id");

document.getElementsByClassName();
$(".classname");

document.getElementsByTagName();
$("input")
$("button")

select all elements:                                                $("*")
select all <p> elements which has class="demo" :                    $("p.demo")
select the first <p>:                                               $("p:first")
select the last <p>:                                                $("p:last")
select <a> tag having taget _blank:                                 $("a[target='_blank']")
select all <button> & <input> elenets whose type is button:         $(":button")
get a text from <p> tag:                                            $("p").text()
addign new text to <p> tag:                                         $("p").html("some new text")
add css property                                                    $("p").css('color','blue').css('width',300).css('background-color','red')
get/set values from form                                            use Val()
hide element                                                        $("p").hide()

var style = {
    background-color : "red",
    width : 300
}
$("p").css(style);

*/

$("p:last").html($("p:first").text());

$("#abcd").click(function () {
    $("#abc").hide();
});

$("p:first").on({
    mouseenter: function () {
        $(this).html("Mouse on this text");
    }, mouseleave: function () {
        $(this).html("Mouse out of this text");
    }
});

//ajax using jquery:

$.ajax({
    url: "https://reqres.in/api/users",
    type: "POST",
    data: {
        name: "paul rudd",
        movies: ["I Love You Man", "Role Models"]
    },
    success: function (response) {
        console.log(response);
    }
});

$.ajax({
    url: "https://reqres.in/api/users/2",
    method: "GET"
}).done(function (data) {
    alert("Success");
    console.log(data);
}).fail(function (error) {
    alert("Error");
}).always(function () {
    alert("Complete");
})