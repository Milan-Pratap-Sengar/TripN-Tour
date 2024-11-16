let loginBtn=document.getElementById("login");
let website=document.getElementById("entire-website");
let loginPage=document.getElementById("login-page");
let backBtn=document.getElementById("back");
loginBtn.addEventListener("click",function() {
    website.style.display="none";
    loginPage.style.display="block";
    document.body.style.backgroundImage = "url('https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    document.body.style.backgroundSize="100% 130%";
})
backBtn.addEventListener("click",function(){
    website.style.display="block";
    loginPage.style.display="none";
    document.body.style.backgroundImage="none";
})
document.addEventListener('DOMContentLoaded', () => {
    const adminLoginBtn = document.getElementById('adminLoginBtn');
    const managerLoginBtn = document.getElementById('managerLoginBtn');
    const adminLoginForm = document.getElementById('adminLogin');
    const managerLoginForm = document.getElementById('managerLogin');

    // Toggle to show the Admin login form and hide the Manager login form
    adminLoginBtn.addEventListener('click', () => {
        adminLoginForm.classList.add('show');
        adminLoginForm.classList.remove('hidden');
        managerLoginForm.classList.add('hidden');
        managerLoginForm.classList.remove('show');

        adminLoginBtn.classList.add('active');
        managerLoginBtn.classList.remove('active');
    });

    // Toggle to show the Manager login form and hide the Admin login form
    managerLoginBtn.addEventListener('click', () => {
        managerLoginForm.classList.add('show');
        managerLoginForm.classList.remove('hidden');
        adminLoginForm.classList.add('hidden');
        adminLoginForm.classList.remove('show');

        managerLoginBtn.classList.add('active');
        adminLoginBtn.classList.remove('active');
    });

    // Handle form submissions
    document.getElementById('adminLoginForm').addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents the default form submission
        // Add your admin login logic here (e.g., API call, validation, etc.)
        alert('Admin login form submitted');
    });

    document.getElementById('managerLoginForm').addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents the default form submission
        // Add your manager login logic here (e.g., API call, validation, etc.)
        alert('Manager login form submitted');
    });
});
