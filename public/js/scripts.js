function processMulter(event) {

    event.preventDefault();
    const form = event.target;
    var formData = new FormData(form);

    fetch('http://localhost:8081/upload', {
        method: 'POST',
        body: formData
    }).then(function (response) {
        return response.json();
    }).then(function (json) {
        const obj = JSON.parse(json);
        const output = document.getElementById('multer-result');
        output.innerHTML = '<h2>' + obj.message + '</h2>' +
            '<img src="' + obj.path + '"/>';
    }).catch(err => alert(err));
}


document.getElementById('multer-form').addEventListener('submit', processMulter);