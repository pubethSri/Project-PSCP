var delayInMilliseconds = 1000; //1 second
var timmer= setTimeout(function() {
    console.log(input)
}, delayInMilliseconds)
let input = ""

document.addEventListener('keypress', function(e) {
    // console.log(e)
    input += e.key
    window.clearTimeout(timmer);
    timmer= setTimeout(function() {
        console.log(input)
        input = ""
    }, delayInMilliseconds)
    
    
});
