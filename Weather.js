// let url='https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'
// let key="7effb4f802a29a4db69d1f2cca907b1e"


let loc=document.getElementById("loc")
let button=document.querySelector("button")
let temparature=document.getElementById("tem")
let humidity=document.getElementById("humm")
let img=document.querySelector("img")
let disk=document.querySelector("#disk")
// let background=document.querySelector("#back")
// console.log(loc)
// console.log(search)
// console.log(temparature)
// console.log(humidity)
let checkwetherdetails=async(city)=>{
    let key="7effb4f802a29a4db69d1f2cca907b1e"
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
let weather1=await fetch(url)
let weather2=await weather1.json()

// console.log(weather1)
// console.log(weather2.main.temp)
// console.log(weather2)
// console.log(weather2.main.humidity)

// console.log(weather2.weather[0].main)
// description.inner

// description.innerHTML=`${weather2.weather[0].description}`
let degrees=Math.round(weather2.main.temp-273)
temparature.innerHTML=`${degrees}<sup>o</sup> C`
humidity.innerHTML=`${weather2.main.humidity}%`

console.log(weather2.weather[0].description)


switch(weather2.weather[0].description){
    case 'haze':
        img.src="haze.png"
        // background.src="haze.png"
        break;   
    case 'snow':
        img.src="snow.png"
         break; 
    case 'clouds':
        img.src="clouds.png"
        break;
    case 'clear sky':
        img.src="clear.png"
        break;  
    case 'rainy':
        img.src="rainy.png"
        break; 
    case 'smoke':
        img.src="smoke.png"  
        break;  
    default:
        img.src="./images.png"
        break;           
    }

    // switch(weather2.weather[0].description)
}


button.addEventListener("click",()=>{
    checkwetherdetails(loc.value)
})

