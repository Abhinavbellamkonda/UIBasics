function validateform(){
    console.log("Validation starts");
    var errors="";                               
    

    var fname = document.getElementById("fname").value;
    if(fname=='' || fname==undefined){
        errors=errors+"please enter first name.<br>";
    }

    var lname = document.getElementById("lname").value;
    if(lname=='' || lname==undefined){
        errors=errors+"please enter last name.<br>";
    }

    var email =document.getElementById("email").value;
    if(email==''||email==undefined){
        errors=errors+"please enter the email id.<br>";
    }else{
        var Emformate=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!email.match(Emformate)){
            errors=errors+"please enter the valid id form.<br>";
        }
    }

    var dob = document.getElementById("dob").value;
    if(dob=='' || dob==undefined){
        errors=errors+"please enter dob.<br>";
    }

    var phone =document.getElementById("phone").value;
    if(phone==''||phone==undefined){
        errors=errors+"please enter the phone number.<br>";
    }else{
        var Phformate=/^\d{10}$/;
        if(!phone.match(Phformate)){
            errors=errors+"please enter valid phone number.<br>";
        }
    }

    var male=document.getElementById("male").checked;
    var female=document.getElementById("female").checked;
    if((male==''||male==undefined)&&(female==''||female==undefined)){
        errors=errors+"please select the gender.<br>";
    }

    var sedan=document.getElementById("sedan").checked;
    var suv=document.getElementById("suv").checked;
    var truck=document.getElementById("truck").checked;
    var sports=document.getElementById("sports").checked;
    if((sedan==''||sedan==undefined)&&(suv==''||suv==undefined)&&(truck==''||truck==undefined)&&(sports==''||sports==undefined)){
        errors=errors+"please select the desired models.<br>";
    }

    var country=document.getElementById("cun").value;
    if(country=''||country==undefined){
        errors=errors+"please select your country.<br>";
    }

    var password=document.getElementById("password").value
    if(password==''||password==undefined){
        errors=errors+"please type your password.<br>";
    }

    var confirmpassword=document.getElementById("conpassword").value;
    if(confirmpassword==''||confirmpassword==undefined){
        errors=errors+"choose your password to confirm again.<br>";
    }

    if(password!=''&& password!=undefined&&confirmpassword==''&&confirmpassword==undefined){
        if(password!=confirmpassword){
            errors=errors+"password did not match.<br>";
        }
    }

    document.getElementById("errors").innerHTML =errors;
    console.log("validation ends");

    if(errors==""){
        var success="Signed up sucessfully";
        alert("suces");
        document.getElementById("successmessage").innerHTML=success;
        console.log("validation ended");
    }
    

}

function confirmdelete(){
    if(confirm("Are you sure to clear the feilds")){
        clearall();
    }else{
        //all feilds remain same 
    }
}


function clearall(){
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("email").value="";
    document.getElementById("dob").value="";
    document.getElementById("phone").value="";
    document.getElementById("male").ariaChecked=false;
    document.getElementById("female").ariaChecked=false;
    document.getElementById("sedan").ariaChecked=false;
    document.getElementById("suv").ariaChecked=false;
    document.getElementById("truck").ariaChecked=false;
    document.getElementById("sports").ariaChecked=false;
    document.getElementById("cun").value="";
    document.getElementById("password").value="";
    document.getElementById("conpassword").value="";


}

function add(num1,num2){
    alert(num1+num2)
}