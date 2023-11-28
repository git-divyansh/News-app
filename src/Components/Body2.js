import React, { useEffect, useState } from 'react'
import Body1 from './Body1';
import Card from "./Card"
import "./Body_2.css"
import Loadingcomp2 from './LoadingComp2';

const Body2 = () => {
    const [news, setNews] = useState({});
    const [category, setCategory] = useState("sports");
    const [isloading, setloading] = useState(false);

    useEffect(()=>{
        

        const changeNews = async () =>{
            setloading(true)
            try{
                const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=ce18670ec0554edfb57264776fc6d905`)
                const result = await response.json();
                // console.log(result);
                setNews(result);
            }
            catch(err){
                console.log(err)
            }
            setloading(false);
        }
        changeNews();
    },[category])



   return (
    <>
    <Body1 
        setCategory={setCategory}
    />
    <div className='Body_2'>
        {
            isloading ? <Loadingcomp2 /> : news.articles ? (news.articles.map((info) => {
                return(
                    info.urlToImage ? (<Card 
                        image = {info.urlToImage}
                        author = {info.author}
                        publishedAt = {info.publishedAt}
                        name = {info.source.name}
                        description = {info.description}
                        url = {info.url}
                    /> ) : <p />
                )
            })) : <Loadingcomp2 />
        }
    </div>
    </>  
  )
}

export default Body2