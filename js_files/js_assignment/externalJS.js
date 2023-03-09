

dataItems = [
    {
        name: "Product1",
        price: 150
    },
    {
        name: "Product2",
        price: 200
    },
    {
        name: "Product3",
        price: 250
    },
    {
        name: "Product4",
        price: 300
    },
    {
        name: "Product5",
        price: 350
    },
    {
        name: "Product6",
        price: 400
    },
    {
        name: "Product7",
        price: 450
    },
    {
        name: "Product8",
        price: 500
    },
]

dataTables = [
    {
        num: "Table1",
        orders: [],
        amount: 0,
        numItems: 0
    },
    {
        num: "Table2",
        orders: [],
        amount: 0,
        numItems: 0
    },
    {
        num: "Table3",
        orders: [],
        amount: 0,
        numItems: 0
    },
    {
        num: "Table4",
        orders: [],
        amount: 0,
        numItems: 0,
    },
    {
        num: "Table5",
        orders: [],
        amount: 0,
        numItems: 0,
    },
    {
        num: "Table6",
        orders: [],
        amount: 0,
        numItems: 0,
    },
    {
        num: "Table7",
        orders: [],
        amount: 0,
        numItems: 0
    },
    {
        num: "Table8",
        orders: [],
        amount: 0,
        numItems: 0,
    },
];

const inputMenu = document.getElementById("menu-search");
inputMenu.addEventListener("input", (e) => {
    const target = e.target.value;
    const tables = document.querySelector(".container2");
    const filter = dataItems.filter((item) => item.name.toUpperCase().includes(target.toUpperCase()));
    const renderTables = filter.map((item, index) => {
        return `
        <div class="menu-data" id="menu-data" key=${index} draggable="true">
        <h3 class=${index} id="item-name">${item.name}</h3>
          <p class=${index} id="item-price">Price : ${item.price}</p>
        </div>
    `
    });
    tables.innerHTML = renderTables;
})

const menuData = document.querySelector(".container2");
const renderData = dataItems.map((item, index) => {
    return `
      <div class="menu-data" id="menu-data" key=${index}  draggable="true">
          <h3 class=${index} id="item-name">${item.name}</h3>
          <p class=${index} id="item-price">Price : ${item.price}</p>
     </div>
    `
});
menuData.innerHTML = renderData;


const inputTable = document.getElementById("table-search")
inputTable.addEventListener("input", (e) => {
    //console.log(e.target.value);
    const target = e.target.value;
    //console.log(dataTables[0].num.toUpperCase().substring(target.toUpperCase()));
    const tables = document.querySelector(".container1");
    const filter = dataTables.filter((table) => table.num.toUpperCase().includes(target.toUpperCase()));
    //console.log(filter);
    const renderTables = filter.map((table, index) => {
        return `
    <div class="table-data" key=${index} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    <h1 id="num${index}">${table.num}</h1>
    <p id="price${index}">Rs: ${table.amount} | Total items: ${table.numItems}</p>
    </div>
    `
    });
    tables.innerHTML = renderTables;
})

const tables = document.querySelector(".container1");
const renderTables = dataTables.map((table, index) => {
    return `
    <div class="table-data" key=${index} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    <h1 id="num${index}">${table.num}</h1>
    <p id="price${index}">Rs: ${table.amount} | Total items: ${table.numItems}</p>
    </div>
    `
});
tables.innerHTML = renderTables;

function showPopup(e){
    console.log(e);
}


/**
 * New one
 */


const tableNums = document.querySelectorAll(".table-data");
const products = document.querySelectorAll(".menu-data");

/**
 * POPUP box when click on table
 */
tableNums.forEach(table=>{
    table.addEventListener("click",(e)=>{
        const tId = e.target.getAttribute("key");
        const list = document.getElementById("addlist");
        const data = dataTables[tId];
        const orders = data["orders"];
        //console.log(data)
        orders.forEach(item=>{
            const ele = document.createElement("li");
            ele.innerText = `Item: ${item["name"]}; Price: ${item["price"]}`;
            list.appendChild(ele);
        });
        const ele = document.createElement("li");
        ele.innerText = `BillAmount: ${data["amount"]}; TotalItems: ${data["numItems"]}`;
        list.appendChild(ele);
    });
})

//console.log(tableNums, products);

// function drag(event){
//     const data = event.target.innerHTML;
//     console.log();
//     event.dataTransfer.setData("text", event.target.key);
//     console.log(event)
// }

products.forEach(item => {
    item.addEventListener("dragstart", (e) => {
        const id = e.target.getAttribute("key");
        //console.log(id);
        e.dataTransfer.setData('text', id);
        //console.log(e.target);
        //e.target.classList.add('hide');
    })
});

products.forEach(item => {
    item.addEventListener("drag", (e) => {
        e.preventDefault();
    })
});

tableNums.forEach(table => {
    table.addEventListener("dragenter", (e) => {
        e.preventDefault();
        e.target.classList.add('drag-hover');
        //console.log("dragging");
    });
});

tableNums.forEach(table => {
    table.addEventListener("dragover", (e) => {
        e.preventDefault();
        e.target.classList.add('drag-hover');
        //console.log("dragging");
    });
});

tableNums.forEach(table => {
    table.addEventListener("dragleave", (e) => {
        e.preventDefault();
        e.target.classList.remove('drag-hover');
        //console.log("dragging");
    });
});

tableNums.forEach(table => {
    table.addEventListener("drop", (e) => {
        e.preventDefault();
        e.target.classList.remove('drag-hover');
        const itemId = e.dataTransfer.getData('text');
        const addItem = dataItems[itemId];
        const tableId = e.target.getAttribute("key");
        const addIn = dataTables[tableId];
        addIn["orders"].push(addItem);
        let totalPrice = 0;
        addIn.orders.forEach(item => {
            totalPrice += item["price"]
        });
        addIn.amount = totalPrice;
        addIn.numItems = addIn.orders.length;
        const ele = `<p id="test">this mine</p>`;
        //console.log(ele);
        document.querySelector(`.table-data #num${tableId}`).innerHTML = `${addIn["num"]}`;
        document.querySelector(`.table-data #price${tableId}`).innerHTML = `Rs: ${addIn.amount} | TotalItems: ${addIn.numItems}`;
        //console.log(document.getElementById("test"))
        //console.log(document.getElementsByClassName("table-data")[0]);


       // console.log(e.target)
    });
});

