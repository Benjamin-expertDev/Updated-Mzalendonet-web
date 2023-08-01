
document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the user's search query from the input field
    const searchQuery = document.getElementById("search-input").value;

   
    const siteDomain = "http://www.mzalendoafrinet.co.ke/public/";

    // Construct the Google search URL with the site: operator
    const googleSearchURL = "https://www.google.com/search?q=" + encodeURIComponent("site:" + siteDomain + " " + searchQuery);

    // Redirect the user to Google with the search query
    window.location.href = googleSearchURL;
});
