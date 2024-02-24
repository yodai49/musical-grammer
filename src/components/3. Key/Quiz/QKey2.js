import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';

const QKey2 = (props) => {
    return (
    <div className="quiz">
        <div>嬰ヘ短調の構成音をすべて答えてください</div>
        <QuizOptions id={props.id} text1="Fis, Gis, A, H, Cis, D, E, Fis" text2="Fes, Ges, A, H, C, Des, Es, Fes" text3="Fes, Ges, As, B, C, Des, Es, Fes" text4="この中に存在しない" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="1"
            result1="正解です。" 
            result2="違います。嬰ヘ短調の構成音は、Fisを主音とする自然的短音階です。また、Fesは含まれません。" 
            result3="違います。嬰ヘ短調の構成音は、Fisを主音とする自然的短音階です。また、Fesは含まれません。" 
            result4="違います。もう一度考えてみてください。"
        />
    </div>
    );
}

export default QKey2;