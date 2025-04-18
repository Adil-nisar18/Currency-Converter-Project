// const URL= "https://hexarate.paikama.co/api/rates/latest/"
// https://hexarate.paikama.co/api/rates/latest/PKR?target=INR orignal link

const dropdowns= document.body.querySelectorAll(".dropdown select") //the two selects
// const imgs= document.body.querySelectorAll(".select-container img")
// const firstImage = imgs[0];
// const secondImage = imgs[1];
let btn= document.body.querySelector("form button")
let fromcurr= document.body.querySelector(".from select") //sepatrely targeting select now from and to both//
let tocurr= document.body.querySelector(".to select")
let display= document.body.querySelector(".msg")

//instead of for each we used for of this time//
for (const element of dropdowns) //selecting two selects basically with -> to & from (two and from select wala are elements)(i.e.  <select name="from" >)
{
    // console.log(element) the elements are two selects
    // console.log(element.name) names of select are to and from
    for (const key in countryList) {
     // console.log(key, countryList[key]) shows countries key and elements

        let newoption= document.createElement ("option")
       newoption.innerText= key
       newoption.value= key
if (element.name==="from" && key=== "USD")
    //actually checking select.name which is from and also whther key has usd or inr or jpy exact anmes then select it use pk and it wont work// 
//basically wheter USD OR INR OR PKR ARE AVAILABE AS KEY OR NOT IF THEY ARE THEN SELECTED at first AED was showing
{
    newoption.selected= "selected"
}

else if (element.name==="to" && key=== "INR") {
    newoption.selected= "selected"
}



       element.append(newoption) //adding newoption in two selects
          
      
  }

//try it separate

  element.addEventListener("change", (e)=>{ //event e object in event listeners
updateflag(e.target) //calling update flag and passing value e.target when select changed

  })
}


const updateflag=(element1)=>{
// console.log(element1) // it gives us select
    // console.log(element.value) // showing keys now when changed like USD INR PKR ETC ALL at first keys were not changing

    let key= element1.value //saving it in key to avaoid confusion
             let country   = countryList[key]   //shows country like IN, EU refer to for in loop above
             let newSrc= `https://flagsapi.com/${country}/flat/64.png` //well from html i copy it when we write US or IN in place for $country it shows respective country flag image//
           let img = element1.parentElement.querySelector("img") //selecting image by targeting parent of select which is select container and target img there chck html
img.src= newSrc


        }


btn.addEventListener("click", async (e)=>{

  e.preventDefault() //now if i click on button page is not loading or acting like submit button

 

fetchExchangeRate()

//now if anyone type 0 or less valu automatically turns into 1

// console.log(fromcurr.value) basically it is select.value shows USD etc


// var myHeaders = new Headers();
// myHeaders.append("apikey", "FXxK29uj3iW7rWQ1NmkLpm5EpMbOSLHQ");




// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };

// fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${tocurr.value}&from=${fromcurr.value}&amount=${amountval}`, requestOptions)
//   // .then(response => response.text())
//   .then(response => response.json()) 
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));




  











// const NewURL= `${URL} ${fromcurr.value}?target=${tocurr.value} `
// let response= await fetch(NewURL)
// console.log(response)
})












const fetchExchangeRate = async () => {

  let amount= document.body.querySelector(".amount input")
  let amountval= amount.value 
  // console.log(amountval) // shows us value 1 or 100 etc whatever typed in the input text
if (amountval==="" || amountval<="0")
{
  amountval= "1"
}

  var myHeaders = new Headers();
myHeaders.append("apikey", "FXxK29uj3iW7rWQ1NmkLpm5EpMbOSLHQ");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

  const response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${tocurr.value}&from=${fromcurr.value}&amount=${amountval}`, requestOptions);

  const result = await response.json();
  
  console.log(result)

  // console.log(result.result) //1=300 it returns value after multiply
  let convertedval= (result.result)
  console.log(convertedval)
  // console.log(result.info.rate) // it returns rate 

 let rate1= (result.info.rate)

  let from1= (result.query.from)
// console.log(from1)
let to1= (result.query.to)
// console.log(to1)
// console.log(amountval)

display.innerHTML= `${amountval} ${from1} = ${convertedval} ${to1} `
let display1= document.createElement("p")
display.appendChild(display1)
display1.innerHTML= ` rate of 1 ${from1} is ${rate1} ${to1}`

}  
