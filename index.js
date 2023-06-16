
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const formObject = Object.fromEntries(formData);
  const json = JSON.stringify(formObject);
  localStorage.setItem('form',json);
  console.log(formObject);

})
  

 

  
 