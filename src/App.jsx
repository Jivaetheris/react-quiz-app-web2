import Questionnaire1 from './components/Questionnaire1'
import Questionnaire2 from './components/Questionnaire2'
import Questionnaire3 from './components/Questionnaire3'
function App() {
 

  return (
    <>
      <div className='grid grid-col-span-2 justify-center'>
        <h1 className="font-bold text-2xl mb-10 flex justify-center mt-5">Static Quiz App</h1>
        <div>
          <Questionnaire1 
          question="What is the capital of France?"
          opt1="Berlin"
          opt2="Madrid"
          opt3="Paris"
          opt4="Lisbon"
          />
        </div>

        <div>
          <Questionnaire2 
          question="Who developed ReactJS?"
          opt1="Google"
          opt2="Facebook"
          opt3="Microsoft"
          opt4="Apple"
          />
        </div>

        <div>
          <Questionnaire3
          question="Which programming language is used for React?"
          opt1="Python"
          opt2="Java"
          opt3="JavaScript"
          opt4="C++"
          />
        </div>
      </div>
    </>
  )
}

export default App
