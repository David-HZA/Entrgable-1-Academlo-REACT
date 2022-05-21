import React from 'react';
import quotes from '../quotes.json'
import QuoteBox from './QuoteBox.js';
import { useState } from 'react';


const Author = () => {
    const [ quote, setQuote ] = useState(quotes);
    //const quote = quotes[0];
  
   
    console.log(quote);
    
    return (
        <div>
            <h4>{quotes.author}</h4>
        </div>
    );
};

export default Author;