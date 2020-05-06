import React, { Component } from 'react';

import './index.css';

import {
    FaGithub,
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaTwitch,
    FaLinkedin
} from 'react-icons/fa'



class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <header>
                <section className='social-links'>
                    <div className="links">
                        <a href="https://github.com/Guribeiro">
                            <strong>
                                Github
                            </strong>
                            <FaGithub className='fa-icon-github'/>
                        </a>
                        <a href="https://www.linkedin.com/in/gustavo-henrique-ribeiro-b58385184/">
                            <strong>
                                LinkedIn
                            </strong>
                            <FaLinkedin className='fa-icon-linkedin' />
                        </a>
                        <a href="https://www.facebook.com/gustavo.ribeiro.58173">
                            <strong>
                                Facebook
                            </strong>
                            <FaFacebook className='fa-icon-facebook'/>
                        </a>
                        <a href="https://www.instagram.com/gustavhrd/?hl=pt-br">
                            <strong>
                                Instagram
                            </strong>
                            <FaInstagram className='fa-icon-instagram' />
                        </a>
                        <a href="https://twitter.com/Guribeir">
                            <strong>
                                Twitter
                            </strong>
                            <FaTwitter className='fa-icon-twitter' />
                        </a>
                        <a href="https://www.twitch.tv/gustavoribeirodias">
                            <strong>
                                Twitch
                            </strong>
                            <FaTwitch className='fa-icon-twitch' />
                        </a>
                    </div>
                </section>
                <div className="container-course">

                </div>
            </header>
        );
    }
}

export default Header;