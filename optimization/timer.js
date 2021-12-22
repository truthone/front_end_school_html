var SetTime = 300; // 최초 설정 시간(기본 : 초)

var time = document.querySelector(".clock");
let startBtn = document.querySelector(".start");
let settingBtn = document.querySelector(".setTime");

time.innerHTML = SetTime; 

function msg_time() { // 1초씩 카운트      
    m = Math.floor(SetTime / 60) + "분 " + (SetTime % 60) + "초"; // 남은 시간 계산         
    //var msg = "현재 남은 시간은 <font color='red'>" + m + "</font> 입니다.";
    time.innerHTML = m; // div 영역에 보여줌                  
    SetTime--; // 1초씩 감소
    if (SetTime < 0) { // 시간이 종료 되었으면..        
        clearInterval(tid); // 타이머 해제
        alert("종료");

    }
}

function TimerStart() {
    tid = setInterval('msg_time()', 1000)
};

startBtn.addEventListener('click',TimerStart);