import './../../css/base.css';
import './../../css/abcjs-audio.css';
import Score from '../Score';
import BottomButtons from '../BottomButtons';

import {HashLink} from 'react-router-hash-link';
import QChord1 from './Quiz/QChord1';
import QChord2 from './Quiz/QChord2';
import QChord3 from './Quiz/QChord3';
import QChord4 from './Quiz/QChord4';

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
        <h2>和音の概要</h2>
        <div className="text-wrap text-start">
          よく使う3〜4つ程度の音のセットのことを、和音と呼びます。<br></br><br></br>
          以下のような音のセットが、和音の一例です。
          <Score id="ChordScore1" score="[c, e, G]4" />
          和音に含まれる音のうち、最も低い音のことを<em>根音</em>と呼びます。<br></br>
          例えば上の和音の場合、一番下のCの音が根音です。<br></br><br></br>
          なお、下から2番目のEの音は根音の3度上に位置しています。そのため、この音のことを「第3音」と呼ぶことがあります。<br></br>
          同様に、一番上のGの音は根音の5度上に位置しているため、「第5音」と呼ばれることがあります。<br></br><br></br>

          <div className="my-sup">
            和音は音の組み合わせ方によって無数に構成できます。
            しかし、音楽的にきれいな響きを持つものには限りがあるため、曲の中で使われる和音はある程度限られています。<br></br>

            まずは和音の基本的な概念を理解した上で、登場頻度の高い基本的なものから覚えていくとよいでしょう。<br></br>
          </div>
        </div>        
        <h2>和音の名前</h2>
          <div className="text-wrap text-start">
            和音の名前は、次のように構成されています。
          </div>
          <ul className="my-ul">
            <li>（根音の音名）＋（和音の種類）</li>
          </ul>        

          <div className="text-wrap text-start">
            和音の場合、根音の音名は英語です。
            種類は基本的にアルファベットで表されます。<br></br>
            例えば「Cm」という和音は、Cを一番低い音（根音）とする「m」という種類の和音です。<br></br><br></br>
          </div>
        <h2>和音の種類</h2>
        <div className="text-wrap text-start">
          和音には多くの種類がありますが、基本的なものは以下の4つです。
          <ul className="my-ul">
            <li>長三和音(なし)……明るい響きがします</li>
            <li>短三和音(m)……暗い響きがします</li>
            <li>減三和音(dim)……不安定な響きがします</li>
            <li>増三和音(aug)……注意を誘う響きがします</li>
          </ul>
          カッコの中身は、和音の名前をつけるときに使うアルファベットです。<br></br>
          例えばCを根音とする短三和音は"Cm"、減三和音は"C dim"と表されます。長三和音に関しては種類のアルファベットを省略し、単に"C"だけでOKです。<br></br><br></br>
          
          これら4つの和音の種類は、根音と第3音、第5音の度数によって決めることができます。<br></br>
          4つの和音を順に詳しく見ていきましょう。<br></br><br></br>
          
          長三和音は、冒頭にも聴いてもらった以下のような和音です。<br></br>
          <Score id="ChordScore2" score="[c, e, G]4" />
          根音と第3音、第5音の度数を考えてみてください。<br></br>
          第3音は根音の長3度上、第5音は根音の完全5度上に位置しています。
          第3音と第5音が根音に対してこの関係にある和音が、長三和音です。<br></br>
          音を聴いてもらえばわかるように、長三和音は明るい響きがします。<br></br><br></br>

          なお、「第3音が根音の長3度上、第5音が根音の完全5度上」という関係さえ覚えておけば、どの音を根音とする長三和音でも構成することができます。<br></br>
          例えば「Gを根音とする長三和音」の構成音は、それぞれ以下のようにして決めることができます。
          <ul className="my-ul">
            <li>第3音……根音の長三度上なので、H（ドイツ語）</li>
            <li>第5音……根音の完全五度上なので、D</li>
          </ul>
          次に、短三和音について見ていきましょう。<br></br>
          短三和音は、第3音が根音の短3度上、第5音が根音の完全5度上に位置する和音です。<br></br><br></br>
          例えば、Cを根音とする短三和音は以下のようになります。
          <Score id="ChordScore3" score="[c, _e, G]4" />
          先ほど聴いた長三和音と比べると、暗い響きがするのが確認できるでしょう。<br></br><br></br>

          次は、減三和音です。<br></br>
          減三和音は、第3音が根音の短3度上、第5音が根音の減5度上に位置する和音です。<br></br>
          例えば、Cを根音とする減三和音は以下のようになります。
          <Score id="ChordScore4" score="[c, _e, _G]4" />
          短三和音ともまた異なる、不安定な響きがしますね。<br></br>
          ちなみに、和音の名称に使われるアルファベットである"dim"は、「ディミニッシュ」と読みます。
          <br></br><br></br>

          最後に、増三和音を扱います。<br></br>
          増三和音は、第3音が根音の長3度上、第5音が根音の増5度上に位置する和音です。<br></br>
          例えば、Cを根音とする増三和音は以下のようになります。
          <Score id="ChordScore5" score="[c, e, ^G]4" />
          短三和音と似たような響きに感じる人がいるかもしれませんが、こちらはやや注意を誘う響きを持つのが特徴です。<br></br>
          実際、緊急地震速報の音にはこの増三和音が使われています。<br></br>
          アルファベットの略称は"aug"で、読み方は「オーギュメント」です。<br></br><br></br>

          さて、4つの和音を復習しましょう。<br></br>
          4種類の和音に含まれる音の度数を整理すると、以下のようになります。
          この表の内容さえ覚えれば、和音に関する基礎知識は完璧です。<br></br>
            <div className="table-responsive">
            <table className="table text-nowrap table-short">
              <tbody>
                <tr>
                  <th scope="row">和音の種類</th>
                  <td>長三和音</td>
                  <td>短三和音</td>
                  <td>減三和音</td>
                  <td>増三和音</td>
                </tr>
                <tr>
                  <th scope="row">名前</th>
                  <td>なし</td>
                  <td>m</td>
                  <td>dim</td>
                  <td>aug</td>
                </tr>
                <tr>
                  <th scope="row">根音と第3音の関係</th>
                  <td>長3度</td>
                  <td>短3度</td>
                  <td>短3度</td>
                  <td>長3度</td>
                </tr>
                <tr>
                  <th scope="row">根音と第5音の関係</th>
                  <td>完全5度</td>
                  <td>完全5度</td>
                  <td>減5度</td>
                  <td>増5度</td>
                </tr>
              </tbody>
            </table>
          </div>

        和音と構成音の関係がだいたい覚えられたら、以下のクイズに挑戦してみてください。<br></br>
        </div>
        <QChord1 id="Quiz1"/>
        <QChord2 id="Quiz2"/>
        <h2>調と和音</h2>
        <div className="text-wrap text-start">
          曲の中では、ある和音がその曲の調に対してどの高さに相当するのか分かったほうが便利です。<br></br>
          そこで、調と和音の関係を明確化するために、「Iの和音」「IIの和音」……といった呼び方をすることがあります。<br></br><br></br>

          例えば、二長調の和音について考えましょう。
          二長調の音階は以下の通りです。
          <Score id="ChordScore6" score="DE^FGAB^cd"/>
          Iの和音とは、音階の1番下の音、下から3番目の音、5番目の音を構成音とする和音のことです。<br></br>
          ニ長調におけるIの和音の構成音は、D, Fis, Aとなります。<br></br>
          <Score id="ChordScore7" score="[d, ^f, A]4" />
          ちなみに、この和音の名前はDです。<br></br><br></br>

          同様に、IIの和音は音階の下から2番目の音、4番目の音、6番目の音の音を構成音とする和音のことです。<br></br>
          ニ長調におけるIIの和音の構成音は、E, G, Bとなります。<br></br>
          <Score id="ChordScore8" score="[e, g, B]4" />
          この和音の名前はEmです。音階に含まれる音を構成音とする和音を構成しているため、いつも長三和音になるわけではないことに注意してください。<br></br><br></br>
          
          同様に、IIIの和音、IVの和音、……VIIの和音も同様に構成できます。<br></br>
          ニ長調におけるIの和音からVIIの和音を順に並べると、以下の通りです。<br></br>
          <Score id="ChordScore9" score="[d, ^f, A]4 [e, g, B]4 [^f, a, ^c]4 [g, b, d]4 [a, ^c', e]4 [b, d', ^f]4 [^c', e', g]4" />
          さて、このうち長三和音はどれでしょうか？<br></br>
          響きを聴けばわかるかもしれませんが、長三和音になっているのはI, IV, Vの3つですね。<br></br>
          II, III, VIの和音は短三和音で、VIIの和音は減三和音になっています。<br></br><br></br>

          これはニ長調以外の調でも成立するため、頭の片隅に入れておきましょう。
          <ul className="my-ul">
            <li>長三和音……I, IV, V</li>
            <li>短三和音……II, III, VI</li>
            <li>減三和音……VII</li>
          </ul>

          また、長三和音になるI, IV, Vの3つの和音は曲の中で重要な役割を果たすことが多いです。<br></br>
          そのため、これら3つの和音をまとめて「主要三和音」と呼ぶことがあります。<br></br>
          また、それぞれに以下のような名前がついています。
          <ul className="my-ul">
            <li>I……「トニック」または「主和音」</li>
            <li>IV……「サブドミナント」または「下属和音」</li>
            <li>V……「ドミナント」または「属和音」</li>
          </ul>
          さて、ここで以下の響きを聴いてみてください。
          <Score id="ChordScore10" option="K:D" score="[g, b, d]1 [a, c', e]1 [d, f, A]2" />
          これは、ニ長調におけるIVの和音、Vの和音、Iの和音を順番に並べたものです。<br></br>
          とても自然な流れで、最後のIに進んだときに落ち着いた感じがしたのではないでしょうか。<br></br><br></br>

          実は、IVの和音はVの和音へ進もうとする性質があり、Vの和音はIの和音へ進もうとする性質があります。<br></br>
          先ほどの連続した3つの和音が自然な響きに聴こえるのは、そのためです。
        </div>
        <div className="my-sup">
          I以外に、VIもIと似たような働きをするため、VIをトニックと呼ぶ場合があります。
          同様の理由で、IIをサブドミナント、VIIをドミナントと呼ぶ場合があります。<br></br>
        </div>
        <br></br>
        ここまで来たら、和音に関する基礎知識はすべて網羅できているはずです。<br></br>
        最後に以下のクイズに挑戦して、理解を確かめてみましょう。

        <QChord3 id="Quiz3"/>
        <QChord4 id="Quiz4"/>
        <BottomButtons currentID = "Harmony"/>
      </div>
    </div>
  );
};

export default Harmony;