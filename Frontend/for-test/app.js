var delayInMilliseconds = 1000; //1 second
var Timmer= setTimeout(function() {
    console.log(input)
}, delayInMilliseconds)
let input = ""

document.addEventListener('keypress', function(e) {
    // console.log(e)
    input += e.key
    window.clearTimeout(Timmer);
    Timmer= setTimeout(function() {
        console.log(input)
        input = ""
    }, delayInMilliseconds)
    
    
});
