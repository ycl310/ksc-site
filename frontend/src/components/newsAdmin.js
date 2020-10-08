import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const Admin = () => {
 const [news, setNews] = useState();
 const [news1, setValue1] = useState("");
 const [news2, setValue2] = useState();
 const [news3, setValue3] = useState("");
  useEffect(() => {

    fetchNews();
  },[]);
    const fetchNews = async () => {
      const result = await axios
      .get("/api/news/");
      setNews(result.data);
    }

  const handleChange1 = event => {
    setValue1(event.target.value);
  }

  const handleChange2 = event => {
    setValue2(event.target.value)
  }

  const handleChange3 = event => {
    setValue3(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault();
    



    axios.post("/api/news/", {
      news: news1,
      image: news2
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))

  }


  const handleDelete = event => {
    event.preventDefault();
    console.log(news3)
    axios.delete(`/api/news/${news3}/`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    console.log(news3)
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <label>
            news:
            <input type="text" name="news" onChange={handleChange1} />
          </label>
          <br/>
            <label>
            image:
            <input type="text" name="image" onChange={handleChange2} />
          </label>
          <button type="submit">Add</button>
        </form>
        <form onSubmit={handleDelete}>
          <input type="text" name="delete" onChange={handleChange3} />
          <button type="submit">Delete</button>
        </form>
    <ul>
      {news?.map(({id, news, created_at, image}) => (
        <li key={id} className="newsItem">
          <h2 className="createdDate">{created_at}</h2>
          <h1 className="newsCon">{news}</h1>
          <h1>{id}</h1>
        </li>
      ))}
    </ul>
    </div>
  )
}
export default Admin;