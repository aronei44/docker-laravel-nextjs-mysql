import axios from 'axios'
axios.defaults.withCredentials = true;


export const Api = async ({
    path = '',
    method = 'GET',
    data = null,
    token = null,
    formData = false
}) => {
    const headers = {
        'Content-Type' : formData === true ? 'multipart/form-data' : 'application/json',
        Accept : formData === true ? 'multipart/form-data' : 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    if(token){
        headers.Authorization = 'Bearer ' + token
    }
    const response = await axios({
        url : process.env.API_HOST + path,
        method,
        data,
        headers,
    }).catch((err) => err.response);
    console.log(response);

    if(response.status === 401){
        // code if unauthenticated
    } else {
        return response
    }
}