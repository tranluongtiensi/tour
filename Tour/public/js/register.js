form.addEventListener('submit', async () => {
    const register = {
        username: username.value,
        password: password.value,
        password_confirmation: confirm_password.value,
        email: email.value
    }
    const result = await fetch('/api/register',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(register),
     }).then((res) => res.json())
     if (result.status === 'ok') {
        alert(result.success)
        window.location.href = '/login'
     }else {
       alert (result.error)
     }
})


  
