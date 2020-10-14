var productBtn=document.getElementById("product_btn");
var productContainer=document.getElementById("product_container")
console.log(productBtn)

var data=[
   {id:1, name:"yaser"},
   {id:2, name:"samer"},
   {id:3, name:"naser"},
   {id:4, name:"kasem"},
]

//function drawui
function drawui(items){
  items.forEach(function(ele){
      
      productContainer.innerHTML+= `<div onclick="delItem(${ele.id})" >
      ${ele.name}
      </div>
      `;
 
  });
}

//function onload
window.onload=function(){
    drawui(data);
}



//function additem
productBtn.addEventListener("click",additem);

function additem(){
    var productInput=document.getElementById("product_input");
    if (productInput.value=="")  alert(" you shoud write somthing!");

    var lastid=data.length?data[data.length-1].id:1;
    
//console.log(++lastid);
     data.push({id:++lastid ,name:productInput.value});

       var additem=data[data.length-1];
       console.log(additem)
     

 productContainer.innerHTML+= `<div onclick="delItem(${additem.id})">
 ${additem.name}
 </div>
 `;
  productInput.innerHTML="";
}

function delItem(id){
  console.log(id);
}
