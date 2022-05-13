// react
import React,{useState} from "react";


export default function Item() {
// react Hook For State Handler
  const [news , setnewsData]=useState(null)

// Fetch Function   
  fetch("./item.json").then(
    function(res){
    return res.json()
  }).then(function(data){
    console.log(data);
  // store Data in State Data Variable
    setnewsData(data)
  }).catch(
    function(err){
      console.log(err, ' error')
    }
  )

  return (
    <div className="App">
      {
        // use data State Variable For Get Data Use JavaScript Map Mathod
       news? news.map(
          function(news){
                  return (<div className="card"> 
                  <h4> {news.username}</h4>
                  <h2> {news.firstName}  {news.lastName}</h2>
                  <h3> {news.gender}</h3>
                  <h3> {news.aboutAuthor}</h3>
              </div>)
          }
        ):""
      }
    </div>
  );
}