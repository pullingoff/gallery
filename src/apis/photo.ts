import axios from 'axios';

const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_KEY

export const getImages = async() => {
    
    try {

        const {data} = await axios.get('https://api.unsplash.com/photos', {
            headers: {
                'Authorization': `Client-ID ${ACCESS_KEY}`,
                // 'Content-Type': 'application/json'
            },      
            params: {
            }
        })
        console.log(data)
        return data
    } catch (e) {
        console.log(e)
    }
     
}