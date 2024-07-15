document.addEventListener("DOMContentLoaded", function () {
  const chatBox = document.getElementById("chat-box");

  // User's default response
  const userDefaultMessage = document.createElement("div");
  userDefaultMessage.classList.add("message-box", "right", "rajdhani-regular");
  userDefaultMessage.innerHTML = `<p>Hello, How are you?</p>`;
  chatBox.appendChild(userDefaultMessage);

  // Dexter's default response after a short delay
  setTimeout(() => {
    const dexterDefaultMessage = document.createElement("div");
    dexterDefaultMessage.classList.add(
      "message-box",
      "left",
      "rajdhani-regular"
    );
    dexterDefaultMessage.innerHTML = `<p>I'm Dexter, how can I assist you today?</p>`;
    chatBox.appendChild(dexterDefaultMessage);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll after Dexter's response
  }, 1000);
});

document
  .getElementById("message-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const userInput = document.getElementById("user-input");
    const messageText = userInput.value.trim();

    if (messageText === "") return;

    const userMessage = document.createElement("div");
    userMessage.classList.add("message-box", "right", "rajdhani-regular");
    userMessage.innerHTML = `<p>${messageText}</p>`;

    const chatBox = document.getElementById("chat-box");
    chatBox.appendChild(userMessage);
    userInput.value = "";

    // Automatically scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;

    // Simulate Dexter's response
    setTimeout(() => {
      const dexterResponse = document.createElement("div");
      dexterResponse.classList.add("message-box", "left", "rajdhani-regular");
      dexterResponse.innerHTML = `<p>I'm Dexter, how can I assist you today?</p>`;
      chatBox.appendChild(dexterResponse);
      chatBox.scrollTop = chatBox.scrollHeight; // Scroll after Dexter's response
    }, 1000);
  });

// Detect Enter key press within the textarea
document
  .getElementById("user-input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      document
        .getElementById("message-form")
        .dispatchEvent(new Event("submit"));
    }
  });
