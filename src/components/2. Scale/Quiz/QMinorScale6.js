import Score from '../../Score';
import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';


const QMinorScale6 = (props) => {
    return (
    <div className="quiz">
        <div>以下の音階は、何音階でしょう？</div>
        <Score id="ScoreQMinorScale6" score="^F^G^AB^cde^f"/>
        <QuizOptions id={props.id} text1="自然的短音階" text2="和声的短音階" text3="旋律的短音階（上行形）" text4="どれでもない" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="4"
            result1="違います。2番目のGisとその次のAisが全音なので、短音階ではありません。" 
            result2="違います。2番目のGisとその次のAisが全音なので、短音階ではありません。" 
            result3="違います。2番目のGisとその次のAisが全音なので、短音階ではありません。" 
            result4="正解です。この音階はどれにも当てはまりません。"
        />
    </div>
    );
}

export default QMinorScale6;