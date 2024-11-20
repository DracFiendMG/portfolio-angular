document.getElementById("changeButton").addEventListener("click", function() {
    var content = document.querySelector(".content");
    var title = document.querySelector(".title");

    // Add fade-out class to start transition on the text
    content.classList.add("fade-out");

    // Wait for the transition to finish before switching the image and text
    setTimeout(function() {

        // Change the text content
        title.textContent = "New Project Title"; // New title text
        content.querySelector("p:last-child").textContent = "Updated project description."; // New description

        // After the text has changed, fade it in again
        content.classList.remove("fade-out");
    }, 500); // Match this timeout with the text fade-out transition duration (0.5s)
});
