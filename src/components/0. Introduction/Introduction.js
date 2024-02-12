import './../../css/base.css';
import './../../css/abcjs-audio.css';
import Score from './../Score';

const Introduction = () => {
  return (
    <div>
      <div className="content-wrapper">
        <h1>はじめに</h1>
        <p className="text-wrap text-start">
          楽典基礎のページへようこそ。本ページでは、以下の内容を学ぶことができます。
        </p>
        <ul className="my-ul">
          <li>音階や度数、和音など、基本的な<em>楽典事項</em>が身につきます</li>
          <li>ミュージシャンや作曲家と会話する上で<em>必要最低限の知識</em>が身につきます</li>
          <li>内容を完璧にマスターすれば、多くの<em>音大入試</em>も解けるようになります</li>
        </ul>
        <h2>前提知識</h2>
        <p className="text-wrap text-start">
          本ページは、以下の前提知識を身につけている方を対象としています。
        </p>
        <ul className="my-ul">
          <li>ト音記号で書かれた<em>楽譜</em>が読める</li>
          <li><em>ピアノの鍵盤</em>と<em>ドレミ</em>の対応が分かる</li>
        </ul>
        <h2>目次</h2>
        <p className="text-wrap text-start">
          本ページで学べる内容は、以下の通りです。
        </p>
        <h2>楽譜について</h2>
        <p className="text-wrap text-start">
          本ページでは、必要に応じて以下のような楽譜を用います。
          <Score id="Score1" score="CDEFGABc" />
          楽譜の下にある再生ボタンを押すと、音を聴くことができます。
        </p>
        <h2>クイズについて</h2>
        <p className="text-wrap text-start">
          本ページでは、理解を確認するためにクイズを用意しています。<br></br>内容を確実に習得するため、テストの内容を理解してから次へ進むことを強くおすすめします。
        </p>
      </div>
    </div>
  );
};

export default Introduction;