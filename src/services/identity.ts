import axios from 'axios';

const identity = axios.create({
  baseURL: 'http://localhost:3383/api',
});

export default identity;
