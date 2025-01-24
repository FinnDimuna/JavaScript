async function getBreeds (){
    try {
        let breeds = await fetch('https://api.thecatapi.com/v1/breeds');
        if (!breeds.ok) {
            throw new Error(`Breed's haven't fetched: ${breeds.status}`);
        }
        breeds = await breeds.json();
        return breeds;
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

async function addList () {
    let data = await getBreeds();
    for (let breed of data) {
        let option = document.createElement('option');
        option.innerHTML = `${breed.name}`;
        option.setAttribute('breedId', `${breed.id}`);
        document.querySelector('#breeds').lastChild.after(option);
    }
}

async function getanimalImg(breedId) {
    if (document.querySelector('.animalImg')) document.querySelector('.animalImg').remove();
    let animal = await fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${breedId}`);
    animal = await animal.json();
    animal = animal[0];
    let animalImg = document.createElement('img');
    animalImg.src = `${animal.url}`;
    animalImg.className = 'animalImg';
    animalImg.style.width = `${animal.width}px`;
    animalImg.style.height = `${animal.height}px`;
    animalImg.style.top = '20px';

    document.querySelector('#animalContainer').append(animalImg);
    if (animalImg.clientWidth > window.innerWidth) animalImg.style.width = `${document.documentElement.clientWidth - animalImg.getBoundingClientRect().left}px`;
    if (animalImg.clientHeight > document.documentElement.clientHeight) animalImg.style.height = `${document.documentElement.clientHeight - animalImg.getBoundingClientRect().top}px`;
}


addList();
document.querySelector('#breeds').onchange = (event) => {
    getanimalImg(event.currentTarget.selectedOptions[0].getAttribute('breedId'));
}

