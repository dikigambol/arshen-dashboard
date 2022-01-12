var clicked = false, clickY;
$(document).on({
    'mousemove': function (e) {
        clicked && updateScrollPos(e);
    },
    'mousedown': function (e) {
        clicked = true;
        clickY = e.pageY;
    },
    'mouseup': function () {
        clicked = false;
        $('#content-drag').css('cursor', 'grab');
    }
});

var updateScrollPos = function (e) {
    $('#content-drag').css('cursor', 'grabbing');
    $('#content-drag').scrollTop($('#content-drag').scrollTop() + (clickY - e.pageY));
}