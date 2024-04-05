var form = document.querySelector('form'); // Use querySelector to select the form
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var login = document.getElementById('login').value;
        var password = document.getElementById('password').value;
        alert("You're exam is about to start ");

        // Redirect to web2.html
        
        window.location.href = 'web2.html';
    });
    