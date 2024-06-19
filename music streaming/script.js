document.addEventListener('DOMContentLoaded', function() {
    // Modal handling
    var signInModal = document.getElementById('signInModal');
    var loginModal = document.getElementById('loginModal');

    // Open sign in modal
    var signInBtn = document.getElementById('signinBtn');
    signInBtn.onclick = function() {
        signInModal.style.display = 'block';
    }

    // Open login modal
    var loginBtn = document.getElementById('loginBtn');
    loginBtn.onclick = function() {
        loginModal.style.display = 'block';
    }

    // Close modals when clicking outside of the modal content or close button
    window.onclick = function(event) {
        if (event.target == signInModal || event.target == loginModal || event.target.classList.contains('close')) {
            signInModal.style.display = 'none';
            loginModal.style.display = 'none';
        }
    }

    // Form submission handling (dummy authentication)
    var signInForm = document.getElementById('signInForm');
    signInForm.onsubmit = function(event) {
        event.preventDefault();
        var username = signInForm.elements['username'].value;
        var password = signInForm.elements['password'].value;
        // Perform actual authentication (backend logic would go here)
        // For simplicity, just alert success
        alert('Signed in successfully as ' + username);
        signInModal.style.display = 'none';
    }

    var loginForm = document.getElementById('loginForm');
    loginForm.onsubmit = function(event) {
        event.preventDefault();
        var loginUsername = loginForm.elements['loginUsername'].value;
        var loginPassword = loginForm.elements['loginPassword'].value;
        // Perform actual login authentication (backend logic would go here)
        // For simplicity, just alert success
        alert('Logged in successfully as ' + loginUsername);
        loginModal.style.display = 'none';
    }
});
