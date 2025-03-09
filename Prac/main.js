// Get the modal
const modal = document.getElementById('successModal');

// Get the <span> element that closes the modal
const closeBtn = document.querySelector('.close');

// Function to simulate scanning and show success modal
function simulateScan(meal) {
    // Simulate scanning with a 2-second delay
    setTimeout(() => {
        modal.style.display = 'flex'; // Show the modal
    }, 2000);
}

// When the user clicks on a meal button
document.querySelectorAll('.meal-btn').forEach(button => {
    button.addEventListener('click', () => {
        const meal = button.textContent.split(' ')[0];
        alert(`Scanning for ${meal}... Please wait.`);
        simulateScan(meal);
    });
});

// When the user clicks on the close button, close the modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Back and Meal History navigation
document.querySelector('.back-arrow').addEventListener('click', () => {
    alert('Back button clicked! Navigation logic would go here.');
});

document.querySelector('.meal-history').addEventListener('click', () => {
    alert('Meal History clicked! Navigation logic would go here.');
});