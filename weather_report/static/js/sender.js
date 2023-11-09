const letsGo = async () => {
    let province = document.getElementById("province-selected").innerHTML;
    let amphoe_mark = document.getElementById("amphoe-select").innerHTML;
    console.log(province, amphoe_mark)
    const response = await axios.get('/set_everything', {
        params: {
            "province": province,
            "amphoe": amphoe_mark
        }
    })
    return true
}

window.onload = (event) => {
    console.log("page is fully loaded");
};
