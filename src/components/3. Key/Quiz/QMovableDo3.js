import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';

const QMovableDo3 = (props) => {
    return (
    <div className="quiz">
        <div>イ長調におけるシの音は何でしょう？</div>
        <QuizOptions id={props.id} text1="F" text2="Fis" text3="G" text4="Gis" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="4"
            result1="違います。イ長調の音階にFの音は含まれません。" 
            result2="違います。イ長調のシは、イ長調の導音、すなわち7番目の音です。" 
            result3="違います。イ長調の音階にGの音は含まれません。" 
            result4="正解です。"
        />
    </div>
    );
}

export default QMovableDo3;