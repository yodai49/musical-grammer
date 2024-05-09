import './../../css/base.css';
import './../../css/abcjs-audio.css';
import Score from './../Score';
import BottomButtons from './../BottomButtons';

import {HashLink} from 'react-router-hash-link';
import QDerivedNote1 from './Quiz/QDerivedNote1';
import QDerivedNote2 from './Quiz/QDerivedNote2';
import QDerivedNote3 from './Quiz/QDerivedNote3';
import QDerivedNote4 from './Quiz/QDerivedNote4';

const DerivedNote = () => {
  return (
    <div className="window-wrapper">
      <div className="content-wrapper">
        <h1 id="title">1.2 派生音</h1>
        <p className="text-wrap text-start">
          この章では、派生音を扱います。
        </p>
        <ul className="my-ul">
          <li>シャープ（♯）やフラット（♭）がついた音を<em>派生音</em>と呼びます</li>
          <li><em>イタリア語</em>、<em>日本語</em>、<em>ドイツ語</em>、<em>英語</em>のそれぞれで派生音を言えるようになりましょう</li>
        </ul>        
        <h2>シャープとフラット</h2>
        <div className="text-wrap text-start">
          まずは、<em>シャープとフラット</em>を簡単におさらいします。シャープやフラットが理解できている人は、<HashLink to="./../DerivedNote#Italy">イタリア語</HashLink>まで飛ばして構いません。<br></br><br></br>
          前章で扱った<HashLink to="/NaturalNote#title">幹音</HashLink>を、<em>半音上下</em>させることがあります。この時に使うのが、シャープやフラットです。<br></br>
          幹音を<em>半音上げたいときはシャープ</em>を、<em>半音下げたいときはフラット</em>を用います。楽譜上での表記は、シャープが「♯」、フラットが「♭」です。<br></br><br></br>
          シャープやフラットには、以下の<em>2通りの使い方</em>があります。<br></br><br></br>
          <ul className="my-ul">
            <li><em>臨時記号</em>……主に一回だけ音を上げ下げしたい場合に使う</li>
            <li><em>調性記号</em>……主に一曲を通して音を上げ下げしたい場合に使う</li>
          </ul>

          例えば、臨時記号の「ドのシャープ」と「シのフラット」は、それぞれ次のように表記されます。
          <Score id="Score1" score="^C_B" />
          臨時記号で書かれたシャープやフラットは、一小節の中のみ有効です。<br></br><br></br>
          調性記号の場合、例えば「シのフラット」は、次のように表記されます。
          <Score id="Score2" score="CEFB" option="K:F"/>
          調性記号で書かれたシャープやフラットは、調性記号が途中で変更されない限り、曲が終わるまで有効です。<br></br>
          なお、曲の途中で調性記号が変わることを<em>転調</em>と呼びます。
        </div>
        <h2 id="Italy">イタリア語</h2>
        <div className="text-wrap text-start">
          さて、ここからは各言語における派生音の呼び方を扱います。まずは<em>イタリア語</em>から始めましょう。<br></br><br></br>
          
          イタリア語の派生音は、<em>音の後に「シャープ（♯）」や「フラット（♭）」をつける</em>だけです。<br></br>
          例えば、次の楽譜に書かれている音は左から順番に「ド♯」「ミ♭」「ファ♯」「シ♭」と呼びます。<br></br>
          <Score id="Score3" score="^C_E^F^B" />
          読み方は、それぞれ「ド シャープ」「ミ フラット」「ファ シャープ」「シ フラット」です。
        </div>
        <h2>日本語</h2>
        <div className="text-wrap text-start">
          次に、<em>日本語</em>での派生音の呼び方を確認しましょう。<br></br>
          日本語の派生音は、それぞれの音の前に<em>「嬰」や「変」</em>をつけて表します。<br></br><br></br>
          <table className="table text-nowrap table-short">
            <tbody>
              <tr>
                <th scope="row"></th>
                <td>シャープ</td>
                <td>フラット</td>
              </tr>
              <tr>
                <th scope="row">日本語</th>
                <td>嬰（えい）</td>
                <td>変（へん）</td>
              </tr>
            </tbody>
          </table><br></br>
          例えばドのシャープは「嬰ハ」、シのフラットは「変ロ」と呼びます。その他の音も同様です。<br></br>イタリア語と異なり、<em>音の前に</em>「嬰」や「変」をつけることに注意しましょう。<br></br><br></br>
          ちなみに、「嬰」は「えい」と読みます。楽典以外ではなかなか使わない漢字ですね。
        </div>
        <h2>ドイツ語</h2>
        <div className="text-wrap text-start">
          <em>ドイツ語</em>の派生音も覚える必要があります。<br></br>
          幹音のときと同様に、ドイツ語は難関かもしれません。<em>音の後に"is"や"es"</em>をつけて表します。<br></br><br></br>
          <div className="table-responsive">
            <table className="table text-nowrap table-short">
              <tbody>
                <tr>
                  <th scope="row"></th>
                  <td>シャープ</td>
                  <td>フラット</td>
                </tr>
                <tr>
                  <th scope="row">ドイツ語</th>
                  <td>-is</td>
                  <td>-es</td>
                </tr>
              </tbody>
            </table>
          </div><br></br>
          例えばドのシャープは"Cis"、レのフラットは"Des"と呼びます。ただし、いくつかの例外があるため注意が必要です。<br></br><br></br>
          以下の表を覚えてください。始めのうちはなんとなくでもよいので、発音も含め頭に入れておくことをおすすめします。<br></br><br></br>
          <div className="table-responsive">
            <table className="table text-nowrap table-short">
              <tbody>
                <tr>
                  <th scope="row">幹音</th>
                  <td>C</td>
                  <td>D</td>
                  <td>E</td>
                  <td>F</td>
                  <td>G</td>
                  <td>A</td>
                  <td>H</td>
                </tr>
                <tr>
                  <th scope="row">シャープ</th>
                  <td>Cis</td>
                  <td>Dis</td>
                  <td>Eis</td>
                  <td>Fis</td>
                  <td>Gis</td>
                  <td>Ais</td>
                  <td>His</td>
                </tr>
                <tr>
                  <th scope="row">読み（シャープ）</th>
                  <td>ツィス</td>
                  <td>ディス</td>
                  <td>エイス</td>
                  <td>フィス</td>
                  <td>ギス</td>
                  <td>アイス</td>
                  <td>ヒス</td>
                </tr>
                <tr>
                  <th scope="row">フラット</th>
                  <td>Ces</td>
                  <td>Des</td>
                  <td><em>Es</em></td>
                  <td>Fes</td>
                  <td>Ges</td>
                  <td><em>As</em></td>
                  <td><em>B</em></td>
                </tr>
                <tr>
                  <th scope="row">読み（フラット）</th>
                  <td>ツェス</td>
                  <td>デス</td>
                  <td>エス</td>
                  <td>フェス</td>
                  <td>ゲス</td>
                  <td>アス</td>
                  <td>べー</td>
                </tr>
              </tbody>
            </table>
            シャープは規則通りですが、フラットにトラップが多いので気をつけてください。<br></br><br></br>
            まず、"E"や"A"のような母音のみの音にフラットをつける場合、<em>"es"ではなく"s"のみ</em>をつけます。<br></br>
            また、<em>"H"のフラットは例外的に"B"</em>とし、「ベー」と読みます。"Hes"は使わないので気をつけてください。
          </div><br></br>
        </div>
        <h2>英語</h2>
        <div className="text-wrap text-start">
          最後は<em>英語</em>です。<br></br><br></br>
          英語の派生音は、<em>音の後に「♯」や「♭」</em>をつけるだけです。<br></br>
          例えば、次の音はそれぞれ「C♯」「E♭」と呼び、それぞれ「シー シャープ」「イー フラット」と読みます。
          <Score id="Score4" score="^C_E" />
        </div>
        <h2>重変記号</h2>
        <div className="text-wrap text-start">
         <em>※初めて楽典を学ぶ場合、この章の内容は覚えなくても大丈夫です。</em><br></br><br></br>
          先ほどは幹音を半音だけ上げ下げしたい場合を扱いましたが、場合によっては<em>半音2回分</em>、つまり<em>全音1つ分上げ下げ</em>したいことがあります。<br></br>
          その時に使うのが、<em>「ダブルシャープ」や「ダブルフラット」</em>です。これらは、まとめて<em>「重変記号」</em>と呼ばれます。<br></br><br></br>
          ダブルシャープやダブルフラットは、楽譜上でそれぞれ次のように表記します。
          <Score id="Score5" score="^^F__B"/>
          一つ目が「ファのダブルシャープ」、二つ目が「シのダブルフラット」です。<br></br><br></br>
         これらはなかなかお目にかかることはありませんが、参考程度に<em>日本語</em>と<em>ドイツ語</em>における重変記号の呼び方を紹介しておきます。<br></br><br></br>
          <div className="table-responsive">
            <table className="table text-nowrap table-short">
              <tbody>
                <tr>
                  <th scope="row"></th>
                  <td>ダブルシャープ</td>
                  <td>ダブルフラット</td>
                </tr>
                <tr>
                  <th scope="row">日本語</th>
                  <td>重嬰</td>
                  <td>重変</td>
                </tr>
                <tr>
                  <th scope="row">ドイツ語</th>
                  <td>-isis</td>
                  <td>-eses</td>
                </tr>
              </tbody>
            </table>
          </div><br></br>
          例えば、日本語でドのダブルシャープは「重嬰ハ」、ミのダブルフラットは「重変ホ」と呼びます。<br></br>
          ドイツ語では、ドのダブルシャープが"Cisis"、ミのダブルフラットが"Eses"です。<br></br><br></br>

          ちなみに、ドイツ語のシのダブルフラットには呼び方が複数存在します。<br></br>
          規則通りに<em>"Heses"</em>と呼んでもよいですし、<em>"Bes"（ベス）</em>や<em>"BB"（べーべー）</em>と呼ぶ人もいます。"Hes"を使わないのに、"Heses"は使うのってなんか変ですね。<br></br>また、"Ases"（アセス）は"Asas"（アサス）と読んでもOKです。<br></br><br></br>

          ところで、<em>重変記号っていらないのでは</em>と思った方はいないでしょうか。<br></br><br></br>
          実際、ファを全音上げたら「ソ」と同じ高さになるし、シを全音下げたら「ラ」と同じ高さになります。<br></br>
          重変記号というまどろっこしいものを使わなくても、隣の音を使えば幹音か変位記号1個で済んでしまうのです。<br></br><br></br>
          それでも、<em>重変記号はときに必要なときが訪れます。</em>重変記号が必要な理由は、<HashLink to="">長音階</HashLink>の章まで学ぶと理解できるでしょう。
        </div>
        <h2>クイズ</h2>
        <div className="text-wrap text-start">
          以下のクイズに答えてみましょう。幹音の復習も兼ねて、トライしてみてください。
        </div>
        <QDerivedNote1 id="Quiz1"/>
        <QDerivedNote2 id="Quiz2"/>
        <QDerivedNote3 id="Quiz3"/>
        <QDerivedNote4 id="Quiz4"/>

        <BottomButtons currentID = "DerivedNote"/>
      </div>
    </div>
  );
};

export default DerivedNote;