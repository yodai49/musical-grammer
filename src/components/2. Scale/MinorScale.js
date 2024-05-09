import './../../css/base.css';
import './../../css/abcjs-audio.css';
import Score from '../Score';
import BottomButtons from '../BottomButtons';
import Piano from './../../images/piano.jpg';

import {HashLink} from 'react-router-hash-link';
import QMinorScale1 from './Quiz/QMinorScale1';
import QMinorScale2 from './Quiz/QMinorScale2';
import QMinorScale3 from './Quiz/QMinorScale3';
import QMinorScale4 from './Quiz/QMinorScale4';
import QMinorScale5 from './Quiz/QMinorScale5';
import QMinorScale6 from './Quiz/QMinorScale6';

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
        <em>自然的短音階</em>は、以下のような響きの音階です。
        <Score id="MinorScale1" score="A,B,CDEFGA"/>
        <HashLink to="./MajorScale#title">前章</HashLink>で扱った長音階と比べると、暗い響きがしたのではないでしょうか。<br></br>
        自然的短音階に限らず、短音階は3種類ともすべて<em>暗い響き</em>がします。<br></br><br></br>
        
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
                <th scope="row"><em>次の音までの間隔</em></th>
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
        さて、今回も全音を「全」、半音を「半」と略してみます。すると、今回は<em>「全半全全半全全」</em>という並びが出てきました。<br></br><br></br>
        この「全半全全半全全」が、今回のキーワードです。<br></br>
        長音階のときと同じように、一番下の音から<em>「全半全全半全全」という順番で音を選んでいく</em>と、自然的短音階を構成することができます。<br></br><br></br>

        自然的短音階は、残り2つの「和声的短音階」「旋律的短音階」を作る際にも基礎となる、<em>重要な音階</em>です。<br></br>
        「全半全全半全全」と10回声に出して、順番を覚えてください。<br></br><br></br>
        クイズで慣れておきましょう。
        <QMinorScale1 id="Quiz1"/>
        <QMinorScale2 id="Quiz2"/>

        <h2>和声的短音階の構成音</h2>
        自然的短音階の作り方を説明しました。ここで、もう一度Aから始まる自然的短音階の響きを確認してみてください。
        <Score id="MinorScale2" score="A,B,CDEFGA"/>
        <HashLink to="/MajorScale#title">長音階</HashLink>の場合、音階の7つめの音を<em>「導音」</em>と呼びました。そして、導音が主音を導けるのは、<em>導音が主音の半音1つ分下に位置している</em>からでした。<br></br><br></br>

        しかし、自然的短音階には<em>主音の半音下の音が含まれていません。</em>例えば上のAから始まる自然的短音階における7番目の音はGとなっており、導音であるべきGisは含まれていません。<br></br><br></br>

        そこで、無理やり<em>自然的短音階の第7音を半音上げて、</em>主音の半音下である導音にしてしまうのが<em>「和声的短音階」</em>のアイディアです。<br></br>
        例えばAから始まる和声的短音階は、以下のようになります。
        <Score id="MinorScale3" score="A,B,CDEF^GA"/>
        導音以外の音は自然的短音階のときと同じで、第7音だけが半音上がってGisになっています。<br></br><br></br>
        和声的短音階を再生してみると、少し異国風の不思議な響きがしますね。<br></br>
        和声的短音階を作るときは、<em>「まず自然的短音階を作り、第7音だけを半音上げる」</em>と覚えておけばOKです。

        <QMinorScale3 id="Quiz3"/>

        <h2>旋律的短音階の構成音</h2>
        和声的短音階のアイディアにより、めでたく短音階に導音という存在が生まれました。<br></br><br></br>
        しかし、和声的短音階は非常に<em>不思議な響き</em>のする音階です。なぜなのでしょうか。<br></br>
        もう一度、和声的短音階の響きを注意深く聴いて、原因を考えてみてください。ヒントは、無理やり導入した導音の近くです。
        <Score id="MinorScale4" score="A,B,CDEF^GA"/>
        結論から言うと、導音とその一つ前の音の間が<em>「半音3つ分」</em>になっているため、不思議な響きが生まれてしまっています。<br></br>
        音階ではほとんど「半音1つ分」「半音2つ分（全音1つ分）」の音が隣り合っているのに、第7音を半音上げたせいでこの部分だけ例外的に間隔が広くなったのです。<br></br><br></br>
        
        この不思議な響きを解消してくれるのが、<em>「旋律的短音階」</em>です。<br></br>
        自然的短音階は音が<em>上がっていくときと下がっていくときで形が違います。</em>まずは上がっていくときを見ていきましょう。<br></br><br></br>

        <em>音が上がっていくときの旋律的短音階</em>では、導音とその前の音の間にある「半音3つ分」の間隔を解消するため、<em>6番目の音を半音上げます。</em><br></br><br></br>
        
        例えばAから始まる旋律的短音階は、以下の通りです。
        <Score id="MinorScale5" score="A,B,CDE^F^GA"/>
        こうすることで、「半音3つ分」の広い間隔が解消され、不思議な響きもしなくなりました。再生して、音を確認してみてください。<br></br><br></br>

        また、<em>下がっていくとき</em>はそもそも導音が必要ありません。そのため、<em>自然的短音階と全く同じ音階</em>となります。
        <Score id="MinorScale6" score="AGFEDCB,A,"/>

        以上の2つが、旋律的短音階です。<br></br>
        なお、上がっていく形を<em>「上行形」</em>、下がっていく形を<em>「下行形」</em>と呼びます。<br></br>
        <ul className="my-ul">
          <li><em>上行形</em>……和声的短音階の6番目の音を半音上げる</li>
          <li><em>下行形</em>……自然的短音階と全く同じ</li>
        </ul>
        旋律的短音階まで作れるようになったら、音階は完璧です。<br></br>
        慣れるまでには時間がかかるかもしれませんが、頑張って練習しておきましょう。

        <QMinorScale4 id="Quiz4"/>

        <h2>クイズ</h2>
        <QMinorScale5 id="Quiz5"/>
        <QMinorScale6 id="Quiz6"/>
        
        <BottomButtons currentID = "MinorScale"/>
      </div>
    </div>
  );
};

export default MinorScale;