document.querySelectorAll('.searchButton').forEach(button => {
    button.addEventListener('click', function() {
        let searchTerm = document.querySelector('.searchTerm').value;
        if (searchTerm) {
            showNotification('You searched for: ' + searchTerm);
        } else {
            showNotification('Please enter a search term!');
        }
    });
});

function showNotification(message) {
    // Create notification div
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

    // Remove notification after 2 seconds
    setTimeout(() => {
        notification.remove();
    }, 2000);
}
