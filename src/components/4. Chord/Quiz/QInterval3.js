import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import Score from '../../Score';
import './../../../css/quiz.css';

const QInterval3 = (props) => {
    return (
    <div className="quiz">
        <div>以下の2音間の度数を答えてください。</div>
        <Score id="Quiz23Score" score="[d,G]4"/>
        <QuizOptions id={props.id} text1="長3度" text2="長4度" text3="完全3度" text4="完全4度" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="4"
            result1="違います。Dが1、Eが2、Fが3なので、Gは4にあたります。" 
            result2="違います。「✕✕」は4ですが、澄んだ響きなので「完全4度」になります。また、「長4度」は存在しません。" 
            result3="違います。Dが1、Eが2、Fが3なので、Gは4にあたります。" 
            result4="正解です。"
        />
    </div>
    );
}

export default QInterval3;