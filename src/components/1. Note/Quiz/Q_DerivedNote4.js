import Score from '../../Score';
import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';

const Q_DerivedNote4 = (props) => {
    return (
    <div className="quiz">
        <div>次の音は、ドイツ語の何でしょう？</div>
        <QuizOptions id={props.id} text1="Hes" text2="His" text3="B" text4="Ces" />
        <QuizAnswerButton id={props.id} />
        <Score score="_B" id="Quiz19Score"/>
        <QuizMessage id = {props.id} answer="3"
            result1="違います。楽譜の音はシ♭ですが、シ♭はドイツ語でHesと呼ばず、例外的にBと呼びます。" 
            result2="違います。楽譜の音はシ♭です。また、Hisはシ♯を指します。" 
            result3="正解です。" 
            result4="違います。楽譜の音はシ♭です。また、Cesはド♭を指します。"
        />
    </div>
    );
}

export default Q_DerivedNote4;