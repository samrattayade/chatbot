// Get input once
const userInput = document.getElementById("userInput");

// Send message on Enter key press
userInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // prevent form submit
    sendMessage();
  }
});

function sendMessage() {
  const message = userInput.value.trim();

  if (message === "") return;

  addMessage(message, "user");
  userInput.value = "";

  setTimeout(() => {
    botReply(message);
  }, 500);
}

function addMessage(text, sender) {
  const chatBox = document.getElementById("chatBox");
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", sender);
  msgDiv.innerText = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(userMessage) {
  let reply = "I'm not sure about that. Try asking something about Artificial Intelligence 🤖";

  const msg = userMessage.toLowerCase();

  // ===== AI FAQ KNOWLEDGE =====
  if (msg.includes("what is ai") || msg.includes("artificial intelligence")) {
    reply = "Artificial Intelligence (AI) is the ability of machines to simulate human intelligence like learning, reasoning, and problem-solving.";
  } 
  else if (msg.includes("machine learning")) {
    reply = "Machine Learning is a subset of AI where systems learn from data and improve automatically without explicit programming.";
  } 
  else if (msg.includes("deep learning")) {
    reply = "Deep Learning is a part of Machine Learning that uses neural networks with multiple layers, inspired by the human brain.";
  } 
  else if (msg.includes("difference between ai and ml")) {
    reply = "AI is the broader concept of intelligent machines, while ML is a method used to achieve AI by learning from data.";
  } 
  else if (msg.includes("nlp")) {
    reply = "NLP (Natural Language Processing) enables machines to understand, interpret, and respond to human language.";
  } 
  else if (msg.includes("computer vision")) {
    reply = "Computer Vision allows machines to interpret and understand images and videos, like face recognition.";
  } 
  else if (msg.includes("uses of ai")) {
    reply = "AI is used in healthcare, finance, self-driving cars, chatbots, recommendation systems, and cybersecurity.";
  } 
  else if (msg.includes("ai future")) {
    reply = "The future of AI includes smarter automation, personalized healthcare, advanced robotics, and ethical AI development.";
  } 
  else if (msg.includes("chatgpt")) {
    reply = "ChatGPT is a large language model developed by OpenAI that understands and generates human-like text.";
  } 
  else if (msg.includes("hello") || msg.includes("hi")) {
    reply = "Hello! Ask me anything about Artificial Intelligence 🤖";
  } 
  else if (msg.includes("samrat") || msg.includes("samrat tayade")) {
    reply = "My creator is Samrat Tayade. You can search on Google or social media.";
  } 
  else if (msg.includes("bye")) {
    reply = "Goodbye! Keep learning AI 🚀";
  }

  addMessage(reply, "bot");
}
