let timer;
        let timeLeft = 0;

        function startTimer() {
            const timeInput = document.getElementById('time-input').value;
            if (!timeInput || isNaN(timeInput) || timeInput <= 0) {
                alert('Please enter a valid time in minutes.');
                return;
            }

            timeLeft = parseInt(timeInput) * 60;
            updateTimerDisplay();

            timer = setInterval(() => {
                if (timeLeft > 0) {
                    timeLeft--;
                    updateTimerDisplay();
                } else {
                    clearInterval(timer);
                    alert('Timer has ended!');
                }
            }, 1000);
        }

        function updateTimerDisplay() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            const timerDisplay = document.getElementById('timer');
            timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }