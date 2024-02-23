import Score from '../../Score';
import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';

const QMajorScale4 = (props) => {
    return (
    <div className="quiz">
        <div>Dから始まる長音階の導音は何でしょう？</div>
        <QuizOptions id={props.id} text1="B" text2="H" text3="C" text4="Cis" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="4"
            result1="違います。BはDから始まる長音階に含まれません。" 
            result2="違います。Hは主音であるDから数えて6番目の音なので「下中音」と呼びます。" 
            result3="違います。CはDから始まる長音階に含まれません。" 
            result4="正解です。"
        />
    </div>
    );
}

export default QMajorScale4;