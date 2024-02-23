import Score from '../../Score';
import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';

const QuizIntroduction1 = (props) => {
    return (
    <div className="quiz">
        <div>次の音符はどの音を表しているでしょう？</div>
        <Score id="Score2" score="G" />
        <QuizOptions id={props.id} text1="ド" text2="ミ" text3="ソ" text4="シ" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="3" 
            result1="違います。楽典を学ぶ前に、もう一度五線譜の読み方をもう一度確認してみましょう。" 
            result2="違います。楽典を学ぶ前に、もう一度五線譜の読み方をもう一度確認してみましょう。" 
            result3="正解です。この調子で楽典を学んでいきましょう。" 
            result4="違います。楽典を学ぶ前に、もう一度五線譜の読み方をもう一度確認してみましょう。"
        />
    </div>
    );
}

export default QuizIntroduction1;