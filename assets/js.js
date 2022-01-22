// Function that allows the event box to be edited
$(".event-box").on("click", function() {
var text = $(this)
    .text()
    .trim();
    console.log(text);

var textInput = $("<textarea>")
    .addClass("col-9 event-box row")
    .val(text);
    $(this).replaceWith(textInput);
});
