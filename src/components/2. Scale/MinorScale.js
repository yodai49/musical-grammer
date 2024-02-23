import './../../css/base.css';
import './../../css/abcjs-audio.css';
import Score from '../Score';
import BottomButtons from '../BottomButtons';
import Piano from './../../images/piano.jpg';

import {HashLink} from 'react-router-hash-link';
import QMinorScale1 from './Quiz/QMinorScale1';
import QMinorScale2 from './Quiz/QMinorScale2';

const MinorScale = () => {
  return (
    <div className="window-wrapper">
      <div className="content-wrapper">
        <h1 id="title">2.2 短音階</h1>
        <p className="text-wrap text-start">
          この章では、幹音を扱います。
        </p>
        <ul className="my-ul">
          <li>暗い響きの音階を、<em>短音階</em>と呼びます</li>
          <li>短音階には、「<em>自然的短音階</em>」「<em>和声的短音階</em>」「<em>旋律的短音階</em>」の3種類があります</li>
          <li>特定の音から始まる<em>3種類の短音階</em>を、すべて構成できるようになりましょう</li>
        </ul>        
        <h2>自然的短音階の構成音</h2>
        自然的短音階は、以下のような響きの音階です。
        <Score id="MinorScale1" score="A,B,CDEFGA"/>
        <HashLink to="./MajorScale#title">前章</HashLink>で扱った長音階と比べると、暗い響きがしたのではないでしょうか。<br></br>
        自然的短音階に限らず、短音階は3種類ともすべて暗い響きがします。<br></br><br></br>
        
        さて、長音階のときと同じように、音階に含まれる音を表にしてみましょう。
        最初に紹介したAから始まる自然的短音階の場合、以下のようになります。
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
                <td>A</td>
                <td>H</td>
                <td>C</td>
                <td>D</td>
                <td>E</td>
                <td>F</td>
                <td>G</td>
                <td>A</td>
              </tr>
            </tbody>
          </table>
        </div>
        さて、以下のピアノの鍵盤も見ながら、それぞれの音の間隔を表に付け足してみます。<br></br><br></br>
        <img src={Piano} className="img-fluid rounded piano" alt=""/>
        <br></br>
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
                <td>A</td>
                <td>H</td>
                <td>C</td>
                <td>D</td>
                <td>E</td>
                <td>F</td>
                <td>G</td>
                <td>A</td>
              </tr>
              <tr>
                <th scope="row">次の音までの間隔</th>
                <td>全音</td>
                <td>半音</td>
                <td>全音</td>
                <td>全音</td>
                <td>半音</td>
                <td>全音</td>
                <td>全音</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
        さて、今回も全音を「全」、半音を「半」と略してみます。すると、今回は「全半全全半全全」という並びが出てきました。<br></br><br></br>
        この「全半全全半全全」が、今回のキーワードです。<br></br>
        長音階のときと同じように、一番下の音から「全半全全半全全」という順番で音を選んでいくと、自然的短音階を構成することができます。<br></br><br></br>

        自然的短音階は、残り2つの「和声的短音階」「旋律的短音階」を作る際にも基礎となる、重要な音階です。<br></br>
        「全半全全半全全」と10回声に出して、順番を覚えてください。<br></br><br></br>
        クイズで慣れておきましょう。
        <QMinorScale1 id="Quiz1"/>
        <QMinorScale2 id="Quiz2"/>

        <h2>和声的短音階の構成音</h2>


        <h2>旋律的短音階の構成音</h2>

        
        <BottomButtons currentID = "MinorScale"/>
      </div>
    </div>
  );
};

export default MinorScale;