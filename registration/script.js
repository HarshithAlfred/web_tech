$(document).ready(function() {
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault();
        
        var formData = new FormData(this);
        
        // Simulate form processing
        setTimeout(() => {
            $('#result').html('Form submitted successfully!').fadeIn();
        }, 1000);
    });
});