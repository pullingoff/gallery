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
        
        return data
    } catch (e) {
        console.log(e)
    }
     
}

export const getSearchImages = async(word: string) => {
    
    try {

        const {data} = await axios.get('https://api.unsplash.com/search/photos', {
            headers: {
                'Authorization': `Client-ID ${ACCESS_KEY}`,
            },      
            params: {
                'query': word
            }
        })
        
        return data
    } catch (e) {
        console.log(e)
    }
     
}