const QuizMessage = (props) =>{
    var messageClass = [];
    var message = [];
    for (var i = 0; i < 4; i++){
        if(props.answer - 1 == i){
            messageClass[i] = ' alert-success';
            message[i] = '◎';
        } else {
            messageClass[i] = ' alert-danger';
            message[i] = '✕';
        }
    }
    return (
        <div>
            <div id={props.id + "1"} className={"message-hidden alert" + messageClass[0]}><strong>{message[0]}</strong>  {props.result1}</div>
            <div id={props.id + "2"} className={"message-hidden alert" + messageClass[1]}><strong>{message[1]}</strong>  {props.result2}</div>
            <div id={props.id + "3"} className={"message-hidden alert" + messageClass[2]}><strong>{message[2]}</strong>  {props.result3}</div>
            <div id={props.id + "4"} className={"message-hidden alert" + messageClass[3]}><strong>{message[3]}</strong>  {props.result4}</div>
        </div>
    );
}

export default QuizMessage;