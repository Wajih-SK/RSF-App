import React, { Component } from 'react';
import AboutImage1 from '../../../assets/logo/RSFLOGO.png'

import './safety.css'

class Safety extends Component {
    render() { 
        return ( 
            <section className="safety-page">
                {/* <!-- Header Section --> */}
                <div className="safety-header">
                    <h1>Our Safety Commitment</h1>
                    <p>Your safety is our priority. Here’s how we ensure every mile is a safe one.</p>
                </div>

                {/* <!-- Safety Points --> */}
                <div className="safety-points">
                    {/* <!-- Safety Commitment Statement --> */}
                    <div className="safety-point">
                    <img src={AboutImage1} alt="Safety Commitment"/>
                    <h2>1. Safety Commitment Statement</h2>
                    <p>
                        Our commitment to safety is at the heart of everything we do. We go above and beyond
                        industry standards to ensure the well-being of our drivers, cargo, and the communities
                        we serve.
                    </p>
                    </div>

                    {/* <!-- Driver Training and Certification --> */}
                    <div className="safety-point">
                    <img src={AboutImage1}  alt="Driver Training"/>
                    <h2>2. Driver Training and Certification</h2>
                    <p>
                        Our drivers undergo comprehensive training programs, including safe cargo handling,
                        and advanced certifications tailored to handle various types of cargo. We ensure our
                        team is always up to date with the latest safety standards and practices.
                    </p>
                    </div>

                    {/* <!-- Vehicle Maintenance and Inspection --> */}
                    <div className="safety-point">
                    <img src={AboutImage1}  alt="Vehicle Maintenance"/>
                    <h2>3. Vehicle Maintenance and Inspection</h2>
                    <p>
                        Our fleet is maintained to the highest standards, with rigorous pre-trip and post-trip
                        inspections, routine maintenance schedules, and real-time vehicle health monitoring to
                        ensure the safety and reliability of every journey.
                    </p>
                    </div>

                    {/* <!-- Technology and Monitoring Systems --> */}
                    <div className="safety-point">
                    <img src={AboutImage1}  alt="Technology Monitoring"/>
                    <h2>4. Technology and Monitoring Systems</h2>
                    <p>
                        Our vehicles are equipped with cutting-edge safety technology, including GPS tracking,
                        electronic logging devices, and real-time driver monitoring. These tools allow us to
                        proactively manage driver safety and respond immediately to any issues that may arise.
                    </p>
                    </div>

                    {/* <!-- Emergency Response and Compliance --> */}
                    <div className="safety-point">
                    <img src={AboutImage1}  alt="Emergency Response"/>
                    <h2>5. Emergency Response and Compliance</h2>
                    <p>
                        In the event of an emergency, our team is trained to respond swiftly and efficiently, with
                        clear protocols to ensure safety. We maintain strict compliance with all safety
                        regulations and continually update our policies to reflect the latest industry standards.
                    </p>
                    </div>

                    {/* <!-- Environmental and Public Safety Initiatives --> */}
                    <div className="safety-point">
                    <img src={AboutImage1}  alt="Environmental Safety"/>
                    <h2>6. Environmental and Public Safety Initiatives</h2>
                    <p>
                        We take our environmental responsibilities seriously. Our fleet is optimized for fuel
                        efficiency, and we are committed to sustainable practices that reduce emissions and
                        contribute to a safer, healthier environment.
                    </p>
                    </div>

                    {/* <!-- Customer and Public Safety Tips --> */}
                    <div className="safety-point">
                    <img src={AboutImage1}  alt="Public Safety Tips"/>
                    <h2>7. Customer and Public Safety Tips</h2>
                    <p>
                        Safety is a shared responsibility. We encourage motorists to maintain safe distances
                        from trucks, avoid blind spots, and always use turn signals when passing. Together, we
                        can make our roads safer for everyone.
                    </p>
                    </div>
                </div>
                </section>


        );
    }
}
 
export default Safety;