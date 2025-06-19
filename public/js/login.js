const formDOM = document.forms[0];
const usernameDOM = document.getElementById('username');
const passwordDOM = document.getElementById('password');
const successDOM = document.getElementById('success_msg');
const errorUsernameDOM = document.getElementById('error_username');
const errorPasswordDOM = document.getElementById('error_password');

formDOM.addEventListener('submit', e => {
    e.preventDefault();

    const clientData = {
        username: usernameDOM.value,
        password: passwordDOM.value,
    };

    fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(clientData),
    })
        .then(res => res.json())
        .then(data => {
            successDOM.classList.remove('info-show');
            errorUsernameDOM.classList.remove('info-show');
            errorPasswordDOM.classList.remove('info-show');

            switch (data.status) {
                case 'success':
                    successDOM.textContent = data.msg;
                    successDOM.classList.add('info-show');
                    break;

                case 'error':
                    if (data.msg.username) {
                        errorUsernameDOM.textContent = data.msg.username;
                        errorUsernameDOM.classList.add('info-show');
                    }
                    if (data.msg.password) {
                        errorPasswordDOM.textContent = data.msg.password;
                        errorPasswordDOM.classList.add('info-show');
                    }
                    break;
            }
        })
        .catch(err => {
            console.log(err);
        });
});