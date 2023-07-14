

const editableText= document.getElementById('editable-text');

if(localStorage.getItem('savedText')){
  editableText.textContent=localStorage.getItem('savedText');
}


editableText.addEventListener('input', function(){

  localStorage.setItem('savedText',this.textContent);
})
function performSearch() {
  var query = document.getElementById('searchBox').value;

  // Check if the query starts with "http://" or "https://"
  if (!query.startsWith("http://") && !query.startsWith("https://")) {
    // Check if the query ends with a top-level domain (e.g., ".com", ".org", etc.)
    if (!query.includes(".")) {
      query = "https://www.google.com/search?q=" + encodeURIComponent(query);
    } else {
      query = "https://" + query;
    }
  }

  // Check if the query is a valid URL
  if (isValidURL(query)) {
    window.open(query, '_blank');
  } else {
    var searchURL = 'https://www.google.com/search?q=' + encodeURIComponent(query);
    window.open(searchURL, '_blank');
  }
}

function handleKeyPress(event) {
  if (event.keyCode === 13) {
    performSearch();
  }
}

function isValidURL(url) {
  var pattern = /^(ftp|http|https):\/\/[^ "]+$/;
  return pattern.test(url);
}