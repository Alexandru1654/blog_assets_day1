document.addEventListener("DOMContentLoaded", () => {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
        .then(response => {
            const photos = response.data;
            const main = document.getElementById('photo-container');

            photos.forEach(photo => {
                const card = document.createElement('div');
                card.className = 'card';

                const imgContainer = document.createElement('div');
                imgContainer.className = 'img-container';

                const img = document.createElement('img');
                img.src = photo.thumbnailUrl; 
                img.alt = photo.title;

                imgContainer.appendChild(img);
                card.appendChild(imgContainer);

                const title = document.createElement('span');
                title.className = 'texts';
                title.innerText = photo.title;
                card.appendChild(title);

                main.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Errore durante la chiamata all\'API:', error);
        });
});





