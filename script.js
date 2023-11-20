function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function toggleDropdown() {
    var dropdown = document.getElementById('fdegrees');
    dropdown.classList.toggle('open');
}


function validateForm()
{
    var returnval = true;

    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["name"].value;
    if (name.length<5){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0){
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    var email = document.forms['myForm']["email"].value;
    if (email.length>15){
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10){
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    
    // Validation for password: Check for a minimum length, at least 1 special character, and at least 1 digit
    if (password.length < 8) {
        seterror("pass", "*Password should be at least 8 characters long!");
        returnval = false;
    } else if (!/(?=.*\d)(?=.*\W)/.test(password)) {
        seterror("pass", "*Password should contain at least 1 special character and 1 digit.");
        returnval = false;
    } 

    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }




    
    

  

    if (returnval) {
        // Redirect to home.html after a successful form submission
        alert("Registered Successfully!");
        window.location.href = 'CardPage.html'; // Replace 'home.html' with your desired destination page
        return false; // Prevent the form from actually submitting (you're handling the redirect)
    } else {
        return false; // Prevent the form from submitting if there are validation errors
    }

    //return returnval;
}


// ... (existing code)


