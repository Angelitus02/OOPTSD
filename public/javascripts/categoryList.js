$(document).ready(
//call API @routes/index.js && products.js to return products from db
    function popList() {
        $.ajax({
            type: 'GET',
            url: '/getProducts/',
            success: function (data) {

//populate products list using forms to submit data to API
//need 'action' in form to force API
                var list = "";
		var listArray= [];
                for (var i = 0; i < data.length; i++) {
                	if(listArray.includes(data[i].category))
			{ continue; }
			else {
			list += "<option name="+data[i].category+" value="+data[i].category+">"+data[i].category+"</option>";
			listArray.push(data[i].category);
			}
                }
	
		
//pass the products variable to the feedproducts div id in shopBackend
                $("#categoryList").html(list);
		$("#sideBarList").html(list);
            }
        });		
});
