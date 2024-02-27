
# midProject

This repository hosts the source code for the Circle website along with its related features. Developed as a mid-term project for the Ironhack Front-End course, this website was created by the May '24 cohort. It is crafted using HTML, CSS, and Javascript technologies.

## Table of content

- [Overview](#overview)
- [File Structure](#file-structure)
- [Usage](#usage)
- [Live Preview](#live-preview)
- [Key Features](#key-features)
- [Contribution](#contribution)
- [Licensing](#licensing)

###  Overview 

This endeavor presents the studio's online platform, highlighting details regarding its offerings, recent endeavors, endorsements from clients, and a convenient contact form for users to reach out.

###  File Structure 

The project file structure is organized as follows:

```
├── assets (Contains visual assets like logos and images)
├── js (Contains JavaScript files for different functionalities)
│   ├── hamburger.js (A function that toggles the menu, enabling and disabling it.)
│   ├── form-validation.js (Provides client-side validation for the contact form)
│   ├── project-page.js (A set of functions that dynamically generates images.)
├── pages (Contains additional HTML pages)
│   ├── contact-us.html (Contact form page)
│   ├── project-page.html (Template page for dynamically fetched project details.)
├── styles (Contains styles for additional HTML pages)
│   ├── contact-us.css (Contains styles for contact.html)
│   ├── project-page.css (Contains styles for project.html)
├── index.html (Main HTML file for the website's home page)
├── index.js (Handles interactions and functionality on the home page)
├── LICENSE (MIT license)
├── README.md
└── styles.css (Universal styling, covering the entirety of the homepage as well.)
```
###  Usage 

To utilize and operate the Circle Digital Design and Development Studio website on your local system, adhere to these guidelines:

1. Duplicate the repository onto your local device.
2. Launch the `index.html` file using a web browser to access the homepage.
3. Explore additional pages like `contact-us.html` as required.

### Live Preview 

You can see this website live at https://ironhack-mid-project-laura-musso.netlify.app. The website is deployed on Netlify.

###  Key Features 

- Responsiveness:
    - Optimized for desktops at 1440px and mobile devices below 700px.
    - Dynamic Content Display:
- Projects showcased on the index.html page are retrieved dynamically from Ironhack's repository.
- Client-Side Form Validation:
    - Ensures all required fields are filled.
    - Validates the name field (set as "Ironhack").
    - Validates email address format.
    - Validates phone number (accepts only digits).
- Javascript Navigation:
    - Enhances user experience with seamless navigation via header and homepage buttons.

###  Contribution 

If you possess any recommendations, bug notifications, or feature proposals, do not hesitate to initiate an issue or propose a pull request.

###  Licensing

This project is licensed under the [MIT License](LICENSE).
