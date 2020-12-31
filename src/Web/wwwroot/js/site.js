// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        //initialView: 'resourceTimelineWeek',
        schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
    });

    calendarEl.calendar = calendar;
    calendar.render();
});
