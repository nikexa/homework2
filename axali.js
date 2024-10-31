//  შექმენით html და js ფაილები , html ში უნდა იყოს
//  h1 თეგში ინფორმაციის დამატება , ასევე უნდა იყოს ერთი
//   ღილაკი სადაც დაჭერის შემთხვევაში ამოაგდებს prompt_ს
//    რომელშიც შეიყვანთ ინფორმაციას , თუ არ შეიყვან უნდა
//     ამომიგდოს ალერტი , ინფორმაციის შეყვანის შემდეგ უნდა
//      გამომიტანოს ul ლისთში li აითემებად ჩემი დამატებული 
//      ინფორმაცია , თითოეულ li აითემს უნდა ქონდეს საკუთარი
//       წაშლის ღილაკი და დაჭერის შემთვევაში უნდა იშლებოდეს ის 
//       ინფორმაცია რომელსაც დავაჭერ.

const h1=document.getElementById("damateba")
const btn=document.getElementById("btn")
const ul=document.getElementById("ul")


btn.addEventListener("click", ()=>{
    let sheiyvane=prompt("sheiyvane informacia")
    if(sheiyvane==""){
        alert("sheiyvane informaciaa!!!!!!!!!!!!!!!")    
    }
    else{
        let li=document.createElement("li")
        let gilaki=document.createElement("button")
        gilaki.innerText="washale"
        li.innerText=sheiyvane
        ul.appendChild(li)
        ul.appendChild(gilaki)
        gilaki.addEventListener("click", ()=>{
            ul.remove(li)
        })

    }
    
})




