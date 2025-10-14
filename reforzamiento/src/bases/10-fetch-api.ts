import type { GipyRandomResponse } from "../data/gifty.respons";

const API_KEY = 'YJMkrZCLUPCFrOKNAtOtoYxHcMJ75eos';

const myRequest = fetch('https://api.giphy.com/v1/gifs/random?api_key=YJMkrZCLUPCFrOKNAtOtoYxHcMJ75eos&tag=&rating=g');

const createImageInsideDOM = (url:string)=>{

    const imgElement= document.createElement('img')
    imgElement.src = url

    document.body.append(imgElement)


}

myRequest.then((response)=> response.json())
.then(({data}:GipyRandomResponse)=>{
    
    const imageUrl = data.images.original.url;
    createImageInsideDOM(imageUrl)

    })
.catch((err)=>{console.error(err)})

