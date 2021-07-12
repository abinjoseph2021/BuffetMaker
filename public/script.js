if("serviceWorker" in navigator)
{
   navigator.serviceWorker.register("sw.js").then(reg =>{
       console.log("Service Worker Registration")
       console.log(reg)
   }).catch(err =>  {
       console.log("Service Worker gone through error")
       console.log(err)
   })
}