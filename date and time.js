let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)
// let myCreatedDate=new Date(2024,0,2,23)
// console.log(myCreatedDate.toDateString())
let myCreatedDate=new Date(2023,0,23,5,3)
console.log(myCreatedDate.toLocaleDateString())

// myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))
let newDate=new Date()
console.log(new Date())
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

// newDate.toLocaleString('Dafault',{
//     weekday:'Long'
//     // timeZone:''
// })