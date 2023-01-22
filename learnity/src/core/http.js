
import constants from './../config/config';

async function getMessage(url){
   return fetch(`${constants.url.base}/${url}`).then((resp) => resp.json());
}

async function postMessage(url,data){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: 'follow'
      };
      
    return fetch(`${constants.url.base}/${url}`,requestOptions).then((resp) => resp.json());
 }


 async function deleteMessage(url,data){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: 'follow'
    };
    
  return fetch(`${constants.url.base}/${url}`,requestOptions).then((resp) => resp.json());
}

let http={
    getMessage,postMessage,deleteMessage
}

export default http;