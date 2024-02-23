import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';


const QMinorScale3 = (props) => {
    return (
    <div className="quiz">
        <div>Gから始まる自然的短音階に含まれる音をすべて答えてください</div>
        <QuizOptions id={props.id} text1="G, A, B, C, D, Es, F, G" text2="G, A, B, C, D, E, Fis, G" text3="G, A, B, C, D, Es, Fis, G" text4="この中に存在しない" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="3"
            result1="違います。この音階は、Gから始まる自然的短音階です。" 
            result2="違います。Dの次の音はDの半音1つ分上の音なので、EではなくEsです。" 
            result3="正解です。" 
            result4="違います。もう一度考えてみてください。"
        />
    </div>
    );
}

export default QMinorScale3;