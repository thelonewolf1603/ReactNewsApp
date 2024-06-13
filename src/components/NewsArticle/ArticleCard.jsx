import  * as React from 'react';
import './ArticleCard.style.css'

const ArticleCard = (props) => {
const {res} = props
// React.useEffect(()=>{
//     console.log(res)
// },[res])
return (
<div className='articleCard'>
    <img className='articleImage' src = {res.urlToImage} alt={'altimage'}/>
    <h2 className='articleChild articleTitle'>{res.title}</h2>
    <p className='articleChild articleContent'> {res.content}</p>
    <p className='articleChild articleAuthor'>{res.author}</p>
    <a href={res.url} className='articleChild articleLink'>Go to article</a>
</div>
)

}

export default ArticleCard;