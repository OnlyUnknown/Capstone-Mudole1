function myFunction() {
    const x = document.querySelector('.nav-bar-courtain');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }
  
  function changeIcon() {
    const icon = document.querySelector('#menu-b');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
  }
  
  document.querySelector('#menu').addEventListener('click', myFunction());
  document.querySelector('#menu').addEventListener('click', changeIcon());
  document.addEventListener('DOMContentLoaded', changeIcon());


  speaker = [{
    name: 'Yachai Benkler',
    position: 'Berkman Professore of Entrepreneurial Legal Studies at Harvard Law School',
    discription: 'Benkler studies commons-based peer production, and published his seminal book'
    + 'The Wealth of Networks in 2006' ,
    image:'images/speaker1.png' ,
  },
  {
    name: 'SohYeong Noh',
    position: 'Director of Art Centre Nabi and a board member of CC Korea',
    discription: 'As the main venue for new media art production in Korea, Nabi promots'
    + 'cross-disciplinary collanoration and understanding among science technology, humanities, and the arts.',
    image: 'images/speaker2.png' ,
  },
  {
    name: 'Lila Tretikob',
    position: 'Excutive Director of the Wikimedia Foundation',
    discription: 'Lila Tretikove is the Excutive Director of the Wikimedia Foundation, the nonprofit'
    + 'organization that operates Wikipedia. Wikipedia is freely abailable in 290 languages and used'
    + 'by nearly half a billion people around the world every month.',
    image: 'images/speaker3.png',
  },
  {
    name: 'Kilnam Chon',
    position: '',
    discription: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocates for the'
    + 'open web and digital commons. in 2012. he was inducted into the inaugural class of the internet'
    + "Society's (ISOC) internet Hall of Fame." ,
    image: 'images/speaker4.png',
  },
  {
    name: 'Julia Leda',
    position: 'Presedent of Young Pirates of Europe',
    discription: 'European ingetration, political democraxy and participation of youth through online'
    + "as her magor condem, Reda's report oulining potential changes to EU copyright law was approved"
    + 'by the Parlament in July.',
    image: 'images/speaker5.png' ,
  },
  {
    name: 'Ryan Merkley',
    position: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    discription: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open'
    + 'source movement',
    image: 'images/speaker6.png',
  }]

  function content() {
    speaker.forEach(item => {
       const parent = document.querySelector(".grid-speakers"); 
       const speakerDiv = document.createElement("div");
       speakerDiv.classList.add("speaker");
       const porfilePic = document.createElement("img");
       porfilePic.setAttribute("src", item.image);
       const flexSpeaker = document.createElement("div");
       flexSpeaker.classList.add("flex-speaker-cont");
        const speakerName = document.createElement("div")
        speakerName.classList.add("speaker-name")
        speakerName.innerHTML = item.name ;
        const speakerPosition = document.createElement("div");
        speakerPosition.classList.add("speaker-position");
        speakerPosition.innerHTML = item.position ;
        const speakerBreak = document.createElement("div");
        speakerBreak.classList.add("speaker-break");
        const speakerDiscription = document.createElement("div");
        speakerDiscription.classList.add("speaker-discription");
        speakerDiscription.innerHTML = item.discription;

       
        speakerDiv.appendChild(porfilePic);
        speakerDiv.appendChild(flexSpeaker);
        flexSpeaker.appendChild(speakerName);
        flexSpeaker.appendChild(speakerPosition);
        flexSpeaker.appendChild(speakerBreak);
        flexSpeaker.appendChild(speakerDiscription);
        parent.appendChild(speakerDiv);

    });
  }

  document.addEventListener("DOMContentLoaded", content())