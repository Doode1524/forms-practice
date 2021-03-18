import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com', 
    headers: {
        Authorization: 'Client-ID uxIU8QuB35JUJy4svPghCnF7WhKhJIv5r4npr0W0wNk'
    }
})
