let data = {
  name:"Ramakrishna",
  age:23,
  city:"Hyderabad",
  

}
let str= JSON.stringify(data)
// console.log(str)
localStorage.setItem("prod",str)

let recd_data=localStorage.getItem("prod")
console.log(JSON.parse(recd_data))