import './../../css/base.css';
import './../../css/abcjs-audio.css';
import Score from './../Score';
import BottomButtons from './../BottomButtons';

import {HashLink} from 'react-router-hash-link';
import Quiz10 from './Quiz/1.0 NaturalNote1';
import Quiz11 from './Quiz/1.1 NaturalNote2';
import Quiz12 from './Quiz/1.2 NaturalNote3';
import Quiz13 from './Quiz/1.3 NaturalNote4';
import Quiz14 from './Quiz/1.4 NaturalNote5';
import Quiz15 from './Quiz/1.5 NaturalNote6';

const NaturalNote = () => {
  return (
    <div className="window-wrapper">
      <div className="content-wrapper">
        <h1 id="title">1.1 幹音</h1>
        <p className="text-wrap text-start">
          この章では、幹音を扱います。
        </p>
        <ul className="my-ul">
          <li>シャープやフラットのついていない音を、<em>幹音</em>と呼びます</li>
          <li><em>イタリア語</em>、<em>日本語</em>、<em>ドイツ語</em>、<em>英語</em>のそれぞれで幹音を言えるようになりましょう</li>
        </ul>        
        <h2>イタリア語</h2>
        <div className="text-wrap text-start">
          まずは、イタリア語の音名を確認しましょう。<br></br>
          イタリアは、長らくクラシック音楽の本場として影響力を持ち続けました。現代広く普及しているドレミはイタリア語です。<br></br>
          改めて、ト音記号で書かれた楽譜と音名をスラスラと対応させられるか確認してみてください。<br></br>
          <Score id="Score1" score="CDEFGABc" />
          左から順番に、「ドレミファソラシド」です。
        </div>
        <h2>日本語</h2>
        <div className="text-wrap text-start">
          次に、日本語での音名を確認しましょう。
          日本語の音名は、「ヘ長調」「ホ短調」といったように、調を表す時によく使われます。<br></br><br></br>
          調は<HashLink to="">長音階</HashLink>・<HashLink to="">短音階</HashLink>の章で詳しく扱うので、ここでは音名だけ言えるようになれば大丈夫です。<br></br><br></br>
          以下の表を丸暗記してください。<br></br><br></br>
          <table className="table text-nowrap table-short">
            <tbody>
              <tr>
                <th scope="row">イタリア語</th>
                <td>ド</td>
                <td>レ</td>
                <td>ミ</td>
                <td>ファ</td>
                <td>ソ</td>
                <td>ラ</td>
                <td>シ</td>
              </tr>
              <tr>
                <th scope="row">日本語</th>
                <td>ハ</td>
                <td>ニ</td>
                <td>ホ</td>
                <td>ヘ</td>
                <td>ト</td>
                <td>イ</td>
                <td>ロ</td>
              </tr>
            </tbody>
          </table><br></br>
          「ハニホヘトイロハ」は言えると思います。「ド」から順番に「ハニホヘトイロ」と覚えるとよいかもしれません。<br></br><br></br>
          イタリア語と日本語をスムーズに行き来できるようになるまで、表を使って変換の練習をしてみてください。
        </div>
        <h2>ドイツ語</h2>
        <div className="text-wrap text-start">
          ドイツ語での音名も重要です。ドイツ語の音名は、クラシックにおいてイタリア語と並んでよく使われます。また、吹奏楽では必須です。<br></br><br></br>
          暗記が続きますが、以下の表を覚えましょう。<br></br><br></br>
          <div className="table-responsive">
            <table className="table text-nowrap table-short">
              <tbody>
                <tr>
                  <th scope="row">イタリア語</th>
                  <td>ド</td>
                  <td>レ</td>
                  <td>ミ</td>
                  <td>ファ</td>
                  <td>ソ</td>
                  <td>ラ</td>
                  <td>シ</td>
                </tr>
                <tr>
                  <th scope="row">ドイツ語</th>
                  <td>C</td>
                  <td>D</td>
                  <td>E</td>
                  <td>F</td>
                  <td>G</td>
                  <td>A</td>
                  <td>H</td>
                </tr>
                <tr>
                  <th scope="row">読み</th>
                  <td>ツェー</td>
                  <td>デー</td>
                  <td>エー</td>
                  <td>エフ</td>
                  <td>ゲー</td>
                  <td>アー</td>
                  <td>ハー</td>
                </tr>
              </tbody>
            </table>
          </div><br></br>
          表記は原則として「ラ」から始まるアルファベット順ですが、「シ」のみ"H"なので注意してください。
          なお、"B"は<HashLink to="./DerivedNote">派生音</HashLink>の章で登場します。<br></br><br></br>
          読み方に関しては、「ツェーデーエーエフゲーアーハー」と10回ほど声に出して覚えてみましょう。<br></br><br></br>
          ドイツ語を覚えないと、ここから先の楽典を学ぶのは厳しいです。あまり親しみがないかもしれませんが、読み方も含めて確実に覚えてください。
        </div>
        <h2>英語</h2>
        <div className="text-wrap text-start">
          英語でも音名を言えるようになっておきましょう。<br></br><br></br>
          英語の音名は、<HashLink to="">和音</HashLink>を表すときに使われることがあります。<br></br><br></br>
          <div className="table-responsive">
            <table className="table text-nowrap table-short">
              <tbody>
                <tr>
                  <th scope="row">イタリア語</th>
                  <td>ド</td>
                  <td>レ</td>
                  <td>ミ</td>
                  <td>ファ</td>
                  <td>ソ</td>
                  <td>ラ</td>
                  <td>シ</td>
                </tr>
                <tr>
                  <th scope="row">英語</th>
                  <td>C</td>
                  <td>D</td>
                  <td>E</td>
                  <td>F</td>
                  <td>G</td>
                  <td>A</td>
                  <td>B</td>
                </tr>
                <tr>
                  <th scope="row">読み</th>
                  <td>シー</td>
                  <td>ディー</td>
                  <td>イー</td>
                  <td>エフ</td>
                  <td>ジー</td>
                  <td>エー</td>
                  <td>ビー</td>
                </tr>
              </tbody>
            </table>
          </div><br></br>
          ドイツ語に比べると格段にシンプルで、「ラシドレミファソ」の順に"ABCDEFG"と並べるだけです。ドイツ語における「シ」のような例外もありません。<br></br><br></br>
          読み方も、普通のアルファベットと同じです。日本語やドイツ語と比べると重要度は低いですが、時折使うのでサクッと覚えてしまいましょう。
        </div>
        <h2>まとめと補足</h2>
        <div className="text-wrap text-start">
          ここまで扱った4つの言語での表記と読みを一つの表にまとめると、以下のようになります。<br></br><br></br>
          <div className="table-responsive">
            <table className="table text-nowrap table-short">
              <tbody>
                <tr>
                  <th scope="row">イタリア語</th>
                  <td>ド</td>
                  <td>レ</td>
                  <td>ミ</td>
                  <td>ファ</td>
                  <td>ソ</td>
                  <td>ラ</td>
                  <td>シ</td>
                </tr>
                <tr>
                  <th scope="row">日本語</th>
                  <td>ハ</td>
                  <td>ニ</td>
                  <td>ホ</td>
                  <td>ヘ</td>
                  <td>ト</td>
                  <td>イ</td>
                  <td>ロ</td>
                </tr>
                <tr>
                  <th scope="row">ドイツ語</th>
                  <td>C</td>
                  <td>D</td>
                  <td>E</td>
                  <td>F</td>
                  <td>G</td>
                  <td>A</td>
                  <td>H</td>
                </tr>
                <tr>
                  <th scope="row">読み（ドイツ語）</th>
                  <td>ツェー</td>
                  <td>デー</td>
                  <td>エー</td>
                  <td>エフ</td>
                  <td>ゲー</td>
                  <td>アー</td>
                  <td>ハー</td>
                </tr>
                <tr>
                  <th scope="row">英語</th>
                  <td>C</td>
                  <td>D</td>
                  <td>E</td>
                  <td>F</td>
                  <td>G</td>
                  <td>A</td>
                  <td>B</td>
                </tr>
                <tr>
                  <th scope="row">読み（英語）</th>
                  <td>シー</td>
                  <td>ディー</td>
                  <td>イー</td>
                  <td>エフ</td>
                  <td>ジー</td>
                  <td>エー</td>
                  <td>ビー</td>
                </tr>
              </tbody>
            </table>
          </div><br></br>
          上記の表を暗記して、各言語で何も見ずに音名を言えるようになるのがこの章の目標です。<br></br><br></br>
          ここで徹底的に音名を覚えておくと、この後の学習が楽になります。始めはゆっくりでもよいので、4つの言語間で確実に音名を変換できるようになってください。
        </div>
        <h2>クイズ</h2>
        <div className="text-wrap text-start">
          ある程度表の内容を覚えられたら、以下のクイズに答えてみましょう。音名の変換を練習しているうちに、自然と音名を言えるようになります。
          <Quiz10 id="Quiz10"/>
          <Quiz11 id="Quiz11"/>
          <Quiz12 id="Quiz12"/>
          <Quiz13 id="Quiz13"/>
          <Quiz14 id="Quiz14"/>
          <Quiz15 id="Quiz15"/>
        </div>
        <BottomButtons currentID = "NaturalNote"/>
      </div>
    </div>
  );
};

export default NaturalNote;