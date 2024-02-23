import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';

const Q_DerivedNote2 = (props) => {
    return (
    <div className="quiz">
        <div>ドイツ語で"Cis"の音は、イタリア語の何でしょう？</div>
        <QuizOptions id={props.id} text1="ファ♯" text2="ド♯" text3="ソ♯" text4="レ♯" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="2"
            result1="違います。ファ♯の音は、ドイツ語でFisといいます。" 
            result2="正解です。" 
            result3="違います。ソ♯の音は、ドイツ語でGisといいます。" 
            result4="違います。レ♯の音は、ドイツ語でDisといいます。"
        />
    </div>
    );
}

export default Q_DerivedNote2;