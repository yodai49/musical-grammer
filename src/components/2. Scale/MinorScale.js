import './../../css/base.css';
import './../../css/abcjs-audio.css';
import Score from '../Score';
import BottomButtons from '../BottomButtons';

import {HashLink} from 'react-router-hash-link';

const MinorScale = () => {
  return (
    <div className="window-wrapper">
      <div className="content-wrapper">
        <h1 id="title">2.2 短音階</h1>
        <p className="text-wrap text-start">
          この章では、幹音を扱います。
        </p>
        <ul className="my-ul">
          <li>暗い響きの音階を、<em>短音階</em>と呼びます</li>
          <li>短音階には、「<em>自然的短音階</em>」「<em>和声的短音階</em>」「<em>旋律的短音階</em>」の3種類があります</li>
          <li>特定の音から始まる<em>3種類の短音階</em>を、すべて構成できるようになりましょう</li>
        </ul>        
        <h2>自然的短音階</h2>
        <h2>和声的短音階</h2>
        <h2>旋律的短音階</h2>
        
        <BottomButtons currentID = "MinorScale"/>
      </div>
    </div>
  );
};

export default MinorScale;