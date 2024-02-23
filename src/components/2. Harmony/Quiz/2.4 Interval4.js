import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import Score from '../../Score';
import './../../../css/quiz.css';

const Quiz24 = (props) => {
    return (
    <div className="quiz">
        <div>以下の2音間の度数を答えてください。</div>
        <Score id="Quiz24Score" score="[f,A]4"/>
        <QuizOptions id={props.id} text1="長3度" text2="長4度" text3="完全3度" text4="完全4度" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="1"
            result1="正解です。" 
            result2="違います。Fが1、Gが2なので、Aは3にあたります。" 
            result3="違います。「✕✕」は3ですが、明るい響きなので「長3度」になります。また、「完全3度」は存在しません。" 
            result4="違います。Fが1、Gが2なので、Aは3にあたります。"
        />
    </div>
    );
}

export default Quiz24;