import React from 'react';
//import {useImage} from 'react-image';

//logo images
import strip from '../img/strip.svg';
import wrld from '../img/wrld.png';
import altwrld from '../img/wrld2.svg';
import reflect from '../img/reflect.svg';

//bg images
import pink from '../img/pinksky.png';
import red from '../img/redsky.png';
import blue from '../img/bluesky.png';
import orange from '../img/orangesky.png';

function Art(){

    const style = {}

    return(
        <div style={{backgroundImage: `url(${pink})`}} class="bottom">
            <img src={reflect} alt="name logo" class="name"/>
        </div>
    );
}

/*  TODO: 

think about other name designs to add in
    animations for every design when hovered over???
    look up how to acheive consistent SVG sizes
think about how to keep the web design proportional to mobile sizes etc.
think about the other components to add in (top navbar, bottom navbar, drawers ... etc)

*/

export default Art;