let searchBtn = document.querySelector('#search-btn')
let searchBar = document.querySelector('.search-bar-container')
let formBtn = document.querySelector('#login-btn')
let loginForm = document.querySelector('.login-form-container')
let formClose = document.querySelector('#form-close')
let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.navbar')
let videoBtn = document.querySelectorAll('.vid-btn')


window.onscroll = ()=>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}
menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})
searchBtn.addEventListener('click', ()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
})
formBtn.addEventListener('click', ()=>{
    loginForm.classList.add('active');
})
formClose.addEventListener('click', ()=>{
    loginForm.classList.remove('active');
})
/** video **/
videoBtn.forEach(btn => {
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

/** validation **/
let id = function(id) { return document.getElementById(id)};

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
email = id("email"),
password = id("password"),
form = id("form"),

errorMsg = classes("error"),
successIcon = classes("success-icon"),
failureIcon = classes("failure-icon");

function validateForm() {
    const name = id('username').value;
    const email = id('email').value;
    const password = id('password').value;

    if (name.trim() === '') {
        Swal.fire({
            title: "Warning",
            text: "Username can't be blank",
            icon: "warning"
          });
        return false;
    } else if (name.length <= 3) {
        Swal.fire({
            title: "Warning",
            text: "Name must be at least 3 letters long.",
            icon: "warning"
          });
        return false;
    }

    if (email.trim() === '') {
        Swal.fire({
            title: "Warning",
            text: "Email can't be blank",
            icon: "warning"
          });
        return false;
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            Swal.fire({
                title: "Invalid",
                text: "Please enter a valid email address",
                icon: "warning"
              });
            return false;
        }
    }

    if (password.trim() === '') {
        Swal.fire({
            title: "Warning",
            text: "Password can't be blank",
            icon: "warning"
          });
        return false;
    }

    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
    return true;
}

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Call the validation function
    if (validateForm()) {
        // If validation is successful, proceed with form submission
        // You can submit the form using the following line:
        // e.target.submit();
    }

    
    
});
let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";

        // icons
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";

        // icons
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";   
    }
}
