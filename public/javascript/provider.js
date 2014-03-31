$(function() {
    var p = "<p>Lorem Ipsum is simply dummy text of the printing and </p>";
    var socket = new easyXDM.Socket({});

    function sendHeight() {
        var height = $(document).outerHeight();
        socket.postMessage(JSON.stringify({ "height": height }));
    }

    $('#provider-button').on('click', function() {
        $('body').append(p);
        sendHeight();
    });

    sendHeight();

});
