<template>
    <div>
        <h1>Proposal Generated... </h1>
        <!-- <div class="main-wrapper">
            <header class="header">
                <div class="logo">
                    <img src="./assets/logo.webp" alt="Logo" class="company-logo" />
                    <span class="company-name">Algofolks</span>
                </div>

                <div class="title-section">
                    <h1>PROJECT</h1>
                    <h2>PROPOSAL</h2>
                </div>

                <div class="details-section">
                    <div class="prepared-info">
                        <p class="label">Prepared by :</p>
                        <p class="name">Phyllis Schwaiger</p>
                        <p class="label">Prepared for :</p>
                        <p class="name">Francois Mercer</p>
                    </div>

                    <div class="profile-section">
                        <div class="circle-image">
                            <img src="./assets/cir-img.jpg" alt="Profile" />
                        </div>
                        <img src="./assets/circle.png" alt="Decorative Circle" class="decorative-circle" />
                    </div>
                </div>

                <div class="contact-info">
                    <p>+91-8743045170</p>
                    <p>hi@algofolks.com</p>
                    <p>C 104, Sector 65 Noida,</p>
                    <p>201301 India</p>
                </div>
            </header>

            <div class="content-container">
                <div class="content-section">
                    <h3 class="section-title">Overview</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                        ullamcorper.
                    </p>
                </div>

                <div class="content-section">
                    <h3 class="section-title">Goals</h3>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</li>
                        <li>
                            Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                            aliquam erat volutpat.
                        </li>
                    </ul>
                </div>

                <div class="content-section">
                    <h3 class="section-title">Specifications</h3>
                    <p>
                        Nam liber tempor cum soluta nobis eleifend option congue nihil
                        imperdiet doming id quod mazim placerat facer possim assum. Typi non
                        habent claritatem insitam; est usus legentis in iis qui facit eorum
                        claritatem. Investigationes demonstraverunt lectores legere me lius.
                    </p>
                </div>

                <div class="content-section">
                    <h3 class="section-title">Lorem ipsum</h3>
                    <p>
                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
                        molestie consequat, vel illum dolore eu feugiat nulla facilisis at
                        vero eros et accumsan.
                    </p>
                </div>

                <div class="content-section">
                    <h3 class="section-title">Milestones</h3>
                    <div class="milestone">
                        <h4>I. Lorem ipsum</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                            erat volutpat.
                        </p>
                    </div>
                    <div class="milestone">
                        <h4>II. Dolor sit amet</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                            erat volutpat.
                        </p>
                    </div>
                </div>
            </div>

            <footer class="footer">
                <div class="social-icons">
                    <a href="#">
                        <img src="https://cdn-icons-png.flaticon.com/128/1384/1384005.png" alt="Facebook"
                            class="social-icon" />
                    </a>
                    <a href="#">
                        <img src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png" alt="Instagram"
                            class="social-icon" />
                    </a>
                    <a href="#">
                        <img src="https://cdn-icons-png.flaticon.com/128/733/733579.png" alt="Twitter"
                            class="social-icon" />
                    </a>
                    <a href="#">
                        <img src="https://cdn-icons-png.flaticon.com/128/145/145808.png" alt="Pinterest"
                            class="social-icon" />
                    </a>
                </div>

                <div class="footer-address">
                    <p>Address name St. 12, City Name, State, Country Name</p>
                    <p>(738) 479-6719 - (369) 718-1973</p>
                    <p>info@website.com - www.website.com</p>
                </div>

                <div class="footer-links">
                    <a href="#">UNSUBSCRIBE</a>
                    <span class="separator">|</span>
                    <a href="#">WEB VERSION</a>
                    <span class="separator">|</span>
                    <a href="#">SEND TO A FRIEND</a>
                </div>
            </footer>
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'project-proposal'
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    min-height: 100vh;
}

.main-wrapper {
    max-width: 800px;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

/* Header Section */
.header {
    padding: 40px;
    background-image: url("./assets/bg1.png");
    background-repeat: no-repeat;
    background-position: top right;
    background-size: 100% 100%;
    position: relative;
}

/* Logo Section */
.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 40px;
    margin-top: 40px;
}

.company-logo {
    width: 40px;
    height: auto;
}

.company-name {
    font-size: 16px;
    color: #c6a54c;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* Title Section */
.title-section {
    margin-bottom: 40px;
}

.title-section h1 {
    font-size: clamp(40px, 8vw, 60px);
    color: #1e2b4a;
    font-weight: bold;
    line-height: 1.1;
    margin-bottom: 10px;
}

.title-section h2 {
    font-size: clamp(40px, 8vw, 60px);
    color: #c6a54c;
    font-weight: bold;
    line-height: 1.1;
}

/* Details Section */
.details-section {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
    flex-wrap: wrap;
}

.prepared-info {
    flex: 1;
    min-width: 250px;
}

.label {
    color: #1e2b4a;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 5px;
}

.name {
    color: #c6a54c;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
}

/* Profile Section */
.profile-section {
    position: relative;
}

.circle-image {
    width: 230px;
    height: 230px;
    border-radius: 50%;
    border: 4px solid #c6a54c;
    padding: 6px;
    background: white;
    position: relative;
    z-index: 1;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.circle-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.decorative-circle {
    position: absolute;
    width: 100px;
    height: 100px;
    left: -50px;
    top: 120px;
    z-index: 2;
}

/* Contact Info */
.contact-info {
    text-align: right;
    color: #1e2b4a;
    font-size: 14px;
    line-height: 1.6;
    margin-top: 40px;
    font-weight: 600;
}

/* Content Section */
.content-container {
    padding: 40px;
    background-color: #fff;
}

.content-section {
    margin-bottom: 40px;
}

.section-title {
    color: #c6a54c;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
}

.content-section p {
    color: #1e2b4a;
    line-height: 1.6;
    margin-bottom: 15px;
    font-size: 15px;
}

.content-section ul {
    list-style-type: disc;
    padding-left: 20px;
    margin-bottom: 15px;
}

.content-section li {
    color: #1e2b4a;
    line-height: 1.6;
    margin-bottom: 10px;
    font-size: 15px;
}

.milestone {
    margin-bottom: 30px;
}

.milestone h4 {
    color: #1e2b4a;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
}

/* Footer */
.footer {
    background-color: #c6a54c;
    padding: 40px;
    text-align: center;
}

.social-icons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 30px;
}

.social-icon {
    width: 32px;
    height: 32px;
    transition: transform 0.3s ease;
}

.social-icon:hover {
    transform: scale(1.1);
}

.footer-links {
    color: #1e2b4a;
    font-size: 15px;
    font-weight: 600;
}

.footer-links a {
    color: #1e2b4a;
    text-decoration: none;
    text-transform: uppercase;
    transition: opacity 0.3s;
}

.footer-links a:hover {
    opacity: 0.8;
}

.separator {
    margin: 0 10px;
    color: #1e2b4a;
}

/* Update footer address styles */
.footer-address {
    color: #1e2b4a;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 30px;
    font-weight: 600;
}

.footer-address p {
    margin-bottom: 5px;
}

/* Update app store styles */
.app-stores {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 30px;
}

.store-button img {
    height: 40px;
    width: auto;
    transition: transform 0.3s ease;
}

.store-button:hover img {
    transform: scale(1.05);
}

/* Enhanced Responsive Design */
@media (max-width: 840px) {
    .main-wrapper {
        margin: 0;
        border-radius: 0;
    }
}

@media (max-width: 768px) {
    .header {
        padding: 30px 20px;
    }

    .title-section h1,
    .title-section h2 {
        font-size: 48px;
    }

    .details-section {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 30px;
    }

    .prepared-info {
        order: 2;
        min-width: 100%;
    }

    .profile-section {
        order: 1;
    }

    .circle-image {
        width: 200px;
        height: 200px;
    }

    .contact-info {
        text-align: center;
        margin-top: 30px;
    }

    .content-container {
        padding: 30px 20px;
    }

    .footer {
        padding: 30px 20px;
    }

    .footer-address {
        font-size: 14px;
    }

    .app-stores {
        gap: 10px;
    }

    .store-button img {
        height: 35px;
    }
}

@media (max-width: 480px) {
    .header {
        padding: 20px 15px;
    }

    .logo {
        margin-bottom: 30px;
        margin-top: 30px;
    }

    .company-logo {
        width: 32px;
    }

    .company-name {
        font-size: 14px;
    }

    .title-section h1,
    .title-section h2 {
        font-size: 36px;
    }

    .circle-image {
        width: 180px;
        height: 180px;
    }

    .decorative-circle {
        width: 70px;
        height: 70px;
        left: -25px;
        top: 100px;
    }

    .content-container {
        padding: 20px 15px;
    }

    .section-title {
        font-size: 20px;
    }

    .content-section p,
    .content-section li {
        font-size: 14px;
    }

    .milestone h4 {
        font-size: 16px;
    }

    .footer {
        padding: 25px 15px;
    }

    .social-icons {
        gap: 15px;
    }

    .social-icon {
        width: 24px;
        height: 24px;
    }

    .footer-address {
        font-size: 13px;
        margin-bottom: 20px;
    }

    .app-stores {
        margin-bottom: 20px;
    }

    .store-button img {
        height: 32px;
    }

    .footer-links {
        font-size: 12px;
    }

    .separator {
        margin: 0 5px;
    }
}

/* Add styles for very small devices */
@media (max-width: 360px) {

    .title-section h1,
    .title-section h2 {
        font-size: 32px;
    }

    .circle-image {
        width: 160px;
        height: 160px;
    }

    .content-section p,
    .content-section li {
        font-size: 13px;
    }

    .footer-address p {
        font-size: 12px;
    }

    .app-stores {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .store-button img {
        height: 30px;
    }
}
</style>