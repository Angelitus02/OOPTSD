$(document).ready(
    //call API @routes/index.js && products.js to return products from db
    function getProducts() {
        $.ajax({
            type: 'GET',
            url: '/getProducts/',
            success: function (data) {

                var sideBarContent = "";
		sideBarContent += "<form method='post' id='search-form'>Search by Name: ";
                sideBarContent += "<input type='text' id='inputName' name='inputName' placeholder='Enter product name'>";
		sideBarContent += "<input type='submit' id='searchsubmission' value='Search'></form>";
                                                                    


		sideBarContent += "<select label='searchSidebar' class='selectpicker' data-style='btn-info' name='selectpicker' onchange='fillCategoryField()'>";
       		sideBarContent += "<optgroup id='categoryList' label='Select Category'></optgroup></select>";
                }
                //pass the products variable to the feedproducts div id in shopFront
                $("#sideBar").html(sideBarContent);
            }
        });

        //auto refresh list
        setTimeout(getProducts, 10000);
    });
