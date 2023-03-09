import {data} from "./demo.js";

console.log(data);

const tableNums = document.querySelectorAll(".table-data");
const products = document.querySelectorAll(".menu-data");

//console.log(tableNums, products);

// function drag(event){
//     const data = event.target.innerHTML;
//     console.log();
//     event.dataTransfer.setData("text", event.target.key);
//     console.log(event)
// }

products.forEach(item=>{
    item.addEventListener("dragstart", (e)=>{
        //console.log(e.target);
        const ele = document.getElementById(e.target.id);
        console.log(ele.getAttribute("key"));
        // e.dataTransfer.setData('text/plain', e.target.id);
        // e.target.classList.add('hide');
    })
});

products.forEach(item=>{
    item.addEventListener("drag", (e)=>{
       e.preventDefault();
    })
});

tableNums.forEach(table=>{
    table.addEventListener("dragover", (e)=>{
        e.preventDefault();
        console.log("dragging");
    })
})