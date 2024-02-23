import './../../css/base.css';
import './../../css/abcjs-audio.css';
import Score from '../Score';
import BottomButtons from '../BottomButtons';

import {HashLink} from 'react-router-hash-link';
import Quiz21 from './Quiz/Interval1';
import Quiz22 from './Quiz/Interval2';
import Quiz23 from './Quiz/Interval3';
import Quiz24 from './Quiz/Interval4';

const Interval1 = () => {
  return (
    <div className="window-wrapper">
      <div className="content-wrapper">
        <h1 id="title">4.1 度数①</h1>
        <p className="text-wrap text-start">
          この章では、度数の基礎的な内容を扱います。
        </p>
        <ul className="my-ul">
          <li>音楽の世界では、2つの音がどれほど離れているかを<em>度数</em>で表します</li>
          <li><em>2つの音の間の度数</em>を答えられるようになりましょう</li>
        </ul>        
        <h2>度数とは</h2>
        <div className="text-wrap text-start">
          2つの音がどれほど離れているかを表す指標が「度数」です。<br></br>
          度数は、以下のような形をしています。<br></br><br></br>
          <ul className="my-ul">
            <li>「〇〇」＋「✕✕」＋「度」</li>
          </ul>        
          「〇〇」の部分には、「完全」「長」「短」などの日本語が入ります。<br></br>
          「✕✕」の部分には、1以上の数字が入ります。<br></br><br></br>
          例えば、「完全5度」「短3度」といった具合です。<br></br>
          度数を答えられるようになるためには、「〇〇」と「✕✕」の部分をそれぞれ決められるようになる必要があります。<br></br><br></br>
          慣れるまで少し難しいですが、度数はこのあと和音について議論するうえで欠かせない概念です。<br></br>
          「〇〇」と「✕✕」の部分の決め方を順番に見ていきましょう。<br></br>
        </div>
        <h2>「✕✕」の決め方</h2>
        <div className="text-wrap text-start">
            「〇〇」を決めるためには、先に「✕✕」を決める必要があります。
            そのため、先に「✕✕」の部分（度数の数字部分）の決め方を説明します。<br></br><br></br>
            簡単のため、まずは幹音同士の場合を考えましょう。<br></br><br></br>
            例えば、「C」と、その上にある「G」の度数の決め方を考えます。楽譜で表すと、以下の2音です。<br></br>
            <Score id="IntervalScore1" score="CG" />
            まず、低い方の音を「1」とします。この場合、Cの音が「1」です。<br></br>
            その後、低い音から高い音へ向かって1つずつ数字を足していきます。<br></br>
            <table className="table text-nowrap table-short">
              <tbody>
                <tr>
                  <th scope="row">音</th>
                  <td>C</td>
                  <td>D</td>
                  <td>E</td>
                  <td>F</td>
                  <td>G</td>
                </tr>
                <tr>
                  <th scope="row">数字</th>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                </tr>
              </tbody>
            </table>
            高い方の音へ到達したら、終了です。<br></br>
            今回の場合、「G」の音は「5」に当たるので、「✕✕」の部分は「5」と決定できます。<br></br><br></br>
            次に、派生音が含まれる場合を説明します。<br></br>
            例えば、「Des」とその上の「B」の度数を考えましょう。楽譜で表すと、以下の2音です。<br></br>
            <Score id="IntervalScore2" score="_D_B" />
            派生音が含まれる場合は、臨時記号を一度取り除き、幹音のときと同じように考えれば大丈夫です。<br></br>
            「Des」と「B」の場合は、「D」と「H」の間と同じように数えましょう。
            <Score id="IntervalScore3" score="DB" />
            <table className="table text-nowrap table-short">
              <tbody>
                <tr>
                  <th scope="row">音</th>
                  <td>D(Des)</td>
                  <td>E</td>
                  <td>F</td>
                  <td>G</td>
                  <td>A</td>
                  <td>H(B)</td>
                </tr>
                <tr>
                  <th scope="row">数字</th>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                </tr>
              </tbody>
            </table>
            高い方の音、すなわち「H」は「6」番目です。<br></br>
            そのため、DesとBの間の「✕✕」は「6」と決定できます。<br></br><br></br>
            数字が「1」から始まるので多少クセがありますが、慣れてしまえば数字部分は簡単です。<br></br>
            以下のクイズで慣れておきましょう。
            <Quiz21 id="Quiz21"/>
            <Quiz22 id="Quiz22"/>
        </div>

        <h2>「○○」の決め方</h2>
        次に「〇〇」の部分、すなわち日本語部分について見ていきましょう。<br></br>
        この部分は、2つの音を同時に鳴らしたときの響きによって決まっています。<br></br><br></br>

        例えば、DとFisを考えてみましょう。<br></br>
        この2つの音を同時に鳴らしてみます。以下の楽譜を再生してみてください。
        <Score id="IntervalScore7" score="[d, ^F]4" />
        明るい感じがしたのではないでしょうか？<br></br>
        このような明るい響きの場合、「〇〇」は「長」になります。<br></br><br></br>
        続いて、DとFを考えてみます。以下の音を聞いてみてください。
        <Score id="IntervalScore8" score="[d, F]4" />
        前の音と比べ、暗い響きだと感じた人が多いでしょう。<br></br>
        このような暗い響きの場合、「〇〇」は「短」です。<br></br><br></br>

        最後に、DとAを考えてみます。
        <Score id="IntervalScore9" score="[d, A]4" />
        明るくも暗くもない、「澄んだ」感じの響きがしたのではないでしょうか。<br></br>
        このような澄んだ響きの場合、「〇〇」は「完全」になります。<br></br><br></br>

        まとめると、下表の通りです。
        <table className="table text-nowrap table-short">
          <tbody>
            <tr>
              <th>響き</th>
              <th>○○</th>
            </tr>
            <tr>
              <td>明るい</td>
              <td>長</td>
            </tr>
            <tr>
              <td>暗い</td>
              <td>短</td>
            </tr>
            <tr>
              <td>澄んでいる</td>
              <td>完全</td>
            </tr>
          </tbody>
        </table>

        ちなみに、明るい響きや暗い響き、澄んだ響きになる音の間隔はある程度決まっています。<br></br>
        音感だけで判断しづらいと感じた場合は、以下の表を覚えておくとよいかもしれません。<br></br>
        <table className="table text-nowrap table-short">
          <tbody>
            <tr>
              <th>度数</th>
              <th>響き</th>
            </tr>
            <tr>
              <td>1, 4, 5, 8度</td>
              <td>澄んでいる</td>
            </tr>
            <tr>
              <td>2, 3, 6, 7度</td>
              <td>明るい or 暗い</td>
            </tr>
          </tbody>
        </table>
        例えば、5度が明るい響きや暗い響きになることは、ほとんどありません。また、2度や3度が澄んだ響きになることも、ほとんどありません。<br></br><br></br>
        <div className="my-sup">
          ちなみに、度数には「長」「短」「完全」以外にも、いくつかの種類が存在します。しかしこれらはほとんど登場しないので、まずはこの章で紹介した3種類だけ覚えれば問題ありません。「長」「短」「完全」以外の度数の種類は、<HashLink to="/Interval2#title">度数②</HashLink>で解説しています。
        </div>        

        <h2>クイズ</h2>
        <Quiz23 id="Quiz23"/>
        <Quiz24 id="Quiz24"/>
        <BottomButtons currentID = "Interval1"/>
      </div>
    </div>
  );
};

export default Interval1;