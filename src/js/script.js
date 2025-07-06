const destinations = {
    moon: {
        title: "MOON",
        description: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                            regain perspective and come back refreshed. While you’re there, take in some history 
                            by visiting the Luna 2 and Apollo 11 landing sites.`,
        distance: '384,400 KM',
        time: '3 DAYS',
        img: './assets/destination/image-moon.png'
    },
    mars: {
        title: "MARS",
        description: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
                    the tallest planetary mountain in our solar system. It’s two and a half times 
                    the size of Everest!
                    `,
        distance: '225 MIL. KM',
        time: '9 MONTHS',
        img: './assets/destination/image-mars.png'
    },
    europa: {
        title: "EUROPA",
        description: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
                    winter lover’s dream. With an icy surface, it’s perfect for a bit of 
                    ice skating, curling, hockey, or simple relaxation in your snug 
                    wintery cabin.`,
        distance: '628 MIL. KM',
        time: '3 YEARS',
        img: './assets/destination/image-europa.png'
    },
    titan: {
        title: "TITAN",
        description: `The only moon known to have a dense atmosphere other than Earth, Titan 
                    is a home away from home (just a few hundred degrees colder!). As a 
                    bonus, you get striking views of the Rings of Saturn.`,
        distance: '1.6 BIL. KM',
        time: '7 YEARS',
        img: './assets/destination/image-titan.png'
    }
}

const btnMenu = document.querySelector('.hero__btn-menu');
const menu = document.querySelector('.hero__nav');
const closeMenu = document.querySelector(".hero__nav--close");
const links = document.querySelectorAll(".hero__link");
const lists = document.querySelectorAll(".hero__nav-li");
function showMenuMobile() {
    menu.style.display = 'block';
    console.log('Botton pressed!')
}
function closeMenuMobile() {
    menu.style.display = 'none';
}
function addOption(e) {
    lists.forEach(option => option.classList.remove('hero__nav-li--active'));
    const list = e.currentTarget.closest('.hero__nav-li');
    list.classList.add('hero__nav-li--active');
}

btnMenu.addEventListener("click", showMenuMobile);
closeMenu.addEventListener("click", closeMenuMobile);
links.forEach(optionLink => optionLink.addEventListener("click", addOption));

const destinationOptions = document.querySelectorAll('.destination__information-option');
const titleD = document.getElementById('title');
const descriptionD = document.getElementById('description');
const distanceD = document.getElementById('distance');
const timeD = document.getElementById('time');
const imgD = document.getElementById('destinationImg');
function addDestination(e) {
    const optionDestination = e.currentTarget;
    destinationOptions.forEach(option => option.classList.remove('destination__information-option--active'));
    optionDestination.classList.add('destination__information-option--active');
    const destination = optionDestination.id;
    const {title, description, distance, time, img } = destinations[destination];
    titleD.textContent = title;
    descriptionD.textContent = description;
    distanceD.textContent = distance;
    timeD.textContent = time;
    imgD.src = img; 
}

destinationOptions.forEach(option => option.addEventListener("click", addDestination));
const crew = {
    douglas: {
        profession: 'COMMANDER',
        name: "DOUGLAS HURLEY",
        infography: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
and former NASA astronaut. He launched into space for the third time as 
commander of Crew Dragon Demo-2.`,
        img: 'url("./assets/crew/image-douglas-hurley.png")'
    },
    anousheh: {
        profession: 'Flight Engineer',
        name: "Anousheh Ansari",
        infography: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
  Ansari was the fourth self-funded space tourist, the first self-funded woman to 
  fly to the ISS, and the first Iranian in space.`,
        img: 'url("./assets/crew/image-anousheh-ansari.png")'
    },
    victor: {
       profession: 'Pilot',
        name: "Victor Glover",
        infography: `Pilot on the first operational flight of the SpaceX Crew Dragon to the 
  International Space Station. Glover is a commander in the U.S. Navy where 
  he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
  station systems flight engineer. `,
        img: 'url("./assets/crew/image-victor-glover.png")'
    },
    mark: {
       profession: 'Mission Specialist',
        name: "Mark Shuttleworth",
        infography: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
  the Linux-based Ubuntu operating system. Shuttleworth became the first South 
  African to travel to space as a space tourist. `,
        img: 'url("./assets/crew/image-mark-shuttleworth.png")'
    },

}

const professionC = document.getElementById('profession');
const nameC = document.getElementById('name');
const infographyC = document.getElementById('infography');
const optionsCrew = document.querySelectorAll('.crew__option'); 

const imgMemberCrew = document.querySelector('.crew__picture');

function chooseMember(e) {
    const option = e.currentTarget;
    optionsCrew.forEach(optionCrew => optionCrew.classList.remove('crew__option--active'));
    option.classList.add('crew__option--active');
    const idOption = option.id;
    const { profession, name, infography, img } = crew[idOption];
    console.log(profession);
    professionC.textContent = profession;
    nameC.textContent = name;
    infographyC.textContent = infography;
    imgMemberCrew.style.backgroundImage = img;
}

const technologies = {
    capsule: {
        title: "CAPSULE",
        paragraph: ` A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
                            capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
                            you'll spend your time during the flight. It includes a space gym, cinema, 
                            and plenty of other activities to keep you entertained.`,
        img: {
            mobile: './assets/technology/image-space-capsule-landscape.jpg',
            desktop: './assets/technology/image-space-capsule-portrait.jpg'
        }
    },
    spaceport: {
        title: "SPACEPORT",
        paragraph: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
  by analogy to the seaport for ships or airport for aircraft. Based in the 
  famous Cape Canaveral, our spaceport is ideally situated to take advantage 
  of the Earth’s rotation for launch.`,
        img: {
            mobile: './assets/technology/image-spaceport-landscape.jpg',
            desktop: './assets/technology/image-spaceport-portrait.jpg'
        }
    },
    vehicle: {
        title: "VEHICLE",
        paragraph: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
  payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
  WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
  it's quite an awe-inspiring sight on the launch pad!`,
        img: {
            mobile: './assets/technology/image-launch-vehicle-landscape.jpg',
            desktop: './assets/technology/image-launch-vehicle-portrait.jpg'
        }
    },
}

optionsCrew.forEach(optionCrew => optionCrew.addEventListener('click', chooseMember));

const technologyOptions = document.querySelectorAll('.technology__option');
const imgT = document.getElementById("imgT");
const titleT = document.getElementById("titleT");
const paragraphT = document.getElementById('paragraphT');
const selectThis = (e) => {
    technologyOptions.forEach(o => o.classList.remove('technology__option--active'));
    const technology = e.currentTarget;
    technology.classList.add('technology__option--active');
    const idTechnology = technology.id;
    const { title, paragraph, img } = technologies[idTechnology];
    const { mobile, desktop }  = img;
    window.innerWidth >= 1024 ? imgT.src = desktop : imgT.src = mobile;
    titleT.textContent = title;
    paragraphT.textContent = paragraph;

}

technologyOptions.forEach(o => o.addEventListener('click', selectThis));

function settingsImages() {
    technologyOptions.forEach(tech => {
        if (tech.classList.contains('technology__option--active')) {
            const idTech = tech.id;
            const { mobile, desktop } = technologies[idTech].img;
            console.log(mobile, desktop);
            window.innerWidth >= 1024 ? imgT.src = desktop : imgT.src = mobile;
        }
    })
}


window.addEventListener('resize', settingsImages);
document.addEventListener('DOMContentLoaded', settingsImages);


// fetch('./data.json')
//     .then(response => {
//         if (response.ok) {
//             console.log("Is correct");
//         }
//         return response.json();
//     })
//     .then(data => console.log(data.destinations[0]))