import React from 'react'
import CText from '../c-text-view/CTextView';

function CMediator({data}) {
  
    switch(data.type){
        case 'PARAGRAPH': return <CText {...data}/>;
        case 'LINK': return <a href={data.value} target="_blank" rel="noreferrer">{data.value}</a>;
        case 'IMAGE_LINK': return <img src={data.value} alt="data.id" style={{...JSON.parse(data.style)}}/>;
        default: return <h1>Not compaitable</h1>;
    }
  
}

export default CMediator