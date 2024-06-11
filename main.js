function validateForm()
{
  let fname = document.getElementById('fname').value;
  let lname = document.getElementById('lname').value;
  let address = document.getElementById('address').value;
  let phonenumber= document.getElementById('phonenumber').value;
  let product = document.getElementById('product').value;
  let quantity = document.getElementById('quantity').value;
  let payment = document.getElementById('payment').value;

  if 
  (fname === "" || lname === "" || address === "" || phonenumber === "" || product ==="" || quantity === "" || payment === "") 
  {
    alert("Please fill out all the forms. THANKYOU");
    return false;
    
  }
  else 
  {
    location.href ='thankyou.html';
  }
}