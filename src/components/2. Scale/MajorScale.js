import './../../css/base.css';
import './../../css/abcjs-audio.css';
import './../../css/images.css';
import Score from '../Score';
import BottomButtons from '../BottomButtons';
import Piano from './../../images/piano.jpg';

import {HashLink} from 'react-router-hash-link';
import QMajorScale1 from './Quiz/QMajorScale1';
import QMajorScale2 from './Quiz/QMajorScale2';
import QMajorScale3 from './Quiz/QMajorScale3';
import QMajorScale4 from './Quiz/QMajorScale4';

const MajorScale = () => {
  return (
    <div className="window-wrapper">
      <div className="content-wrapper">
        <h1 id="title">2.1 長音階</h1>
        <p className="text-wrap text-start">
          この章では、長音階を扱います。
        </p>
        <ul className="my-ul">
          <li>明るい響きの音階を、<em>長音階</em>と呼びます</li>
          <li>特定の音から始まる<em>長音階</em>を構成できるようになりましょう</li>
        </ul>        
        <h2>長音階の構成音</h2>
        長音階とは、明るい響きの音階のことです。<br></br>
        例えばCの音から始まる長音階は、以下のようになります。再生ボタンを押して、明るい響きがすることを確かめてみてください。
        <Score id="ScaleScore1" score="CDEFGABc"/>
        さて、この音階に含まれる音と、それぞれの音の間隔を表にしてみましょう。<br></br>
        なお、ここから先に出てくる音名は、特に断りがない限りすべてドイツ語です。
        <div className="table-responsive">
          <table className="table text-nowrap table-short">
            <tbody>
              <tr>
                <th scope="row">順番</th>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
              </tr>
              <tr>
                <th scope="row">音名</th>
                <td>C</td>
                <td>D</td>
                <td>E</td>
                <td>F</td>
                <td>G</td>
                <td>A</td>
                <td>B</td>
                <td>C</td>
              </tr>
            </tbody>
          </table>
        </div>
        さて、この表にそれぞれの音の間隔を付け加えてみましょう。
        音楽では、音の間隔を「半音」や「全音」で表します。
        <ul className="my-ul">
          <li>ピアノの鍵盤を黒鍵も含めて数えた時に、隣り合う2つの音を「半音」といいます</li>
          <li>半音2つ分の音の間隔を、「全音」といいます</li>
        </ul>
        <img src={Piano} className="img-fluid rounded piano" alt=""/><br></br>
        
        例えば、はじめに紹介した長音階の一番下の音であるCと、その次の音であるDの間には黒鍵が存在するので、この間は全音です。<br></br>
        DからEも、間に黒鍵が存在するので全音です。<br></br>
        EからFは、間に黒鍵が存在しないため、半音となります。<br></br><br></br>
        これを続けていくと、以下の表が完成します。
        <div className="table-responsive">
          <table className="table text-nowrap table-short">
            <tbody>
              <tr>
                <th scope="row">順番</th>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
              </tr>
              <tr>
                <th scope="row">音名</th>
                <td>C</td>
                <td>D</td>
                <td>E</td>
                <td>F</td>
                <td>G</td>
                <td>A</td>
                <td>B</td>
                <td>C</td>
              </tr>
              <tr>
                <th scope="row">次の音までの間隔</th>
                <td>全音</td>
                <td>全音</td>
                <td>半音</td>
                <td>全音</td>
                <td>全音</td>
                <td>全音</td>
                <td>半音</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
        3段目に注目してください。全音を「全」、「半音」を「半」と略すと、「全全半全全全半」の順番で音が並んでいることがわかります。
        この「全全半全全全半」が、本章のキーワードです。<br></br><br></br>
        実は、一番下の音から「全全半全全全半」の順番で音を選んでいくと、どんな音から始まる長音階でも作ることができます。<br></br><br></br>

        例えば、Dの音から始まる長音階を作ってみましょう。<br></br>
        一番下の音はDなので、この音階はDから始まります。
        <Score id="ScaleScore2" score="D"/>
        次の音は、Dの全音1つ分上の音なので、Eになります。
        <Score id="ScaleScore3" score="DE"/>
        その次の音は、Eの全音1つ分上の音なので、Fisになります。
        <Score id="ScaleScore4" score="DE^F"/>
        その次の音は、Fisの半音1つ分上の音なので、Gになります。
        <Score id="ScaleScore5" score="DE^FG"/>
        これを続けていくと、以下の音階が完成します。
        <Score id="ScaleScore6" score="DE^FGAB^cd"/>
        再生して、冒頭に紹介したCから始まる長音階と響きが似ていることを確かめてみてください。<br></br><br></br>
        長音階を作るためには、「全全半全全全半」という順番さえ覚えておけば大丈夫です。<br></br>
        「全全半全全全半」と10回ほど声に出して、確実に覚えておくことをおすすめします。<br></br>
        始めはピアノの鍵盤を見ながらでもよいので、どんな音から始まる長音階でも作れるように慣れておきましょう。<br></br>
        <div className="my-sup">
          音階を作る際には、音を一つずつ上げるようにしてください。CisとDesは同じ音ですが、以下のような音階を作ることはありません。
          <Score id="ScaleScore6-sup" score="DE^FGAB_dd"/>
          最初に幹音を一つずつ並べて、その間隔を後からシャープやフラットで調整する意識を持つとよいと思います。<br></br>
          また、これがダブルシャープやダブルフラットが必要になる理由です。
          例えば、音階の主音によっては「Fを全音上にずらしたい」といったケースが発生します。
          しかし、上記の原則があるため、ここにGを用いることはできません。そこで、Fを全音上げるFisis(Fのダブルシャープ)を用いるのです。
        </div>

        <h2 id="NoteInScale">音階内での名前</h2>
        音階には、それぞれの音に名前がついています。<br></br><br></br>
        
        下線を引いた「主音」「下属音」「属音」「導音」はよく使うので、この4つだけは覚えましょう。<br></br>
        残りはあまり使わないので覚えなくて大丈夫です。
        <div className="table-responsive">
          <table className="table text-nowrap table-short">
            <tbody>
              <tr>
                <th scope="row">順番</th>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
              </tr>
              <tr>
                <th scope="row">名前</th>
                <td><em>主音</em></td>
                <td>上主音</td>
                <td>中音</td>
                <td><em>下属音</em></td>
                <td><em>属音</em></td>
                <td>下中音</td>
                <td><em>導音</em></td>
                <td>主音</td>
              </tr>
              <tr>
                <th scope="row">例</th>
                <td>C</td>
                <td>D</td>
                <td>E</td>
                <td>F</td>
                <td>G</td>
                <td>A</td>
                <td>H</td>
                <td>C</td>
              </tr>
            </tbody>
          </table>
        </div>
        「主音」は、音階の主役になる音なので覚えやすいですね。<br></br>
        属音は、主音の次に重要な音なので、「主音に属する音」と覚えておきましょう。「下属音」は、属音の一つ下の音です。<br></br><br></br>

        また、「導音」は主音の半音下に位置しています。この音は、「導音→主音」という順番で演奏すると、落ち着く感じがするという特別な音です。<br></br>
        そのため、「主音を導く音」という意味を込めて、「導音」という名前がつけられています。<br></br>
        例えば、以下の楽譜を再生してみてください。
        <Score id="ScaleScore7" score="[CEGc]4[DFGB]4[CEGc]4"/>
        2音目から3音目に推移したとき、落ち着きを感じた人も多いのではないでしょうか。<br></br>
        それは、一番上の音が「C→H→C」と推移しているからです。<br></br><br></br>
        導音は、次の<HashLink to="/MinorScale#title">短音階</HashLink>の章でも登場します。主音の半音下に位置していることを頭の片隅に入れておいてください。

        <h2>クイズ</h2>
        「全全半全全全半」という順番は覚えたでしょうか。
        大体理解できた方は、次の問題に挑戦してみてください。<br></br><br></br>
        全音と半音について不安であれば、以下のピアノの画像を見ながら取り組んでみましょう。<br></br><br></br>
        <img src={Piano} className="img-fluid rounded piano" alt=""/>
        <QMajorScale1 id="Quiz1"/>
        <QMajorScale2 id="Quiz2"/>
        <QMajorScale3 id="Quiz3"/>
        <QMajorScale4 id="Quiz4"/>

        <BottomButtons currentID = "MajorScale"/>
      </div>
    </div>
  );
};

export default MajorScale;