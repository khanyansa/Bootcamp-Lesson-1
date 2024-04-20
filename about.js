// Header
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

// Skills
let skillsSection = document.createElement('section');
skillsSection.classList.add('skills');

skillsSection.innerHTML = `
    <h2><i class="fa-solid fa-code"></i>Skills</h2>
    <div class="skills-container">
        <div class="skills-content">
            <p>I've always been fascinated by technology and its potential to transform the way we interact with the world. when I dove headfirst into coding and never looked back.I then honed my skills in fronf-end development languages and tools including:</p>
            <ul>
                <li><i class="fa-brands fa-html5"></i><span>HTML</span></li>
                <li><i class="fa-brands fa-css3-alt"></i><span>CSS</span></li>
                <li><i class="fa-brands fa-js"></i><span>JavaScript</span></li>
                <li><i class="fa-brands fa-github"></i><span>GitHub</span></li>
            </ul>
        </div>
        <div class="skills-image">
            <img src="./images/bg-about.svg" alt="">
        </div>
    </div>

    <div class="projects">
        <h2><i class="fa-solid fa-gears"></i> Projects</h2>
        <div class="projects-container">
            <div class="box">
                <img src="./images/Calculator-Project2.jpg" alt="">
                <h3>Calculator</h3>
                <p>Calculator that performs basic arithmetic operations like addition, subraction, multiplication, and division.</p>
                <div class="project-links">
                    <a href="https://zncalculator.netlify.app/" target="_blank"><i class="fa-solid fa-link"></i></a>
                    <a href="https://github.com/khanyansa/Calculator" target="_blank"><i class="fa-brands fa-github"></i></a>
                </div>
                
            </div>
            <div class="box">
                <img src="./images/Travel-project.png" alt="">
                <h3>Traveling Agency</h3>
                <p>Traveling agancy website is designed for travellers who want to explore the world. it was built using only HTML and CSS</p>
                <div class="project-links">
                    <a href="https://zntravels.netlify.app/" target="_blank"><i class="fa-solid fa-link"></i></a>
                    <a href="https://github.com/khanyansa/Travel-Website" target="_blank"><i class="fa-brands fa-github"></i></a>
                </div>
                
            </div>
            <div class="box">
                <img src="./images/Weather-project.png" alt="">
                <h3>Weather App</h3>
                <p>Weather web app that fetches weather data from an API and displays it to the user based on their location.</p>
                <div class="project-links">
                    <a href="https://znweather.netlify.app/" target="_blank"><i class="fa-solid fa-link"></i></a>
                    <a href="https://github.com/khanyansa/Weather-App" target="_blank"><i class="fa-brands fa-github"></i></a>
                </div>
                
            </div>
            <div class="box">
                <img src="./images/Clock-project.png" alt="">
                <h3>Digital Clock</h3>
                <p>The website is designed to provide users with a simple yet elegant digital clock that displays time on their devices</p>
                <div class="project-links">
                    <a href="https://znclock.netlify.app/" target="_blank"><i class="fa-solid fa-link"></i></a>
                    <a href="https://github.com/khanyansa/Digital-Clock" target="_blank"><i class="fa-brands fa-github"></i></a>
                </div>
                
            </div>
        </div>
       
    </div>

    <div class="connect">
        <h2><i class="fa-brands fa-connectdevelop"></i>Let's Connect!</h2>
        <p>I'm always on the lookout for exciting new opportunities to collaborate. Whether you have a project in mind or just want to network, feel free to reach out:</p>
    </div>
    <div class="edu">
        <h1><i class="fa-solid fa-pen-to-square"></i>Education</h1>
        <div class="edu-container">
            <div class="edu-box">
                <h3>Tswane University of Technology</h3>
                <h3 class="qualification">Advanced Diploma in Industrial Physics</h3>
                <p>2019 - 2021</p>
                <p><span>Status:</span> Complete</p>
            </div>
            <div class="edu-box">
                <h3>Tswane University of Technology</h3>
                <h3 class="qualification">Diploma in Industrial Physics</h3>
                <p>2022</p>
                <p><span>Status:</span> Complete</p>
            </div>
        </div>
    </div>

    <div class="goals">
        <h2><i class="fa-solid fa-eye-low-vision"></i> Goals</h2>
        <div class="goals-box">
            <div class="goals-image">
                <img src="./images/mission2.png" alt="">
            </div>
            <div class="goals-content">
                <h3>Mission</h3>
                <p>To create innovative and client-centered websites that empower businesses and individuals to achieve their goals effectively in the digital industry</p>
            </div>
        </div>
        <div class="goals-box">
            <div class="goals-content">
                <h3>Vision</h3>
                <p>To be a trusted web developer for clients recognised for delivering reliable, and exceptional digital experiences that drive success for clients and make a positive impact in the online world.</p>
            </div>
            <div class="goals-image">
                <img src="./images/vision5.png" alt="">
            </div>
        </div>
        <div class="goals-box">
            <div class="goals-image">
                <img src="./images/values4.jpg" alt="">
            </div>
            <div class="goals-content">
                <h3>Values</h3>
                <h4>Quality</h4>
                <p>Commited to delivering high-quality websites that exceed client expectations</p>
                <h4>Creativity</h4>
                <p>Innovation to push the boundaries of web development and design</p>
                <h4>Collaboration</h4>
                <p>Open communication and collaboration with clients and team members to ensure the best out come.</p>
            </div>
        </div>
    </div>
`;

document.body.appendChild(skillsSection);

// footer
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
