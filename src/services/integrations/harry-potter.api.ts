import axios from 'axios';

const harryPotterApi = axios.create({
  baseURL: process.env.HARRY_POTTER_API_URL,
});

export default harryPotterApi;
