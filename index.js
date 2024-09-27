let password = document.getElementById('password');
            let eyecon = document.getElementById('eyecon');

            eyecon.onclick = function() {
                if (password.type === 'password') {
                    password.type = 'text';
                    eyecon.src = "images/eye-open.png"
                } else {
                    password.type = 'password';  
                    eyecon.src = 'images/eye-close.png'
                }
            }