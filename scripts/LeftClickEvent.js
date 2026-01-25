function toggleDropdown() {
    const dropdownContent = document.getElementById('dropdown-content');
    const downloadText = document.querySelector('.download-text');
    const downloadButton = document.querySelector('.download-button');

    const isActive = dropdownContent.classList.toggle('show');
    downloadText.classList.toggle('active');
    
    // Add active class to the button if dropdown is active
    if (isActive) {
        downloadButton.classList.add('active');
    } else {
        downloadButton.classList.remove('active');
    }
}

// Close the dropdown if clicked outside
window.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.download-dropdown');
    const dropdownContent = document.getElementById('dropdown-content');
    const downloadText = document.querySelector('.download-text');
    const downloadButton = document.querySelector('.download-button');

    if (!dropdown.contains(event.target)) {
        dropdownContent.classList.remove('show');
        downloadText.classList.remove('active');
        downloadButton.classList.remove('active'); // Remove active state from button
    }
});