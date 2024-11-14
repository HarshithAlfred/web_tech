// $(document).ready(function() {
//     $('#registrationForm').on('submit', function(event) {
//         event.preventDefault();
//         const formData = $(this).serializeArray();
//         const data = {};
//         formData.forEach(item => {
//             data[item.name] = item.value;
//         });

//         $.ajax({
//             url: 'processForm',
//             type: 'POST',
//             contentType: 'application/json',
//             data: JSON.stringify(data),
//             success: function(response) {
//                 $('#result').html(`<pre>${JSON.stringify(response, null, 2)}</pre>`);
//             },
//             error: function(error) {
//                 console.error('Error:', error);
//             }
//         });
//     });
// });









$(document).ready(function() {
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault();
        const formData = $(this).serializeArray();
        const data = {};
        formData.forEach(item => {
            data[item.name] = item.value;
        });


$.ajax({
    url: '/api/processForm', // Correct URL for Vercel deployment
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(data),
    success: function(response) {
        $('#result').html(`<pre>${JSON.stringify(response, null, 2)}</pre>`);
    },
    error: function(error) {
        console.error('Error:', error);
        $('#result').html('<p>An error occurred.</p>');
    }
});
    })
});