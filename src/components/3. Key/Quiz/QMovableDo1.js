import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';

const QMovableDo1 = (props) => {
    return (
    <div className="quiz">
        <div>イ長調における「ド」の音は何でしょう？</div>
        <QuizOptions id={props.id} text1="C" text2="E" text3="G" text4="A" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="4"
            result1="違います。イ長調のドは、イ長調の主音です。"
            result2="違います。イ長調のドは、イ長調の主音です。"
            result3="違います。イ長調のドは、イ長調の主音です。"
            result4="正解です。"
        />
    </div>
    );
}

export default QMovableDo1;