const getRequest = async () => {
    const response = await axios.get('/request', {
    params: {
    "test": "this is a test"
    }
    })
console.log(response.data)
    }
getRequest();