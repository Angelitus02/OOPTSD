//search for product #id on current page and move-to
$(document).ready(
    function () {
        /** legacy code for searching by #ID from Stephen */
        // /**
        //  * Event handler for when the user attempts to search for a product
        //  */
        // $("#search-form").submit(function (event) {
        //     event.preventDefault();
        //     $.ajax({
        //         type: 'POST',
        //         url: '/findProduct',
        //         dataType: 'json',
        //         data: {
        //             'name': event.target.inputName.value,
        //         },
        //         success: function () {
        //             //if success, redirects to /backend page
        //             $(location).attr('href', '#' + event.target.inputName.value);
        //             // Redirect to logged in page
        //         },
        //         error: function (errMsg) {
        //             console.log(errMsg);
        //         }
        //     });
        // });

        /**angels code for finding 1 product in shopFront with a name*/
        $("#nameSearch").submit(function (event) {
            event.preventDefault();
            $.ajax({
                type: 'GET',
                url: '/getName/' + event.target.inputName.value,
                dataType: 'json',
                success: function (data) {

                    var products = "";

                    for (var i = 0; i < data.length; i++) {

                        products += "<div class='productCard'>";
                        products += "<div id='" + data[i].name + "'>";
                        products += "<img src='" + data[i].productImage + "' style='width:100%' alt='no_img'>";

                        products += "<h1>"+ data[i].name + "</h1>";
			products += "<p class='price'> $" + data[i].price + "</p>";
                        products += "<p>" + data[i].description + "</p>";
                        products += "<p>In Stock: " + data[i].stockCount + "</p>";
                        products += "<p>Category: " + data[i].category + "</p>";
                        products += "<button class='productButton' onclick=\"addToCart('" + data[i].name + "')\">Add to Cart</button></div></div>";


                    }
                    //pass the products variable to the feedproducts div id in shopFront
                    $("#feedProducts").html(products);

                },
                error: function (errMsg) {
                    console.log(errMsg);
                }
            });
        });

        /**angels code for finding products in shopFront with a category*/
        $("#categorySearch").submit(function (event) {
            event.preventDefault();
            $.ajax({
                type: 'GET',
                url: '/getCategory/' + event.target.selectpicker.value,
                dataType: 'json',
                success: function (data) {

                    var products = "";

                    for (var i = 0; i < data.length; i++) {

                        products += "<div class='productCard'>";
                        products += "<div id='" + data[i].name + "'>";
                        products += "<img src='" + data[i].productImage + "' style='width:100%' alt='no_img'>";

                        products += "<h1>"+ data[i].name + "</h1>";
			products += "<p class='price'> $" + data[i].price + "</p>";
                        products += "<p>" + data[i].description + "</p>";
                        products += "<p>In Stock: " + data[i].stockCount + "</p>";
                        products += "<p>Category: " + data[i].category + "</p>";
                        products += "<button class='productButton' onclick=\"addToCart('" + data[i].name + "')\">Add to Cart</button></div></div>";

                    }
                    //pass the products variable to the feedproducts div id in shopFront
                    $("#feedProducts").html(products);

                },
                error: function (errMsg) {
                    console.log(errMsg);
                }
            });
        });

        /**angels code for finding 1 product in shopBackend with a name*/
        $("#nameSearchB").submit(function (event) {
            event.preventDefault();
            $.ajax({
                type: 'GET',
                url: '/getName/' + event.target.inputName.value,
                dataType: 'json',
                success: function (data) {

                    var products = "";

                    for (var i = 0; i < data.length; i++) {
                        products += "<div class='row justify-content-md-left mt-12'><div class='card col-12'>";
                        products += "<div class='row' id='" + data[i].name + "'>";
                        products += "<div class='imageHolder'><img src='" + data[i].productImage + "' class='backImage' alt='no_img'></div><br>";

                        products += "<div class='col-md-6'>";
                        products += "<form method='post' action='/deleteProduct' name='deleteForm' id='deleteForm'>";
                        products += "<br><input type='text' name='productName' id='productName' value='" + data[i].name + "' readonly> :Name<br><input type='submit' id='deleteButton' value='DELETE PRODUCT'></form><br>";

                        products += "<form method='post' action='/updateProduct' name='updateProductForm' id='updateProductForm'>";
                        products += "<input type='text' name='productNameHidden' id='productNameHidden' style='display:none' value='" + data[i].name + "'>";
                        products += "<br><input type='text' name='productPrice' id='productPrice' value='" + data[i].price + "'> :Price";
                        products += "<br><input type='text' name='productCount' id='productCount' value='" + data[i].stockCount + "'> :Quantity";
                        products += "<br><input type='text' name='productCategory' id='productCategory' value='" + data[i].category + "'> :Category";
                        products += "<br><input type='text' name='productDescription' id='productDescription' value='" + data[i].description + "'> :Description";
                        products += "<br><input type='submit' id='updateProductButton' value='UPDATE PRODUCT'></form>";
                        products += "<br></div></div></div></div>";
                    }

//pass the products variable to the feedproducts div id in shopBackend
                    $("#manageProducts").html(products);

                },
                error: function (errMsg) {
                    console.log(errMsg);
                }
            });
        });

        /**angels code for finding products in shopBackend with a category*/
        $("#categorySearchB").submit(function (event) {
            event.preventDefault();
            $.ajax({
                type: 'GET',
                url: '/getCategory/' + event.target.selectpicker.value,
                dataType: 'json',
                success: function (data) {

                    var products = "";

                    for (var i = 0; i < data.length; i++) {
                        products += "<div class='row justify-content-md-left mt-12'><div class='card col-12'>";
                        products += "<div class='row' id='" + data[i].name + "'>";
                        products += "<div class='imageHolder'><img src='" + data[i].productImage + "' class='backImage' alt='no_img'></div><br>";

                        products += "<div class='col-md-6'>";
                        products += "<form method='post' action='/deleteProduct' name='deleteForm' id='deleteForm'>";
                        products += "<br><input type='text' name='productName' id='productName' value='" + data[i].name + "' readonly> :Name<br><input type='submit' id='deleteButton' value='DELETE PRODUCT'></form><br>";

                        products += "<form method='post' action='/updateProduct' name='updateProductForm' id='updateProductForm'>";
                        products += "<input type='text' name='productNameHidden' id='productNameHidden' style='display:none' value='" + data[i].name + "'>";
                        products += "<br><input type='text' name='productPrice' id='productPrice' value='" + data[i].price + "'> :Price";
                        products += "<br><input type='text' name='productCount' id='productCount' value='" + data[i].stockCount + "'> :Quantity";
                        products += "<br><input type='text' name='productCategory' id='productCategory' value='" + data[i].category + "'> :Category";
                        products += "<br><input type='text' name='productDescription' id='productDescription' value='" + data[i].description + "'> :Description";
                        products += "<br><input type='submit' id='updateProductButton' value='UPDATE PRODUCT'></form>";
                        products += "<br></div></div></div></div>";
                    }

//pass the products variable to the feedproducts div id in shopBackend
                    $("#manageProducts").html(products);

                },
                error: function (errMsg) {
                    console.log(errMsg);
                }
            });
        });
        

    });//doc.rdy

//show products list on shopfront page
$(document).ready(
    //call API @routes/index.js
    function getProducts() {
        $.ajax({
                type: 'GET',
                url: '/getProducts/',
                success: function (data) {

                    var products = "";

                    for (var i = 0; i < data.length; i++) {

                        products += "<div class='productCard'>";
                        products += "<div id='" + data[i].name + "'>";
                        products += "<img src='" + data[i].productImage + "' style='width:100%' alt='no_img'>";

                        products += "<h1>"+ data[i].name + "</h1>";
			products += "<p class='price'> $" + data[i].price + "</p>";
                        products += "<p>" + data[i].description + "</p>";
                        products += "<p>In Stock: " + data[i].stockCount + "</p>";
                        products += "<p>Category: " + data[i].category + "</p>";
                        products += "<button class='productButton' onclick=\"addToCart('" + data[i].name + "')\">Add to Cart</button></div></div>";

                    }
                    //pass the products variable to the feedproducts div id in shopFrontx
                    $("#feedProducts").html(products);

                }
            }
        );

        //auto refresh list
        //setTimeout(getProducts, 10000);
    });

//Backend Product Feed code by Stephen//
//show product-update menu on backend page
$(document).ready(
//call API @routes/index.js && products.js to return products from db
    function getProducts() {
        $.ajax({
            type: 'GET',
            url: '/getProducts/',
            success: function (data) {

//populate products list using forms to submit data to API
//need 'action' in form to force API
                var products = "";

                for (var i = 0; i < data.length; i++) {
                    products += "<div class='row justify-content-md-left mt-12'><div class='card col-12'>";
                    products += "<div class='row' id='" + data[i].name + "'>";
                    products += "<div class='imageHolder'><img src='" + data[i].productImage + "' class='backImage' alt='no_img'></div><br>";

                    products += "<div class='col-md-6'>";
                    products += "<form method='post' action='/deleteProduct' name='deleteForm' id='deleteForm'>";
                    products += "<br><input type='text' name='productName' id='productName' value='" + data[i].name + "' readonly> :Name<br><input type='submit' id='deleteButton' value='DELETE PRODUCT'></form><br>";

                    products += "<form method='post' action='/updateProduct' name='updateProductForm' id='updateProductForm'>";
                    products += "<input type='text' name='productNameHidden' id='productNameHidden' style='display:none' value='" + data[i].name + "'>";
                    products += "<br><input type='text' name='productPrice' id='productPrice' value='" + data[i].price + "'> :Price";
                    products += "<br><input type='text' name='productCount' id='productCount' value='" + data[i].stockCount + "'> :Quantity";
                    products += "<br><input type='text' name='productCategory' id='productCategory' value='" + data[i].category + "'> :Category";
                    products += "<br><input type='text' name='productDescription' id='productDescription' value='" + data[i].description + "'> :Description";
                    products += "<br><input type='submit' id='updateProductButton' value='UPDATE PRODUCT'></form>";
                    products += "<br></div></div></div></div>";
                }

//pass the products variable to the feedproducts div id in shopBackend
                $("#manageProducts").html(products);
            }
        });

    });

//Image Preview code by Stephen//
//show image preview in add-product field
function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#preview').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

//category links. Angel. Not rly working if not in shopFront page
function categoryLink(id) {
    locationEnded = false;
    console.log(id);
    if (window.location != "http://danu7.it.nuigalway.ie:8684/shopFront") {

        window.location = "http://danu7.it.nuigalway.ie:8684/shopFront";
        locationEnded = true;
    }
    if (locationEnded){
        searchy(id);
    }
    else {
        searchy(id);
    }
    searchy(id);

}

//category links. Angel. Not rly working if not in shopFront page
function searchy(id){
    $.ajax({
        type: 'GET',
        url: '/getCategory/' + id,
        dataType: 'json',
        success: function (data) {

            var products = "";

            for (var i = 0; i < data.length; i++) {

                products += "<div class='productCard'>";
                products += "<div id='" + data[i].name + "'>";
                products += "<img src='" + data[i].productImage + "' style='width:100%' alt='no_img'>";

                products += "<h1>"+ data[i].name + "</h1>";
                products += "<p class='price'> $" + data[i].price + "</p>";
                products += "<p>" + data[i].description + "</p>";
                products += "<p>In Stock: " + data[i].stockCount + "</p>";
                products += "<p>Category: " + data[i].category + "</p>";
                products += "<button class='productButton' onclick=\"addToCart('" + data[i].name + "')\">Add to Cart</button></div></div>";

            }
            //pass the products variable to the feedproducts div id in shopFront
            $("#feedProducts").html(products);

        },
        error: function (errMsg) {
            console.log(errMsg);
        }
    });
}

$("#uploadInput").change(function () {
    readURL(this);
});
