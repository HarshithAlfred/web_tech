$(document).ready(function() {
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault();
        
        $.ajax({
            url: 'submit.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                $('#result').html(response);
            },
            error: function() {
                $('#result').html('<p>An error has occurred</p>');
            }
        });
    });
});