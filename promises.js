// let myPromise = new Promise(function(resolve, reject) {
//     // "Producing Code" (May take some time)
    
//       resolve(); // when successful
//       reject();  // when error
//     });
    
//     // "Consuming Code" (Must wait for a fulfilled Promise)
//     myPromise.then(
//       function(value) { /* code if successful */ },
//       function(error) { /* code if some error */ }
//     );


const isSuccessful = true;
new Promise(function(resolve, reject) {
    if(isSuccessful){
        resolve("it continues");
    }
    reject("failed");
})
.then((resolve)=>{
    console.log(resolve);
    return "Task completed"
})
.then(console.log)
.catch((reject)=>{
    console.log(reject)
})