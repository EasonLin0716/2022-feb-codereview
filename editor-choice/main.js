axios.get('https://randomuser.me/api/')
.then(res => {
    const response = res.data.results[0]
    const title = document.querySelector('h2');
    const content = document.querySelector('p');
    title.textContent = response.firstName + response.lastName
    content.textContent = response.email
})