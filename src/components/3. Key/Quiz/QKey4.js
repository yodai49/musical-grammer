import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';

const QKey4 = (props) => {
    return (
    <div className="quiz">
        <div>ニ長調の同主調を答えてください</div>
        <QuizOptions id={props.id} text1="ニ短調" text2="イ長調" text3="イ短調" text4="ト長調" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="1"
            result1="正解です。" 
            result2="違います。ニ長調の同主調は、Dを主音とする短調です。" 
            result3="違います。ニ長調の同主調は、Dを主音とする短調です。" 
            result4="違います。ニ長調の同主調は、Dを主音とする短調です。"
        />
    </div>
    );
}

export default QKey4;