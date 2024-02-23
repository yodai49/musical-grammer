import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import Score from '../../Score';
import './../../../css/quiz.css';

const QInterval6 = (props) => {
    return (
    <div className="quiz">
        <div>以下の2音間の度数を答えてください。</div>
        <Score id="Quiz26Score" score="_F^A"/>
        <QuizOptions id={props.id} text1="増3度" text2="減3度" text3="重増3度" text4="重減3度" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="3"
            result1="違います。FとAは長3度で、FesとAisはそれよりも半音2つ分広いです。増3度になるのは、半音1つ分広い場合です。" 
            result2="違います。FとAは長3度で、FesとAisはそれよりも半音2つ分広いです。減3度になるのは、半音1つ分狭い場合です。" 
            result3="正解です。" 
            result4="違います。FとAは長3度で、FesとAisはそれよりも半音2つ分広いです。重減3度になるのは、半音2つ分狭い場合です。"
        />
    </div>
    );
}

export default QInterval6;