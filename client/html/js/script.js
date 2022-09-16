let timeleft = 2000
let waiting = false
let IsShown = false
let audio = new Audio('notif.wav');
audio.volume = 0.5;

$(function(){
    $(".container").removeClass("container-show").addClass("container-hide").fadeOut(300);
    window.addEventListener("message", function(event){
        let v = event.data;
        if (v.message) {
            $(".container").removeClass("container-hide").addClass("container-show").fadeIn(300).html(v.message); 
            HelpTimer(2000)
            if (!IsShown){
                IsShown = true;
                // audio.play();
            }
        }
    })
})

HelpTimer = (restore) => {
    if(restore != null){
        timeleft = 2000
    }

    if(!waiting){
        waiting = true 
        setTimeout(function(){ 
            timeleft -= 1000  

            if(timeleft === 0){
                $(".container").removeClass("container-show").addClass("container-hide").fadeOut(300);
                IsShown = false;
            }

            waiting = false 
            HelpTimer()   
        }, 100) 
    }
}