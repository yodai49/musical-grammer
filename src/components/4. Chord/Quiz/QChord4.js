import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import Score from '../../Score';
import './../../../css/quiz.css';

const QChord4 = (props) => {
    return (
    <div className="quiz">
        <div>以下の和音の呼び方として正しいものは、以下のうちどれでしょう？</div>
        <Score id="Quiz14Score" score="[^d, ^f, A]4"/>
        <QuizOptions id={props.id} text1="ロ長調のIIIの和音" text2="ハ長調のIIの和音" text3="ニ長調のIの和音" text4="ホ長調のVIIの和音" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="4"
            result1="違います。ロ長調の音階にAの音は含まれません。" 
            result2="違います。ハ長調の音階にDisやFisの音は含まれません。" 
            result3="違います。ニ長調の音階にDisの音は含まれません。" 
            result4="正解です。"
        />
    </div>
    );
}

export default QChord4;