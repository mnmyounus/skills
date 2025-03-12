        function checkPassword() {
            var password = document.getElementById("password").value;
            if (password === "y@") {
                window.location.href = "load.html";
            } else {
                alert("Incorrect password. Please try again.");
            }
        }
