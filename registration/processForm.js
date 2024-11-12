self.addEventListener('message', function(event) {
    var formData = new URLSearchParams(event.data).entries();
    var resultHtml = '<div>';
    
    for (var pair of formData) {
        resultHtml += '<p>' + pair[0] + '<strong>Name:</strong>' + pair[1] + '</p>';
    }
    //<p><strong>Name:</strong>
    resultHtml += '</div>';
    
    self.postMessage(resultHtml);
});