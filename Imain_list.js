//song list
let All_song = [
  {
    name: "Aaluma Doluma",
    path: "audio3/1.mp3",
    img: "images imman/1.jpeg",
    singer: "Karthik & Shreya Ghoshal",
  },
  {
    name: "Yennuyire",
    path: "audio3/2.mp3",
    img: "images imman/2.jpeg",
    singer: "Sid Sirram",
  },
  {
    name: "Danga Danga",
    path: "audio3/3.mp3",
    img: "images imman/3.jpeg",
    singer: "Senthil Ganesh & Rajalakshmi",
  },
  {
    name: "",
    path: "audio3/4.mp3",
    img: "images imman/4.jpeg",
    singer: "",
  },
  {
    name: "Jalabulajangu",
    path: "audio3/5.mp3",
    img: "images imman/5.jpeg",
    singer: "Anirudh Ravichander",
  },
  {
    name: "Kannazhaga",
    path: "audio3/6.mp3",
    img: "images imman/6.jpeg",
    singer: "Dhanush & Shruthi Hassan",
  },
  {
    name: "Kutti Story",
    path: "audio3/7.mp3",
    img: "images imman/7.jpeg",
    singer: "Thalapathy Vijay & Anirudh Ravichander",
  },
  {
    name: "Life of Pazham",
    path: "audio3/8.mp3",
    img: "images imman/8.jpeg",
    singer: "Anirudh Ravichander",
  },
  {
    name: "Maari thara local",
    path: "audio3/9.mp3",
    img: "images imman/9.jpeg",
    singer: "Dhanush & Anirudh Ravichander",
  },
  {
    name: "Thaai Kelavi",
    path: "audio3/10.mp3",
    img: "images imman/10.jpeg",
    singer: "Dhanush & Anirudh Ravichander",
  },
  {
    name: "Naa Ready",
    path: "audio3/11.mp3",
    img: "images imman/11.jpeg",
    singer: "Thalapathy Vijay & Anirudh Ravichander",
  },
  {
    name: "Nee Yaaro",
    path: "audio3/12.mp3",
    img: "images imman/12.jpeg",
    singer: "K.J.Yesudas",
  },
  {
    name: "Once Upon a Time ",
    path: "audio3/13.mp3",
    img: "images imman/13.jpeg",
    singer: "Anirudh Ravichander",
  },
  {
    name: "Polakatum Para Para",
    path: "audio3/14.mp3",
    img: "images imman/14.jpeg",
    singer: "Santhosh Narayanan",
  },
  {
    name: "Poo Nee Poo",
    path: "audio3/15.mp3",
    img: "images imman/15.jpeg",
    singer: "Mohit Chauhan & Anirudh Ravichander",
  },
  {
    name: "Thenmozhi",
    path: "audio3/16.mp3",
    img: "images imman/16.jpeg",
    singer: "Santhosh Narayanan",
  },
  {
    name: "VIP Title",
    path: "audio3/17.mp3",
    img: "images imman/17.jpeg",
    singer: "Anirudh Ravichander",
  },
  {
    name: "Arabic Kuthu Halamithi Habibo",
    path: "audio3/18.mp3",
    img: "images imman/18.jpeg",
    singer: "Anirudh Ravichander & Jonita Gandh",
  },
  {
    name: "Chumma Kizhi",
    path: "audio3/19.mp3",
    img: "images imman/19.jpeg",
    singer: "S.P.Balasubramaniyam & Anirudh Ravichander",
  },
  {
    name: "Hayyoda",
    path: "audio3/20.mp3",
    img: "images imman/20.jpeg",
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
