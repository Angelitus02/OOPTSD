$(document).ready(
    function () {
        /**
         * Event handler for when the user attempts to search for a product
         */
        $("#search-form").submit(function (event) {
            event.preventDefault();
            $.ajax({
                type: 'POST',
                url: '/findProduct',
                dataType: 'json',
                data: {
                    'name': event.target.inputName.value,
                },
                success: function () {
                    //if success, redirects to /backend page
                    $(location).attr('href', '#' + event.target.inputName.value);
                    // Redirect to logged in page
                },
                error: function (errMsg) {
                    console.log(errMsg);
                }
            });
        });
    });
