// calendar.js
const prompts = [
    "Write about your first memory.",
    "Describe a dream you had last night.",
    "Write a letter to your future self.",
    "What is your favorite childhood memory?",
    "Describe a place you've always wanted to visit.",
    "Write about a time when you felt proud of yourself.",
    "What is your favorite book and why?",
    "Describe a person who has had a significant impact on your life.",
    "Write about a difficult decision you had to make.",
    "What is your favorite quote and why?",
    "Describe a time when you overcame a fear.",
    "Write about a lesson you learned from a mistake.",
    "What is your favorite hobby and why?",
    "Describe a memorable travel experience.",
    "Write about a time when you felt inspired.",
    "What is your favorite movie and why?",
    "Describe a challenge you faced and how you overcame it.",
    "Write about a person you admire and why.",
    "What is your favorite song and why?",
    "Describe a time when you felt grateful.",
    "Write about a goal you want to achieve in the future.",
    "What is your favorite food and why?",
    "Describe a moment of personal growth.",
    "Write about a fictional character you relate to.",
    "What is your favorite quote and why?",
    "Describe a time when you felt motivated.",
    "Write about a lesson you learned from a failure.",
    "What is your favorite hobby and why?",
    "Describe a memorable event from your childhood.",
    "Write about a time when you felt happy.",
    "What is your favorite book and why?",
    "Describe a dream you had last night.",
    "Describe a person who inspires you and why."
];


const container = document.querySelector('#doors-container');
const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
const daysInMonth = new Date(year, month + 1, 0).getDate();
const currentDay = today.getDate();
const modal = document.getElementById('prompt-modal');
const promptTitle = document.getElementById('prompt-title');
const promptAnswer = document.getElementById('prompt-answer');

door.addEventListener('click', function() {
    if (day <= currentDay) {
        promptTitle.textContent = prompts[day - 1];
        modal.style.display = 'block';
    }
});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

for (let i = 1; i <= daysInMonth; i++) {
    const door = document.createElement('div');
    door.id = i;
    door.className = 'door';
    door.textContent = i;

    if (i < currentDay) {
        door.classList.add('past');
    } else if (i === currentDay) {
        door.classList.add('present');
    } else {
        door.classList.add('future');
    }

    container.appendChild(door);

    door.addEventListener('click', () => {
        if (door.classList.contains('present')) {
            door.textContent = prompts[i - 1];
        }
    });
}