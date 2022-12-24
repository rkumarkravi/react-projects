
import constants from './../config/config';

async function getMessage(urlCurrentLearning){
   return fetch(`${constants.url.base}/${urlCurrentLearning}`).then((resp) => resp.json());
}

let http={
    getMessage
}

export default http;