import React from 'react';

const Site = props => {
    return (
        <div>
            {/* !PAGE CONTENT! */}
            <div className='w3-main' style='margin-left:300px'>

                {/* Images of Me */}
                <div className='w3-row-padding w3-padding-16' id='about'>
                    <div className='w3-col m6'>
                        <img src='./base_arquivos/avatar_g.jpg' alt='Me' style='width:100%' />
                    </div>
                    <div className='w3-col m6'>
                        <img src='./base_arquivos/me2.jpg' alt='Me' style='width:100%' />
                    </div>
                </div>

                <div className='w3-container w3-padding-large' style='margin-bottom:32px'>
                    <h4><b>About Me</b></h4>
                    <p>Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem
                        ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum.
                        Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt
                        sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non
                        fringilla.</p>
                    <hr />

                    <h4>Technical Skills</h4>
                    {/* Progress bars / Skills */}
                    <p>Photography</p>
                    <div className='w3-grey'>
                        <div className='w3-container w3-dark-grey w3-padding w3-center' style='width:95%'>95%</div>
                    </div>
                    <p>Web Design</p>
                    <div className='w3-grey'>
                        <div className='w3-container w3-dark-grey w3-padding w3-center' style='width:85%'>85%</div>
                    </div>
                    <p>Photoshop</p>
                    <div className='w3-grey'>
                        <div className='w3-container w3-dark-grey w3-padding w3-center' style='width:80%'>80%</div>
                    </div>
                    <p>
                        <button className='w3-button w3-dark-grey w3-padding-large w3-margin-top w3-margin-bottom'>
                            <i className='fa fa-download w3-margin-right'></i>Download Resume
                        </button>
                    </p>
                    <hr />

                    <h4>How much I charge</h4>
                    {/* Pricing Tables */}
                    <div className='w3-row-padding' style='margin:0 -16px'>
                        <div className='w3-third w3-margin-bottom'>
                            <ul className='w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off'>
                                <li className='w3-black w3-xlarge w3-padding-32'>Basic</li>
                                <li className='w3-padding-16'>Web Design</li>
                                <li className='w3-padding-16'>Photography</li>
                                <li className='w3-padding-16'>1GB Storage</li>
                                <li className='w3-padding-16'>Mail Support</li>
                                <li className='w3-padding-16'>
                                    <h2>$ 10</h2>
                                    <span className='w3-opacity'>per month</span>
                                </li>
                                <li className='w3-light-grey w3-padding-24'>
                                    <button className='w3-button w3-teal w3-padding-large w3-hover-black'>Sign Up</button>
                                </li>
                            </ul>
                        </div>

                        <div className='w3-third w3-margin-bottom'>
                            <ul className='w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off'>
                                <li className='w3-teal w3-xlarge w3-padding-32'>Pro</li>
                                <li className='w3-padding-16'>Web Design</li>
                                <li className='w3-padding-16'>Photography</li>
                                <li className='w3-padding-16'>50GB Storage</li>
                                <li className='w3-padding-16'>Endless Support</li>
                                <li className='w3-padding-16'>
                                    <h2>$ 25</h2>
                                    <span className='w3-opacity'>per month</span>
                                </li>
                                <li className='w3-light-grey w3-padding-24'>
                                    <button className='w3-button w3-teal w3-padding-large w3-hover-black'>Sign Up</button>
                                </li>
                            </ul>
                        </div>

                        <div className='w3-third'>
                            <ul className='w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off'>
                                <li className='w3-black w3-xlarge w3-padding-32'>Premium</li>
                                <li className='w3-padding-16'>Web Design</li>
                                <li className='w3-padding-16'>Photography</li>
                                <li className='w3-padding-16'>Unlimited Storage</li>
                                <li className='w3-padding-16'>Endless Support</li>
                                <li className='w3-padding-16'>
                                    <h2>$ 25</h2>
                                    <span className='w3-opacity'>per month</span>
                                </li>
                                <li className='w3-light-grey w3-padding-24'>
                                    <button className='w3-button w3-teal w3-padding-large w3-hover-black'>Sign Up</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className='w3-container w3-padding-large w3-grey'>
                    <h4 id='contact'><b>Contact Me</b></h4>
                    <div className='w3-row-padding w3-center w3-padding-24' style='margin:0 -16px'>
                        <div className='w3-third w3-dark-grey'>
                            <p><i className='fa fa-envelope w3-xxlarge w3-text-light-grey'></i></p>
                            <p>email@email.com</p>
                        </div>
                        <div className='w3-third w3-teal'>
                            <p><i className='fa fa-map-marker w3-xxlarge w3-text-light-grey'></i></p>
                            <p>Chicago, US</p>
                        </div>
                        <div className='w3-third w3-dark-grey'>
                            <p><i className='fa fa-phone w3-xxlarge w3-text-light-grey'></i></p>
                            <p>512312311</p>
                        </div>
                    </div>
                    <hr className='w3-opacity' />
                    <form action='/action_page.php' target='_blank'>
                        <div className='w3-section'>
                            <label>Name</label>
                            <input className='w3-input w3-border' type='text' name='Name' required />
                        </div>
                        <div className='w3-section'>
                            <label>Email</label>
                            <input className='w3-input w3-border' type='text' name='Email' required />
                        </div>
                        <div className='w3-section'>
                            <label>Message</label>
                            <input className='w3-input w3-border' type='text' name='Message' required />
                        </div>
                        <button type='submit' className='w3-button w3-black w3-margin-bottom'><i
                            className='fa fa-paper-plane w3-margin-right'></i>Send Message</button>
                    </form>
                </div>

                {/* Footer */}
                <footer className='w3-container w3-padding-32 w3-dark-grey'>
                    <div className='w3-row-padding'>
                        <div className='w3-third'>
                            <h3>FOOTER</h3>
                            <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue
                                gravida diam non fringilla.</p>
                            <p>Powered by <a href='https://www.w3schools.com/w3css/default.asp' target='_blank'>w3.css</a></p>
                        </div>

                        <div className='w3-third'>
                            <h3>BLOG POSTS</h3>
                            <ul className='w3-ul w3-hoverable'>
                                <li className='w3-padding-16'>
                                    <img src='./base_arquivos/workshop.jpg' className='w3-left w3-margin-right' style='width:50px' />
                                    <span className='w3-large'>Lorem</span><br />
                                    <span>Sed mattis nunc</span>
                                </li>
                                <li className='w3-padding-16'>
                                    <img src='./base_arquivos/gondol.jpg' className='w3-left w3-margin-right' style='width:50px' />
                                    <span className='w3-large'>Ipsum</span><br />
                                    <span>Praes tinci sed</span>
                                </li>
                            </ul>
                        </div>

                        <div className='w3-third'>
                            <h3>POPULAR TAGS</h3>
                            <p>
                                <span className='w3-tag w3-black w3-margin-bottom'>Travel</span> <span
                                    className='w3-tag w3-grey w3-small w3-margin-bottom'>New York</span> <span
                                        className='w3-tag w3-grey w3-small w3-margin-bottom'>London</span>
                                <span className='w3-tag w3-grey w3-small w3-margin-bottom'>IKEA</span> <span
                                    className='w3-tag w3-grey w3-small w3-margin-bottom'>NORWAY</span> <span
                                        className='w3-tag w3-grey w3-small w3-margin-bottom'>DIY</span>
                                <span className='w3-tag w3-grey w3-small w3-margin-bottom'>Ideas</span> <span
                                    className='w3-tag w3-grey w3-small w3-margin-bottom'>Baby</span> <span
                                        className='w3-tag w3-grey w3-small w3-margin-bottom'>Family</span>
                                <span className='w3-tag w3-grey w3-small w3-margin-bottom'>News</span> <span
                                    className='w3-tag w3-grey w3-small w3-margin-bottom'>Clothing</span> <span
                                        className='w3-tag w3-grey w3-small w3-margin-bottom'>Shopping</span>
                                <span className='w3-tag w3-grey w3-small w3-margin-bottom'>Sports</span> <span
                                    className='w3-tag w3-grey w3-small w3-margin-bottom'>Games</span>
                            </p>
                        </div>

                    </div>
                </footer>

                <div className='w3-black w3-center w3-padding-24'>Powered by <a href='https://www.w3schools.com/w3css/default.asp'
                    title='W3.CSS' target='_blank' className='w3-hover-opacity'>w3.css</a></div>

                {/* End page content */}
            </div>
        </div>
    )
}

export default Site