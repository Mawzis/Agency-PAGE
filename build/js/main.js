// TOGGLE MENU SCRIPT   

const initApp = () => {
    const hamburgerBtn = document.getElementById ('hamburger-button');
    const mobileMenu = document.getElementById ('mobile-menu');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        hamburgerBtn.classList.toggle('toggle-btn');  //CLASS NAME FROM INPUT.CSS
    }

    hamburgerBtn.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);
}

document.addEventListener('DOMContentLoaded', initApp);



// SLIDER SERIPTING


        // ---------COL-3 SLIDER
const col3img = document.getElementById ('col-3-images');
const imgs = document.getElementsByClassName ('imgs');
const left3 = document.getElementById ('left-col-3');
const right3 = document.getElementById ('right-col-3');

const nxt3 = () => {
    col3img.append(imgs[0]);
}; 
const prevs3 = () =>{
    col3img.prepend(imgs [imgs.length - 1]);
};

right3.addEventListener('click', nxt3);
left3.addEventListener('click', prevs3);



        // ---------COL-5 SLIDER
const smallScreen = document.getElementById ('small-screen');
const images = document.getElementsByClassName ('images');
const left = document.getElementById ('left-col-5');
const right = document.getElementById ('right-col-5');

const nxt = () => {
    smallScreen.append(images[0]);
}; 
const prevs = () =>{
    smallScreen.prepend(images [images.length - 1]);
};

right.addEventListener('click', nxt);
left.addEventListener('click', prevs);




        // BUTTONS FOR LEARN MORE

// Variables for services buttons
const serveBtn1 = document.getElementById ('service-btn-1');
const serveBtn2 = document.getElementById ('service-btn-2');
const serveBtn3 = document.getElementById ('service-btn-3');


// variables for services larger screens
const serveBtn1_ = document.getElementById ('servicelg-btn-1');
const serveBtn2_ = document.getElementById ('servicelg-btn-2');
const serveBtn3_ = document.getElementById ('servicelg-btn-3');


// variables for about us lern more
const aboutLearn = document.getElementById('about-learn');

// Featured About Us BUtton
const featuredBtn = document.getElementById('featured-btn')

const btnTrigger = () =>{
    let serviceText = document.getElementById('service-learn');

    // Services
    if (serviceText.classList === 'hidden') {
        serviceText.classList.toggle('visible');
    }else{
        serviceText.classList.toggle('hidden') 
    }
}

const btnTrigger1 = () =>{
    let aboutText = document.getElementById('about-learn-text')

    // About us Learn More
    if (aboutText.classList === 'hidden') {
        aboutText.classList.toggle('visible');
    }else{
        aboutText.classList.toggle('hidden')
    }

}

const btnTrigger2 = () => {
    let FeatureText = document.getElementById('featured-learn-text')

    // Featured Learn More
    if (FeatureText.classList === 'hidden') {
        FeatureText.classList.toggle('visible');
    }else{
        FeatureText.classList.toggle('hidden')
    }

}


// Service Event Listeners
serveBtn1.addEventListener('click', btnTrigger);
serveBtn2.addEventListener('click', btnTrigger);
serveBtn3.addEventListener('click', btnTrigger);
        //  Service Event Listeners for bigger screen
serveBtn1_.addEventListener('click', btnTrigger);
serveBtn2_.addEventListener('click', btnTrigger);
serveBtn3_.addEventListener('click', btnTrigger);

//  ABOUT US event Listener
aboutLearn.addEventListener('click', btnTrigger1);

// Featured button listener
featuredBtn.addEventListener('click', btnTrigger2);



// =================================================================================================================

// CONTACT US BUTTON

const digitalcontactBtn = document.getElementById('digital-contact-btn');


const digiContact = ()=>{
    let digitalContact = document.getElementById('digital-contact')

    if (digitalContact.classList === 'hidden') {
        digitalContact.classList.toggle('visible');
    }else{
        digitalContact.classList.toggle('hidden')
    }

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.forEach(place => {
            const companyName1 = document.getElementById('company-name1');
            const companyBs1 =document.getElementById ('company-bs1');
            const email1 =document.getElementById ('mail1');
            const city1 =document.getElementById ('city1');
            const phone1 =document.getElementById ('phone1');
            const website1 =document.getElementById ('website1');
            const street1 =document.getElementById ('street1');
            const zipCode1 =document.getElementById ('zip-code1');
            const suite1 =document.getElementById ('suite1');



            // GETTING THE DATA FROM API TO DISPLAY

            // company name
            const ApiCompany1= data[1].company.name;
            companyName1.innerText = `Company Name: ${ApiCompany1}`;

            // company work
            const apiBs = data[1].company.bs;
            companyBs1.innerText = `Our Motto: ${apiBs}`;

            // mail
            const apiMail1= data[1].email;
            email1.innerText = `E mail: ${apiMail1}`;

            // City
            const apiCity1= data[1].address.city;
            city1.innerText = `City: ${apiCity1}`;

            // Street
            const apiStreet = data[1].address.street;
            street1.innerText = `Street: ${apiStreet}`;

            // phone
            const apiPhone1= data[1].phone;
            phone1.innerText = `Phone: ${apiPhone1}`;

            // website
            const apiWeb1= data[1].website;
            website1.innerText = `Website: ${apiWeb1}`;

            // zipcode
            const apiZip1= data[1].address.zipcode;
            zipCode1.innerText = `Zipcode: ${apiZip1}`;

            // suite\
            const apiSuite = data[1].address.suite;
            suite2.innerText = `Suite: ${apiSuite}`;
        });
    })
    .catch (err => console.log(err));
}

// THE CONTACT US BUTTON FUNCTION

mindBtn = document.getElementById('in-mind-btn')

const contactUs2= ()=>{
    let mindContact = document.getElementById('in-mind-contact')

    if (mindContact.classList === 'hidden') {
        mindContact.classList.toggle('visible');
    }else{
        mindContact.classList.toggle('hidden')
    }

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.forEach(place => {
            const companyName2 = document.getElementById('company-name2');
            const companyBs2 =document.getElementById ('company-bs2');
            const email2 =document.getElementById ('mail2');
            const city2 =document.getElementById ('city2');
            const phone2 =document.getElementById ('phone2');
            const website2 =document.getElementById ('website2');
            const street2 =document.getElementById ('street2');
            const zipCode2 =document.getElementById ('zip-code2');
            const suite2 =document.getElementById ('suite2');



            // GETTING THE DATA FROM API TO DISPLAY

            // company name
            const ApiCompany2 = data[4].company.name;
            companyName2.innerText = `Company Name: ${ApiCompany2}`;

            // company work
            const apiBs = data[4].company.bs;
            companyBs2.innerText = `Our Motto: ${apiBs}`;

            // mail
            const apiMail2 = data[4].email;
            email2.innerText = `E mail: ${apiMail2}`;

            // City
            const apiCity2 = data[4].address.city;
            city2.innerText = `City: ${apiCity2}`;

            // Street
            const apiStreet = data[4].address.street;
            street2.innerText = `Street: ${apiStreet}`;

            // phone
            const apiPhone2 = data[4].phone;
            phone2.innerText = `Phone: ${apiPhone2}`;

            // website
            const apiWeb2 = data[4].website;
            website2.innerText = `Website: ${apiWeb2}`;

            // zipcode
            const apiZip2 = data[4].address.zipcode;
            zipCode2.innerText = `Zipcode: ${apiZip2}`;

            // suite\
            const apiSuite = data[4].address.suite;
            suite2.innerText = `Suite: ${apiSuite}`;
        });
    })
    .catch (err => console.log(err));
}

mindBtn.addEventListener('click', contactUs2);

digitalcontactBtn.addEventListener('click', digiContact);



