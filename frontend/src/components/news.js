import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const News = () => {
 const [news, setNews] = useState();
  useEffect(() => {
    const fetchNews = async () => {
      const result = await axios
      .get("http://localhost:8000/api/news/");
      setNews(result.data);
    }
    fetchNews();
  },[]);
  return (
    <ul>
      {news?.map(({id, news, created_at, image}) => (
        <li key={id} className="newsItem">
          <h2 className="createdDate">{created_at}</h2>
          <h1 className="newsCon">{news}</h1>
          <img className="newsImage" src={image}/>
        </li>
      ))}
    </ul>
  )
}
export default News;