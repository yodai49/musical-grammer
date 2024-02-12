import abcjs from "abcjs"; 
import { useEffect } from "react";

import './../css/abcjs-audio.css';
import './../css/score.css';

const Score = (props) => {
    var myOption;
    if(typeof props.option === "undefined") {
        myOption = '';
    } else {
        myOption = '\n' + props.option;
    }
    useEffect(() => {
        document.getElementById(props.id + 't').value='L:1/4' + myOption + '\n' + props.score;
        new abcjs.Editor(props.id + 't', { paper_id: props.id + "s",
                synth: {
                    el: '#' + props.id + 'a',
                    options: { displayLoop: true, displayRestart: true, displayPlay: true, displayProgress: true}
                }
            });
      }, []);

    return (
    <div className="scorebox">
        <div id={props.id + 's'} className="score"></div>
        <textarea id={props.id + 't'} className="score-textarea"></textarea>
        <div id={props.id + 'a'}></div>
    </div>);
}

export default Score;