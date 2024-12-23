document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        if (this.innerText === "Add To Cart") {
            //first click sa add to cart para maging added to cart
            this.innerText = "Added to Cart";
            showNotification("This item is added to your cart.");
        } else {
            //another click pang balik sa "add to cart"
            this.innerText = "Add To Cart";
            showNotification("This item is removed from your cart.");
        }
    });
});


function showNotification(message) {
    //notif style
  
    const notification = document.createElement('div');
    notification.innerText = message;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = '#333';
    notification.style.color = '#fff';
    notification.style.padding = '10px 15px';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0px 4px 6px rgba(0,0,0,0.2)';
    notification.style.zIndex = '1000';
    document.body.appendChild(notification);

  // para sa notif duration
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

document.addEventListener("DOMContentLoaded", function () {
    var priceFilter = document.getElementById("priceFilter");
    var products = document.getElementsByClassName("product"); 


    priceFilter.addEventListener("change", function () {
        var selectedRange = priceFilter.value;


        for (var i = 0; i < products.length; i++) {
            var product = products[i];

   
            var priceElement = product.getElementsByClassName("product-price")[0];
            var priceText = priceElement.textContent.replace(/[₱,]/g, "").trim();
            var price = parseFloat(priceText);

          
            if (selectedRange === "all") {
                product.style.display = "block"; 
            } else {
                var rangeParts = selectedRange.split("-");
                var min = parseFloat(rangeParts[0]);
                var max = parseFloat(rangeParts[1]);

                if (price >= min && price <= max) {
                    product.style.display = "block"; 
                } else {
                    product.style.display = "none"; 
                }
            }
        }
    });
});