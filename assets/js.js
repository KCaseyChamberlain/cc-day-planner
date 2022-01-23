// Function that allows the event box to be edited
$(".event-box").on("click", function() {
    // var text = $(this)
    //     .text()
    //     .trim();
        // console.log(text);

    var textInput = $("<textarea>")
        $(".event-text").replaceWith(textInput);
        textInput.trigger("focus");
});

// Function finds current time and displays it in the header
var currentTime = function () {
    timeEL = document.querySelector('#currentDay')
    timeEL.innerHTML = moment().format('MMMM Do YYYY, hh:mm');
    // console.log(timeEL)
}
setInterval(currentTime, 1000);


// Function compares the current hour to the event's set hour-num and applies 1/3 styles accordingly
var hoursUpdater = function () {
    var currentHour = moment().hours();
    $('.event-box').each(function () {
        var hourNum = parseInt($(this).attr("hour-num"))
// console.log(hourNum)
        if (hourNum == currentHour) {
            $(this).addClass("present");
        }

        else if (hourNum < currentHour) {
            $(this).addClass("past");
        }

        else  {
            $(this).addClass("future");
        }



    })
}
setInterval(hoursUpdater, 100)




