import React, { Component } from 'react';
import AboutImage1 from '../../../assets/logo/RSFLOGO.png'
import './aboutus.css';
class AboutUs extends Component {
    render() { 
        return ( 
            <section class="about-us-page">
                {/* <!-- Hero Section --> */}
                <div class="hero-section">
                    <h1>About RSF Transport</h1>
                    <p>Delivering excellence, integrity, and safety across Canada, USA, and Mexico since 2022.</p>
                </div>

                {/* <!-- About Us Section --> */}
                <div class="about-us-section">
                    <h2>About Us</h2>
                    <hr class="divider"/>
                    <div class="content">
                    <p>
                        RSF is a Canadian company established in 2022, driven by the founders’ belief that the future lies in logistics services, enhancing human comfort. The company was created to facilitate the seamless delivery of all shipments from and to Canada, USA, and Mexico, from importers, factories, and farms to consumers, ensuring ease and safety. RSF is committed to earning customer trust through high-quality, professional, and prompt services.
                    </p>
                    <p>
                        To achieve this, RSF has invested in a diverse fleet of vehicles suited for various delivery needs and employs experienced drivers skilled in handling all types of vehicles safely and efficiently. We prioritize health and safety, ensuring that every employee adheres to stringent standards to deliver services securely to our clients.
                    </p>
                    <p>
                        In addition, RSF is dedicated to giving back to the community by planning to donate a portion of our profits to nursing homes, honoring the elders who have paved the way for our continued progress.
                    </p>
                    </div>
                    <img src={AboutImage1} alt="About RSF Transport"/>
                </div>

                {/* <!-- Mission Section --> */}
                <div class="mission-section">
                    <h2>Our Mission</h2>
                    <hr class="divider"/>
                    <blockquote>
                    "To provide reliable, integral, and sustainable service solutions through a strong support team of transportation professionals dedicated to our customer needs and committed to excellence."
                    </blockquote>
                    <div class="objectives">
                    <div class="objective">
                        <h3>Our Culture</h3>
                        <p>We are committed to conducting our business ethically and professionally while protecting customers, vendors, and employees, and prioritizing social and environmental responsibilities.</p>
                    </div>
                    <div class="objective">
                        <h3>Our Customers</h3>
                        <p>We strive to provide premium service through a healthy balance of human touch and technology, holding our partners to high standards.</p>
                    </div>
                    <div class="objective">
                        <h3>Our Employees</h3>
                        <p>We provide an equitable, diverse environment and encourage career growth through education and opportunity.</p>
                    </div>
                    </div>
                </div>

                {/* <!-- Values Section --> */}
                <div class="values-section">
                    <h2>Our Values</h2>
                    <hr class="divider"/>
                    <div class="values">
                    <div class="value">
                        <h3>Safety</h3>
                        <p>Safety is our culture, ensuring a secure work environment and striving for sustainable safety excellence.</p>
                    </div>
                    <div class="value">
                        <h3>Teamwork</h3>
                        <p>We achieve the best results through collaboration and thoughtful innovation.</p>
                    </div>
                    <div class="value">
                        <h3>Honesty & Integrity</h3>
                        <p>We are transparent, ethical, and accountable in all our actions.</p>
                    </div>
                    <div class="value">
                        <h3>Professionalism & Excellence</h3>
                        <p>We deliver on our commitments with pride, perseverance, and determination.</p>
                    </div>
                    </div>
                </div>

                {/* <!-- Message From Our Team --> */}
                <div class="team-message-section">
                    <h2>Message From Our Team</h2>
                    <hr class="divider"/>
                    <div class="content">
                    <p>
                        We have gathered and combined personnel with over seventy-five years of experience starting from the ground up. 
                        Our team has worked their way up mastering every level of operations along the way.
                    </p>
                    <p>
                        In addition to our combined experience, we never stop learning and continue to master new approaches and techniques. 
                        Our team works together to ensure that our company is regularly developing customer care procedures and a strong foundation for customer service...
                    </p>

                    <p>
                    Our commitment at RSF Transport is to continuously enlarge our fleet to meet our customers needs. Beginning a new endeavor is not an easy undertaking,
                     but we pride ourselves in the many accomplishments we have already achieved as we continue to meet our goals and deliver quality service.
                    </p>

                    <p>
                    As a business that prides itself in being five-star, we understand that our daily work is
                    highly visible to both the public and to the customers we service. That is why we strive
                    to provide quality equipment, quality professional drivers, and quality representatives of
                    RSF Transport with an overall outcome of prime, well-rounded service from start to
                    finish.                    
                    </p>
                    </div>
                </div>
            </section>


        );
    }
}
 
export default AboutUs;