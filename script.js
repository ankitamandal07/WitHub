document.getElementById('jokeButton').addEventListener('click', async () => {
    const jokeDiv = document.getElementById('joke');
    jokeDiv.textContent = 'Loading...';

    try {
        const response = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                Accept: 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            if (data.status === 200) {
                jokeDiv.textContent = data.joke;
            } else {
                jokeDiv.textContent = 'Error: Unable to fetch a joke. Please try again.';
            }
        } else {
            jokeDiv.textContent = 'Error: Unable to fetch a joke. Please try again.';
        }
    } catch (error) {
        jokeDiv.textContent = 'Error: Something went wrong. Please check your connection and try again.';
    }
});
