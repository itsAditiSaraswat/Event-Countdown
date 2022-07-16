// initially 
document.getElementById("section2").style="display: none";


// Event Name 
var EName;
document.getElementById("eventName").addEventListener("change",function() {
    
    EName = this.value;
});


function run()
{
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minsEl = document.getElementById('mins');
    const secondsEl = document.getElementById('seconds');

    // const newYears = "1 Jan 2023";

    function countdown()
    {
        const newEventDate = new Date(input);
        const currentDate = new Date();

        const totalSeconds = (newEventDate - currentDate) / 1000;

        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds % 60);


        daysEl.innerHTML = formatTime(days);
        hoursEl.innerHTML = formatTime(hours);
        minsEl.innerHTML = formatTime(mins);
        secondsEl.innerHTML = formatTime(seconds);
    }

    function formatTime(time)
    {
        return time < 10 ? (`0${time}`) : time;
    }
    // initial call 
    countdown();

    setInterval(countdown, 1000);
}

// date display and background 
var input;
document.getElementById("dateInput").addEventListener("change",function() {

    input = this.value;
    var dateEntered = new Date(input);
    var currentDate = new Date();
    console.log(input);
    console.log(dateEntered);

    if(dateEntered.getTime()<currentDate.getTime())
        alert("Date must be in future");
    else
        run();

    if(dateEntered.getMonth()==0) //January
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1477601263568-180e2c6d046e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHNub3d8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60);"

    else if(dateEntered.getMonth()==1) //February
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1459695452562-46cc57bef5f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80);"

    else if(dateEntered.getMonth()==2) //March
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1615980251529-f31d82558bf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80);"

    else if(dateEntered.getMonth()==3) //April
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1524467912545-206aacc08231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80);"

    else if(dateEntered.getMonth()==4) //May
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1588453647769-c977f58e9db8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWF5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60);"

    else if(dateEntered.getMonth()==5) //June
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1532304854-4248635f2cb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGp1bmV8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60);"

    else if(dateEntered.getMonth()==6) //July
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN1bW1lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60);"

    else if(dateEntered.getMonth()==7) //August
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1566914610647-0f8ea0ae2a47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXVndXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60);"

    else if(dateEntered.getMonth()==8) //September
        document.body.style.backgroundImage="url('https://images.unsplash.com/reserve/HgZuGu3gSD6db21T3lxm_San%20Zenone.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60);"

    else if(dateEntered.getMonth()==9) //October
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2N0b2JlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60);"

    else if(dateEntered.getMonth()==10) //November
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60);"

    else if(dateEntered.getMonth()==11) //December
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1603314333545-35ef775aeb6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG5vdmVtYmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60);"

    });

// on button click 
document.getElementById("start").addEventListener("click", function(){
    document.getElementById("section1").style="display: none";
    document.getElementById("section2").style="display: block";
    document.getElementById("EName-heading").innerText= EName;
    document.getElementById("EName-heading").style="text-align:center"; //do css

});