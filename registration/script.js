$(document).ready(function() {
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault();
        
        var formData = $(this).serialize();
      
        //for the sake of this example, we will use the same URL from javascript 
        $.ajax({
            type: 'POST',
            url: 'processForm.js',
            data: formData,
            success: function(response) {
                var worker = new Worker('processForm.js');
                
                worker.postMessage(response);
                
                worker.onmessage = function(event) {
                    $('#result').html(event.data).fadeIn();
                };
            }
        });

        // actual submission of form using php
        //            $.ajax({
            //     url: 'submit.php',
            //     type: 'post',
            //     data: $(this).serialize(),
            //     success: function(response) {
            //         $('#result').html(response).show();
            //     }
            // });
        
    });
});