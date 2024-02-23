import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';

const QNaturalNote5 = (props) => {
    return (
    <div className="quiz">
        <div>英語で「ビー」の音は、イタリア語の何でしょう？</div>
        <QuizOptions id={props.id} text1="ド" text2="ソ" text3="ラ" text4="シ" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="4" 
            result1="違います。「ド」の音は、英語で「シー」といいます。" 
            result2="違います。「ソ」の音は、英語で「ジー」といいます。" 
            result3="違います。「ラ」の音は、英語で「エー」といいます。" 
            result4="正解です。"
        />
    </div>
    );
}

export default QNaturalNote5;