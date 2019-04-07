function addToCart(p) {
    $.ajax({
            type: 'POST',
            url: '/addToCart/' + p,
            success: function (data) {
                //alert or something: item was successfully added to cart :))
            }
        }
    )};
//needs renaming and tidy up


