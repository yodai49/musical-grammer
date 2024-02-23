import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import Score from '../../Score';
import './../../../css/quiz.css';

const QInterval1 = (props) => {
    return (
    <div className="quiz">
        <div>以下の2音間の度数について、数字部分のみを答えてください。</div>
        <Score id="Quiz21Score" score="GB"/>
        <QuizOptions id={props.id} text1="2" text2="3" text3="4" text4="5" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="2"
            result1="違います。Gが1、Aが2なので、Hは3にあたります。" 
            result2="正解です。" 
            result3="違います。Gが1、Aが2なので、Hは3にあたります。" 
            result4="違います。Gが1、Aが2なので、Hは3にあたります。"
        />
    </div>
    );
}

export default QInterval1;