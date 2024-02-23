import './../../css/base.css';
import './../../css/abcjs-audio.css';
import Score from '../Score';
import BottomButtons from '../BottomButtons';

import {HashLink} from 'react-router-hash-link';

const MajorScale = () => {
  return (
    <div className="window-wrapper">
      <div className="content-wrapper">
        <h1 id="title">2.1 長音階</h1>
        <p className="text-wrap text-start">
          この章では、幹音を扱います。
        </p>
        <ul className="my-ul">
          <li>シャープやフラットのついていない音を、<em>幹音</em>と呼びます</li>
          <li><em>イタリア語</em>、<em>日本語</em>、<em>ドイツ語</em>、<em>英語</em>のそれぞれで幹音を言えるようになりましょう</li>
        </ul>        
        <h2>イタリア語</h2>
        
        <BottomButtons currentID = "MinorScale"/>
      </div>
    </div>
  );
};

export default MajorScale;