import axios from 'axios';

const SendMessage = ([username, password], setIsLoading) => {
  // The URL of your Go backend
  const url = `http://18.142.165.30:8080/add`;
  console.log('SENDING DATA');
  axios
    .post(url, null, {
      params: {
        username,
        password,
      },
    })
    .then((response) => {
      console.log('Data sent:', response.data);
    })
    .catch((error) => {
      console.error('Error sending data:', error);
    })
    .finally(() => {
      // Set loading to false after 1 second as requested
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    });
};

export default SendMessage;
