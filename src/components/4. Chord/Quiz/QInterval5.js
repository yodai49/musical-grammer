import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import Score from '../../Score';
import './../../../css/quiz.css';

const QInterval5 = (props) => {
    return (
    <div className="quiz">
        <div>以下の2音間の度数を答えてください。</div>
        <Score id="Quiz25Score" score="_EA"/>
        <QuizOptions id={props.id} text1="完全4度" text2="完全5度" text3="増4度" text4="減5度" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="3"
            result1="違います。EとAは完全4度ですが、EsとAはそれよりも半音広いです。" 
            result2="違います。E(Es)が1、Fが2,Gが3なので、Aは4にあたります。" 
            result3="正解です。" 
            result4="違います。E(Es)が1、Fが2,Gが3なので、Aは4にあたります。ちなみに、EsとAの間隔は減5度と同じですが、この場合はそもそも5度と判断しません。DisとAなら減5度です。"
        />
    </div>
    );
}

export default QInterval5;