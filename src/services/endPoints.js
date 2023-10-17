const API_KEY='1IwFCSS8lCT7sMLrnNYfxlcLDocZjPoYTCRcxx7b';
const API_URL='https://api.nasa.gov/planetary/apod';

export default async ( urlParams ) => {
    try {
        const response = await fetch(`${API_URL}?api_key=${API_KEY}${
         
            }`
        );
        const data = await response.json();
        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject(error)
    }
}

