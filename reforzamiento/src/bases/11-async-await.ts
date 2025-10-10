import type { GipyRandomResponse } from "../data/gifty.respons";

const API_KEY = 'YJMkrZCLUPCFrOKNAtOtoYxHcMJ75eos';

const myRequest = fetch('https://api.giphy.com/v1/gifs/random?api_key=YJMkrZCLUPCFrOKNAtOtoYxHcMJ75eos&tag=&rating=g');

const createImageInsideDOM = (url:string)=>{

    const imgElement= document.createElement('img')
    imgElement.src = url

    document.body.append(imgElement)


}

const getImageUrl = async()=>{

    const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=YJMkrZCLUPCFrOKNAtOtoYxHcMJ75eos&tag=&rating=g');

    const {data}  = (await response.json()) as GipyRandomResponse;

    return data.images.original.url
}


getImageUrl().then((url) => createImageInsideDOM(url));


