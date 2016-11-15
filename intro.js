$(document).ready(function() {
    $('div').click(function() {
        $('#jcole').fadeOut('slow');
        $(document).on('click','.item', function() {
            $(this).remove();    
        });
        $('#button').click(function() {
            var toAdd = $('input[name=checkListItem]').val();
            $('.list').append("<div class='item'>" + toAdd + "</div>");
            });
        });
    });
});