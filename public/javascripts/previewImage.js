function readURL(input) {
console.log("checking1");

  if (input.files && input.files[0]) {
    var reader = new FileReader();
	console.log("checking2");

    reader.onload = function(e) {
      $('#preview').attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
	console.log("checking3");
  }
}

$("#uploadInput").change(function() {
  readURL(this);
});