import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';

const QKey5 = (props) => {
    return (
    <div className="quiz">
        <div>ト長調の平行調を答えてください</div>
        <QuizOptions id={props.id} text1="ニ長調" text2="ホ長調" text3="ホ短調" text4="ト短調" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="3"
            result1="違います。ト長調は長調であるため、その平行調は短調になります。" 
            result2="違います。ト長調は長調であるため、その平行調は短調になります。" 
            result3="正解です。" 
            result4="違います。ト長調は長調であるため、平行調の主音はト長調の第6音となります。"
        />
    </div>
    );
}

export default QKey5;