import './../../css/base.css';
import './../../css/abcjs-audio.css';
import Score from './../Score';
import BottomButtons from './../BottomButtons';

const NaturalNote = () => {
  return (
    <div>
      <div className="content-wrapper">
        <h1 id="title">1.1 幹音</h1>
        <p className="text-wrap text-start">
          この章では、幹音を扱います。
        </p>
        <ul className="my-ul">
          <li>シャープやフラットのついていない音を<em>幹音</em>と呼びます</li>
          <li>日独英伊における派生音の音名を覚えましょう</li>
        </ul>
        <h2>派生音とは</h2>
        <p className="text-wrap text-start">
          本サイトは、以下の前提知識を身につけている方を対象としています。
        </p>
        <ul className="my-ul">
          <li>ト音記号で書かれた<em>楽譜</em>が読める</li>
          <li><em>ピアノの鍵盤</em>と<em>ドレミ</em>の対応が分かる</li>
        </ul>
        <h2>目次</h2>
        <p className="text-wrap text-start">
          本サイトで学べる内容は、以下の通りです。
        </p>
        <h2>楽譜について</h2>
        <p className="text-wrap text-start">
          本サイトでは、必要に応じて以下のような<em>楽譜</em>を用います。
          <Score id="Score1" score="CDEFGABc" />
          楽譜の下にある再生ボタンを押すと、音を聴くことができます。
        </p>
        <h2>クイズについて</h2>
        <p className="text-wrap text-start">
          理解を確認するため、各章に<em>クイズ</em>を用意しています。<br></br>内容を確実に習得するため、<em>各テストの内容を理解してから次へ進む</em>ことを強くおすすめします。
        </p>
        <BottomButtons currentID = "NaturalNote"/>
      </div>
    </div>
  );
};
  
export default NaturalNote;