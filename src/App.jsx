import { useState } from 'react'
import { useEffect } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const date =  new Date ;
const hour = date.getHours()
let time;
function greeting(){
    
    if (hour >= 4 && hour < 12 ){
        time = "morning"
    }
    else  if ( hour >= 12 && hour < 19 ){
        time = "afternoon"
    } else if (hour >= 19 && hour < 21){
        time = "evening"
    } else {
        time = "night"
    }
    
    return `good ${time}`
}

  //api call
  const link = "https://api.quotable.io/random"
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState({});

  const getQuote = ()=>{
    fetch(link)
        .then(res => res.json())
        .then(
          (result)=>{
            setIsLoaded(true);
            setItem(result)
          },
          (error)=>{
            setIsLoaded(true);
            setError(error)
          }
        )
  }
  const newQuote = ()=>{getQuote();}
    useEffect(
      ()=>{
        getQuote();
      }
    ,[])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container">
  
        <div className="greet">{greeting()}</div>
        
        <q>{item.content}</q>
        <p><i>{item.author}</i></p>
        <button onClick={newQuote} >new quote</button>
      </div>
      );
    }
  }
  
   
 

  
  


export default App
