    // Get a reference to the button by its ID
    const cartButton = document.getElementById('cartButton');

    // Add a click event listener to the button
    cartButton.addEventListener('click', function() {
        // Redirect the user to pricing.html
        window.location.href = 'pricing.html';
    });