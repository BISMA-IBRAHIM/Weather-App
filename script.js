// const option ={
//     method : 'GET',
//     Headers:{
//         'X-RapidAPI-Key': '03d241fafemsh4b47d81ba737f17p17afc5jsn720d19c9d6a4',
//         'X-RapidAPI-Host': ' weatherapi-com.p.rapidapi.com'
//     }
// };

// fetch ('https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13', option)
// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.log(err));



let button = document.querySelector('.button')
let inputvalue = document.querySelector('.inputValue')
let nameVal = document.querySelector('.name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');


// ADDING EVENT LISTENER TO SEARCH BUTTON  
button.addEventListener('click', function(){

    // Fection data from open weather API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&units=metric&appid=108dd9a67c96f23039937fe6f3c91963`)
    .then(response => response.json())
    .then(
        displayData)
    .catch(err => alert('Wrong City name')); 

})

// Function to diplay weather on html document
const displayData=(weather)=>{
    temp.innerText=`${weather.main.temp}°C`
    desc.innerText=`${weather.weather[0].main}`

}

    