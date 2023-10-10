const getRequest = async () => {
    var prov = document.getElementById("province").value;
    var ampho = document.getElementById("amphoe").value;
    const response = await axios.get('/request', {
        params: {
            "province": prov,
            "amphoe": ampho
        }
    })
    var new_prov = response.data.input_prov
    var new_amph = response.data.input_amphoe
    var new_name = new_prov + " " + new_amph 
    document.getElementById("change").innerHTML=new_name
    document.getElementById("display").innerHTML=response.data.dry
    console.log(new_name)
}