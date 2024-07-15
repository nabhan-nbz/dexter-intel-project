document.addEventListener("DOMContentLoaded", function () {
    // Code to execute when the DOM is fully loaded
    
    // Example: Initialize some elements or functionality
    console.log("DOM fully loaded and parsed");
});

// Example: Function to handle form submission
document.getElementById("message-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Example: Fetch user input from form
    const userInput = document.getElementById("user-input").value.trim();
    
    // Example: Perform actions based on user input
    if (userInput !== "") {
        // Process user input (e.g., send to server, update UI)
        console.log("User input:", userInput);
        
        // Clear input field
        document.getElementById("user-input").value = "";
        
        // Simulate chat response (replace with actual functionality)
        simulateChatResponse(userInput);
    }
});

// Example: Function to simulate chat response
function simulateChatResponse(userInput) {
    const chatBox = document.getElementById("chat-box");

    // Display user message
    const userMessage = document.createElement("div");
    userMessage.classList.add("message-box", "right", "rajdhani-regular");
    userMessage.innerHTML = `<p>${userInput}</p>`;
    chatBox.appendChild(userMessage);

    // Example: Simulate Dexter's response after a delay
    setTimeout(() => {
        const dexterResponse = document.createElement("div");
        dexterResponse.classList.add("message-box", "left", "rajdhani-regular");
        dexterResponse.innerHTML = `<p>I'm Dexter, how can I assist you today?</p>`;
        chatBox.appendChild(dexterResponse);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll after response
    }, 1000); // Delay in milliseconds
}

// Example: Additional event listeners or functions can be added as needed
