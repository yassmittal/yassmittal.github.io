const JohnSelectorBtn = document.querySelector("#john-selector");
const janeSelectorBtn = document.querySelector("#Jane-selector");
const chatHeader = document.querySelector(".chat-header");
const chatMessages = document.querySelector(".chat-messages");
const chatInputform = document.querySelector(".chat-input-form");
const chatInput = document.querySelector(".chat-input");
const clearChatBtn = document.querySelector(".clear-chat-button");

const messages = JSON.parse(localStorage.getItem("Message")) || [];
console.log(messages);

const createChatMessageElement = (message) => {
  return `
  <div class="message ${message.sender === "John" ? "blue-bg" : "gray-bg"}">
    <div className="message-sender">${message.sender}</div>
    <div className="message-text">${message.text}</div>
    <div className="message-timestamp">${message.timestamp}</div>
  </div>
  `;
};

window.onload = () => {
  messages.forEach((message) => {
    chatMessages.innerHTML += createChatMessageElement(message);
  });

  chatMessages.scrollTop = chatMessages.scrollHeight;
};

const message1 = {
  sender: "John",
  text: "hi how are you i am John",
  timestamp: "08:32 PM",
};

const message2 = {
  sender: "Jane",
  text: "hi how are you i am Jane",
  timestamp: "08:32 PM",
};

let messageSender = "John";

const updateMessageSender = (name) => {
  messageSender = name;
  chatHeader.innerText = `${messageSender} chatting...`;
  chatInput.placeholder = `Type here ${messageSender}`;

  if (name === "John") {
    JohnSelectorBtn.classList.add("active-person");
    janeSelectorBtn.classList.remove("active-person");
  } else {
    janeSelectorBtn.classList.add("active-person");
    JohnSelectorBtn.classList.remove("active-person");
  }

  chatInput.focus();
  chatInput.value = "";
};

4;

JohnSelectorBtn.addEventListener("click", () => {
  updateMessageSender("John");
});

janeSelectorBtn.addEventListener("click", () => {
  updateMessageSender("Jane");
});

const sendMessage = (e) => {
  // e.preventDefault();

  const timestamp = new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });

  const message = {
    sender: messageSender,
    text: chatInput.value,
    timestamp,
  };

  messages.push(message);

  localStorage.setItem("Message", JSON.stringify(messages));
  chatMessages.innerHTML += createChatMessageElement(message);
  chatInputform.reset();

  chatMessages.scrollTop = chatMessages.scrollHeight;
  console.log(messages);
};

chatInputform.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMessage();
});

clearChatBtn.addEventListener("click", () => {
  localStorage.clear();

  chatMessages.innerHTML = "";
});
