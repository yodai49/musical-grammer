import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';

const QKey6 = (props) => {
    return (
    <div className="quiz">
        <div>ホ長調の属調を答えてください</div>
        <QuizOptions id={props.id} text1="ホ短調" text2="イ長調" text3="ロ長調" text4="変ロ長調" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="3"
            result1="違います。ホ長調は長調であるため、その属調は長調です。" 
            result2="違います。ホ長調の属調は、ホ長調の属音、すなわち第5音を主音とする長調です。" 
            result3="正解です。" 
            result4="違います。ホ長調の属調は、ホ長調の属音、すなわち第5音を主音とする長調です。"
        />
    </div>
    );
}

export default QKey6;