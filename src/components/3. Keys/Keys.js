import './../../css/base.css';
import './../../css/abcjs-audio.css';
import './../../css/images.css';
import Score from '../Score';
import BottomButtons from '../BottomButtons';

import {HashLink} from 'react-router-hash-link';

const Keys = () => {
  return (
    <div className="window-wrapper">
      <div className="content-wrapper">
        <h1 id="title">3.1 調</h1>
        <p className="text-wrap text-start">
          この章では、調を扱います。
        </p>
        <ul className="my-ul">
          <li>明るい響きの音階を、<em>長音階</em>と呼びます</li>
          <li>特定の音から始まる<em>長音階</em>を構成できるようになりましょう</li>
        </ul>        
        <h2>長音階の構成音</h2>

        <BottomButtons currentID = "Keys"/>
      </div>
    </div>
  );
};

export default Keys;