document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        locale: 'id',
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        navLinks: true,
        editable: true,
        eventLimit: true,
        height: 'auto',
        events: [
            {
                title: 'Cafe Music Event',
                start: '2022-01-01'
            },
            {
                title: 'Discount Coffee',
                start: '2022-01-07',
                end: '2022-01-10'
            },
            {
                groupId: '999',
                title: 'Beans buy',
                start: '2022-01-09T16:00:00'
            },
            {
                groupId: '999',
                title: 'Beans buy',
                start: '2022-01-16T16:00:00'
            },
            {
                title: 'Youtube',
                url: 'http://youtube.com/',
                start: '2022-01-28'
            }
        ]
    });
    calendar.render();
});

window.onload = function () {
    $('.fc-toolbar.fc-header-toolbar').addClass('row col-lg-12');
};