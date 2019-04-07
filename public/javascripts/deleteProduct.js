// $(document).ready(
//     function () {
//         /**
//          * Event handler for when the user attempts to delete a product
//          */
//         console.log("product deletion fn");
//         $("#deleteForm").submit(function (event) {
//             event.preventDefault();
//             $.ajax({
//                 type: 'POST',
//                 url: '/deleteProduct',
//                 dataType: 'json',
//                 data: {
//                     'name': event.target.productName.value,
//                 },
//                 success: function () {
//                     console.log("fn success");
//                     console.log(name);
//                     //if success, redirects to /backend page
//                     $(location).attr('href', '/shopBackend');
//                     // Redirect to logged in page
//                 },
//                 error: function (errMsg) {
//                     console.log(errMsg);
//                 }
//             });
//         });
//     });
