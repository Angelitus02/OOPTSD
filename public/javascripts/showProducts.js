$(document).ready(
    //call API @routes/index.js
    function getProducts() {
        $.ajax({
                type: 'GET',
                url: '/getProducts/',
                success: function (data) {

                    var products = "";

                    for (var i = 0; i < data.length; i++) {

                        products += "<div class='row justify-content-md-left pt-6'>"
                        products += "<div class='card col-12'>" + "<div class='row' id='" + data[i].name + "'>";
                        products += "<img src='" + data[i].productImage + "' class='img-fluid' alt='no_img'>";
                        products += "<div class='col-md-6'><br>"

                        products += data[i].name + ": $" + data[i].price + "<br>";
                        products += " In Stock: " + data[i].stockCount + "<br>";
                        products += " Category: " + data[i].category + "<br>";
                        products += " Description: " + data[i].description;

                        products += "</div></div></div></div><br><button onclick=\"addToCart('" + data[i].name + "')\">Add to Cart</button>";
                        //<button onclick=\"addToCart('" + data[i].name + "')\">Add to Cart</button>";

                    }
                    //pass the products variable to the feedproducts div id in shopFront
                    $("#feedProducts").html(products);

                }
            }
        );

        //auto refresh list
        setTimeout(getProducts, 10000);


    });



