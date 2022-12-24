import React from 'react'
import CText from './../c-text/CText';

function CMediator({data}) {
  
    switch(data.type){
        case 'PARAGRAPH': return CText(data);
        case 'LINK': return <a href={data.value} target="_blank">{data.value}</a>;
        default: return <h1>Not compaitable</h1>;
    }
  
}

export default CMediator