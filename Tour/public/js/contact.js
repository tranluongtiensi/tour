form2.addEventListener('submit', async () => {
    const contact = {
        username: username.value,
        email: email.value,
        message: message.value
    }
    const result = await fetch('/api/contact',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact),
     }).then((res) => res.json())
     if (result.status === 'ok') {
        alert(result.success)
    }
})