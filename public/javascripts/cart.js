//Implemented by Angel//

$(document).ready(
    function showCart() {
        $.ajax({
            type: 'GET',
            url: '/getCartProducts/',
            success: function (data) {

                var cartProducts = "";
                var total=0;
                for (var i = 0; i < data.length; i++) {

                    cartProducts += "<div class='row justify-content-md-left pt-6'>"
                    cartProducts += "<div class='col-12'><div class='card'>" + "<div class='row' id='" + data[i].name + "'>";
                    cartProducts += "<img src='" + data[i].productImage + "' class='backImage' alt='no_img'>";
                    cartProducts += "<div class='col-md-9'><br>"

                    cartProducts += data[i].name + ": $" + data[i].price + "<br>";
                    cartProducts += " In Stock: " + data[i].stockCount + "<br>";
                    cartProducts += " Category: " + data[i].category + "<br>";
                    cartProducts += " Description: " + data[i].description;
                    cartProducts += "<button method='post' onclick=\"discardFromCart('" + data[i].name + "')\" name='discardProduct' id='discardProduct' class='align-self-end'><img src='images/waste-bin.png' alt='Delete'></button>";
                    cartProducts += "<br><br>";
                    cartProducts += "</div></div></div></div></div><br>";
                    total+=data[i].price;
                }
                total = "Total Price: $" + total;
                $("#total").html(total);
                $("#cartProducts").html(cartProducts);
            }
        });
    });

function addToCart(p) {
    $.ajax({
            type: 'POST',
            url: '/addToCart/' + p,
            success: function (data) {
                alert("Item added to cart");
            }
        }
    )
};

function discardFromCart(p) {
    $.ajax({
            type: 'POST',
            url: '/discardProduct/' + p,
            success: function (data) {
                alert("Item discarded from cart");
                location.reload();
            }
        }
    )
}

function emptyCart() {
    alert("Emptying cart");
    $.ajax({
        type: 'POST',
        url: '/emptyCart/',
        success: function (data) {
            location.reload();
        }
    });
};


