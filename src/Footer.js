import {FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';
import {AiOutlineInstagram } from 'react-icons/ai';

export default function Footer() {
    return (
        <footer>
            <section className="one">
                <div className="one-inside">
                    <h1>Brighten up your inbox!</h1>
                    <p>Decor inspiration and color advice delivered to your inbox weekly</p>
                    <input type="email" placeholder='Enter Email' />
                </div>
            </section>

            <section className="section-two">
                    <h1>PAINT</h1>
                <div className="two-inside">
                    <div className="links">
                        <div className="link-head">SHOP</div>
                        <p>Wall Paint</p>
                        <p>Trim Paint</p>
                        <p>Ceiling Paint</p>
                        <p>Primer</p>
                        <p>Supplies</p>
                    </div>
                    <div className="links">
                        <div className="link-head">Account</div>
                        <p>Manage account</p>
                        <p>My Favorite Colors</p>
                        <p>Refer a Friend</p>
                    </div>
                    <div className="links">
                        <div className="link-head">Company</div>
                        <p>Press</p>
                        <p>Our Story</p>
                        <p>Our Products</p>
                        <p>Careers</p>
                        <p>Affiliate</p>
                        <p>Design Trade</p>
                    </div>
                    <div className="links">
                        <div className="link-head">Explore</div>
                        <p>Paint Color Genius</p>
                        <p>Paint Calculator</p>
                        <p>The Blog</p>
                        <p>Paint 101</p>
                        <p>Reviews</p>
                    </div>
                    <div className="links">
                        <div className="link-head">Support</div>
                        <p>FAQs</p>
                        <p>Financing</p>
                        <p>Contact Us</p>
                        <p>Warrenty</p>
                        <p>Safety Information</p>
                        <p>Returns</p>
                    </div>
                </div>
            </section>

            <section className="three">
                <div className="social">
                    <FaFacebookF/>
                    <FaTwitter/>
                    <AiOutlineInstagram/>
                    <FaPinterestP/>
                </div>
                <div className="condition">
                    <p>© 2021 Clare, Inc. | Terms & Conditions | Privacy Policy</p>
                </div>
            </section>
        </footer>            
    )
}
