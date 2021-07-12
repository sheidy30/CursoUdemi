console.log('script loaled');

var countDowElement = document.getElementById('countdown');

var initialCountDown = countDowElement.innerHTML;

setInterval(function(){
    initialCountDown = initialCountDown > 0 ? initialCountDown -1 : 0;
    countDowElement.innerHTML = initialCountDown;

}, 1000);

// codigo de eventos

var btnclick = document.getElementById('btn-click');

btnclick.onclick =function(){
    alert("button clicked");
}

function onBtnClick() {
    btnclick.style.background = "lightcoral"
}

btnclick.addEventListener('click', onBtnClick)

//eventos keyboard
document.body.addEventListener('keydown', function(e){
    var keyCode = e.keyCode;
    if(keyCode === 16){
        console.log('keyup for =>' + keyCode);
    }
})
