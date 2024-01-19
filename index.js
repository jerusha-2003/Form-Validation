let formData=document.querySelector(".form");
let submitButton=document.querySelector(".button");
let errorMessages=document.querySelectorAll(".error-message");
let emptyfieldmessages=document.querySelectorAll(".empty-field");
let showpassword=document.querySelector(".btn")

let firstName,lastName,email,password;
let fntarget,lntarget,etarget,pwdtarget;
let field;
let fnflag,lnflag,eflag,pwdflag;

let nameRegex=/^[a-z]+$/i;
let emailRegex= /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let passwordRegex=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

for(let errorMessage of errorMessages){
    errorMessage.classList.add("d-none")
}

for(let emptyfieldmessage of emptyfieldmessages){
    emptyfieldmessage.classList.add("d-none")
}

formData.addEventListener("keyup",(e)=>{
    e.preventDefault();
    field=e.target.dataset.key
    switch(field){
        case "firstName":
            firstName=e.target.value;
            fntarget=e.target
            break;
        case "lastName":
            lastName=e.target.value;
            lntarget=e.target
            break;
        case "email":
            email=e.target.value;
            etarget=e.target
            break;
        case "password":
            password=e.target.value;
            pwdtarget=e.target
            break;
        default:
            firstName = lastName = email = password =" ";
            break;
    }

})

submitButton.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log(firstName,lastName,email,password);
    if(firstName){
        emptyfieldmessages[0].classList.add("d-none")
        if(!nameRegex.test(firstName)){
            fntarget.classList.add("error")
            errorMessages[0].classList.remove("d-none")
            fnflag=false
        }else{
            fntarget.classList.remove("error")
            errorMessages[0].classList.add("d-none")
            fnflag=true
        }
    }else{
        emptyfieldmessages[0].classList.remove("d-none")
    }
    if(lastName){
        emptyfieldmessages[1].classList.add("d-none")
        if(!nameRegex.test(lastName)){
            lntarget.classList.add("error")
            errorMessages[1].classList.remove("d-none")
            lnflag=false
        }else{
            lntarget.classList.remove("error")
            errorMessages[1].classList.add("d-none")
            lnflag=true
        }
    }else{
        emptyfieldmessages[1].classList.remove("d-none")
    }
    if(email){
        emptyfieldmessages[2].classList.add("d-none")
        if(!emailRegex.test(email)){
            etarget.classList.add("error")
            errorMessages[2].classList.remove("d-none")
            eflag=false
        }else{
            etarget.classList.remove("error")
            errorMessages[2].classList.add("d-none")
            eflag=true
        }
    }else{
        emptyfieldmessages[2].classList.remove("d-none")
    }
    if(password){
        emptyfieldmessages[3].classList.add("d-none")
        if(!passwordRegex.test(password)){
            pwdtarget.classList.add("error")
            errorMessages[3].classList.remove("d-none")
            pwdflag=false
        }else{
            pwdtarget.classList.remove("error")
            errorMessages[3].classList.add("d-none")
            pwdflag=true
        }
    }else{
        emptyfieldmessages[3].classList.remove("d-none")
    }

    if(fnflag && lnflag && eflag && pwdflag){
        fntarget.value = lntarget.value = etarget.value = pwdtarget.value="";
        window.location.href="success.html"
    }
})

showpassword.addEventListener("click",(e)=>{
    e.preventDefault();
    if(pwdtarget.getAttribute("type")==="text"){
        pwdtarget.setAttribute("type","password")
    }else{
        pwdtarget.setAttribute("type","text")
    }
})