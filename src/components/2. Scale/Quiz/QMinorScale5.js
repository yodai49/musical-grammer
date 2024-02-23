import Score from '../../Score';
import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';


const QMinorScale5 = (props) => {
    return (
    <div className="quiz">
        <div>以下の音階は、何音階でしょう？</div>
        <Score id="ScoreQMinorScale5" score="DEFGA_B^cd"/>
        <QuizOptions id={props.id} text1="自然的短音階" text2="和声的短音階" text3="旋律的短音階（上行形）" text4="どれでもない" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="2"
            result1="違います。7番目の音は主音の半音下で、導音の役割を果たしています。" 
            result2="正解です。" 
            result3="違います。6番目の音と7番目の音の間には、半音3つ分の間隔があります。" 
            result4="違います。もう一度考えてみてください。"
        />
    </div>
    );
}

export default QMinorScale5;