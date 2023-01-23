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
                start: '2023-01-01'
            },
            {
                title: 'Discount Coffee',
                start: '2023-01-11',
                end: '2023-01-15'
            },
            {
                groupId: '999',
                title: 'Beans restock',
                start: '2023-01-10T16:30:00'
            },
            {
                groupId: '999',
                title: 'Beans restock',
                start: '2023-01-16T16:40:00'
            },
            {
                title: 'My Github',
                url: 'https://dikigambol.github.io/arshen-coffee/',
                start: '2023-01-28'
            }
        ]
    });
    calendar.render();
});

window.onload = function () {
    $('.fc-toolbar.fc-header-toolbar').addClass('row col-lg-12');
};