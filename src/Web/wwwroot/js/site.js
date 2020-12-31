// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        //initialView: 'resourceTimelineWeek',
        schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
        events: [
            {
                title: 'event1',
                start: '2020-12-31'
            },
            {
                title: 'event2',
                start: '2010-01-05',
                end: '2010-01-07'
            },
            {
                title: 'event3',
                start: '2010-01-09T12:30:00',
                allDay: false // will make the time show
            }
        ]
    });
    calendar.render();
});
