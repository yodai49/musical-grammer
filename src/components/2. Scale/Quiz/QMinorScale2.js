import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';


const QMinorScale2 = (props) => {
    return (
    <div className="quiz">
        <div>Hから始まる自然的短音階に含まれる音をすべて答えてください</div>
        <QuizOptions id={props.id} text1="H, Cis, D, E, Fis, G, A, H" text2="H, Cis, D, E, Fis, G, A, H" text3="H, Cis, D, E, Fis, G, A, H" text4="この中に存在しない" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="4"
            result1="" 
            result2="違います。Bの次の音はBの全音1つ分上の音なので、CisではなくCです。" 
            result3="違います。Aの次の音はAの半音1つ分上の音なので、HではなくBです。" 
            result4="正解です。Hから始まる自然的短音階は、H, Cis, D, E, Fis, G, A, Hです。"
        />
    </div>
    );
}

export default QMinorScale2;