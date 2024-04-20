// Home Page
let containerDiv = document.createElement('div');
containerDiv.classList.add('container');

let videoElement = document.createElement('video');
videoElement.setAttribute('autoplay', '');
videoElement.setAttribute('loop', '');
videoElement.setAttribute('muted', '');
videoElement.setAttribute('plays-inline', '');
videoElement.classList.add('back-video');

let sourceElement = document.createElement('source');
sourceElement.setAttribute('src', './videos/Home-video.mp4');
sourceElement.setAttribute('type', 'video/mp4');

videoElement.appendChild(sourceElement);

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
homeLink.classList.add('active');
homeLink.textContent = 'Home';
homeListItem.appendChild(homeLink);

let aboutListItem = document.createElement('li');
let aboutLink = document.createElement('a');
aboutLink.setAttribute('href', 'about.html');
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

let contentDiv = document.createElement('div');
contentDiv.classList.add('content');

contentDiv.innerHTML = `
    <h1>Welcome To Nokukhanya's Portfolio</h1>
    <p>I create beautiful, responsive websites that drive results.</p>
    <p class="brief">I'm a passionate web developer, creating engaging websites. My experties lies in the
        front-end development, <br>with a focus of creating clean, efficient websites to bring ideas to life.
    </p>
    <div class="hire-me">
        <a href="contact.html">Hire Me</a>
    </div>
    <div class="hire-me">
        <a href="./CV/CV.pdf">Download CV</a>
    </div>
`;

containerDiv.appendChild(videoElement);
containerDiv.appendChild(navElement);
containerDiv.appendChild(contentDiv);

document.body.appendChild(containerDiv);

// Bio section
let bioSection = document.createElement('section');
bioSection.classList.add('bio');

let bioContainerDiv = document.createElement('div');
bioContainerDiv.classList.add('bio-container');

let bioInfoDiv = document.createElement('div');
bioInfoDiv.classList.add('bio-info');

bioInfoDiv.innerHTML = `
    <h1>Nokukhanya Zwane</h1>
    <p>Passionate about crafting ideas into functional websites. I am an aspiring web developer on the
        journey to turn ideas into reality. With a foundation in HTML, CSS, and JavaScript, I am
        continuously expanding my skills to create user-friendly websites. I am open to collaboration, and
        exploring opportunities in web development. </p>
`;

let bioImageDiv = document.createElement('div');
bioImageDiv.classList.add('bio-image');

let bioImage = document.createElement('img');
bioImage.setAttribute('src', './images/Bio2.png');
bioImage.setAttribute('alt', 'bio-image');

bioImageDiv.appendChild(bioImage);

bioContainerDiv.appendChild(bioInfoDiv);
bioContainerDiv.appendChild(bioImageDiv);

let servicesDiv = document.createElement('div');
servicesDiv.classList.add('services');

servicesDiv.innerHTML = `
    <h2><i class="fa-solid fa-code"></i>Services</h2>
    <p>I offer comprehensive web development solutions tailored to meet your specific needs. I am here to turn
        your vision into <br> profit, I ensure that your digital presence not only looks impressive but also
        functions seamlessly across all <br>devices. Let's collaborate to bring your ideas to life and elevate
        your online presence to new heights</p>
    <div class="services-container">
        <div class="services-box">
            <div class="icons">
                <i class="fa-solid fa-terminal"></i>
            </div>
            <h3>Web Development</h3>
            <p>Designing and building websites from scratch <br> using HTML, CSS, and JavaScript.</p>
        </div>
        <div class="services-box">
            <div class="icons">
                <i class="fa-solid fa-laptop-code"></i>
            </div>
            <h3>Web Design</h3>
            <p>Designing the visual layout and elements of <br> a website to enhance user experience.</p>
        </div>
        <div class="services-box">
            <div class="icons">
                <i class="fa-solid fa-mobile-screen"></i>
            </div>
            <h3>Resposive Design</h3>
            <p>Creating websites that adapt and look good <br> on various devices and screen sizes.</p>
        </div>
    </div>
`;

bioSection.appendChild(bioContainerDiv);
bioSection.appendChild(servicesDiv);

document.body.appendChild(bioSection);

// Footer
let footerElement = document.createElement('footer');

footerElement.innerHTML = `
    <div class="quick-links">
        <div class="socials">
            <ul>
                <li><a href="https://www.instagram.com/khanyi.nz/?utm_source=qr&igsh=MWtzdWdseHQ1ODk4Yg%3D%3D" target="_blank">
                        <i class="fa-brands fa-square-instagram"></i></a></li>
                <li><a href="https://za.linkedin.com/in/nokukhanya-zwane-b8b80321a?trk=public_profile_browsemap-profile" target="_blank">
                        <i class="fa-brands fa-linkedin"></i></a></li>
                <li><a href="https://github.com/khanyansa" target="_blank">
                        <i class="fa-brands fa-github"></i></a></li>
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

document.body.appendChild(footerElement);

// Scroll to top button
let topBtn = document.createElement('a');
topBtn.setAttribute('href', '#');
topBtn.classList.add('top-btn');


let arrowIcon = document.createElement('i');
arrowIcon.classList.add('fa-solid', 'fa-arrow-up');


topBtn.appendChild(arrowIcon);


document.body.appendChild(topBtn);
