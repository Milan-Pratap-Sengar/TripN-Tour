
    
    document.addEventListener('DOMContentLoaded', () => {
        const OwnerLoginBtn = document.getElementById('OwnerLoginBtn');
        const PassangerLoginBtn = document.getElementById('PassangerLoginBtn');
        const OwnerLoginForm = document.getElementById('OwnerLogin');
        const PassangerLoginForm = document.getElementById('PassangerLogin');
    
    
        
        const OwnerSignupBtn = document.getElementById('OwnerSignupBtn');
        const PassangerSignupBtn = document.getElementById('PassangerSignupBtn');
        const OwnerSignupForm = document.getElementById('OwnerSignup');
        const PassangerSignupForm = document.getElementById('PassangerSignup');



        const loginBtn=document.getElementById("login");
        const website=document.getElementById("entire-website");
        const loginPage=document.getElementById("login-page");
        const signupPage=document.getElementById('signup-page');
        const backBtn1=document.getElementById("back1");
        const backBtn2=document.getElementById("back2");
        const backBtn3=document.getElementById("back3");
        const backBtn4=document.getElementById("back4");
        const ownerSignupLink=document.getElementById("owner-signup-link");
        const passangerSignupLink=document.getElementById("passanger-signup-link");
        const ownerLoginLink=document.getElementById("owner-login-link");
        const passangerLoginLink=document.getElementById("passanger-login-link");
        const locationBgDiv=document.getElementById('location-background-div');
        const locationContainer=document.getElementById('location-container');
        const denyButton=document.getElementById('denyButton');

        // code to toggle between main website and login-page

        loginBtn.addEventListener("click",function() {
            website.style.display="none";
            loginPage.style.display="block";
            document.body.style.backgroundImage = "url('https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
            document.body.style.backgroundSize="cover";
           
        })
        backBtn1.addEventListener("click",function(){
            website.style.display="block";
            loginPage.style.display="none";
            document.body.style.backgroundImage="none";
            website.classList.add('fade-animation');
        })
        backBtn2.addEventListener("click",function(){
            website.style.display="block";
            loginPage.style.display="none";
            document.body.style.backgroundImage="none";
            website.classList.add('fade-animation');
        })
        backBtn3.addEventListener("click",function(){
            signupPage.style.display="none";
            loginPage.style.display="block";
            // document.body.style.backgroundImage="none";
            // website.classList.add('fade-animation');
        })
        backBtn4.addEventListener("click",function(){
            signupPage.style.display="none";
            loginPage.style.display="block";
            // document.body.style.backgroundImage="none";
            // website.classList.add('fade-animation');
        })
        
        ownerSignupLink.addEventListener("click",function(){
            loginPage.style.display="none";
            signupPage.style.display="block";
            signupPage.style.width="30%";
            document.body.style.backgroundAttachment="fixed";
        })
        passangerSignupLink.addEventListener("click",function(){
            loginPage.style.display="none";
            signupPage.style.display="block";
            signupPage.style.width="30%";
            document.body.style.backgroundAttachment="fixed";
        })
        
        ownerLoginLink.addEventListener("click",function(){
            loginPage.style.display="block";
            signupPage.style.display="none";
        //     signupPage.style.width="30%";
        //     document.body.style.backgroundAttachment="fixed";
        })
        passangerLoginLink.addEventListener("click",function(){
            loginPage.style.display="block";
            signupPage.style.display="none";
        //     signupPage.style.width="30%";
        //     document.body.style.backgroundAttachment="fixed";
        })
    




    
        // Toggle to show the Owner login form and hide the Passanger login form
        // "show" class is used to diplay the content and 'hidden' class is used to hide the content.
        OwnerSignupBtn.addEventListener('click', () => {
            OwnerSignupForm.classList.add('show');
            // OwnerSignupForm.classList.remove('hidden');
            // PassangerSignupForm.classList.add('hidden');
            PassangerSignupForm.classList.remove('show');
    
            OwnerSignupBtn.classList.add('active');
            PassangerSignupBtn.classList.remove('active');
        });
    
        // Toggle to show the Passanger login form and hide the Owner login form
        PassangerSignupBtn.addEventListener('click', () => {
            PassangerSignupForm.classList.add('show');
            // PassangerSignupForm.classList.remove('hidden');
            // OwnerSignupForm.classList.add('hidden');
            OwnerSignupForm.classList.remove('show');
    
            PassangerSignupBtn.classList.add('active');
            OwnerSignupBtn.classList.remove('active');
        });
    
        OwnerLoginBtn.addEventListener('click', () => {
            OwnerLoginForm.classList.add('show');
            // OwnerLoginForm.classList.remove('hidden');
            // PassangerLoginForm.classList.add('hidden');
            PassangerLoginForm.classList.remove('show');
    
            OwnerLoginBtn.classList.add('active');
            PassangerLoginBtn.classList.remove('active');
        });
    
        // Toggle to show the Passanger login form and hide the Owner login form
        PassangerLoginBtn.addEventListener('click', () => {
            PassangerLoginForm.classList.add('show');
            // PassangerLoginForm.classList.remove('hidden');
            // OwnerLoginForm.classList.add('hidden');
            OwnerLoginForm.classList.remove('show');
    
            PassangerLoginBtn.classList.add('active');
            OwnerLoginBtn.classList.remove('active');
        });
    
        // // Handle form submissions
        document.getElementById('OwnerLoginForm').addEventListener('submit', (event) => {
            event.preventDefault(); 
            loginPage.style.display="none";
            document.body.style.backgroundImage="none";
            locationBgDiv.style.display="block";
            locationContainer.style.display="block";
            locationContainer.classList.add('fade-animation');
        });
    
        document.getElementById('PassangerLoginForm').addEventListener('submit', (event) => {
            event.preventDefault(); 
            loginPage.style.display="none";
            document.body.style.backgroundImage="none";
            locationBgDiv.style.display="block";
            locationContainer.style.display="block";
            locationContainer.classList.add('fade-animation');
        });

        denyButton.addEventListener("click",function(){
            website.style.display="block";
            locationBgDiv.style.display="none";
            locationContainer.style.display="none";
            website.classList.add('fade-animation');
        });
    });

    
