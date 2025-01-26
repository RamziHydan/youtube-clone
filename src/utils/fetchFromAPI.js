const axios = require('axios');

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search';

const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    // relatedToVideoId: '7ghhRHRP6t4',
    // part: 'id,snippet',
    // type: 'video',
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export const fetchFromAPI = async ( url ) => {
    const { data } =  await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}
