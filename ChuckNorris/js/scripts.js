const getJokes = async () => {
    const res = await fetch('https://api.chucknorris.io/jokes/random')
    const random_joke = await res.json()
    document.querySelector('p').innerText = random_joke.value
    document.querySelector('small').style.display = 'none'
}


