import './../../css/base.css';
import './../../css/abcjs-audio.css';
import Score from '../Score';
import BottomButtons from '../BottomButtons';

import {HashLink} from 'react-router-hash-link';

const Harmony = () => {
  return (
    <div className="window-wrapper">
      <div className="content-wrapper">
        <h1 id="title">4.3 和音</h1>
        <p className="text-wrap text-start">
          この章では、和音を扱います。
        </p>
        <ul className="my-ul">
          <li>使用頻度の高い音のセットを<em>和音</em>と呼びます</li>
          <li>与えられた音から、<em>和音の名前</em>を決められるようになりましょう</li>
          <li>和音の名前から、<em>和音に含まれる音</em>を答えられるようになりましょう</li>
        </ul>        
        <h2>度数</h2>
        <div className="text-wrap text-start">
          表記は原則として「ラ」から始まるアルファベット順ですが、「シ」のみ"H"なので注意してください。
          なお、"B"は<HashLink to="./DerivedNote">派生音</HashLink>の章で登場します。<br></br><br></br>
          読み方に関しては、「ツェーデーエーエフゲーアーハー」と10回ほど声に出して覚えてみましょう。<br></br><br></br>
          ドイツ語を覚えないと、ここから先の楽典を学ぶのは厳しいです。あまり親しみがないかもしれませんが、読み方も含めて確実に覚えてください。
        </div>
        <BottomButtons currentID = "Harmony"/>
      </div>
    </div>
  );
};

export default Harmony;