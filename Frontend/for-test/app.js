var get_input = ""

const reset = () => {
    console.log(get_input)
    get_input = ""
}

var timer = setInterval(() => {
    reset()
}, 2000);
clearInterval(timer)

document.addEventListener('keypress', function(e) {

    // console.log(e);
    get_input += e.key
    document.addEventListener('keydown', function(e) {
        timer = setInterval(() => {
            reset()
        }, 2000);
    });

});
