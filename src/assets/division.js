const API =
  "https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=PLP92-SX-vOtbIOr2kPwX2PTgLAJU1xVoh&part=snippet&maxResults=4";

const content = null || document.getElementById("content");
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ba506c3db4mshb7124da7dac6fe1p15d68djsn55d10fb56d2c",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    let view = `
        ${videos.items.map(
          (video) => `
        <div class="group relative">
            <div
             class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
             <img src="${video.snippet.thumbnails.high.url}" alt="" class="w-full">
            </div>
        <div class="mt-4 flex justify-between">
        <a  href="https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}&list=${video.snippet.thumbnails.playlistId}" class="text-md text-gray-700 hover:text-primary">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </a>
        </div>
      </div>`
        )}
        `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();

const Api2 =
  "https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=PLP92-SX-vOtbMvJOYJr0SmzyvZlbQbveZ&part=snippet&maxResults=4";

const TD2content = null || document.getElementById("TD2content");
const options2 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ba506c3db4mshb7124da7dac6fe1p15d68djsn55d10fb56d2c",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

async function fetchData2(urlApi2) {
  const response2 = await fetch(urlApi2, options2);
  const data2 = await response2.json();
  return data2;
}

(async () => {
  try {
    const videos = await fetchData(Api2);
    let view = `
        ${videos.items.map(
          (video) => `
        <div class="group relative">
            <div
             class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
             <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
        <div class="mt-4 flex justify-between ">
        <a  href="https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}&list=${video.snippet.thumbnails.playlistId}" class="text-md text-gray-700 hover:text-primary">
        <span aria-hidden="true" class="absolute inset-0 " ></span>
        ${video.snippet.title}
      </a>
        </div>
      </div>`
        )}
        `;
    TD2content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();
