import axios from 'axios';

const SendMessage = ([email, passwrod], setIsLoading) => {
  axios
    .post('http://3.1.223.65:3000/login', {
      username: email,
      password: passwrod,
    })
    .then((response) => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    })
    .catch((error) => {
      console.error('There was an error!', error); // Handle error
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    });
};

export default SendMessage;
