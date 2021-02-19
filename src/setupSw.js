export default function regSw(){
    let swPath = `${process.env.PUBLIC_URL}/sw.js`;
    if('serviceWorker' in navigator){
        navigator.serviceWorker.register(swPath)
            .then((reg) => console.log("ServiceWorker was registered" + reg))
            .catch((err) => console.log("ServiceWorker was not registered" + err))
    }
}