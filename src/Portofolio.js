import React from "react";

const Portofolio = props => {
    return (
        <div className='w3-main' style={{ marginLeft: '300px' }}>
            {/* First Photo Grid*/}
            <div className='w3-row-padding'>
                <div className='w3-third w3-container w3-margin-bottom'>
                    <img src={require('./imagens/mountains.jpg')} alt='Norway' width='100%' className='w3-hover-opacity' />
                    <div className='w3-container w3-white'>
                        <p><b>Lorem Ipsum</b></p>
                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue
                            gravida diam non fringilla.</p>
                    </div>
                </div>
                <div className='w3-third w3-container w3-margin-bottom'>
                    <img src={require('./imagens/lights.jpg')} alt='Norway' width='100%' className='w3-hover-opacity' />
                    <div className='w3-container w3-white'>
                        <p><b>Lorem Ipsum</b></p>
                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue
                            gravida diam non fringilla.</p>
                    </div>
                </div>
                <div className='w3-third w3-container'>
                    <img src={require('./imagens/nature.jpg')} alt='Norway' width='100%' className='w3-hover-opacity' />
                    <div className='w3-container w3-white'>
                        <p><b>Lorem Ipsum</b></p>
                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue
                            gravida diam non fringilla.</p>
                    </div>
                </div>
            </div>

            {/* Second Photo Grid*/}
            <div className='w3-row-padding'>
                <div className='w3-third w3-container w3-margin-bottom'>
                    <img src={require('./imagens/p1.jpg')} alt='Norway' width='100%' className='w3-hover-opacity' />
                    <div className='w3-container w3-white'>
                        <p><b>Lorem Ipsum</b></p>
                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue
                            gravida diam non fringilla.</p>
                    </div>
                </div>
                <div className='w3-third w3-container w3-margin-bottom'>
                    <img src={require('./imagens/p2.jpg')} alt='Norway' width='100%' className='w3-hover-opacity' />
                    <div className='w3-container w3-white'>
                        <p><b>Lorem Ipsum</b></p>
                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue
                            gravida diam non fringilla.</p>
                    </div>
                </div>
                <div className='w3-third w3-container'>
                    <img src={require('./imagens/p3.jpg')} alt='Norway' width='100%' className='w3-hover-opacity' />
                    <div className='w3-container w3-white'>
                        <p><b>Lorem Ipsum</b></p>
                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue
                            gravida diam non fringilla.</p>
                    </div>
                </div>
            </div>

            {/* Pagination */}
            <div className='w3-center w3-padding-32'>
                <div className='w3-bar'>
                    <a href='#' className='w3-bar-item w3-button w3-hover-black'>&laquo;</a>
                    <a href='#' className='w3-bar-item w3-black w3-button'>1</a>
                    <a href='#' className='w3-bar-item w3-button w3-hover-black'>2</a>
                    <a href='#' className='w3-bar-item w3-button w3-hover-black'>3</a>
                    <a href='#' className='w3-bar-item w3-button w3-hover-black'>4</a>
                    <a href='#' className='w3-bar-item w3-button w3-hover-black'>&raquo;</a>
                </div>
            </div>
        </div>
    )
}

export default Portofolio 