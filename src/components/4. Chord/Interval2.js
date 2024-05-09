import './../../css/base.css';
import './../../css/abcjs-audio.css';
import Score from '../Score';
import BottomButtons from '../BottomButtons';

import {HashLink} from 'react-router-hash-link';
import QInterval5 from './Quiz/QInterval5';
import QInterval6 from './Quiz/QInterval6';

const Interval2 = () => {
  return (
    <div className="window-wrapper">
      <div className="content-wrapper">
        <h1 id="title">4.2 度数②</h1>
        <p className="text-wrap text-start">
          この章では、度数の厳密な決め方を説明します。<br></br>
          楽典を初めて学ぶ場合は、この章をスキップして「<HashLink to="/Harmony#title">和音</HashLink>」に進むことをおすすめします。
        </p>
        <ul className="my-ul">
          <li>度数の日本語部分は、<em>全音と半音の数を数える</em>ことで厳密に決定できます</li>
          <li>度数には、<HashLink to="/Interval1#title">前章</HashLink>で紹介したもの以外にも<em>「増」「減」</em>などの種類が存在します</li>
        </ul>        
        <h2>度数の厳密な決め方①</h2>
        <div className="text-wrap text-start">
            <HashLink to="/Interval1#title">度数①</HashLink>の章では、響きを使って度数を決定する方法を紹介しました。
            それでは、度数を音感に頼らず、<em>厳密に決定する</em>にはどうすればよいのでしょうか。<br></br><br></br>
            度数を厳密に決定するためには、音がどれほど離れているかを<em>半音単位で数える</em>必要があります。<br></br><br></br>
            まずは、半音と全音の定義をおさらいしましょう。<br></br><br></br>
            <ul className="my-ul">
              <li>ピアノの鍵盤を黒鍵も含めて数えた時に、隣り合う2つの音を<em>「半音」</em>といいます</li>
              <li>半音2つ分の音の間隔を、<em>「全音」</em>といいます</li>
            </ul>        
            度数の「〇〇」の部分は、この<em>半音</em>と<em>全音</em>を用いて決めます。<br></br>
            まずは、基本となる以下のパターンを知っておきましょう。<br></br><br></br>
            <table className="table text-nowrap table-short">
              <tbody>
                <tr>
                  <td>✕✕</td>
                  <td><em>基準となる条件</em></td>
                  <td>例</td>
                  <th scope="row">○○</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2音が同じ音</td>
                  <td>CとC</td>
                  <th scope="row">完全</th>
                </tr>
                <tr>
                  <td>2</td>
                  <td>2音の間隔が全音1つ分</td>
                  <td>CとD</td>
                  <th scope="row">長</th>
                </tr>
                <tr>
                  <td>3</td>
                  <td>全音2つ</td>
                  <td>CとE</td>
                  <th scope="row">長</th>
                </tr>
                <tr>
                  <td>4</td>
                  <td>全音2つ＋半音1つ</td>
                  <td>CとF</td>
                  <th scope="row">完全</th>
                </tr>
                <tr>
                  <td>5</td>
                  <td>全音3つ＋半音1つ</td>
                  <td>CとG</td>
                  <th scope="row">完全</th>
                </tr>
                <tr>
                  <td>6</td>
                  <td>全音4つ＋半音1つ</td>
                  <td>CとA</td>
                  <th scope="row">長</th>
                </tr>
                <tr>
                  <td>7</td>
                  <td>全音5つ＋半音1つ</td>
                  <td>CとH</td>
                  <th scope="row">長</th>
                </tr>
                <tr>
                  <td>8</td>
                  <td>全音5つ＋半音2つ</td>
                  <td>Cと1オクターブ上のC</td>
                  <th scope="row">完全</th>
                </tr>
              </tbody>
            </table>
            求めたい2つの音の間隔が上の表の<em>「基準となる条件」</em>に当てはまる場合は、表の通り「〇〇」を決定すればOKです。<br></br><br></br>

            例えばGとHの度数を考えましょう。
            <Score id="IntervalScore4" score="GB" />
            「✕✕」は3です。そして、GとHの間には全音2つ分の間隔が存在します（この部分がわからない場合は、ピアノの鍵盤を確認してみてください）。
            表を確認すると、これは「✕✕」が3のときの条件に当てはまるので、GとHの間の「〇〇」は「長」と決定できます。<br></br><br></br>
        </div>

        <h2>度数の厳密な決め方②</h2>
        次に、基準から外れる場合の<em>「〇〇」</em>の決定方法を見ていきましょう。
        ここまで学ぶと、<em>「増」「減」</em>など、発展的な度数の種類も理解できます。<br></br><br></br>
        基準から外れる場合は、<em>基準からどれほど外れているか</em>によって「〇〇」が異なります。
        以下の表に沿って決定しましょう。表の1列が、半音1つ分に対応しています。<br></br><br></br>
        <table className="table text-nowrap table-short spanned">
          <tbody>
            <tr>
              <td>例</td>
              <td>←狭い</td>              
              <td></td>              
              <td></td>              
              <td></td>              
              <td></td>              
              <td>広い→</td>              
            </tr>
            <tr>
              <td><em>1, 4, 5, 8度</em></td>
              <th rowSpan="2">重減</th>
              <th rowSpan="2">減</th>
              <th colSpan="2">完全</th>
              <th rowSpan="2">増</th>
              <th rowSpan="2">重増</th>
            </tr>
            <tr>
              <td><em>2, 3, 6, 7度</em></td>
              <th>短</th>
              <th>長</th>
            </tr>
          </tbody>
        </table>
        「完全」より1つ狭い場合は<em>「減」</em>、1つ広い場合は<em>「増」</em>です。「長」より1つ狭い場合は<em>「短」</em>、1つ広い場合は<em>「増」</em>となります。<br></br><br></br>
        具体的に見ていきましょう。
        例えばFisとAの度数を考えます。
        <Score id="IntervalScore5" score="^FA" />
        「✕✕」は3です。そして、FisとAの間には全音1つ＋半音1つ分の間隔が存在します。
        これは「✕✕」が3のときの基準である「全音2つ」と比べて半音1つ分狭いです。<br></br><br></br>
        もともと「✕✕」が3のときの「〇〇」は「長」なので、半音1つ分狭い今回は「長」の1つ左にある<em>「短」</em>が「〇〇」だと決定できます。
        FisとAの度数は「短3度」です。<br></br><br></br>

        今度はDとAisの度数を考えてみましょう。
        <Score id="IntervalScore6" score="D^A" />
        「✕✕」は5です。そして、DとAisの間には全音3つ＋半音2つ分の間隔が存在します。<br></br>
        表を確認すると、これは「✕✕」が5のときの基準である「全音3つ＋半音1つ」と比べて半音1つ分広いです。<br></br>
        もともと「✕✕」が5のときの「〇〇」は「完全」なので、半音1つ分広い今回は「完全」の1つ右にある<em>「増」</em>が「〇〇」だと決定できます。
        DとAisの度数は、「増5度」です。<br></br><br></br>

        <h2>度数の決め方のコツ</h2>
        この章では、半音と全音の個数を数えて度数を厳密に決める方法を紹介しました。
        しかし、度数を決める際に毎回半音と全音を数えているわけではありません。実際には、<em>音感とカウントの合せ技</em>で度数を決めることが多いです。<br></br><br></br>
        
        例えばEsとHの度数を考えます。
        <Score id="IntervalScore7" score="_EB"></Score>
        このとき、<em>「EとHなら完全5度だな」「EsはEより半音低いから、EsとHは増5度だな」</em>という流れで決定するとよいでしょう。<br></br>
        「EとHなら完全5度だな」の部分は音感で、「EsはEより半音低いから、EsとHは増5度だな」の部分はカウントして判断しています。<br></br><br></br>

        もちろん増や減も音感で判断できればそれでよいですが、登場頻度が低いものはあやふやになりがちです。
        <em>「長」「短」「完全」の3種類は音感</em>で瞬時に判断し、<em>それ以外はこの3種類からずらして考える</em>、というのがスムーズだと思います。<br></br><br></br>

        また、幹音、すなわちシャープやフラットがつかない音同士の4度と5度には、<em>以下の法則</em>があります。<br></br>
        <ul className="my-ul">
          <li><em>4度</em>……下の音がFの場合のみ増4度、それ以外は完全5度</li>
          <li><em>5度</em>……下の音がHの場合のみ減5度、それ以外は完全5度</li>
        </ul>
        例えばCとその上のF、Dとその上のG...などは、ほとんど完全4度です。Fとその上のHの場合のみ、増4度になります。<br></br>
        5度も、Cとその上のG、Dとその上のA...などは、ほとんど完全5度です。Hとその上のFの場合のみ、減5度になります。<br></br><br></br>
        これも覚えておくと、度数を決める時に役立つかもしれません。
        <h2>クイズ</h2>
        <QInterval5 id="Quiz1"/>
        <QInterval6 id="Quiz2"/>

        <BottomButtons currentID = "Interval2"/>
      </div>
    </div>
  );
};

export default Interval2;