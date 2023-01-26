import React from 'react';

const Site = props => {
    return (
        <div>
            {/* !PAGE CONTENT! */}
            <div className='w3-main' style='margin-left:300px'>

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