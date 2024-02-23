import './../../css/base.css';
import './../../css/abcjs-audio.css';
import Score from '../Score';
import BottomButtons from '../BottomButtons';

import {HashLink} from 'react-router-hash-link';

const Harmony = () => {
  return (
    <div className="window-wrapper">
      <div className="content-wrapper">
        <h1 id="title">2.2 和音</h1>
        <p className="text-wrap text-start">
          この章では、和音を扱います。
        </p>
        <ul className="my-ul">
          <li>シャープやフラットのついていない音を、<em>幹音</em>と呼びます</li>
          <li><em>イタリア語</em>、<em>日本語</em>、<em>ドイツ語</em>、<em>英語</em>のそれぞれで幹音を言えるようになりましょう</li>
        </ul>        
        <h2>度数</h2>
        <div className="text-wrap text-start">
          表記は原則として「ラ」から始まるアルファベット順ですが、「シ」のみ"H"なので注意してください。
          なお、"B"は<HashLink to="./DerivedNote">派生音</HashLink>の章で登場します。<br></br><br></br>
          読み方に関しては、「ツェーデーエーエフゲーアーハー」と10回ほど声に出して覚えてみましょう。<br></br><br></br>
          ドイツ語を覚えないと、ここから先の楽典を学ぶのは厳しいです。あまり親しみがないかもしれませんが、読み方も含めて確実に覚えてください。
        </div>
        <BottomButtons currentID = "Interval"/>
      </div>
    </div>
  );
};

export default Harmony;