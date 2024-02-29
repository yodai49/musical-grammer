import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';

const QMovableDo2 = (props) => {
    return (
    <div className="quiz">
        <div>変ロ長調のソの音は何でしょう？</div>
        <QuizOptions id={props.id} text1="Es" text2="F" text3="G" text4="As" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="2"
            result1="違います。変ロ長調のソは、変ロ長調の属音、すなわち5番目の音です。" 
            result2="正解です。" 
            result3="違います。変ロ長調のソは、変ロ長調の属音、すなわち5番目の音です。" 
            result4="違います。変ロ長調のソは、変ロ長調の属音、すなわち5番目の音です。"
        />
    </div>
    );
}

export default QMovableDo2;