import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import Score from '../../Score';
import './../../../css/quiz.css';

const QChord2 = (props) => {
    return (
    <div className="quiz">
        <div>Faugの構成音として正しいものは次のうちどれでしょう？</div>
        <QuizOptions id={props.id} text1="F, A, C" text2="F, A, Cis" text3="F, A, Ces" text4="F, As, Cis" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="2"
            result1="違います。Faugの第5音は根音の増5度上にあたりますが、CはFの完全5度上の音です。。" 
            result2="正解です。" 
            result3="違います。Faugの第5音は根音の増5度上にあたりますが、CesはFの減5度上の音です。。" 
            result4="違います。Faugの第3音は根音の長3度上にあたりますが、AsはFの短3度上の音です。"
        />
    </div>
    );
}

export default QChord2;