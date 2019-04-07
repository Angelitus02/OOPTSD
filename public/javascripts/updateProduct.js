// $(document).ready(
//     function () {
//         /**
//          * Event handler for when the user attempts to update a product
//          */
//         console.log("update price fn");
//
//         $("#updateProductForm").submit(function (event) {
//             alert("hello");
//             console.log(event.target);
//             event.preventDefault();
//             $.ajax({
//                 type: 'POST',
//                 url: '/updateProduct',
//                 dataType: 'json',
//                 data: {
//                     'name': event.target.productNameHidden.value,
//                     'price': event.target.productPrice.value,
//                     'stockCount': event.target.productCount.value,
//                     'category': event.target.productCategory.value,
//                     'description': event.target.productDescription.value,
//                 },
//                 success: function () {
//                     alert("hallo");
//                     console.log("fn success");
//                     console.log(name);
//                     //if success, redirects to /backend page
//                 },
//                 error: function (errMsg) {
//                     console.log(errMsg);
//                 }
//             });
//         });
//     });
