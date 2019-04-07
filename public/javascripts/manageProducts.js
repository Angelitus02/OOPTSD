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
                    products += "<div class='row justify-content-md-left pt-12'><div class='card col-12'>";
                    	products += "<div class='row' id='" + data[i].name + "'>";
                    	products += "<div class='imageHolder'><img src='" + data[i].productImage + "' class='img-fluid' alt='no_img'></div><br>";
		    
		    products += "<div class='col-md-6'>";
                    	products += "<form method='post' action='/deleteProduct' name='deleteForm' id='deleteForm'>";
                    	products += "<br><input type='text' name='productName' id='productName' value='" + data[i].name + "' readonly> :Name<br><input type='submit' id='deleteButton' value='DELETE PRODUCT'></form><br>";
                    	
			products += "<form method='post' action='/updateProduct' name='updateProductForm' id='updateProductForm'>";
                       	products += "<input type='text' name='productNameHidden' id='productNameHidden' style='display:none' value='" + data[i].name + "'>";
                    	products += "<br><input type='text' name='productPrice' id='productPrice' value='" + data[i].price + "'> :Price";
                    	products += "<br><input type='text' name='productCount' id='productCount' value='" + data[i].stockCount + "'> :Quantity";			
			products += "<br><input type='text' name='productCategory' id='productCategory' value='" + data[i].category+ "'> :Category";
			products += "<br><input type='text' name='productDescription' id='productDescription' value='" + data[i].description + "'> :Description";
                    	products += "<br><input type='submit' id='updateProductButton' value='UPDATE PRODUCT'></form>";
		    products += "<br></div></div></div></div>";
                }

//pass the products variable to the feedproducts div id in shopBackend
                $("#manageProducts").html(products);
            }
        });

    });
