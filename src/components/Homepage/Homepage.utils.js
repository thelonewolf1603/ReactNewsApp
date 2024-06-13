import { apikey } from "./Constants"
export const fetchNews = async (topic) =>{
    const newsApiUri = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apikey}&pageSize=50`
    try{
        const response = await fetch(newsApiUri)
        return response
    }
    catch(err)
    {
        console.log('error occurred while fetching')
    }
}