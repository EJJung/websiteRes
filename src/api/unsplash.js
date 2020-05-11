import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 8SkAq0uwu1o8fJX7MVa4MI7dgJA1_SK2vFhGprzJ1-k' 
  }
});