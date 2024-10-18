document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.container');

    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
        .then(response => {
            const photos = response.data;

            photos.forEach(photo => {
                const card = document.createElement('div');
                card.classList.add('card');

                const box = document.createElement('div');
                box.classList.add('box');

                const img = document.createElement('img');
                img.src = photo.thumbnailUrl;
                img.alt = photo.title;

                const text = document.createElement('span');
                text.classList.add('text');
                text.innerText = photo.title;

                box.appendChild(img);
                card.appendChild(box);
                card.appendChild(text);
                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});


