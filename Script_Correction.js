
const shoppingCart = document.querySelector(".items");
const items = shoppingCart.querySelectorAll(".key_chains");
const totalPrice = document.getElementById("price");

let total = 0;

for (let i = 0; i < items.length; i++) {
  const item = items[i];

  const minus = item.querySelector(".minus_sign")[0];
  console.log(minus)
  const plus = item.querySelector(".plus_sign")[0];
  const quantityInput = item.querySelector(".how_much")[0];
  const submitBtn = item.querySelector(".submit_button")[0];
  
  const price = parseInt(item.getElementsByClassName("price_for_one")[0].innerText.substring(1));

  minus.addEventListener("click", () => {
    if (quantityInput.value > 1) {
      quantityInput.value--;
      total -= price;
      totalPrice.innerText = `Total Price: $${total}`;
    }
  });

  plus.addEventListener("click", () => {
    quantityInput.value++;
    total += price;
    totalPrice.innerText = `Total Price: $${total}`;
  });

  submitBtn.addEventListener("click", () => {
    if (this.innerHTML === "Add to Cart") {
      this.innerHTML = "Added"; 
      total += price * quantityInput.value;
      totalPrice.innerText = `Total Price: $${total}`;
    } 
    else {
      this.innerHTML = "Add to Cart";
      item.remove();
      total -= price * quantityInput.value;
      totalPrice.innerText = `Total Price: $${total}`;
    }
  });  
};

/*deleteBtn.addEventListener("click", () => {
  item.remove();
  total -= price * quantityInput.value;
  totalPrice.innerText = `Total Price: $${total}`;
}); */       

/*$(".heart.fa").click(function() {
          $(this).toggleClass("fa-heart fa-heart-o");
        });*/

