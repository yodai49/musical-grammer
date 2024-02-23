import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import Score from '../../Score';
import './../../../css/quiz.css';

const Quiz22 = (props) => {
    return (
    <div className="quiz">
        <div>以下の2音間の度数について、数字部分のみを答えてください。</div>
        <Score id="Quiz22Score" score="Cc"/>
        <QuizOptions id={props.id} text1="4" text2="6" text3="8" text4="10" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="3"
            result1="違います。Cが1、Dが2、と数えていくと、上のCは8にあたります。" 
            result2="違います。Cが1、Dが2、と数えていくと、上のCは8にあたります。" 
            result3="正解です。" 
            result4="違います。Cが1、Dが2、と数えていくと、上のCは8にあたります。"
        />
    </div>
    );
}

export default Quiz22;