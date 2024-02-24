import Score from '../../Score';
import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';

const QKey3 = (props) => {
    return (
    <div className="quiz">
        <div>以下のメロディーは何調で演奏されているでしょう？<br></br>ヒント：このメロディーは、調の主音で始まり、調の主音で終わっています。</div>
        <Score id="QKey3Score" option="K:D" score="DDAA|BBA2|GGFF|EED2"></Score>
        <QuizOptions id={props.id} text1="ハ長調" text2="ニ長調" text3="ホ長調" text4="ヘ長調" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="2"
            result1="違います。ハ長調はCを主音とする長調ですが、このメロディーの主音はDです。" 
            result2="正解です。" 
            result3="違います。ホ長調はEを主音とする長調ですが、このメロディーの主音はDです。" 
            result4="違います。ヘ長調はFを主音とする長調ですが、このメロディーの主音はDです。"
        />
    </div>
    );
}

export default QKey3;