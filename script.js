let workouts = [
    "20 Push-ups",
    "30 Jumping Jacks",
    "15 Squats",
    "1-minute Plank",
    // Add more workouts as needed
];

function drawCard() {
    // Hide draw button and show animation
    document.querySelector('.draw-btn').style.display = 'none';
    document.querySelector('.animation-container').style.display = 'block';

    // Simulate a delay for animation (for example 2 seconds) then display the workout and slot machine
    setTimeout(() => {
        document.querySelector('.animation-container').style.display = 'none';
        document.querySelector('.card-container').style.display = 'block';
        document.querySelector('.slot-machine-container').style.display = 'block';
        
        let randomWorkout = workouts[Math.floor(Math.random() * workouts.length)];
        document.querySelector('.workout-text').textContent = randomWorkout;
    }, 2000);
}

document.querySelector('.spin-btn').addEventListener('click', function() {
    const slotsContainers = document.querySelectorAll('.numbers-container');

    // Start first slot spinning immediately
    slotsContainers[0].classList.add('spinning');
    
    // Start second slot spinning after half a second
    setTimeout(() => {
        slotsContainers[1].classList.add('spinning');
    }, 500);
    
    // Start third slot spinning after 1.5 seconds (1 second after the first one started)
    setTimeout(() => {
        slotsContainers[2].classList.add('spinning');
    }, 1500);
    
    // Remove the spinning class after the animation completes.
    setTimeout(() => {
        slotsContainers.forEach(container => {
            container.classList.remove('spinning');
        });
        checkResults();
    }, 4500);
});

function setJackpotNumber(container) {
    const translateYValue = '-90%'; // this corresponds to the number 9
    container.style.transform = `translateY(${translateYValue})`;
}

document.querySelector('.spin-btn').addEventListener('click', function() {
    const slotsContainers = document.querySelectorAll('.numbers-container');

    // Start all slots spinning almost simultaneously
    slotsContainers[0].classList.add('spinning');
    setTimeout(() => {
        slotsContainers[1].classList.add('spinning');
    }, 100);
    
    setTimeout(() => {
        slotsContainers[2].classList.add('spinning');
    }, 200);

    // After 3 seconds, stop the spinning, show the final number 9 and display the jackpot message
    setTimeout(() => {
        slotsContainers.forEach(container => {
            container.classList.remove('spinning');
            setJackpotNumber(container);
        });

        const jackpotMessageElement = document.querySelector('.jackpot-message');
        jackpotMessageElement.textContent = "JACKPOT! YOU HAVE THE OPTION TO TAKE THE DAY OFF";
    }, 3000);
});

