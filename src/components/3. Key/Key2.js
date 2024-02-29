import './../../css/base.css';
import './../../css/abcjs-audio.css';
import './../../css/images.css';
import Score from '../Score';
import BottomButtons from '../BottomButtons';

import {HashLink} from 'react-router-hash-link';
import QKey4 from './Quiz/QKey4';
import QKey5 from './Quiz/QKey5';
import QKey6  from './Quiz/QKey6';
import QKey7  from './Quiz/QKey7';

const Key2 = () => {
  return (
    <div className="window-wrapper">
      <div className="content-wrapper">
        <h1 id="title">3.2 調②</h1>
        <p className="text-wrap text-start">
          この章では、調の発展事項を扱います。
        </p>
        <ul className="my-ul">
          <li><em>近親調</em>とは、ある調と関係の深いいくつかの調の総称です</li>
          <li>ある調が与えられたとき、その<em>近親調</em>を答えられるようになりましょう</li>
          <li>調を表すシャープやフラットが使われる<em>順番や個数</em>には、法則があります</li>
          <li>シャープやフラットに関する<em>大まかな法則</em>を頭にいれておきましょう</li>
        </ul>        
        
        <h2>近親調</h2>
        近親調とは、ある調と深い関係にあるいくつかの調の総称です。<br></br>
        関係が深い調は、曲の中で自然に転調しやすいため、楽典において重要な概念となっています。<br></br><br></br>
        
        例えば、「ハ長調」の近親調について考えてみます。
        ハ長調の音階は以下の通りです。
        <Score id="Key2Score1" score="CDEFGABc"/>
        ここで、いきなりですがト長調の音階を考えてみましょう。
        <Score id="Key2Score2" option="K:G" score="GABcdefg"/><br></br>
        ハ長調の構成音とト長調の構成音をそれぞれ書き出すと、以下のようになります。<br></br>
        <ul className="my-ul">
          <li>ハ長調……C, D, E, F, G, A, H, C</li>
          <li>ト長調……G, A, H, C, D, E, Fis, G</li>
        </ul>
        これらをよく見てみると、F (Fis) 以外の音がすべて共通していることがわかると思います。<br></br>
        ハ長調から見ると、ト長調は共通する音が多いため、「関係が深い」と言えそうです。<br></br><br></br>

        このように、ある調と深い関係にある調を「近親調」と呼びます。<br></br>
        代表的な近親調は以下の4種類です。

        <ul className="my-ul">
          <li>同主調……主音が同じで、長調と短調が入れ替わった調</li>
          <li>平行調……構成音が全く同じで、長調と短調が入れ替わった調</li>
          <li>属調……元の調の属音を主音とする調</li>
          <li>下属調……元の調の下属音を主音とする調</li>
        </ul>

        例えば、ハ長調の近親調をそれぞれ考えてみましょう。<br></br><br></br>

        まず、ハ長調の同主調について考えます。ハ長調の同主調は、Cを主音とする短調です。<br></br>
        よって、ハ長調の同主調は「ハ短調」となります。<br></br>
        <Score id="Key2Score3" option="K:Cm" score="CDEFGABc"/><br></br>

        次に、ハ長調の平行調を考えてみます。平行調は、以下のようにして見つけることができます。
        <ul className="my-ul">
          <li>元が長調の場合……音階の6番目の音を主音とする短調</li>
          <li>元が短調の場合……音階の3番目の音を主音とする長調</li>
        </ul>
        今回は、元が長調のため、ハ長調の6番目の音であるAを主音とする短調、すなわちイ短調を構成してみます。<br></br>
        イ短調の構成音はA, H, C, D, E, F, G, Aとなるため、ハ長調と構成音が全く同じ短調を見つけることができました。これが、ハ長調の平行調です。<br></br>
        <Score id="Key2Score4" score="ABcdefga"/><br></br>

        次に、ハ長調の属調を考えてみます。<br></br>
        ハ長調の<HashLink to="/MajorScale#NoteInScale">属音</HashLink>は、音階の5番目の音、すなわちGです。<br></br>
        ハ長調の属調は、Gを主音とする長調、すなわちト長調になります。<br></br>
        冒頭に紹介したように、ハ長調とト長調の共通音は7つ中6つと非常に多いです。<br></br>
        元の調の属音から始まる音階を作ると、こうした共通音の多い音階を作ることができます。<br></br>

        <div className="my-sup">
          長調の属調が短調になったり、短調の属調が長調になったりすることはありません。後述する下属調でも同様です。
        </div><br></br>

        最後に、ハ長調の下属調を考えてみます。<br></br>
        ハ長調の<HashLink to="/MajorScale#NoteInScale">下属音</HashLink>は、音階の4番目の音、すなわちFです。<br></br>
        ハ長調の下属調は、Fを主音とする長調、すなわちヘ長調になります。
        <Score id="Key2Score5" option="K:F" score="FGABcdef"/>
        ちなみに、ヘ長調の構成音はF, G, A, B, C, D, E, Fであり、ハ長調とはH (B)以外がすべて共通しています。<br></br>
        そのため、下属調も属調と同じように、元の調と共通音が多い調と言えます。<br></br><br></br>

        <div className="my-sup">
          平行調は、元の調と構成音が全く同じ調です。属調と下属調は、元の調と構成音が1つだけ違う調となります。<br></br>
          同主調は構成音が3つ違いますが、主音が同じという意味で元の調と深い関係にある調です。<br></br>
        </div><br></br>

        始めに紹介した定義さえ覚えれば、近親調は簡単に見つけることができると思います。<br></br>
        何度か練習して、慣れてください。

        <QKey4 id="Quiz1"/>
        <QKey5 id="Quiz2"/>
        <QKey6 id="Quiz3"/>
        <QKey7 id="Quiz4"/>

        <h2>調性記号</h2>
        調性記号とは、調の音階に応じて楽譜の左端に書かれるシャープやフラットのことです。<br></br>
        例えば以下のホ長調の音階には、楽譜の左側に4つのシャープが書かれています。
        <Score id="Key2Score6" option="K:E" score="EFGABcde"/>
        ここまでは「全全半全全全半」といったように、音の間隔を考えて音階を構成し、どの音にシャープやフラットがつくのかを決める方法を紹介してきました。<br></br>
        しかし、「毎回同じような音にシャープ（フラット）がついているな」と思った方はいないでしょうか。<br></br><br></br>

        実は、シャープやフラットがつく順番には法則性があります。<br></br>
        この法則を理解するためには、先程紹介した近親調が役に立ちます。<br></br><br></br>
        まず、シャープやフラットが1つもつかない調を考えてみましょう。シャープやフラットが1つもつかない長調は、ハ長調です。
        <Score id="Key2Score7" score="CDEFGABc"/>
        次に、ハ長調の属調を考えてみましょう。ハ長調の属調は、ト長調です。<br></br>
        <Score id="Key2Score8" option="K:G" score="GABcdefg"/>
        ト長調の楽譜には、シャープが1つだけ使われていることを覚えておいてください。<br></br><br></br>

        次に、ト長調の属調を考えてみます。ト長調の属調は、ニ長調です。
        <Score id="Key2Score9" option="K:D" score="DEFGABcd"/>
        ニ長調には、シャープが2つ使われています。<br></br><br></br>
        次に、ニ長調の属調を考えてみます。ニ長調の属調は、イ長調です。
        <Score id="Key2Score10" option="K:A" score="ABcdefga"/>
        イ長調には、シャープが3つ使われています。<br></br><br></br>
        ここまで来ればもう分かるかと思いますが、属調のシャープの数は必ず元の調より1つ多いです。<br></br>
        シャープの個数と長調の関係を表にまとめると、以下のようになります。
        <div className="table-responsive">
          <table className="table text-nowrap table-short">
            <tbody>
              <tr>
                <th scope="row">シャープの個数</th>
                <td>0</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
              </tr>
              <tr>
                <th scope="row">長調</th>
                <td>ハ長調</td>
                <td>ト長調</td>
                <td>ニ長調</td>
                <td>イ長調</td>
                <td>ホ長調</td>
                <td>ロ長調</td>
              </tr>
              <tr>
                <th scope="row">シャープのついた音</th>
                <td>なし</td>
                <td>Fis</td>
                <td>Fis, Cis</td>
                <td>Fis, Cis, Gis</td>
                <td>Fis, Cis, Gis, Dis</td>
                <td>Fis, Cis, Gis, Dis, Ais</td>
              </tr>
            </tbody>
          </table>
        </div>
        この表にも、いくつか法則が潜んでいます。<br></br><br></br>

        まず、それぞれの調で最後にシャープがついた音に注目してみてください。<br></br>
        最後にシャープがついた音は、必ずその調の導音になります。<br></br>
        例えば、ニ長調で最後にシャープがついた音はCisです。<br></br>
        これは、ニ長調の主音であるDの半音下に位置するため、ニ長調の導音になっています。<br></br><br></br>

        次に、シャープの使われた順番を見ていきましょう。<br></br>
        まず、1つめのシャープは必ず"F"の音に使われています。そして、2つめのシャープはC、3つめのシャープはGに使われています。<br></br>
        これを最後まで表にすると、以下のようになります。
        <div className="table-responsive" id="SharpOrderTable">
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
              </tr>
              <tr>
                <th scope="row">シャープのついた音</th>
                <td>Fis</td>
                <td>Cis</td>
                <td>Gis</td>
                <td>Dis</td>
                <td>Ais</td>
                <td>Eis</td>
                <td>His</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <HashLink to="/MajorScale#title">音階の章</HashLink>で紹介した方法に基づいて長音階を構成すると、シャープは必ず上記の表の順番で使われるという法則があります。<br></br>
        例えば、「CとGにシャープがついているのに、Fにはシャープがついていない」といったケースはありえません。<br></br>
        そのため、表の左側に書かれているFisやCisといった音ほど、「シャープがつきやすい音」と言うことができます。<br></br><br></br>

        <div className="my-sup">
        ちなみに、楽譜の左端にシャープを書く時には、必ずこの表の左から順番に書く必要があります。<br></br>
        実際、以下のロ長調の楽譜の左端にはFis, Cis, Gis, Dis, Aisの順番でシャープが書かれていることがわかるでしょう。
        <Score id="Key2Score11" option="K:B" score="Bcdefgab"></Score>
        </div>
        <br></br>
        さて、今度はシャープの数を減らすことを考えてみましょう。<br></br><br></br>
        例えばシャープが3つつく「イ長調」から見ると、シャープが2つつく「ニ長調」は下属調にあたります。<br></br>
        シャープを増やすときは属調を考えましたが、減らすときは下属調を考えれば良さそうです。<br></br><br></br>

        同様に、シャープが2つつくニ長調の下属調は、シャープが1つつくト長調です。<br></br>
        そして、シャープが1つつくト長調の下属調は、シャープが0このハ長調です。<br></br><br></br>

        さて、シャープが0こまで戻ってきましたが、この後も下属調を考え続けるとどうなるでしょうか。<br></br><br></br>

        ハ長調の下属調は、ヘ長調です。<br></br>
        ヘ長調には、フラットが1つだけ使われます。
        <Score id="Key2Score12" option="K:F" score="FGABcdef"/>
        ヘ長調の下属調は、変ロ長調です。変ロ長調には、フラットが2つ使われます。
        <Score id="Key2Score13" option="K:_B_E" score="Bcdefgab"/>
        変ロ長調の下属調は、変ホ長調です。変ホ長調には、フラットが3つ使われます。
        <Score id="Key2Score14" option="K:_B_E_A" score="EFGABcde"/>
        実は、下属調を考えるとフラットが一つずつ増えていくという法則があります。<br></br>
        フラットの個数と長調の関係を表で整理すると、以下のようになります。
        <div className="table-responsive">
          <table className="table text-nowrap table-short">
            <tbody>
              <tr>
                <th scope="row">フラットの個数</th>
                <td>0</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
              </tr>
              <tr>
                <th scope="row">長調</th>
                <td>ハ長調</td>
                <td>ヘ長調</td>
                <td>変ロ長調</td>
                <td>変ホ長調</td>
                <td>変イ長調</td>
                <td>変ニ長調</td>
              </tr>
              <tr>
                <th scope="row">フラットのついた音</th>
                <td>なし</td>
                <td>B</td>
                <td>B, Es</td>
                <td>B, Es, As</td>
                <td>B, Es, As, Des</td>
                <td>B, Es, As, Des, Ges</td>
              </tr>
            </tbody>
          </table>
        </div>
        最後にフラットのついた音は、その調の下属音になっています。<br></br>
        例えば、変ロ長調で最後にフラットがついた音はEsです。<br></br>
        これは、変ロ長調の音階で4番目に当たる音であり、変ロ長調の下属音になっています。<br></br><br></br>
        
        フラットの使われた順番は、以下の通りです。
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
              </tr>
              <tr>
                <th scope="row">フラットのついた音</th>
                <td>B</td>
                <td>Es</td>
                <td>As</td>
                <td>Des</td>
                <td>Ges</td>
                <td>Ces</td>
                <td>Fes</td>
              </tr>
            </tbody>
          </table>
        </div>
        シャープのときと同様に、必ずこの表の左から順番にフラットが使われます。<br></br>
        そのため、この表の左にある音ほど「フラットがつきやすい音」と言えるでしょう。<br></br>
        ちなみに、この表に並んでいる音の順番は、<HashLink to="/Key2#SharpOrderTable">シャープのつく順番の表</HashLink>と真逆になっています（シャープやフラットは外して考えてみてください）。<br></br><br></br>

        本章のまとめとして、以下の法則を頭の片隅に入れておきましょう。
        <ul className="my-ul">
          <li>属調を考えると、シャープが一つ増えます（フラットが一つ減ります）。</li>
          <li>下属調を考えると、フラットが一つ増えます（シャープが一つ減ります）。</li>
        </ul>
        余裕があれば、シャープやフラットが使われる順番も覚えておくとよいかもしれません。<br></br>
        シャープは「ファドソレラミシ」、フラットは「シミラレソドファ」の順番で使われます。<br></br>
        <div className="my-sup">
          なぜかここだけイタリア語ですが、語呂の都合なので深い意味はありません。<br></br>
          「ファドソレラミシ」と「シミラレソドファ」をそれぞれ10回ずつ声に出すと、大体覚えられると思います。
        </div>
        <BottomButtons currentID = "Key2"/>
      </div>
    </div>
  );
};

export default Key2;