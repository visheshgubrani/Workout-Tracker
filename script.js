const form = document.getElementById('form');
const input = document.getElementById('input');
const workoutsList = document.getElementById('workouts');

form.addEventListener('submit', (e) => {
    
    e.preventDefault();
    // console.log(e)
    addWorkout();
});

function addWorkout(workout) {
    let workoutText = input.value;
    if (workout) {
        workoutText = workout.text;
    }
    // console.log(workoutText)
    if (workoutText) {
        const workoutEl = document.createElement('li');
        if (workout && workout.completed) {
            workoutEl.classList.add('completed');
        };

        workoutEl.innerText = workoutText;

        workoutEl.addEventListener('click', () => {
            workoutEl.classList.toggle('completed')
        })
        workoutEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            workoutEl.remove()
            
        })

        workoutsList.appendChild(workoutEl)
        input.value = '';

    }
}