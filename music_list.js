//song list
let All_song = [
  {
    name: "Aathichudi",
    path: "audio1/1.mp3",
    img: "images/1.jpg",
    singer: "Vijay Antoy",
  },
  {
    name: "Aen Enakku Mayakkam",
    path: "audio1/2.mp3",
    img: "images/2.jpg",
    singer: "Jayadev & Sangeetha",
  },
  {
    name: "Arumbey Ennai Kadathi",
    path: "audio1/3.mp3",
    img: "images/3.jpg",
    singer: "Nivas & Janaki Lyer",
  },
  {
    name: "Bhoomiku",
    path: "audio1/4.mp3",
    img: "images/4.jpg",
    singer: "Gayathri & Vijay Antoy",
  },
  {
    name: "Dailamo Dailamo",
    path: "audio1/5.mp3",
    img: "images/5.jpg",
    singer: "Sangeetha Rajeshwaran & Vijay Antoy",
  },
  {
    name: "Een Nenju",
    path: "audio1/6.mp3",
    img: "images/6.jpg",
    singer: "Vijay Prakash & Saindhavi",
  },
  {
    name: "Idicha Pacharisi",
    path: "audio1/7.mp3",
    img: "images/7.jpg",
    singer: "Ranjith, Sangeetha & Vinaya",
  },
  {
    name: "Kan Irrandil",
    path: "audio1/8.mp3",
    img: "images/8.jpg",
    singer: "Naresh Iyer",
  },
  {
    name: "Kitta Neringivaadi",
    path: "audio1/9.mp3",
    img: "images/9.jpg",
    singer: "Gayathri & Sukhwinder Singh ",
  },
  {
    name: "Macha Kanni",
    path: "audio1/10.mp3",
    img: "images/10.jpg",
    singer: "Vijay Antony & Jaya Rajagopal & Sathya Lakshmi",
  },
  {
    name: "Manjanathi Marathu Katta",
    path: "audio1/11.mp3",
    img: "images/11.jpg",
    singer: "Karthik & Charulatha Mani",
  },
  {
    name: "Mayam Seidhayo",
    path: "audio1/12.mp3",
    img: "images/12.jpg",
    singer: "Sangeetha Rajeshwaran",
  },
  {
    name: "Molachu Moonu",
    path: "audio1/13.mp3",
    img: "images/13.jpg",
    singer: "V.V.Prassanna & Supriya Joshi",
  },
  {
    name: "My Dear Loveru",
    path: "audio1/14.mp3",
    img: "images/14.jpg",
    singer: "Vishal",
  },
  {
    name: "Naakka Mukka II",
    path: "audio1/15.mp3",
    img: "images/15.jpg",
    singer: "Chinnaponnu & Nakul",
  },
  {
    name: "Nee Otha Sollu",
    path: "audio1/16.mp3",
    img: "images/16.jpg",
    singer: "Ranjith & Nitha",
  },
  {
    name: "Nenjangootil Neeye",
    path: "audio1/17.mp3",
    img: "images/17.jpg",
    singer: "Jayadev & Rajalakshmi",
  },
  {
    name: "Rathathin Rathame",
    path: "audio1/18.mp3",
    img: "images/18.jpg",
    singer: "Haricharan & Srimathumitha",
  },
  {
    name: "Sonna Puriyathu",
    path: "audio1/19.mp3",
    img: "images/19.jpg",
    singer: "Vijay Antony & Veera Shankar",
  },
  {
    name: "Thangama Vairama Enna Solla",
    path: "audio1/20.mp3",
    img: "images/20.jpg",
    singer: "Hemachandra & Vijay Antony",
  },
  {
    name: "Thozhiya En Kadhaliya",
    path: "audio1/21.mp3",
    img: "images/21.jpg",
    singer: "Harish Raghavendra & Sri Charan",
  },
  {
    name: "Ussumu Laresay",
    path: "audio1/22.mp3",
    img: "images/22.jpg",
    singer: "Vijay Antony & Emcee Jesz & Janaki Iyer",
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
