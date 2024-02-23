import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';

const QDerivedNote3 = (props) => {
    return (
    <div className="quiz">
        <div>ドイツ語で"As"の音は、日本語の何でしょう？</div>
        <QuizOptions id={props.id} text1="嬰ハ" text2="嬰ト" text3="変ホ" text4="変イ" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="4"
            result1="違います。嬰ハの音は、ドイツ語でCisといいます。" 
            result2="違います。嬰トの音は、ドイツ語でGisといいます。" 
            result3="違います。変ホの音は、ドイツ語でEsといいます。" 
            result4="正解です。"
        />
    </div>
    );
}

export default QDerivedNote3;