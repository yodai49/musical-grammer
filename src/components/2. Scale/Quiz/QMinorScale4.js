import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';


const QMinorScale4 = (props) => {
    return (
    <div className="quiz">
        <div>Cから始まる旋律的短音階の上行形に含まれる音をすべて答えてください</div>
        <QuizOptions id={props.id} text1="C, D, E, F, G, A, H, C" text2="C, D, E, F, G, As, B, C" text3="C, D, Es, F, G, A, H, C" text4="正しいものはない" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="3"
            result1="違います。これは、Cから始まる長音階です。" 
            result2="違います。これは、Cから始まる自然的短音階（または、旋律的短音階の下行形）です。" 
            result3="正解です。" 
            result4="違います。もう一度考えてみてください。"
        />
    </div>
    );
}

export default QMinorScale4;