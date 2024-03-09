//song list
let All_song = [
  {
    name: "Aaluma Doluma",
    path: "audio2/1.mp3",
    img: "images Anirudh/1.jpg",
    singer: "Anirudh Ravichander",
  },
  {
    name: "Bagulu Odayum Dagulu Maari",
    path: "audio2/2.mp3",
    img: "images Anirudh/2.jpg",
    singer: "Dhanush",
  },
  {
    name: "Dharala Prabhu",
    path: "audio2/3.mp3",
    img: "images Anirudh/3.jpg",
    singer: "Anirudh Ravichander",
  },
  {
    name: "Ethir Neechal",
    path: "audio2/4.mp3",
    img: "images Anirudh/4.jpg",
    singer: "Anirudh Ravichander & Hip Hop Tamizha Adhi",
  },
  {
    name: "Jalabulajangu",
    path: "audio2/5.mp3",
    img: "images Anirudh/5.jpg",
    singer: "Anirudh Ravichander",
  },
  {
    name: "Kannazhaga",
    path: "audio2/6.mp3",
    img: "images Anirudh/6.jpg",
    singer: "Dhanush & Shruthi Hassan",
  },
  {
    name: "Kutti Story",
    path: "audio2/7.mp3",
    img: "images Anirudh/7.jpg",
    singer: "Thalapathy Vijay & Anirudh Ravichander",
  },
  {
    name: "Life of Pazham",
    path: "audio2/8.mp3",
    img: "images Anirudh/8.jpg",
    singer: "Anirudh Ravichander",
  },
  {
    name: "Maari thara local",
    path: "audio2/9.mp3",
    img: "images Anirudh/9.jpg",
    singer: "Dhanush & Anirudh Ravichander",
  },
  {
    name: "Thaai Kelavi",
    path: "audio2/10.mp3",
    img: "images Anirudh/10.jpg",
    singer: "Dhanush & Anirudh Ravichander",
  },
  {
    name: "Naa Ready",
    path: "audio2/11.mp3",
    img: "images Anirudh/11.jpg",
    singer: "Thalapathy Vijay & Anirudh Ravichander",
  },
  {
    name: "Nee Yaaro",
    path: "audio2/12.mp3",
    img: "images Anirudh/12.jpg",
    singer: "K.J.Yesudas",
  },
  {
    name: "Once Upon a Time ",
    path: "audio2/13.mp3",
    img: "images Anirudh/13.jpg",
    singer: "Anirudh Ravichander",
  },
  {
    name: "Polakatum Para Para",
    path: "audio2/14.mp3",
    img: "images Anirudh/14.jpg",
    singer: "Santhosh Narayanan",
  },
  {
    name: "Poo Nee Poo",
    path: "audio2/15.mp3",
    img: "images Anirudh/15.jpg",
    singer: "Mohit Chauhan & Anirudh Ravichander",
  },
  {
    name: "Thenmozhi",
    path: "audio2/16.mp3",
    img: "images Anirudh/16.jpg",
    singer: "Santhosh Narayanan",
  },
  {
    name: "VIP Title",
    path: "audio2/17.mp3",
    img: "images Anirudh/17.jpg",
    singer: "Anirudh Ravichander",
  },
  {
    name: "Arabic Kuthu Halamithi Habibo",
    path: "audio2/18.mp3",
    img: "images Anirudh/18.jpg",
    singer: "Anirudh Ravichander & Jonita Gandh",
  },
  {
    name: "Chumma Kizhi",
    path: "audio2/19.mp3",
    img: "images Anirudh/19.jpg",
    singer: "S.P.Balasubramaniyam & Anirudh Ravichander",
  },
  {
    name: "Hayyoda",
    path: "audio2/20.mp3",
    img: "images Anirudh/20.jpg",
    singer: "Anirudh Ravichander & Priya Mali",
  },
];
/*you can add more song & images from you computer*/

/*tracks*/
let tracks = document.querySelector(".tracks");

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {
  let Html = `<div class="song">
    <div class="img">
        <img src="${All_song[i].img}"/>
        </div>
      <div class="more">
        <audio src="${All_song[i].path}" id="music"></audio>
        <div class="song_info">
            <p id="title">${All_song[i].name}</p>
            <p>${All_song[i].singer}</p>
        </div>
        <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
        </div>
      </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
}
