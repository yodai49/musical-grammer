import './../../css/base.css';
import './../../css/abcjs-audio.css';
import './../../css/images.css';
import Score from '../Score';
import BottomButtons from '../BottomButtons';

import {HashLink} from 'react-router-hash-link';
import QMovableDo1 from './Quiz/QMovableDo1';
import QMovableDo2 from './Quiz/QMovableDo2';
import QMovableDo3  from './Quiz/QMovableDo3';

const MovableDo = () => {
  return (
    <div className="window-wrapper">
      <div className="content-wrapper">
        <h1 id="title">3.3 階名</h1>
        <p className="text-wrap text-start">
          この章では、階名を扱います。
        </p>
        <ul className="my-ul">
          <li>音階の中における音の名前を、<em>階名</em>と呼びます</li>
          <li><em>階名と音名の違い</em>を理解しましょう</li>
        </ul>
        <h2>階名とは</h2>
        階名とは、ある音が<em>音階の中でどの高さに位置するか</em>を表す名前です。<br></br><br></br>
        階名を学ぶときには、今まで慣れ親しんできた「ドレミファソラシド」を<em>一旦忘れる</em>必要があります。<br></br>
        ピアノなどを習ってきた方は、イタリア語の音名を一旦忘れてから、この章を読んでください。<br></br><br></br>

        さて、まずはト長調の音階を考えてみましょう。
        <Score id="MovableDo1" option="K:G" score="GABcdefg"/>
        例えばDの音は、ト長調の中で5番目の音にあたります。これには、「属音」という名前がついていました。<br></br>
        他の音にも、それぞれ音階の中で名前が割り振られていました。<HashLink to="/MajorScale#title">長音階の章</HashLink>でも紹介した、以下の表を思い出してみましょう。<br></br>
        
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
                <td>主音</td>
                <td>上主音</td>
                <td>中音</td>
                <td>下属音</td>
                <td>属音</td>
                <td>下中音</td>
                <td>導音</td>
                <td>主音</td>
              </tr>
              <tr>
                <th scope="row">例</th>
                <td>G</td>
                <td>A</td>
                <td>H</td>
                <td>C</td>
                <td>D</td>
                <td>E</td>
                <td>Fis</td>
                <td>G</td>
              </tr>
            </tbody>
          </table>
        </div>
        階名は、イタリア語の<em>「ドレミファソラシド」</em>を使って、以下のように表します。<br></br><br></br>
        <em>主音</em>のことを<em>「ド」</em>と呼びます。<br></br>
        <em>上主音</em>のことを、<em>「レ」</em>と呼びます。<br></br>
        <em>中音</em>のことを、<em>「ミ」</em>と呼びます。<br></br><br></br>
        それ以降も、次の表のように対応が決まっています。
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
                <td>主音</td>
                <td>上主音</td>
                <td>中音</td>
                <td>下属音</td>
                <td>属音</td>
                <td>下中音</td>
                <td>導音</td>
                <td>主音</td>
              </tr>
              <tr>
                <th scope="row"><em>階名</em></th>
                <td>ド</td>
                <td>レ</td>
                <td>ミ</td>
                <td>ファ</td>
                <td>ソ</td>
                <td>ラ</td>
                <td>シ</td>
                <td>ド</td>
              </tr>
            </tbody>
          </table>
        </div>
        つまり、<em>調の音を下から順番に「ドレミファソラシド」と呼ぶ</em>だけです。<br></br><br></br>
        例えばト長調における「ソ」は、Dの音にあたります。<br></br>
        ニ長調における「ラ」は、Hの音です。<br></br><br></br>
        
        今まで「ドレミファソラシド」と音を読んできた人は混乱するかもしれませんが、慣れてしまえば難しくありません。<br></br><br></br>

        楽典を学ぶ際は、今までの「ドレミファソラシド」という概念を一度忘れ、<em>階名としてのイタリア語</em>の使い方にも慣れてください。

        <h2>移動ドと固定ド</h2>
        先ほど紹介した、<em>階名</em>としての「ドレミファソラシド」の使い方は、<em>「移動ド」</em>と呼びます。<br></br>
        一方、Cをドと呼び、Dをレと呼ぶような、<em>音名</em>としての「ドレミファソラシド」の使い方は、<em>「固定ド」</em>と呼びます。<br></br><br></br>

        楽典を学ぶ際に厄介なのが、<em>「移動ドと固定ドが分野によって入り混じっている」</em>という点です。<br></br>
        例えば<em>ピアノ</em>は、固定ドで習うことがほとんどだと思います。<em>バイオリン</em>などの弦楽器も、始めは固定ドで習うことが多い印象です。<br></br>
        しかし、<em>吹奏楽</em>では移動ド以外ありえません。クラリネットを吹く人に「ドの音を出して」と言うと、おそらく想定とは異なる音が返ってくるでしょう。<br></br><br></br>

        こうした背景から、イタリア語で音名を呼ぶと混乱を招く可能性があります。<br></br>
        階名としてのドレミ（移動ド）なのか、音名としてのドレミ（固定ド）なのかわからないからです。<br></br>
        本サイトでも、これまで原則として音名をドイツ語で表記してきた理由はここにあります。<br></br><br></br>

        また、イタリア語は音名と階名のどちらにも使われますが、<em>日本語</em>と<em>ドイツ語</em>はどの分野でも<em>必ず音名</em>です。<br></br>
        <div className="table-responsive">
          <table className="table text-nowrap table-short">
            <tbody>
              <tr>
                <th scope="row">言語</th>
                <td>日本語</td>
                <td>ドイツ語</td>
                <td>イタリア語</td>
              </tr>
              <tr>
                <th scope="row">音名/階名</th>
                <td>音名</td>
                <td>音名</td>
                <td>音名 or 階名</td>
              </tr>
            </tbody>
          </table>
        </div>
        例えば、「ト長調」のことをドイツ語で"G dur"と呼ぶことはありますが、イタリア語で「ソ長調」などと呼ぶことはありません。<br></br>
        これは、日本語やドイツ語が必ず音名なのに対し、イタリア語は階名としても使われるからです。<br></br><br></br>

        これから音名を呼ぶときは、<em>固定ドなのか移動ドなのか</em>注意してみてください。<br></br>

        <h2>クイズ</h2>
        階名について理解するため、以下のクイズに答えてみましょう。移動ドです。
        <QMovableDo1 id="Quiz1"/>
        <QMovableDo2 id="Quiz2"/>
        <QMovableDo3 id="Quiz3"/>

        <BottomButtons currentID = "MovableDo"/>
      </div>
    </div>
  );
};

export default MovableDo;