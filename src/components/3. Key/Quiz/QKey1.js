import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';

const QKey1 = (props) => {
    return (
    <div className="quiz">
        <div>変ホ長調の構成音をすべて答えてください</div>
        <QuizOptions id={props.id} text1="Es, F, G, As, B, C, D, Es" text2="Es, F, Ges, As, B, C, Des, Es" text3="As, B, C, Des, Es, F, G, As" text4="この中に存在しない" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="1"
            result1="正解です。" 
            result2="違います。Fの次の音はFの全音1つ分上の音なので、GesではなくGです。" 
            result3="違います。変ホ長調はEsを主音とする長音階です。また、Esから始まる長音階にDesは含まれません。" 
            result4="違います。もう一度考えてみてください。"
        />
    </div>
    );
}

export default QKey1;