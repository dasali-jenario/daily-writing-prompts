// calendar.js
const prompts = [
    "Write about your first memory.",
    "Describe a dream you had last night.",
    // More prompts...
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