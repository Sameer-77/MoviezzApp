import React from "react";
import "../css/Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="contact-info">
                    <p>Contact Info:</p>
                    <ul>
                        <li>
                            <a href="mailto:shaiksameerbasha886@gmail.com">
                                ✉️ shaiksameerbasha886@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="tel:+916281858035">📞 +91 6281858035</a>
                        </li>
                    </ul>
                </div>
                <div className="social-links">
                    <p>Connect with Me:</p>
                    <ul>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/shaik-sameer-basha-5b32761b5/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                🔗 LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Shaik Sameer Basha. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
