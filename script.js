
//     // ** Image Gallery Logic **

    // Arrays for images, descriptions, and URLs
    const images = [
        { src: 'images/image1.jpg', alt: 'Beautiful Sand Dunes' },
        { src: 'images/image2.jpg', alt: 'Northern Lights' },
        { src: 'images/image3.jpg', alt: 'Rockies Mountain View' },
        { src: 'images/image4.jpg', alt: 'Malaga Beaches in Spain' }
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

    if (tableBody) {
        // Create table rows dynamically
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

            // Event to open a window with a timer when the description is clicked
            cell.addEventListener('click', function() {
                openWebsiteWithTimer(imageURLs[i]);
            });
        }
    }

    // Define function to open a new window and give the user 5 seconds to click a link
    function openWebsiteWithTimer(url) {
        const newWindow = window.open('', '_blank', 'width=800,height=600'); // Open a blank new window

        if (newWindow) {
            // Create a message and a clickable link inside the new window
            newWindow.document.write(`
                <h2>You have 5 seconds to click the below destination link!</h2>
                <p>Click <a href="${url}" target="_blank">here</a> to visit the destination.</p>
                <p>If you don't click the link, this window will close automatically.</p>
            `);

            // Set a timer to close the new window after 5 seconds
            setTimeout(() => {
                if (!newWindow.closed) {
                    newWindow.close(); // Close the window after 5 seconds if it hasn't been closed
                }
            }, 5000);
        } else {
            alert('Pop-up blocked! Please allow pop-ups for this website to see more information.');
        }
    }


//---------------------** Form Section ---------------------------------------------**

    // Confirm approval before submitting or resetting the form.
    // Using built-in .preventDefault() to stop form default submission/reset if user cancels the action.

    const submitBtn = document.getElementById('submitBtn');
    const resetBtn = document.getElementById('resetBtn');

    document.getElementById('submitBtn').addEventListener('click', function(event) {
    // If the user doesn't confirm, prevent the form from submitting
    if (!confirm('Are you sure you want to submit this form?')) {
        event.preventDefault();
    }
  });

 document.getElementById('resetBtn').addEventListener('click', function(event) {
    // If the user doesn't confirm, prevent the form from resetting
    if (!confirm('Are you sure you want to reset this form?')) {
        event.preventDefault();
    }
     });



 //-------------------Form Validation Logic---------------------------------//

   
        const travelForm = document.getElementById('travelForm');
    
       
            travelForm.addEventListener('submit', function(event) {
                let formIsValid = true;
    
                // List of fields to validate
                const fieldsToValidate = ['name', 'address', 'city', 'province', 'postalCode'];
    
                // Check if fields are empty
                fieldsToValidate.forEach(fieldId => {
                    const field = document.getElementById(fieldId);
                    if (field.value.trim() === '') {
                        formIsValid = false;
                        field.style.borderColor = 'red';
                        showErrorMessage(fieldId, `Please fill out the ${fieldId} field.`);
                    } else {
                        field.style.borderColor = '';
                        hideErrorMessage(fieldId);
                    }
                });
    
                // Prevent form submission if validation fails
                if (!formIsValid) {
                    event.preventDefault();
                }
            });
        
    
        function showErrorMessage(fieldId, message) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.style.color = 'red';
            errorDiv.innerText = message;
    
            const field = document.getElementById(fieldId);
           
            hideErrorMessage(fieldId);
            field.parentElement.appendChild(errorDiv);
        }
    
        function hideErrorMessage(fieldId) {
            const field = document.getElementById(fieldId);
            const errorDiv = field.parentElement.querySelector('.error-message');
            if (errorDiv) {
                errorDiv.remove();
            }
        }
 
 // -------------------------End of Form Validation-----------------------------------------------
//-------------------------------------------------------------------------------------------------
        // Form instruction handling
        function showInstruction(instructionId) {
            document.querySelectorAll('.instruction').forEach(instr => {
                instr.style.visibility = 'hidden';
            });
            document.getElementById(instructionId).style.visibility = 'visible';
        }

        // Event listeners for showing field-specific instructions on focus
        ['name', 'address', 'city', 'province', 'postalCode'].forEach(fieldId => {
            document.getElementById(fieldId).addEventListener('focus', function() {
                showInstruction(`${fieldId}Instruction`);
            });
        });
    

