let timer = setInterval(func, 10);
let time = 10000;
function func(){
    time = time.toString();
    document.querySelector("#msTens").innerHTML = time[4];
    document.querySelector("#msHundreds").innerHTML = time[3];
    document.querySelector("#secondOnes").innerHTML = time[2];
    document.querySelector("#secondTens").innerHTML = time[1];
    time++;
    if(time > 11000){
        clearInterval(timer);
        let colorIt = document.getElementsByClassName("digit");
        for(let i=0; i<colorIt.length; i++){
            console.log(colorIt[i].style.color = "red");
        }
    }
}

