const swLocation = `${process.env.PUBLIC_URL}/sw.js`;

const registerSW = () =>{
    if (navigator.serviceWorker){
        navigator.serviceWorker.register(swLocation);
    }
}

export default registerSW;