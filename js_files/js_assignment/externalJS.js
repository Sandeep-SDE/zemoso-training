

dataItems = [
    {
        name: "Product1",
        price: 150,
        quantity : 1,
    },
    {
        name: "Product2",
        price: 200,
        quantity : 1,
    },
    {
        name: "Product3",
        price: 250,
        quantity : 1,
    },
    {
        name: "Product4",
        price: 300,
        quantity : 1,
    },
    {
        name: "Product5",
        price: 350,
        quantity : 1,
    },
    {
        name: "Product6",
        price: 400,
        quantity : 1,
    },
    {
        name: "Product7",
        price: 450,
        quantity : 1,
    },
    {
        name: "Product8",
        price: 500,
        quantity : 1,
    },
]

dataTables = [
    {
        num: "Table1",
        orders: [],
        amount: 0,
        numItems: 0,
    },
    {
        num: "Table2",
        orders: [],
        amount: 0,
        numItems: 0,
    },
    {
        num: "Table3",
        orders: [],
        amount: 0,
        numItems: 0,
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
        numItems: 0,
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

function showPopup(e) {
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
const closeIcon = document.getElementById("closeIcon");
closeIcon.addEventListener("click", (e) => {
    const parent = document.getElementById("table");
    const children = document.getElementsByClassName("trows");
    while (children.length > 0) {
        parent.removeChild(children[0]);
    }
});

function showData() {
    const tableData = document.getElementById("table");
    console.log(tableData.innerHTML);
}

let flag = true;
tableNums.forEach(table => {
    table.addEventListener("click", (e) => {
        e.preventDefault()
        const tId = e.target.getAttribute("key");
        const table = document.getElementById("table");
        //const tRows = document.querySelectorAll("tr");
        //console.log(tRows);
        // while(table.hasChildNodes()){
        //     table.removeChild(table.children[0]);
        // }
        const data = dataTables[tId];
        const orders = data["orders"];
        //console.log(orders);
        //console.log(data)
        let counter = 0
        orders.forEach((item, index) => {
            const row = document.createElement("tr");
            row.classList.add("trows");
            const cell1 = document.createElement("td");
            const cell2 = document.createElement("td");
            const cell3 = document.createElement("td");
            const cell4 = document.createElement("td");
            const inputEle = document.createElement("INPUT");
            inputEle.classList.add("quantity");
            inputEle.setAttribute("id", `field${index}`);
            inputEle.setAttribute("type", "number");
            inputEle.setAttribute("min", 1);
            inputEle.setAttribute("max", 10);
            inputEle.setAttribute("value", item["quantity"]);
            inputEle.setAttribute("key", index);
            inputEle.setAttribute("price", item["price"]);
            cell4.appendChild(inputEle);
            counter++;
            cell1.innerText = counter;
            cell2.innerText = item["name"];
            cell3.innerText = item["price"];
            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            row.appendChild(cell4);
            table.appendChild(row);
        });
        const fTable = document.getElementById("tfooter");
        const frow = document.getElementById("frow");
        const fcell1 = document.getElementById("fHeadCell1");
        const fcell2 = document.getElementById("fHeadCell2");
        fcell1.innerText = `BillAmount: ${data["amount"]}`
        fcell2.innerText = `TotalItems: ${data["numItems"]}`
        //console.log(fcell1,fcell2)
        frow.appendChild(fcell1);
        frow.appendChild(fcell2);
        fTable.appendChild(frow);
        const ele = document.querySelectorAll(".quantity");
        ele.forEach(dataEle => {
            dataEle.addEventListener("input", (e) => {
                // const inBill = fcell1.innerText.split(":")[1];
                const i = e.target.value;
                orders[e.target.getAttribute("key")]["quantity"] = i
                const price = parseInt(e.target.getAttribute("price"));
                // console.log(typeof data["amount"], typeof price)
                data["amount"] = data["amount"] + price;
                fcell1.innerText = `BillAmount: ${data["amount"]}`;
                document.querySelector(`.table-data #price${tId}`).innerHTML = `Rs: ${data["amount"]} | TotalItems: ${data["numItems"]}`;
            })
        })
    });
});

/**
 * Quantity change field
 */

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
        let bool = false;
        addIn.orders.forEach(item => {
            if (item["name"] === addItem["name"]) {
                bool = true;
                item["quantity"]++;
            }
        });
        if (!bool) {
            addIn["orders"].push(addItem);
            let totalPrice = 0;
            addIn.orders.forEach(item => {
                //console.log(item);
                totalPrice += item["price"]*item["quantity"];
            });
            addIn.amount = totalPrice;
            //console.log(addIn.amount);
            addIn.numItems = addIn.orders.length;
        } else {
            //addIn["orders"]["quantity"] = addIn["orders"]["quantity"] + 1;
            addIn.amount += addItem["price"];
        }
        document.querySelector(`.table-data #num${tableId}`).innerHTML = `${addIn["num"]}`;
        document.querySelector(`.table-data #price${tableId}`).innerHTML = `Rs: ${addIn.amount} | TotalItems: ${addIn.numItems}`;
        //console.log(document.getElementById("test"))
        //console.log(document.getElementsByClassName("table-data")[0]);
        // console.log(e.target)
    });
});

