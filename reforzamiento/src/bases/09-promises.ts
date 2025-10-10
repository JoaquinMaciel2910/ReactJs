const myPromise = new Promise<number>((resolve, reject)=>{

    setTimeout(()=>{
        /* resolve(100); */
        reject("No devolvio el dinero");
    },2000);

})


myPromise
.then(
    (myMoneyIsBack)=>{console.log("I have my money " + myMoneyIsBack)}
)
.catch((reason)=>{
    console.warn(reason)
})
.finally(()=>{
    console.error("Terminado")
});