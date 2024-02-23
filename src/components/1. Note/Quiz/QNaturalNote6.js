import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';

const QNaturalNote6 = (props) => {
    return (
    <div className="quiz">
        <div>イタリア語で「ファ」の音は、英語の何でしょう？</div>
        <QuizOptions id={props.id} text1="イー" text2="エフ" text3="ジー" text4="ビー" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="2" 
            result1="違います。「イー」の音は、イタリア語で「ミ」といいます。" 
            result2="正解です。" 
            result3="違います。「ジー」の音は、イタリア語で「ソ」といいます。" 
            result4="違います。「ビー」の音は、イタリア語で「シ」といいます。"
        />
    </div>
    );
}

export default QNaturalNote6;