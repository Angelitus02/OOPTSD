//Implemented by Sheril//

$(document).ready(
    function() {
	/**
         * Event handler for when the user attempts to register
         */
        $("#reg-form").submit(function (event) {
            event.preventDefault();
            $.ajax({
                type: 'POST',
                url: '/users/register',
                dataType: 'json',
                data: {
                    'user_name': event.target.inputUsername.value,
                    'password': event.target.inputPassword.value,
                    'full_name' : event.target.inputName.value,
                    'email': event.target.inputEmail.value,
                    'address1': event.target.inputAddress.value,
                    'address2': event.target.inputAddress1.value,
                    'zip_code': event.target.zipCode.value,
                    'phone_number': event.target.phoneNum.value,
                    'date_of_birth': event.target.birth.value,
                    'country': event.target.country.value

                },
                success: function(token){
                    $(location).attr('href', '/shopFront' );
                    // Redirect to a login page
                },
                error: function(errMsg) {
                    swal(
                        'Oops...',
                        errMsg.responseJSON.body,
                        'error'
                    )
                }
            });
        });

        $("#log-form").submit(function (event) {
            event.preventDefault();
            $.ajax({
                type: 'POST',
                url: '/users/login',
                dataType: 'json',
                data: {
                    'user_name': event.target.inputUsername.value,
                    'password': event.target.inputPassword.value
                },
                success: function(token){
                    //if success, redirects to /backend page
                    $(location).attr('href', '/shopBackend' );
                    // Redirect to logged in page
                },
                error: function(errMsg) {
                    swal(
                        'Oops...',
                        errMsg.responseJSON.body,
                        'error'
                    )
                }
            });
        });

    });//first function





