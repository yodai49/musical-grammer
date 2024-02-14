const QuizAnswerButton = (props) => {
    function myfunc () {
        var myAnswer = 0;
        for (var i = 1; i <= 4; i++){
            if(document.getElementById(props.id + "Option" + i).checked){
                myAnswer = i;
            }
        }
        console.log(myAnswer);
        for (var i = 1; i <= 4; i++){
            document.getElementById(props.id + i).classList.remove("message-show");
        }
        if(myAnswer != 0){
            document.getElementById(props.id + myAnswer).classList.add("message-show");
        }
    }
    return (
        <button type="button" className="btn" onClick={myfunc}>回答する</button>
    );
}
export default QuizAnswerButton;