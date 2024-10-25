import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__wrapper'>
                <div className='footer__content'>
                    <div className='footer__social'>
                        <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' aria-label="Instagram">
                            <FaInstagram className='footer__icon' />
                        </a>
                        <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' aria-label="Facebook">
                            <FaFacebook className='footer__icon' />
                        </a>
                    </div>
                    <p className='footer__text'>© 2023</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
