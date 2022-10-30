form.addEventListener('submit', async () => {
    const ticket = {
        quantity: ticket_quantity.value,
        email: ticket_email.value,
    }
    const result = await fetch('/api/buytickets',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(ticket),
     }).then((res) => res.json())
     if (result.status === 'ok') {
        alert(result.success)
    }
})