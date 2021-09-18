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


// const isSuccessful = false;
// new Promise(function(resolve, reject) {
//     if(isSuccessful){
//         resolve("it continues");
//     }
//     reject("failed");
// })
// .then((resolve)=>{
//     console.log(resolve);
//     return "Task completed"
// })
// .then(console.log)
// .catch((reject)=>{
//     console.log(reject)
// })


// const myPromise = new Promise((resolve, reject)=>{

//     if (false) {
//         setTimeout(() => {
//             resolve("I love you!")
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject("I dont love you!")
//         }, 2000);
//     }

// })

// myPromise.then((resolve)=>{
//     document.getElementById("promise").innerHTML=resolve;
// })
// .catch((reject)=>{
//     document.getElementById("promise").innerHTML=reject;
// })

// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));
