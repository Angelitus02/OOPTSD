// $(document).ready(
//     function() {
//         /**
//          * Event handler for when the user attempts to register
//          */
// 	console.log("update price fn");
// 	 $("#updatePriceForm").submit(function (event) {
//             event.preventDefault();
//             $.ajax({
//                 type: 'POST',
//                 url: '/updatePrice',
//                 dataType: 'json',
//                 data: {
//                     	'price': event.target.productPrice.value,
//                     },
//                 success: function(){
//                     console.log("fn success");
// 		    console.log(name);
// 		    //if success, redirects to /backend page
//                     $(location).attr('href', '/backend' );
//                     // Redirect to logged in page
//                 },
//                 error: function(errMsg) {
//                    console.log(errMsg);
//   	        }
// });
// });
// });
