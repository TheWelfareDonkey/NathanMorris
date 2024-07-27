function unlockPage() {
    const password = document.getElementById('password').value;
    const correctPassword = 'Barbie';
    const lockScreen = document.getElementById('lock-screen');
    const content = document.getElementById('content');
    const errorMessage = document.getElementById('error-message');
    
    if (password === correctPassword) {
        lockScreen.style.display = 'none';
        content.style.display = 'block';
    } else {
        errorMessage.textContent = 'Incorrect password. Please try again.';
    }
}
