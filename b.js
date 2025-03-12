        function checkPassword() {
            var password = document.getElementById("password").value;
            if (password === "by@") {
                window.location.href = "bl";
            } else {
                alert("Incorrect password. Please try again.");
            }
        }
