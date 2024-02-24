import './../../css/base.css';
import './../../css/abcjs-audio.css';
import './../../css/images.css';
import Score from '../Score';
import BottomButtons from '../BottomButtons';

import {HashLink} from 'react-router-hash-link';

const Key2 = () => {
  return (
    <div className="window-wrapper">
      <div className="content-wrapper">
        <h1 id="title">3.2 調②</h1>
        <p className="text-wrap text-start">
          この章では、調の発展事項を扱います。
        </p>
        <ul className="my-ul">
          <li><em>調</em>とは、一曲の中でよく使う音の関係を表す概念です</li>
          <li><em>日本語</em>、<em>ドイツ語</em>、<em>英語</em>のそれぞれで調の名前を言えるようになりましょう</li>
          <li>それぞれの調の<em>構成音</em>を言えるようになりましょう</li>
        </ul>        
        
        <h2>近親調</h2>


        <BottomButtons currentID = "Key2"/>
      </div>
    </div>
  );
};

export default Key2;