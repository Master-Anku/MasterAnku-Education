// // Add click event listeners to the cards
// document.querySelectorAll('.card').forEach(card => {
//     card.addEventListener('click', (e) => {
//         const cardId = e.target.id;
//         alert(`You clicked on ${cardId}`);
//         // Here you can add logic to navigate to a new page or display additional information
//     });
// });

// Function to show the modal with more info
function showMoreInfo(cardTitle) {
    const modal = document.getElementById('infoModal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');

    modalTitle.innerText = `More Info on ${cardTitle}`;
    // modalContent.innerText = `Here you can find additional information about ${cardTitle}. You can display dynamic or static content here based on the selected card.`;

    modal.style.display = 'flex';  // Show the modal
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('infoModal');
    modal.style.display = 'none';  // Hide the modal
}

// Close the modal when user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
