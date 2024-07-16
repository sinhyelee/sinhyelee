// 목표 날짜 설정 (예: 2024년 12월 31일)
const targetDate = new Date("2024-07-10T23:59:59").getTime();

function updateTimer() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (difference < 0) {
        clearInterval(timerInterval);
        document.getElementById("timer").textContent = "카운트다운 종료!";
    }
}

// 1초마다 타이머 업데이트
const timerInterval = setInterval(updateTimer, 1000);

// 초기 타이머 업데이트
updateTimer();
