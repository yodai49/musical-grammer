import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';

const QKey7 = (props) => {
    return (
    <div className="quiz">
        <div>ロ短調の下属調を答えてください</div>
        <QuizOptions id={props.id} text1="ホ長調" text2="ホ短調" text3="嬰ヘ長調" text4="嬰ヘ短調" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="2"
            result1="違います。ロ短調は短調であるため、その下属調は短調です。" 
            result2="正解です。" 
            result3="違います。ロ短調は短調であるため、その下属調は短調です。" 
            result4="違います。ロ短調の下属調は、ロ短調の下属音、すなわち第4音を主音とする短調です。"
        />
    </div>
    );
}

export default QKey7;