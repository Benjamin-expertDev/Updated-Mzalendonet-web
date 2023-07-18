    // Get a reference to the button by its ID
    const cartButton = document.getElementById('cartButton');

    // Add a click event listener to the button
    cartButton.addEventListener('click', function() {
        // Redirect the user to pricing.html
        window.location.href = 'pricing.html';
    });
    // Get a reference to the "Buy" link and the cart number span
    const buyLink = document.getElementById('buyLink');
    const cartNumberSpan = document.querySelector('.index-1-cart-number-popup span');

    // Initialize the cart number counter
    let cartNumber = 0;

    // Function to increment the cart number and update the span
    function incrementCartNumber() {
        cartNumber++;
        cartNumberSpan.textContent = cartNumber.toString();
    }

    // Add a click event listener to the "Buy" link
    buyLink.addEventListener('click', function(event) {
        // Prevent the default link behavior (i.e., following the link)
        event.preventDefault();
        // Increment the cart number
        incrementCartNumber();
        // Redirect the user to the contact.html page
        window.location.href = 'contact.html';
    });
    