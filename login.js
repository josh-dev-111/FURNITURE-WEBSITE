document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        // Handle form validation on button click
        if (this.innerText === "Sign Up") {
            if (validateForm()) {
                showNotification("Account created successfully!");
                this.innerText = "Account Created";  // Change the button text after successful form submission
            }
        }
    });
});

function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Check if email is valid
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        showNotification("Please enter a valid email address.");
        return false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        showNotification("Passwords do not match.");
        return false;
    }

    // Check if terms are agreed
    if (!document.getElementById('terms').checked) {
        showNotification("You must agree to the terms of service.");
        return false;
    }

    return("Account created successfully!");
            return true;
}

function showNotification(message) {
    // Notification style
    const notification = document.createElement('div');
    notification.innerText = message;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = '#333';
    notification.style.color = '#fff';
    notification.style.padding = '10px 15px';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0px 4px 6px rgba(0,0,0,0.2)';
    notification.style.zIndex = '1000';
    document.body.appendChild(notification);

    // Remove notification after a few seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}
function showNotification(message) {
    // Notification style
    const notification = document.createElement('div');
    notification.innerText = message;
    notification.style.position = 'fixed';
    notification.style.top = '20px';  // Positioning from the top of the viewport
    notification.style.left = '50%';  // Positioning from the left, to center horizontally
    notification.style.transform = 'translateX(-50%)';  // Adjust to exactly center it
    notification.style.backgroundColor = '#333';
    notification.style.color = '#fff';
    notification.style.padding = '10px 15px';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0px 4px 6px rgba(0,0,0,0.2)';
    notification.style.zIndex = '1000';
    document.body.appendChild(notification);

    // Remove notification after a few seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}
