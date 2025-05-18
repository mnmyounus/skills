 function checkPassword() {
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    // Dummy login check (replace with real logic)
    if (name === "y" && password === "y@") {
      // Save login status
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "load.html";
    } else {
      alert("Invalid credentials!");
    }
  }
