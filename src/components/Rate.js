import React from 'react'

const Rate = ({ rate = 0, rateChange }) => {
    let star =[];
    for(let i = 0 ; i <= 5 ; i++){
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

