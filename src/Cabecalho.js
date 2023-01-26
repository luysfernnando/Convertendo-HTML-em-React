
import React from 'react';
import './estilos/Cabecalho.css';

const Menu = props => {

    // Script to open sidebar
    function w3_open() {
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("myOverlay").style.display = "block";
    }

    return (
        <div className='w3-main' style={{marginLeft: '300px'}}>
            {/* Header */}
            <header id='portfolio'>
                <a href='#'><img src={require('./html/base_arquivos/avatar_g2.jpg')} width='65px'
                    className='w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity' /></a>
                <span className='w3-button w3-hide-large w3-xxlarge w3-hover-text-grey' onclick={w3_open}><i
                    className='fa fa-bars'></i></span>
                <div className='w3-container'>
                    <h1><b>My Portfolio</b></h1>
                    <div className='w3-section w3-bottombar w3-padding-16'>
                        <span className='w3-margin-right'>Filter:</span>
                        <button className='w3-button w3-black'>ALL</button>
                        <button className='w3-button w3-white'><i className='fa fa-diamond w3-margin-right'></i>Design</button>
                        <button className='w3-button w3-white w3-hide-small'><i className='fa fa-photo w3-margin-right'></i>Photos</button>
                        <button className='w3-button w3-white w3-hide-small'><i className='fa fa-map-pin w3-margin-right'></i>Art</button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Menu