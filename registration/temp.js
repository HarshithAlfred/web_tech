$(document).ready(function () {
    $('#registrationForm').on('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Gather form data
        var formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            address: $('#address').val()
        };

        // Simulate an AJAX call to a "process" function
        fakeAjax(formData).done(function (response) {
            // Display the response data in the result div
            var resultHtml = `
                <h3>Registration Successful</h3>
                <p><strong>Name:</strong> ${response.name}</p>
                <p><strong>Email:</strong> ${response.email}</p>
                <p><strong>Phone:</strong> ${response.phone}</p>
                <p><strong>Address:</strong> ${response.address}</p>
            `;
            $('#result').html(resultHtml).fadeIn();
        });
    });
});

// This function simulates an AJAX request and returns a promise
function fakeAjax(data) {
    return $.Deferred(function (defer) {
        setTimeout(function () {
            // Here we simulate the "server" processing and return the same data back
            defer.resolve(data);
        }, 500);
    }).promise();
}
