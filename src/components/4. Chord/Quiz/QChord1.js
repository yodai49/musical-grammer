import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import Score from '../../Score';
import './../../../css/quiz.css';

const QChord1 = (props) => {
    return (
    <div className="quiz">
        <div>以下の和音の名前を答えてください。</div>
        <Score id="Quiz11Score" score="[d, ^f, A]4"/>
        <QuizOptions id={props.id} text1="D" text2="Daug" text3="Am" text4="Adim" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="1"
            result1="正解です。" 
            result2="違います。和音の第5音は根音の完全5度上にあたります。" 
            result3="違います。この和音の根音はDなので、和音の名前はDから始まります。" 
            result4="違います。この和音の根音はDなので、和音の名前はDから始まります。"
        />
    </div>
    );
}

export default QChord1;