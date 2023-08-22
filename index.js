
let totalPrice = 0

function handleClickShowBtn (target){
  const transferItemContainer = document.getElementById('Transfer-items');
  const itemName = target.parentNode.childNodes[1].innerText
  console.log(itemName)
  const li = document.createElement("li")
  li.innerText = itemName;
  transferItemContainer.appendChild(li);

  const price = target.parentNode.childNodes[5].innerText.split(" ")[1];
  console.log(price);

  totalPrice = parseInt(totalPrice) + parseInt(price)
   console.log(totalPrice)
   

   document.getElementById("total").innerText = totalPrice


  

 
  


}