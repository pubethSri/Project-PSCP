const getRequest = async () => {
    var text = document.getElementById("name").value;
    const response = await axios.get('/request', {
        params: {
            "sent_data": text
        }
    })
    var new_name = response.data.input
    document.getElementById("change").innerHTML=new_name
    console.log(new_name)
}