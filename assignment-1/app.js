const cartContainer = document.querySelector('.cart-container');
const cartContainer1 = document.querySelector('.filter-container');
const productList = document.querySelector('.product-list');
const cartList = document.querySelector('.cart-list');

document.getElementById('filter-btn').addEventListener('click', () => {
    cartContainer1.classList.toggle('show-filter-container');
});

fetch('mobiles.json')
    .then(response => response.json())
    .then(data =>{
        let html = '';
        data.forEach(product => {
            html += `
                <div class = "product-item">
                    <div class = "product-img">
                        <img src = "${product.imgSrc}" alt = "product image">
                    </div>
                    <div class = "product-content">
                        <h3 class = "product-name">${product.name}</h3>
                        <span class = "product-category">${product.sku}</span>
                        <p class = "product-price">${product.price}</p>
                        <button type = "button" class = "add-to-cart-btn">Add To Cart
                    </button> 
                    </div>
                  
                </div>
            `;
        });
        productList.innerHTML = html;
 
})
.catch(error => {
    console.log(error);
})
$(document).on("click",".add-to-cart-btn", function() {
    $(".cart-container").addClass("show-cart-container");
    var name = $(this).siblings(".product-name").text();
    var price = $(this).siblings(".product-price").text();
    var summaryData = $(".cart-list .product-data .productName");
    var summaryPrice = $(".cart-list .product-data .productPrice");
    var summaryHiddenprice = $(".cart-list .product-data .productHiddenPrice");
    summaryData.append('<li>'+ name +'</li>');
    summaryPrice.append('<li class=>'+ price+'</li>');
    summaryHiddenprice.append('<li class=>'+ numberFormat(price)+'</li>');
    function getSum() {
        var subtotal = 0;
        $('.productHiddenPrice').children().each(function(index, value) {
          subtotal += parseInt(value.innerHTML.trim(), 10);
        });
        return subtotal;  
    }
      var subtotal = getSum();
      $(".sub-total #sub-total-value").text('₹'+ subtotal +'');

      var tax = parseInt(subtotal*0.21);
      $(".tax #tax-value").text('₹'+ tax +'');

      var total1=subtotal+tax;
      var promovalue = parseInt(total1*0.20);
      var discount =(total1 - promovalue)
      
       $(".cart-total #cart-total-value").text('₹'+ total +'');
      $(".discount #discount-value").text('-₹'+ promovalue +''); 

       var total = parseInt(discount);
       $(".cart-total #cart-total-value").text('₹'+ total +'');

}) 
 
  function numberFormat(num) {
    var number= num.replace(/,/g, '').replace(/₹/g, '');
    return number;
}
    var minSlider = document.getElementById('min');
    var maxSlider = document.getElementById('max');

    var outputMin = document.getElementById('min-value');
    var outputMax = document.getElementById('max-value');

    outputMin.innerHTML = minSlider.value;
    outputMax.innerHTML = maxSlider.value;

    minSlider.oninput = function(){
    outputMin.innerHTML=this.value;    
    }

    maxSlider.oninput = function(){
    outputMax.innerHTML=this.value;    
    }
 