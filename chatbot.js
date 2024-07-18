function myFunction(x) {
    x.classList.toggle("change");
  }

function sendMessage() {
    var userInput = document.getElementById("user-input");
    var message = userInput.value.trim();

    if (message !== "") {
      addMessageToLog(message, "user");
      processMessage(message);
    }

    userInput.value = "";
  }

  function processMessage(message) {
    var response;

    if (message.toLowerCase().includes("html")) {
      response =
        "HTML stands for HyperText Markup Language. It is the standard markup language for creating web pages.";
    } else if (message.toLowerCase().includes("css")) {
      response =
        "CSS stands for Cascading Style Sheets. It is used for styling web pages and defining their layout.";
    } else if (message.toLowerCase().includes("javascript")) {
      response =
        "JavaScript is a programming language that adds interactivity and dynamic behavior to web pages.";
    } else if (message.toLowerCase().includes("how are you")) {
      response = "I'm fine thanyou for asking.";
    } else if (message.toLowerCase().includes("tell me something")) {
      response =
        "Only 70 percent of the world's snakes lay eggs. The rest give birth to live young.";
    } else if (message.toLowerCase().includes("do you have a hobb")) {
      response = "No,I don't have any hobby.";
    } else if (message.toLowerCase().includes("do you like people")) {
      response = "yeah,ofcourse I love to talk to people.";
    } else if (message.toLowerCase().includes("crazy")) {
      response = "sorry for the inconvienience.I apology";
    } else if (message.toLowerCase().includes("hi")) {
      response = "Hi,how are you?";
    } else {
      response =
        "I'm sorry, I cannot answer that question at the moment. Please try asking something else.";
    }

    addMessageToLog(response, "bot");
  }

  function addMessageToLog(message, sender) {
    var chatLog = document.getElementById("chat-log");
    var messageElement = document.createElement("p");
    messageElement.classList.add("chat-message");

    if (sender === "user") {
      messageElement.classList.add("user-message");
    } else if (sender === "bot") {
      messageElement.classList.add("bot-message");
    }

    messageElement.textContent = message;

    chatLog.appendChild(messageElement);
    
    chatLog.scrollTop = chatLog.scrollHeight;
  }