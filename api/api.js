// fetch('https://www.boredapi.com/api/activity')
// .then((response) =>{
//     return response.json();

// })
// .then((stanley) => {
//     var text = document.querySelector('.text')
//     text.innerHTML = stanley.activity
//     console.log(stanley);
// })


const BTN = document.getElementById('btn')
const dogImage = document.querySelector('.dog-image')
BTN.addEventListener('click',function(){

    fetch('https://dog.ceo/api/breeds/image/random')
.then((response) => {
 if(response.status !== 'success'){
    console.log('error');
 }
 return response.json()
})
.then((data)=>{
    console.log(data);
    dogImage.src = data.message
})
.catch((error)=>{
    console.log('Fetching Error:', error.message);
})
})

