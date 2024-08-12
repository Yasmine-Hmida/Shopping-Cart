// Function to increment and decrement the quantity 
function increment_decrement(div){
    var plus_sign = div.querySelector("#plus_sign");
    var minus_sign = div.querySelector("#minus_sign");
    var quantity_tag = div.querySelector(".how_much");
    var quantity = parseFloat(div.querySelector(".how_much").textContent);

    plus_sign.addEventListener("click",function(){
        quantity ++;
        quantity_tag.innerText = quantity;
    });

    minus_sign.addEventListener("click",function(){
        if(quantity > 1){
            quantity --;
            quantity_tag.innerText = quantity;
        }
    });
};

// Function to update the total cost
function added(div){
    var button = div.querySelector(".submit_button");
    var price_for_one = parseFloat(div.querySelector(".price_for_one").textContent);
    var total_price = parseFloat(document.querySelector("#price").textContent);

    increment_decrement(div);
    button.addEventListener("click", function() {
        var quantity = parseFloat(div.querySelector(".how_much").textContent);
        if (this.innerHTML === "Add to Cart") {
            this.innerHTML = "Added"; 
            total_price += price_for_one * quantity;
        } else {
            this.innerHTML = "Add to Cart";
            total_price -= price_for_one * quantity;
        }
        document.querySelector("#price").textContent = total_price.toFixed(2);
    });
};

// Main function
document.addEventListener("DOMContentLoaded", function(){
    var items = Array.from(document.getElementsByClassName("key_chains"));
    items.forEach(function(item){
        added(item);
    });
});
