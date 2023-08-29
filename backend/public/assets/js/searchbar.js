document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the user's search query from the input field
    const searchQuery = document.getElementById("search-input").value;

    // Site domain where you want to conduct the search
    const siteDomain = "http://website.mzalendonet.co.ke/";

    // Construct the site-specific search URL
    const siteSearchURL = siteDomain + "search?q=" + encodeURIComponent(searchQuery);

    // Redirect the user to the site-specific search page
    window.location.href = siteSearchURL;
});
