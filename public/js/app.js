var numberField = document.querySelector('input[name=number]');
var textField = document.querySelector('input[name=text]');
var button = document.querySelector('input[type=button]');
var msg = document.querySelector('.response');


// Pressing Return key
    textField.addEventListener('keyup', function(e) {
        (e.keyCode || e.charCode) === 13 && send()
    }, false);

// Clicking "Send" button
    button.addEventListener('click', send, false);

    function send() {
        var number = numberField.value.replace(/\D/g, ''); // Remove all non-numeric chars
        if (!number) return;

        var text = textField.value || 'Hello!';

        localStorage.setItem('number', number);

        if (!self.fetch) {
            alert("Browser doesn't support Fetch API!");
            return;
            // Ideally, use XHR as the fallback for fetch.
        }

        fetch('/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({number: number, text: text})
        }).then(function (res) {
            console.log(res)
        }).catch(function (error) {
            console.log(error)
        });
    }
