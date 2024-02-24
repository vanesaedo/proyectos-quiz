

//QUIZZ estilo post 2015 CON TEMPLATES
//This function creates as many questions as indicated and as many answers as the object contains. Parameters: legend : the text of the question. questionObj: An object that contains de information we need.

//quizObj: contents all attribute values needed.

let quizObj = [
    {
    //1st question of the quiz object. [0] Question statement.[1]<label> and <input> tags attributes.
    
        'legend': '¿Cuál es la letra protagonista del chiste que inventó Vanesa?',
        'answerAtts': [
            {
                'val': 'hacecosas',
                'lab': 'Hace cosas'
            },
            {
                'val': 'probado',
                'lab': '¿Pero lo has probado?'  
                
            }
            ]
        }
]
   


    //const createQuiz = quizObj => {
       
    
            let quiz = `
            <fieldset>
            <legend><h2>"${quizObj[0].legend}"</h2></legend>`
            for(let i = 0; i < quizObj[0].answerAtts.length; i++) {
        
                let answer =`
                    <div>
                    <label for="${quizObj[0].answerAtts[i].val}">"${quizObj[0].answerAtts[i].lab}" </label>
                    <input id="${quizObj[0].answerAtts[i].val}" name="${quizObj[0].legend}" value="${quizObj[0].answerAtts[i].val}" type="radio" />
                </div>`;
                quiz += answer;
            }
            quiz += `</fieldset>`

           

            document.getElementById("quizAboutGroup").innerHTML = quiz;
/*
            document.getElementById("quizAboutGroup").innerHTML = quiz;

            const answers = quizObj[0][1] => {
            for(let i = 0; i < quizObj[0][1].length; i++) {
        
            let answer = `
                <div>
                <label for="${quizObj[0][1][i][0]}>"${quizObj[0][1][i][1]}" </label>
                <input id="${quizObj[0][1][i][0]}" name="${quizObj[0][1][i][0]}" value="${quizObj[0][1][i][0]}" type="radio" ></input>
            </div>`;

            </fieldset>
    
           
            document.getElementby
        }
    }
}
*/
//CREATING 1 QUESTION
/*
const createQuiz = quizObj => {
    for(let i = 0; i < quizObj.length; i++) {

       let quiz = `
       <fieldset>
       <legend><h2>"${quizObj[0][0]}"</h2></legend>
       <div>
            <label for="${quizObj[0][0][1][0][0]}>"{quizObj[0][0][1][0][1]}"</label>
            <input id="${quizObj[0][0][1][0][0]}" name="${quizObj[0][0][1][0][0]}" value="${quizObj[0][0][1][0][0]}" type="radio" ></input>
        </div>
        <div>
            <label for="${quizObj[0][0][1][1][0]}">"${quizObj[0][0][1][1][1]}"</label>
            <input id="${quizObj[0][0][1][1][0]}" name="${quizObj[0][0][1][1][0]}" value="${quizObj[0][0][1][1][0]}" type="radio" ></input>
        </div>
            <div>
            <label for="${quizObj[0][0][1][2][0]}">"${quizObj[0][0][1][2][1]}"</label>
            <input id="${quizObj[0][0][1][2][0]}" name="${quizObj[0][0][1][2][0]}" value="${quizObj[0][0][1][2][0]}" type="radio" ></input>
        </div>
        <div>
            <label for="${quizObj[0][0][1][3][0]}">"${quizObj[0][0][1][3][1]}"</label>
            <input id="${quizObj[0][0][1][3][0]}" name="${quizObj[0][0][1][3][0]}" value="${quizObj[0][0][1][3][0]}" type="radio" ></input>
        </div>
        </fieldset>

        document.getElementById("quizAboutGroup").innerHTML = quiz;
    }
  
   
}*/