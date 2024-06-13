import * as React from 'react'
import './Homepage.style.css'
import { fetchNews } from './Homepage.utils.js'
import ArticleCard from '../NewsArticle/ArticleCard'
import {Input} from '@mui/material'
 const Homepage = (props) =>{
    const [newsList, setnews] = React.useState([])
    const [searchText, setText] = React.useState('')
    const getNews = async () =>{
        if(searchText === '') return
        let response = await fetchNews(searchText)
       response.json().then((data)=>{
            let items = []
            data.articles.forEach((item)=>{
                items.push(item);
            })
            setnews([...items])
            console.log(items)
        }).catch((err)=>{
            console.error('Something when wrong' + err)
        })
    }

    return ( <div className='root'>
        <div className = 'navBar'>
            <h1 className='brandName'>NewsLand</h1>
            <Input onChange={(e)=>{setText(e.target.value)}} className='searchInput' type='text'/>
            <button className='searchButton' onClick={getNews}>Get Latest News</button>
        </div>
        <div className='articleList'>
        {newsList.map((item, index)=>{
                return (<div key={index}>
                        <ArticleCard res = {item} />
                    </div>)
            })}
        </div>
        
    </div>)
}

export default Homepage;