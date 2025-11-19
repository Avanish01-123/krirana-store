
       const adminBtn = document.getElementById("admin-btn");

// Step: Admin login access (special shortcut key)
document.addEventListener("keydown", (e)=>{
    if(e.key === "A"){   // Press A to open admin login
        const pass = prompt("Enter Admin Password:");
        if(pass === "admin"){
            adminBtn.style.display = "inline-block"; // show button only after login
            adminModal.classList.add("show");
        } else {
            alert("Wrong password!");
        }
    }
});

// When admin clicks button again, ask password again for safety
adminBtn.onclick = ()=>{
    const pass = prompt("Enter Admin Password:");
    if(pass === "admin"){
        adminModal.classList.add("show");
    } else {
        alert("Wrong password");
    }
};     
