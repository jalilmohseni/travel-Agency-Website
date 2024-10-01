// JavaScript Logic:
// **Gol:Add dynamic behavior and DOM manipulation as well as form Validate**
// Steps:
// 1.	Image Gallery Logic:
//   -Create arrays for images, descriptions, and URL links (4 images).
//   -Dynamically generate table rows (tr) based on array length and cells (<td>).
//   -Add event listeners for each table cell to display image previews and open the URL link on click.
//   -Add one button to open new window linking to each image to get more information about destination.
// 2.	Form input logic and Validation:
//   -Create functions to validate each form input (e.g., ensure that the name, address, etc., are not empty).
//   -Apply real-time validation, showing instructional text when inputs are focused and highlighting incorrect fields.
//   -Prevent form submission if validation fails.
// 3.	Confirmation Dialogs:
//   -Use JavaScript confirm() dialogs to ask users if they are sure about submitting or resetting the form.
// 4.	Window Opening & Closing:
// o	Add logic to open a new window with the image's link when a description is clicked and automatically close the window after 5 seconds.


// Arrays for images, descriptions, and URLs
// Arrays for images, descriptions, and URLs
const images = [
    { src: 'images/image1.jpg', alt: 'Beautiful Sand Dunes' },
    { src: 'images/image2.jpg', alt: 'Northern lights' },
    { src: 'images/image3.jpg', alt: 'Rockies Mountain View' },
    { src: 'images/image4.jpg', alt: 'Malaga beaches in Spain' }
];

const descriptions = [
    'Embark on a camelback & enjoy desert with its crystal-clear skies.',
    'Enjoy the vibrant northern lights.',
    'Take in the breathtaking Rockies mountain view.',
    'Discover the sun-soaked beaches of southern Spain.'
];

const imageURLs = [
    'https://www.summitpost.org/erg-chebbi/152577',
    'https://www.nathab.com/alaska-northern-adventures/northern-lights-tour/',
    'https://www.rockymountaineer.com/blog/discover-beauty-lake-louise',
    'https://www.siestacampers.com/blog/malaga-beach-guide'
];

// Select the table body
const tableBody = document.querySelector('#imageTable tbody');

// Create table cells by looping through each image and its description
for (let i = 0; i < images.length; i++) {
    const row = document.createElement('tr'); // Create a new table row
    const cell = document.createElement('td'); // Create a new table cell
    cell.textContent = descriptions[i]; // Set the cell's text to the description
    row.appendChild(cell); // Add the cell to the row
    tableBody.appendChild(row); // Add the row to the table body

    // Event to preview the image when hovering over the description
    cell.addEventListener('mouseover', function() {
        const previewDiv = document.getElementById('imagePreview'); // Select the preview div
        previewDiv.innerHTML = `<img src="${images[i].src}" alt="${images[i].alt}" width="500">`;
    });

    // Event to open a website when the description is clicked
    cell.addEventListener('click', function() {
        openWebsiteWithTimer(imageURLs[i]);
    });

};
// Open a new window and close it automatically after 5 seconds
function openWebsiteWithTimer(url) {
const newWindow = window.open(url, '_blank', 'width=800, height=600'); // Open a new window
setTimeout(() => {
    newWindow.close(); // Close the window after 5 seconds
}, 5000);
}


//     // Preview the image when hovering over the description
//    // Event to preview the image when hovering over the description
// cell.addEventListener('mouseover', function() {
//     const preview = document.getElementById('imagePreview'); // Select the preview div
//     preview.innerHTML = `<img src="${images[i].src}" alt="${images[i].alt}" width="500">`;

// };
    // Show the button when hovering over the table cell
//     const openWindowBtn = document.getElementById('OpenWindowBtn');
//     openWindowBtn.style.display = 'block'; // Show the button
// });

// Event to hide the button when mouse leaves the cell
// cell.addEventListener('mouseout', function() {
//     const openWindowBtn = document.getElementById('OpenWindowBtn');
//     openWindowBtn.style.display = 'none'; // Hide the button when not hovering
// });

// Add mouseover event for the image preview
// const previewDiv = document.getElementById('imagePreview');
// previewDiv.addEventListener('mouseover', function() {
//     const openWindowBtn = document.getElementById('OpenWindowBtn');
//     openWindowBtn.style.display = 'block'; // Show the button when hovering over the preview
// });

// Add mouseout event for the image preview
// previewDiv.addEventListener('mouseout', function() {
//     const openWindowBtn = document.getElementById('OpenWindowBtn');
//     // openWindowBtn.style.display = 'none'; // Hide the button when not hovering over the preview
// });

    // Event listener for the cell to open a new window and auto-close after 5 seconds
//     cell.addEventListener('click', function() {
//         const url = imageURLs[i]; // Use the corresponding URL for the image
//         const newWindow = window.open(url, '_blank', 'width=800,height=600'); // Open the URL in a new window
//         setTimeout(() => {
//             newWindow.close(); // Close the window after 5 seconds
//         }, 5000);
//     });
// }

// Event listener for the OpenWindowBtn
// document.getElementById('OpenWindowBtn').addEventListener('click', function() {
//     const currentIndex = this.dataset.currentIndex; // Retrieve the stored index
//     if (currentIndex !== undefined) { // Check if the index is defined
//         const url = imageURLs[currentIndex]; // Use the corresponding URL for the previewed image
//         window.open(url, '_blank'); // Open the URL in a new window
//     }
// });

// ** Form Section **
// Confirm approval before submitting or resetting the form
document.getElementById('submitBtn').addEventListener('click', function(event) {
    if (!confirm('Are you sure you want to submit this form?')) {
        event.preventDefault();
    }
});

document.getElementById('resetBtn').addEventListener('click', function(event) {
    if (!confirm('Are you sure you want to reset this form?')) {
        event.preventDefault();
    }
});

// Form Validation Logic
function isFieldEmpty(fieldId) {
    return document.getElementById(fieldId).value.trim() === '';
}

document.getElementById('travelForm').addEventListener('submit', function(event) {
    let formIsValid = true;

    const fieldsToValidate = ['name', 'address', 'city', 'province', 'postalCode'];

    fieldsToValidate.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (isFieldEmpty(fieldId)) {
            formIsValid = false;
            field.style.borderColor = 'red';
            alert(`Please fill out the ${fieldId} field.`);
        } else {
            field.style.borderColor = '';
        }
    });

    if (!formIsValid) {
        event.preventDefault();
    }
});

// Form instruction handling
function showInstruction(instructionId) {
    document.querySelectorAll('.instruction').forEach(instr => {
        instr.style.visibility = 'hidden';
    });
    document.getElementById(instructionId).style.visibility = 'visible';
}

// Event listeners for showing field-specific instructions on focus
document.getElementById('name').addEventListener('focus', function() {
    showInstruction('nameInstruction');
});
document.getElementById('address').addEventListener('focus', function() {
    showInstruction('addressInstruction');
});
document.getElementById('city').addEventListener('focus', function() {
    showInstruction('cityInstruction');
});
document.getElementById('province').addEventListener('focus', function() {
    showInstruction('provinceInstruction');
});
document.getElementById('postalCode').addEventListener('focus', function() {
    showInstruction('postalCodeInstruction');
});
