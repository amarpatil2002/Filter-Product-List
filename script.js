let productsDiv = document.querySelector('.products')
let categoryDiv = document.querySelector('.category')
let cateArray = []

let mainFun = async (filterArray=[]) => {

    productsDiv.innerHTML = ""
   

    let data = await fetch("https://fakestoreapi.com/products")
    let res = await data.json()

    res.forEach((pro) => {

        if(!cateArray.includes(pro.category))
        {
            categoryDiv.innerHTML += ` <div>
            <input type="checkbox" onclick="filterData()" value="${pro.category}"><span>${pro.category}</span>
           </div>`
           // console.log(pro.category);
           cateArray.push(pro.category)
        }

        if(filterArray.length == 0){
            filterArray=cateArray
        }

        // console.log(pro);
        if(filterArray.includes(pro.category))
        {
            productsDiv.innerHTML += `<div class="item">
            <img src=${pro.image} alt="Product" srcset="">
            <h5>${pro.category}</h5>
            <h5>Price:${pro.price} | Rating:${pro.rating.rate}</h5>
            <h4>${pro.title}</h4>
        </div>`
        }
    });

}
mainFun()

function filterData(){
    let checkBox = document.querySelectorAll("input[type='checkbox']")
    let checkCate = []
    checkBox.forEach((e) => {
        if(e.checked){
            // console.log(e.value);
            checkCate.push(e.value)
        }
    })
    mainFun(checkCate)
 }

