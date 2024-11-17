// Toggle between light and dark themes
const themeToggle = document.getElementById('themeToggle');
const body = document.getElementById('theme');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('bg-gray-900');
  body.classList.toggle('text-white');
  body.classList.toggle('bg-gray-100');
  body.classList.toggle('text-gray-900');
});

// Display a dynamic greeting
const greetButton = document.getElementById('greetButton');
const greetingMessage = document.getElementById('greetingMessage');

greetButton.addEventListener('click', () => {
  const greetings = ['Hello, world!', 'Hi there!', 'Welcome!', 'Good to see you!', 'Greetings!'];
  const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
  greetingMessage.textContent = randomGreeting;
});
