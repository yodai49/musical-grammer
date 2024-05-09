import './../../css/base.css';
import './../../css/abcjs-audio.css';
import './../../css/images.css';
import Score from '../Score';
import BottomButtons from '../BottomButtons';

import {HashLink} from 'react-router-hash-link';
import QKey1 from './Quiz/QKey1';
import QKey2 from './Quiz/QKey2';
import QKey3  from './Quiz/QKey3';

const Key1 = () => {
  return (
    <div className="window-wrapper">
      <div className="content-wrapper">
        <h1 id="title">3.1 調①</h1>
        <p className="text-wrap text-start">
          この章では、調の基本事項を扱います。
        </p>
        <ul className="my-ul">
          <li><em>調</em>とは、一曲の中でよく使う音の関係を表す概念です</li>
          <li><em>日本語</em>、<em>ドイツ語</em>、<em>英語</em>のそれぞれで調の名前を言えるようになりましょう</li>
          <li>それぞれの調の<em>構成音</em>を言えるようになりましょう</li>
        </ul>        
        <h2>調の基本</h2>
        突然ですが、以下の2つを聴き比べてみてください。
        <Score id="KeysScore1" score="CCGG|AAG2|FFEE|DDC2"></Score>
        <Score id="KeysScore2" option="K:G" score="GGdd|eed2|ccBB|AAG2"></Score>
        どちらも同じメロディーですが、高さが違いますね。<br></br>
        調とは、わかりやすく言えば<em>「メロディーがどんな高さで演奏されるかを表す概念」</em>です。<br></br>
        カラオケにおける<em>「キー」</em>だと思えば分かりやすいかもしれません。<br></br><br></br>

        それぞれの調には、主役となる音である<em>「主音」</em>が存在します。<br></br>
        曲のジャンルを問わず、メロディーは主音で始まったり、主音で終わったりすることが多いです。<br></br>
        実際、上の「キラキラ星」も、1つめの楽譜の主音は「ド」、2つめの楽譜の主音は「ソ」になっています。<br></br><br></br>

        調の概念を覚えると、<em>一つの曲を違う高さで演奏できる</em>ようになったり、<em>転調や曲の構成に対する理解</em>が深まったりします。<br></br>
        また、楽譜の左端には♯や♭が書かれていることが多いです。調を学ぶと、これらが付く音の個数や順番を理解できるようになります。<br></br><br></br>
        <div className="my-sup">
          なお、さり気なく2つめの楽譜では♯をト音記号のすぐ右に書きました。<br></br>
          調の話をするときは、臨時記号ではなく楽譜の左端に書くことが多いです。
          臨時記号のときと意味は変わりません。<br></br>
        </div>

        <h2>調の種類と構成音</h2>
        調には、明るい響きのする<em>「長調」</em>と、暗い響きのする<em>「短調」</em>の2種類が存在します。<br></br><br></br>

        長調の構成音は、<em>主音から始まる長音階</em>です。<br></br>
        例えばCを主音とする長調の構成音は、Cから始まる長音階、すなわち"C, D, E, F, G, A, H, C"になります。<br></br>
        <Score id="KeysScore3" score="CDEFGABc"></Score>
        同様に、Gを主音とする長調の構成音は、Gから始まる長音階、すなわち"G, A, H, C, D, E, Fis, G"になります。<br></br>
        <Score id="KeysScore4" score="GABcdefg" option="K:G"></Score>
        長音階の作り方を忘れた場合は、<HashLink to="/MajorScale#title">長音階</HashLink>の章を復習してみてください。<br></br><br></br>

        短調の構成音は、<em>主音から始まる自然的短音階</em>です。<br></br>
        例えばCを主音とする短調の構成音は、Cから始まる自然的短音階、すなわち"C, D, Es, F, G, As, B, C"になります。<br></br>
        <Score id="KeysScore5" score="CDEFGABc" option="K:Cm"></Score>
        同様に、Gを主音とする短調の構成音は、Gから始まる自然的短音階、すなわち"G, A, B, C, D, Es, F, G"になります。<br></br><br></br>
        <Score id="KeysScore6" score="GABcdefg" option="K:Gm"></Score>
        短音階の作り方が不安な場合は、<HashLink to="/MinorScale#title">短音階</HashLink>の章を復習してください。<br></br><br></br>

        私たちが普段触れる曲は、ほとんどが何らかの<em>「調」</em>を持っています。<br></br>
        そして、曲は基本的にそれぞれの<em>調の構成音</em>を使って演奏されます。<br></br><br></br>
        
        例えば冒頭に紹介した以下のキラキラ星のメロディーは、Cを主音とする長調です。
        <Score id="KeysScore7" score="CCGG|AAG2|FFEE|DDC2"></Score>
        2つめのキラキラ星は、Gを主音とする長調で演奏されています。
        <Score id="KeysScore8" option="K:G" score="GGdd|eed2|ccBB|AAG2"></Score>

        それぞれ、調の構成音のみで演奏されていることが分かるでしょうか。<br></br>
        場合によっては構成音以外の音が使われることもありますが、基本的に<em>曲は調の構成音がよく使われる</em>と覚えておきましょう。

        <h2>調の呼び名</h2>
        先ほどは、「Cを主音とする長調」「Gを主音とする短調」といったように調を呼びましたが、それぞれの調には短い名前が存在します。<br></br>
        <em>日本語</em>、<em>ドイツ語</em>、<em>英語</em>のそれぞれで呼び名が違うので、一つずつ見ていきましょう。<br></br><br></br>

        まずは<em>日本語</em>です。日本語では、それぞれの調を以下のように呼びます。
        <ul className="my-ul">
          <li><em>長調</em>……（主音の日本語名）＋「長調」</li>
          <li><em>短調</em>……（主音の日本語名）＋「短調」</li>
        </ul>
        例えば、Cを主音とする長調は「ハ長調」、Gを主音とする短調は「ト短調」となります。<br></br>
        調の名前を呼ぶときは、<em>日本語を使うことが多い</em>です。<br></br>
        他の言語と比べて重要度が高いので、確実に覚えておきましょう。<br></br><br></br>

        次に、<em>ドイツ語</em>です。ドイツ語では、それぞれの調を以下のように呼びます。
        <ul className="my-ul">
          <li><em>長調</em>……（主音のドイツ語名）＋"dur"</li>
          <li><em>短調</em>……（主音のドイツ語名）＋"moll"</li>
        </ul>
        読み方は、"dur"が<em>「ドゥア−」</em>、"moll"が<em>「モール」</em>です。<br></br>
        例えばCを主音とする長調は"C dur"と書き、「ツェードゥアー」と呼びます。<br></br>
        同様に、Gを主音とする短調は"G moll"と書き、「ゲーモール」と呼びます。<br></br>
        日本語に比べると重要度は低いですが、クラシックでは調をドイツ語で呼ぶことも多いので、ぜひ覚えておきましょう。<br></br><br></br>

        最後に、<em>英語</em>での調の呼び方を紹介します。英語での呼称は以下の通りです。
        <ul className="my-ul">
          <li>長調……（主音の英語名）＋"major"</li>
          <li>短調……（主音の英語名）＋"minor"</li>
        </ul>
        例えばCを主音とする長調は"C major"、Gを主音とする短調は"G minor"です。<br></br>
        ただし、英語は後の章で紹介する<HashLink to="/Chord#title">和音</HashLink>を表す際に使うことが多いので、調を表すときにはあまり使われません。<br></br>
        頭の片隅に入れておく程度で大丈夫です。

        <h2>クイズ</h2>
        調の構成音と呼び方が言えるようになったら、以下のクイズに挑戦してみましょう。
        <QKey1 id="Quiz1"/>
        <QKey2 id="Quiz2"/>
        <QKey3 id="Quiz3"/>

        <BottomButtons currentID = "Key1"/>
      </div>
    </div>
  );
};

export default Key1;