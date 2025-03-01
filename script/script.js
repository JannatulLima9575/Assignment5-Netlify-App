document.getElementById('another_page').addEventListener('click', function () {
    window.location.href = "task.html"
})


// current-date  part

const currentDate = new Date();
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dayName = days[currentDate.getDay()];
const monthName = months[currentDate.getMonth()];
const date = currentDate.getDate();
const year = currentDate.getFullYear();
document.getElementById('current-date').innerText = `${dayName}, ${monthName} ${date}, ${year}
`;


// theme part change dynamically


const changeButton = document.getElementById('change-bg');
changeButton.addEventListener('click', function () {
    const body = document.body;
    const colors = ['#f0f8ff', '#ffebcd', '#8a2be2', '#a52a2a', '#5f9ea0', '#d2691e', '#ff7f50'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor
})



// disable button and complete task



const completedButtons = document.querySelectorAll('.btn-completed');
const taskCountElement = document.getElementById('taskA');
const navbarCountElement = document.querySelector('#count');
const activityLogContainer = document.getElementById('activityLogContainer');
const clearHistoryButton = document.querySelector('.bg-white.rounded .btn-primary');


completedButtons.forEach(button => {
    button.addEventListener('click', function () {

        const taskName = button.parentElement.parentElement.querySelector('h2').textContent;
        const confirmCompletion = confirm('Board updated Successfully');





        if (confirmCompletion) {

            button.disabled = true;



            let taskCount = parseInt(taskCountElement.textContent);
            taskCountElement.textContent = taskCount - 1;


            let navbarCount = parseInt(navbarCountElement.textContent.trim());
            navbarCountElement.textContent = ` ${navbarCount + 1} `;


            const now = new Date();
            const timeString = now.toLocaleTimeString();
            const logEntry = document.createElement('p');
            logEntry.textContent = `You have completed the task "${taskName}" at ${timeString}`;

            logEntry.style.backgroundColor = "#F4F7FF";
            logEntry.style.padding = "10px";
            logEntry.style.borderRadius = "8px";
            logEntry.style.margin = "0 10px";
            logEntry.style.fontSize = "16px";
            logEntry.style.marginBottom = "28px";


            activityLogContainer.appendChild(logEntry);


            // last challenge part
            const remainingTasks = document.querySelectorAll('.btn-completed:not([disabled])');
            if (remainingTasks.length === 0) {
                setTimeout(() => {
                    alert("congrates !!! You Have completed all the current tasks");
                }, 100);
            }
        }
    });
});


clearHistoryButton.addEventListener('click', function () {

    activityLogContainer.innerHTML = '';
});