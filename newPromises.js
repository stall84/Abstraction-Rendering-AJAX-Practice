
var urls = [
  'https://dog.ceo/api/breed/beagle/images/random',
  'https://dog.ceo/api/breed/chow/images/random',
  'https://dog.ceo/api/breed/akita/images/random',
  'https://dog.ceo/api/breed/dingo/images/random',
  'https://dog.ceo/api/breed/eskimo/images/random'
];


//Part 1:

const p1 = axios.get(urls[0])
    .then((response) => console.log(`data from ${urls[0]} was fetched!`))

const p2 = axios.get(urls[1])
    .then((response) => console.log(`data from ${urls[1]} was fetched!`))

const p3 = axios.get(urls[2])
    .then((response) => console.log(`data from ${urls[2]} was fetched!`))

const p4 = axios.get(urls[3])
    .then((response) => console.log(`data from ${urls[3]} was fetched!`))

const p5 = axios.get(urls[4])
    .then((response) => console.log(`data from ${urls[4]} was fetched!`))


//Part 2:

Promise.all([p1,p2,p3,p4,p5])
    .then((responses) => {
       console.log("All the data was fetched! You'll just have to trust me ;)");

})

//Part 3:

function addNums (x,y) {  
    
    var promise = new Promise((resolve,reject) => {
    
        resolve(x+y);
    
        reject('Must enter numbers as inputs');
    
});

   promise.then((value) => {
       console.log(value);
   });
    
   promise.catch((errorMsg) => {
       console.error(errorMsg);
   });

}

addNums(5,B)


            
    
                             
