form.addEventListener('submit', async () => {
    const login = {
        email: email.value,
        password: password.value
    }
const result = await fetch('/api/login', { 
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(login)
}).then((res) => res.json())
if (result.status === 'ok') {
    console.log('Got the token: ', result.data)
    alert(result.success)
    window.location.href = '/home'
}else 
  {
 alert (result.error)
   }
})