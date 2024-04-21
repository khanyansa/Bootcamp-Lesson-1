let heroDiv = document.createElement('div');
heroDiv.classList.add('hero');

let navElement = document.createElement('nav');

let logoDiv = document.createElement('div');
logoDiv.classList.add('logo');

let logoImg = document.createElement('img');
logoImg.setAttribute('src', './images/logo.jpg');
logoImg.setAttribute('alt', 'logo');

logoDiv.appendChild(logoImg);

let inputElement = document.createElement('input');
inputElement.setAttribute('type', 'checkbox');
inputElement.setAttribute('id', 'check');

let labelElement = document.createElement('label');
labelElement.setAttribute('for', 'check');
labelElement.classList.add('menu-bar');

let menuBarIcon = document.createElement('i');
menuBarIcon.classList.add('fa-solid', 'fa-bars');
menuBarIcon.setAttribute('id', 'menu-bar');

let closeIcon = document.createElement('i');
closeIcon.classList.add('fa-solid', 'fa-x');
closeIcon.setAttribute('id', 'close-icon');

labelElement.appendChild(menuBarIcon);
labelElement.appendChild(closeIcon);

let navLinksDiv = document.createElement('div');
navLinksDiv.classList.add('nav-links');

let ulElement = document.createElement('ul');

let homeListItem = document.createElement('li');
let homeLink = document.createElement('a');
homeLink.setAttribute('href', 'index.html');
homeLink.textContent = 'Home';
homeListItem.appendChild(homeLink);

let aboutListItem = document.createElement('li');
let aboutLink = document.createElement('a');
aboutLink.setAttribute('href', 'about.html');
aboutLink.classList.add('active');
aboutLink.textContent = 'About';
aboutListItem.appendChild(aboutLink);

let contactListItem = document.createElement('li');
let contactLink = document.createElement('a');
contactLink.setAttribute('href', 'contact.html');
contactLink.textContent = 'Contact';
contactListItem.appendChild(contactLink);

ulElement.appendChild(homeListItem);
ulElement.appendChild(aboutListItem);
ulElement.appendChild(contactListItem);

navLinksDiv.appendChild(ulElement);

navElement.appendChild(logoDiv);
navElement.appendChild(inputElement);
navElement.appendChild(labelElement);
navElement.appendChild(navLinksDiv);

heroDiv.appendChild(navElement);


let aboutSection = document.createElement('section');
aboutSection.classList.add('about');

aboutSection.innerHTML = `
    <h1 class="heading">About Me</h1>
    <p>Hey there! I'm Nokukhanya Zwane, a passionate web developer dedicated to crafting stunning and functional websites. With a blend of creativity, and a knack for problem-solving, I thrive in the ever-evolving digital landscape. My journey in web development began when I stumbled upon HTML and CSS during my university years. Since then, I've immersed myself in the ever-evolving world of web technologies, constantly learning and adapting to stay ahead of the curve.</p>
`;

heroDiv.appendChild(aboutSection);

document.body.appendChild(heroDiv);


// Skills Data
const skillsData = [
  { icon: "fa-html5", text: "HTML" },
  { icon: "fa-css3-alt", text: "CSS" },
  { icon: "fa-js", text: "JavaScript" },
  { icon: "fa-github", text: "GitHub" }
];

// Projects Data
const projectsData = [
  {
    image: "./images/Calculator-Project2.jpg",
    title: "Calculator",
    description: "Calculator that performs basic arithmetic operations like addition, subtraction, multiplication, and division.",
    links: {
      live: "https://zncalculator.netlify.app/",
      github: "https://github.com/khanyansa/Calculator"
    }
  },
  {
    image: "./images/Travel-project.png",
    title: "Traveling Agency",
    description: "Traveling agency website designed for travelers who want to explore the world. It is built using only HTML and CSS.",
    links: {
      live: "https://zntravels.netlify.app/",
      github: "https://github.com/khanyansa/Travel-Website"
    }
  },
  {
    image: "./images/Weather-project.png",
    title: "Weather App",
    description: "Weather web app that fetches weather data from an API and displays it to the user based on their location.",
    links: {
      live: "https://znweather.netlify.app/",
      github: "https://github.com/khanyansa/Weather-App"
    }
  },
  {
    image: "./images/Clock-project.png",
    title: "Digital Clock",
    description: "Website designed to provide users with a simple yet elegant digital clock that displays time on their devices.",
    links: {
      live: "https://znclock.netlify.app/",
      github: "https://github.com/khanyansa/Digital-Clock"
    }
  }
];

// Education Data
const educationData = [
  {
    university: "Tswane University of Technology",
    qualification: "Advanced Diploma in Industrial Physics",
    year: "2019 - 2021",
    status: "Complete"
  },
  {
    university: "Tswane University of Technology",
    qualification: "Diploma in Industrial Physics",
    year: "2022",
    status: "Complete"
  }
];

// Goals Data
const goalsData = [
  {
    title: "Mission",
    description: "To create innovative and client-centered websites that empower businesses and individuals to achieve their goals effectively in the digital industry",
    image: "./images/mission2.png"
  },
  {
    title: "Vision",
    description: "To be a trusted web developer for clients recognized for delivering reliable, and exceptional digital experiences that drive success for clients and make a positive impact in the online world.",
    image: "./images/vision5.png"
  },
  {
    title: "Values",
    description: "",
    image: "./images/values4.jpg",
    values: [
      { title: "Quality", description: "Committed to delivering high-quality websites that exceed client expectations" },
      { title: "Creativity", description: "Innovation to push the boundaries of web development and design" },
      { title: "Collaboration", description: "Open communication and collaboration with clients and team members to ensure the best outcome." }
    ]
  }
];

// Skills Section
function createSkillsHTML() {
  const skillsSection = document.createElement('section');
  skillsSection.classList.add('skills');

  //Skills
  const skillsHeader = document.createElement('h2');
  skillsHeader.innerHTML = '<i class="fa-solid fa-code"></i>Skills';
  skillsSection.appendChild(skillsHeader);

  const skillsContainer = document.createElement('div');
  skillsContainer.classList.add('skills-container');

  const skillsContent = document.createElement('div');
  skillsContent.classList.add('skills-content');
  skillsContent.innerHTML = `<p>I've always been fascinated by technology and its potential to transform the way we interact with the world. when I dove headfirst into coding and never looked back.I then honed my skills in fronf-end development languages and tools including:</p>`;

  const skillsList = document.createElement('ul');
  skillsData.forEach(skill => {
    const skillItem = document.createElement('li');
    skillItem.innerHTML = `<i class="fa-brands ${skill.icon}"></i><span>${skill.text}</span>`;
    skillsList.appendChild(skillItem);
  });
  skillsContent.appendChild(skillsList);

  const skillsImage = document.createElement('div');
  skillsImage.classList.add('skills-image');
  skillsImage.innerHTML = `<img src="./images/bg-about.svg" alt="">`;

  skillsContainer.appendChild(skillsContent);
  skillsContainer.appendChild(skillsImage);

  // Projects
  const projectsHeader = document.createElement('h2');
  projectsHeader.innerHTML = '<i class="fa-solid fa-gears"></i> Projects';
  skillsSection.appendChild(projectsHeader);

  const projectsContainer = document.createElement('div');
  projectsContainer.classList.add('projects-container');

  projectsData.forEach(project => {
    const projectBox = document.createElement('div');
    projectBox.classList.add('box');
    projectBox.innerHTML = `
      <img src="${project.image}" alt="">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-links">
        <a href="${project.links.live}" target="_blank"><i class="fa-solid fa-link"></i></a>
        <a href="${project.links.github}" target="_blank"><i class="fa-brands fa-github"></i></a>
      </div>`;
    projectsContainer.appendChild(projectBox);
  });

  skillsSection.appendChild(skillsContainer);
  skillsSection.appendChild(projectsContainer);

  // Connect
  const connectDiv = document.createElement('div');
  connectDiv.classList.add('connect');
  connectDiv.innerHTML = `<h2><i class="fa-brands fa-connectdevelop"></i>Let's Connect!</h2><p>I'm always on the lookout for exciting new opportunities to collaborate. Whether you have a project in mind or just want to network, feel free to reach out:</p>`;
  skillsSection.appendChild(connectDiv);

  // Education
  const eduDiv = document.createElement('div');
  eduDiv.classList.add('edu');

  const eduHeader = document.createElement('h1');
  eduHeader.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>Education';
  eduDiv.appendChild(eduHeader);

  const eduContainer = document.createElement('div');
  eduContainer.classList.add('edu-container');

  educationData.forEach(edu => {
    const eduBox = document.createElement('div');
    eduBox.classList.add('edu-box');
    eduBox.innerHTML = `
      <h3>${edu.university}</h3>
      <h3 class="qualification">${edu.qualification}</h3>
      <p>${edu.year}</p>
      <p><span>Status:</span> ${edu.status}</p>`;
    eduContainer.appendChild(eduBox);
  });

  eduDiv.appendChild(eduContainer);
  skillsSection.appendChild(eduDiv);


return skillsSection;
}


document.body.appendChild(createSkillsHTML());

//footer
let footer = document.createElement('footer');

footer.innerHTML = `
    <div class="quick-links">
        <div class="socials">
            <ul>
                <li><a href="https://www.instagram.com/khanyi.nz/?utm_source=qr&igsh=MWtzdWdseHQ1ODk4Yg%3D%3D" target="_blank"><i class="fa-brands fa-square-instagram"></i></a></li>
                <li><a href="https://za.linkedin.com/in/nokukhanya-zwane-b8b80321a?trk=public_profile_browsemap-profile" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
                <li><a href="https://github.com/khanyansa" target="_blank"><i class="fa-brands fa-github"></i></a></li>
            </ul>
        </div>
        <div class="contact-info">
            <ul>
                <li><i class="fa-solid fa-phone"></i>+27727220146</li>
                <li><i class="fa-solid fa-envelope"></i>khanyizwane.nsa@gmail.com</li>
            </ul>
        </div>
        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.7877273295003!2d28.21037880582164!3d-25.744532494438126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9561f3c78fc5c5%3A0x5196ad442cd8df98!2sArcadia%2C%20Pretoria%2C%200007!5e0!3m2!1sen!2sza!4v1712412711536!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
`;

// Back to top button
let topButton = document.createElement('a');
topButton.href = '#';
topButton.classList.add('top-btn');
topButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(footer);
document.body.appendChild(topButton);
