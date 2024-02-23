import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';

const Q_NaturalNote1 = (props) => {
    return (
    <div className="quiz">
        <div>日本語で「ト」の音は、イタリア語の何でしょう？</div>
        <QuizOptions id={props.id} text1="レ" text2="ミ" text3="ソ" text4="ラ" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="3"
            result1="違います。レの音は、日本語で「ニ」といいます。" 
            result2="違います。ミの音は、日本語で「ホ」といいます。" 
            result3="正解です。" 
            result4="違います。ラの音は、日本語で「イ」といいます。"
        />
    </div>
    );
}

export default Q_NaturalNote1;