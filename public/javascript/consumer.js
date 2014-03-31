$(function() {
    function resize(optionString) {
        var height = JSON.parse(optionString).height;

        $('#popup').height(height);
    }

    function initXDM() {
        var socket = new easyXDM.Socket({
            remote: "http://localhost:3001/users",
            container: $('#popup')[0],
            onMessage: function(message) {
                resize(message);
            }
        });
    }

    $('#button').on('click', function() {
        $('#popup').show(function() {
            initXDM();
        });

    })

});
