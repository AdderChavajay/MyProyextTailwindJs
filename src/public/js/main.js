const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCcVNDl7ZJMf9lC9a34CY4RA&part=snippet%2Cid&order=date&maxResults=50'
const episodesYt = document.getElementById('episodesYt');


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2e35a2eb92msh6e630e0e2b794abp173c1ajsnb317056dbd20',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const fetchData = async (urlApi) =>{
    const response = await fetch(urlApi, options)
    const data = await response.json();
    return data;
}


(async () => {
    try {
        const video = await fetchData(API)

        const view = `
            ${video.items.map(videos => `
                <div class="cards shadow-lg bg-white rounded">
                <div class="w-full">
                    <img src="${videos.snippet.thumbnails.high.url}" class="object-fill w-full" alt="">
                </div>
                <article class="p-2">
                    <h3 class="text-lg font-bold text-center">${videos.snippet.title}</h3>
                    <p class="text-gray-400">
                        ${videos.snippet.description}
                    </p>
                </article>
                <div class="buttons flex gap-2 justify-center">
                    <button class="bg-sky-700 flex items-center justify-center p-3 rounded-full font-bold" size="large">
                        <ion-icon class="text-white font-bold" name="cart-outline"></ion-icon>
                    </button>
                    <button class="bg-sky-700 flex items-center justify-center p-3 rounded-full font-bold" size="large">
                        <ion-icon class=" text-white" name="heart-outline"></ion-icon>
                    </button>
                </div>
                <div class="p-2"></div>
                </div>
            `).slice(0,4).join('')}
        `;
        episodesYt.innerHTML = view;
    } catch (error) {
        console.log(error)
    }
})();
