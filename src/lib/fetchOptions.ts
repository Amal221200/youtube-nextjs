
export default function fetchOption(q: string) {

   return {
        method: 'GET',
        url: `https://youtube-v31.p.rapidapi.com/search`,
        params: {
            q,
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '10',
            order: 'date'
        },
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.RAPID_API_HOST
        }
    };
}