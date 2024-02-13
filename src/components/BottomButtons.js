import React from 'react';
import {HashLink} from 'react-router-hash-link';
import searchSection from './SectionMaster';

import './../css/bottom-buttons.css';

const BottomButtons = (props) => {
    var prev = "./../" + searchSection(props.currentID, -1) + "#title"; 
    var next = "./../" + searchSection(props.currentID, 1) + "#title";
    var prevClass = "";
    var nextClass = "";
    if(typeof searchSection(props.currentID, -1) === "undefined") {
        prev = "";
        prevClass = "disabled-link";
    }
    if(typeof searchSection(props.currentID, 1) === "undefined") {
        next = "";
        nextClass = "disabled-link";
    }
    return (
        <nav>
            <ul className="pagination justify-content-center">
                <li className="page-item"><HashLink to={prev} className={"page-link " + prevClass}>前の章へ</HashLink></li>
                <li className="page-item"><HashLink to={next} className={"page-link " + nextClass}>次の章へ</HashLink></li>
            </ul>   
        </nav>
    )
};

export default BottomButtons;