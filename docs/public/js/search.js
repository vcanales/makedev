(function() {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = handleResponse;
  var imageInput = document.querySelector('[name=image_name]');
  imageInput.addEventListener('change', function() {
    if (imageInput.value.trim() != "") {
      httpRequest.open('GET', 'https://evening-cove-18714.herokuapp.com/search?source=community&q='+imageInput.value.trim()+'&page=1&page_size=6')
      httpRequest.send();
    }
  });
}());

function handleResponse(a) {
  console.log(a);
}
