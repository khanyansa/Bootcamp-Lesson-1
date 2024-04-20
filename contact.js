// Header
let contactContainer = document.createElement('div');
contactContainer.classList.add('contact-container');

let headerElement = document.createElement('header');

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
aboutLink.textContent = 'About';
aboutListItem.appendChild(aboutLink);

let contactListItem = document.createElement('li');
let contactLink = document.createElement('a');
contactLink.setAttribute('href', 'contact.html');
contactLink.classList.add('active');
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

headerElement.appendChild(navElement);

//Contact Section
let contactSection = document.createElement('section');
contactSection.classList.add('contact-section');

contactSection.innerHTML = `
    <h1>Contact Me</h1>
    <p>The contact page is designed to make reaching out as easy as possible. Whether you have a question, <br> feedback, or want to collaborate, I am here for you. Feel free to drop a message using the form below, or <br>connect with me through email, phone or my social media channels. <br> I value your input and look forward to hearing from you soon!</p>
    <div class="contact-details">
        <div class="contact-box">
            <i class="fa-solid fa-location-dot"></i>
            <div class="contact-wrap">
                <h3>Address</h3>
                <p>Stanza Bopape Street <br> Pretoria <br>0083</p>
            </div>
        </div>
        <div class="contact-box">
            <i class="fa-solid fa-phone"></i>
            <div class="contact-wrap">
                <h3>Phone</h3>
                <p>+27727220146</p>
            </div>
        </div>
        <div class="contact-box">
            <i class="fa-solid fa-envelope"></i>
            <div class="contact-wrap">
                <h3>Email</h3>
                <p>khanyizwane.nsa@gmail.com</p>
            </div>
        </div>
    </div>
    <div class="wrap">
        <form action="https://formspree.io/f/mzbnygdv" method="post">
            <div class="row">
                <div class="col">
                    <div class="input-box">
                        <input type="text" name="Name" required>
                        <span class="text">First Name</span>
                        <span class="line"></span>
                    </div>
                </div>
                <div class="col">
                    <div class="input-box">
                        <input type="text" name="Surname" required>
                        <span class="text">Last Name</span>
                        <span class="line"></span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="input-box">
                        <input type="email" name="Email" required>
                        <span class="text">Email</span>
                        <span class="line"></span>
                    </div>
                </div>
                <div class="col">
                    <div class="input-box">
                        <input type="tel" name="Phone" required>
                        <span class="text">Phone Number</span>
                        <span class="line"></span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="input-box textarea">
                        <textarea name="Message" required></textarea>
                        <span class="text">Type Your Message...</span>
                        <span class="line"></span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <input type="submit" value="Send">
                </div>
            </div>
        </form>
    </div>
`;

contactContainer.appendChild(headerElement);
contactContainer.appendChild(contactSection);

document.body.appendChild(contactContainer);

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

document.body.appendChild(footer);
