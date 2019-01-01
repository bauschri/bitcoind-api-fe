import axios            from 'axios'

const client = axios.create({
  headers: {
    'Accept': 'application/json',
  }
});

const request = async function (options) {
  const onSuccess = function(response) {
    // console.debug('Request Successful!', response);
    // console.log(response.data)
    return response.data;
  }

  const onError = function(error) {
    console.error('Request Failed:', error.config);
    console.error(error);

    if (error.response) {
      console.error('Status:',  error.response.status);
      console.error('Data:',    error.response.data);
      console.error('Headers:', error.response.headers);
    } else {
      console.error('Error Message:', error.message);
    }
    return Promise.reject(error.response || error.message);
  }

  return client(options)
    .then(onSuccess).catch(onError)
}

export default request;
