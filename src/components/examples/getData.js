// XHR 
const xhr = new XMLHttpRequest();


xhr.open('GET', "https://jsonplaceholder.typicode.com/posts", true);

xhr.onload = function () {
  if (xhr.status === 200) {
    const responseData = JSON.parse(xhr.responseText);
    console.log('Data:', responseData);
  } else {
    console.error('Error:', xhr.statusText);
  }
};

xhr.onerror = function () {
  console.error('Network error occurred');
};

xhr.send();


// ----------------------------------------------------------------------------------------------------------------------------
// Axios
const axios = require('axios');

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

axios.get(apiUrl)
  .then(response => {
    console.log('Data:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });


  
  
  
  
// ----------------------------------------------------------------------------------------------------------------------------
// Fetch

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(userData => {
    console.log('User Data:', userData);
  })
  .catch(error => {
    console.error('Error:', error);
  });






  
// ----------------------------------------------------------------------------------------------------------------------------
// Async Fetch

async function getData () {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const json = await response.json();
        return json;
        
    } catch (error) {
            console.error("Ops!", error);
    }
}

