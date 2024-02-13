import './../../css/base.css';
import './../../css/abcjs-audio.css';
import Score from './../Score';
import BottomButtons from './../BottomButtons';

import {HashLink} from 'react-router-hash-link';
import {Link} from 'react-router-dom';

const Introduction = () => {
  return (
    <div className="window-wrapper">
      <div className="content-wrapper">
        <h1 id="title">はじめに</h1>
        <div className="text-wrap text-start">
          楽典基礎のサイトへようこそ。本サイトでは、以下の能力を身につけることができます。
        </div>
        <ul className="my-ul">
          <li>音階や度数、和音など、基本的な<em>楽典事項</em>が身につきます</li>
          <li>ミュージシャンや作曲家と会話する上で<em>必要最低限の知識</em>が身につきます</li>
          <li>内容を完璧にマスターすれば、多くの<em>音大入試</em>も解けるようになります</li>
        </ul>
        <h2>前提知識</h2>
        <div className="text-wrap text-start">
          本サイトは、以下の前提知識を身につけている方を対象としています。
        </div>
        <ul className="my-ul">
          <li>ト音記号で書かれた<em>楽譜</em>が読める</li>
          <li><em>ピアノの鍵盤</em>と<em>ドレミ</em>の対応が分かる</li>
        </ul>
        <h2>目次</h2>
        <div className="text-wrap text-start">
          本サイトで学べる内容は、以下の通りです。
        </div>
        <div className="table-responsive">
        <table class="table text-nowrap">
          <thead>
            <tr>
              <th scope="col">章</th>
              <th scope="col">内容</th>
              <th scope="col">目標</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1. 音名</th>
              <td><HashLink to="/NaturalNote#title">幹音</HashLink>・<HashLink to="/DerivedNote#title">派生音</HashLink></td>
              <td>4つの言語で音名を対応させられるようになる。</td>
            </tr>
            <tr>
              <th scope="row">2. 度数と調</th>
              <td>度数・調</td>
              <td>2つの音の間の度数が答えられる。近親調が答えられる。</td>
            </tr>
            <tr>
              <th scope="row">3. 階名と音階</th>
              <td>階名・長音階・短音階</td>
              <td>音名と階名の違いが理解できる。調の音階の構成音を言える。</td>
            </tr>
            <tr>
              <th scope="row">4. 和音</th>
              <td>和音</td>
              <td>和音の構成音を言える。</td>
            </tr>
            <tr>
              <th scope="row">5. 和声法入門</th>
              <td>禁則・限定進行音</td>
              <td>和声法の概念を知る。基本的な禁則を覚える。</td>
            </tr>
          </tbody>
        </table>
        </div>
        <h2>楽譜について</h2>
        <div className="text-wrap text-start">
          本サイトでは、必要に応じて以下のような<em>楽譜</em>を用います。
          <Score id="Score1" score="CDEFGABc" />
          楽譜の下にある再生ボタンを押すと、音を聴くことができます。
        </div>
        <h2>クイズについて</h2>
        <div className="text-wrap text-start">
          理解を確認するため、各章に<em>クイズ</em>を用意しています。<br></br>
          内容を確実に習得するため、<em>各テストの内容を理解してから次へ進む</em>ことを強くおすすめします。
        </div>
        <BottomButtons currentID = "Introduction"/>
      </div>
    </div>
  );
};

export default Introduction;