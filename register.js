function deleteIt(){
    var element = document.getElementById(" deleteIt ");
         element.reset()
}

var degreeCount = 1;
function DegreeSectionAdd() {
    console.log("hiiiiiiiiiii")
    // const data = document.getElementById("degree-section");
    var newDegreeSection = document.createElement("div");
    // newDegreeSection.innerHTML = "<lable>Degree" + (degreeCount + 1) + "<br></lable> <input type='text' name='degree" + (degreeCount + 1) + "'><img src="img/components-icons-delete.png" onclick='deleteIt()' type='button' id='deleteIt'>";
    newDegreeSection.innerHTML = "<lable>Degree" + (degreeCount + 1) + "<br></lable> <input class='input-box' type='text' id='degree' name='degree" + (degreeCount + 1) + "'><img src='img/components-icons-delete.png' class='icon' onclick='deleteIt()' type='button' id='deleteIt'>";
    degreeCount++;
    document.getElementById("degree-section").appendChild(newDegreeSection);
};



function myOnclick() {

}


//Validation

function clearErrors() {

    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }


}
function seterror(id, error) {
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function toggleDropdown() {
    var dropdown = document.getElementById('fdegrees');
    dropdown.classList.toggle('open');
}



function validateForm(event) {
    // event.preventDefault();
    console.log("jiojooooooooooo")
    // var returnval = true;

    // clearErrors();



}


const form = document.getElementById("sample-form");
// form.addEventListener("submit", validateForm(event));
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // validations start 

    // event.preventDefault();
    // console.log("jiojooooooooooo")
    // // var returnval = true;

    //  clearErrors();

    // //perform validation and if validation fails, set the value of returnval to false
    // var name = document.forms['myForm']["name"].value;
    // if (name.length<5){
    //     seterror("name", "*Length of name is too short");
    //     returnval = false;
    // }

    // if (name.length == 0){
    //     seterror("name", "*Length of name cannot be zero!");
    //     returnval = false;
    // }

    // var email = document.forms['myForm']["email"].value;
    // if (email.length>15){
    //     seterror("email", "*Email length is too long");
    //     returnval = false;
    // }

    // var phone = document.forms['myForm']["fphone"].value;
    // if (phone.length != 10){
    //     seterror("phone", "*Phone number should be of 10 digits!");
    //     returnval = false;
    // }

    // var password = document.forms['myForm']["fpass"].value;

    // // Validation for password: Check for a minimum length, at least 1 special character, and at least 1 digit
    // if (password.length < 8) {
    //     seterror("pass", "*Password should be at least 8 characters long!");
    //     returnval = false;
    // } else if (!/(?=.*\d)(?=.*\W)/.test(password)) {
    //     seterror("pass", "*Password should contain at least 1 special character and 1 digit.");
    //     returnval = false;
    // } 

    // var cpassword = document.forms['myForm']["fcpass"].value;
    // if (cpassword != password){
    //     seterror("cpass", "*Password and Confirm password should match!");
    //     returnval = false;
    // }

    // validations end 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var pass = document.getElementById("pass").value;
    var degrees = document.getElementById("degrees").value;
    var graduationDates = document.getElementById("graduationDate").value;
    var online = document.getElementById("online").value;
    var inperson = document.getElementById("inperson").value;



    // console.log(name)
    let user = {
        name,
        email,
        phone,
        pass,
        degrees,
        graduationDates,
        online,
        inperson
    }



    fetch("http://localhost:3000/user", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    }).then(response => response.json())
        .catch(error => { console.log(error) })
    console.log('hi');
});
// ... (existing code)


