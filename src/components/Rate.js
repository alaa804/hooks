import React from "react"

const Rate = ({ rate = 0, rateChange }) => {
    let star =[];
<<<<<<< HEAD
    for(let i = 0 ; i  <= 5 ; i++){
=======
    for(let i = 0 ; i <= 5 ; i++){
>>>>>>> 84558f3925542879b85d3ae57d6e8810319fd9b6
        if(i < rate) {
            star.push (<span onClick= {() => rateChange(i + 1) }>⭐</span>);
        }
        else{
            star.push(<span onClick={() => rateChange(i + 1) }>☆</span>);
        }
    }
  return star
   
}


export default Rate

