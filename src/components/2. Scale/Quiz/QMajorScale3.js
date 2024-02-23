import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';

const QMajorScale3 = (props) => {
    return (
    <div className="quiz">
        <div>Gから始まる長音階の属音は何でしょう？</div>
        <QuizOptions id={props.id} text1="A" text2="B" text3="C" text4="D" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="4"
            result1="違います。Aは主音であるGから数えて2番目の音なので、「上主音」と呼びます。" 
            result2="違います。BはGから始まる長音階に含まれません。" 
            result3="違います。Cは主音であるGから数えて4番目の音なので「下属音」です。" 
            result4="正解です。"
        />
    </div>
    );
}

export default QMajorScale3;