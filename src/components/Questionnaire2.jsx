function Questionnaire2(props){
    return(
        <div className="border border-gray-100 shadow-lg w-lg p-4 rounded-xl mb-10">
            <h1 className="font-bold mb-2">{props.question}</h1>
            <div className="mb-0.5 bg-red-200 rounded-md py-2 px-1">                
                <p>{props.opt1}</p>
            </div>
            
            <div className="mb-0.5 bg-green-200 rounded-md py-2 px-1">                
                <p>{props.opt2}</p>
            </div>

            <div className="mb-0.5 bg-red-200 rounded-md py-2 px-1">                
                <p>{props.opt3}</p>
            </div>

            <div className="mb-0.5 bg-red-200 rounded-md py-2 px-1">                
                <p>{props.opt4}</p>
            </div>
            
        </div>
    )
}

export default Questionnaire2;