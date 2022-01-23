$(document).ready(function () {
    var schedule = ""

    // uses moment to get the current time and displays it in the header
    var currentTime = function () {
        timeEL = document.querySelector('#currentDay')
        timeEL.innerHTML = moment().format('MMMM Do YYYY, hh:mm');
    }
    setInterval(currentTime, 1000);

    //styles hour-block according to the hour of the day
    var hourUpdater = function () {
        var currentHour = moment().hours();
        $('.hour-block').each(function () {
            var hourBlock = parseInt($(this).attr("hour-data"))

            if (hourBlock < currentHour) {
                $(this).addClass("past");
            }

            else if (hourBlock > currentHour) {
                $(this).addClass("future");
            }

            else {
                $(this).addClass("present");
            }
        })
    }
    setInterval(hourUpdater, 100)

    //uses description to set schedule item to local storage as hour and task key
    function saveSchedule() {
        schedule = []
        $('.description').each(function () {
            var hour = $(this).attr("data-task")
            var task = $.trim($(this).val())

            schedule.push({
                hour: hour,
                task: task,
            })

            var setSchedule = localStorage.setItem('scheduleItems', JSON.stringify(schedule))
        })
    }

    //gets schedule items from local storage
    function loadSchedule() {
        i = 0
        $('.description').each(function () {
            var readSchedule = JSON.parse(localStorage.getItem('scheduleItems'))
            var hour = $(this).attr("data-task")

            if (readSchedule[i].hour === hour) {
                $(this).val(readSchedule[i].task)
            }
            else {
                return ""
            }
            i++
        })
    }

    // save button click function calls
    $(".saveBtn").click(saveSchedule)
    hourUpdater()
    loadSchedule()

    console.log("This document ready function ran start to finish!")
});