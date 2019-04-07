$(document).ready(

function (){
    $("#shopNav").click(function (event) {
            $(location).attr('href', '/shopFront' );
        }
    )

    $("#backEndNav").click(function (event) {
            $(location).attr('href', '/shopBackend' );
        }
    )

    $("#registerButton").click(function (event){
            $(location).attr('href', '/register' );
        }
    )

    $("#cartButton").click(function (event){
            $(location).attr('href', '/cart');
        }
    )
    $("#toLoginPageButton").click(function (event){
            $(location).attr('href', '/index');
        }
    )

    $("#createAccount").click(function (event){
            $(location).attr('href', '/shopFront' );
        }
    )


});

