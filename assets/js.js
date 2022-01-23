$(document).ready(function () {
    var schedule = ""

    // Gets current time to display on web page
    var currentTime = function () {
        timeEL = document.querySelector('#currentDay')
        timeEL.innerHTML = moment().format('MMMM Do YYYY, hh:mm');
    }
    setInterval(currentTime, 1000);

    //Updates rows to appropriate colors when time is reached
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

    //saves schedule items to local storage as object with hour and task key values
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

    //retrieves schedule items from local storage
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


    $(".saveBtn").click(saveSchedule)
    hourUpdater()
    loadSchedule()

    console.log("executed")
});