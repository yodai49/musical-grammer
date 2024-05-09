import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import Score from '../../Score';
import './../../../css/quiz.css';

const QChord3 = (props) => {
    return (
    <div className="quiz">
        <div>ト長調のVIの和音の構成音として正しいものは、以下のうちどれでしょう？</div>
        <QuizOptions id={props.id} text1="E, Gis, H" text2="E, G, H" text3="E, G, B" text4="E, Gis, His" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="2"
            result1="違います。ト長調の音階にGisの音は含まれません。" 
            result2="正解です。" 
            result3="違います。ト長調の音階にBの音は含まれません。" 
            result4="違います。ト長調の音階にGisやHisの音は含まれません。"
        />
    </div>
    );
}

export default QChord3;