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

const doors = document.querySelectorAll('.door');
doors.forEach(door => {
    door.addEventListener('click', () => {
        const day = parseInt(door.id);
        const today = new Date().getDate();
        if (day <= today) {
            alert(prompts[day - 1]);
        }
    });
});