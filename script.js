//QUIZZ estilo post 2015 CON TEMPLATES
//This function creates as many questions as indicated and as many answers as the object contains. Parameters: legend : the text of the question. questionObj: An object that contains de information we need.

//quizObj: contents all attribute values needed.

let quizObj = [
    {
        //1st question of the quiz object. [0] Question statement.[1]<label> and <input> tags attributes.

        'legend': '¿De qué color es un limón?',
        'answerAtts': [
            {
                'inpVal': 'azul',
                'labText': 'Azul',
                'inpName': 'limon',
                'inpFor_Id':'azul'
        
            },
            {
                'inpVal': 'verde',
                'labText': 'Verde',
                'inpName': 'limon',
                'inpFor_Id':'verde'
            },
            {
                'inpVal': 'rojo',
                'labText': 'Rojo',
                'inpName': 'limon',
                'inpFor_Id':'rojo'
            },
            {
                'inpVal': 'amarillo',
                'labText': 'Amarillo',
                'inpName': 'limon',
                'inpFor_Id':'amarillo'

            }
        ]
    },
    {
        //1st question of the quiz object. [0] Question statement.[1]<label> and <input> tags attributes.

        'legend': '¿Cuál de estas expresiones te resulta familiar?',
        'answerAtts': [
            {
                'inpVal': 'haceCosas',
                'labText': 'Esto hace cosas',
                'inpName': 'frases',
                'inpFor_Id':'haceCosas'
            },
            {
                'inpVal': 'probado',
                'labText': '¿Pero lo has probado?',
                'inpName': 'frases',
                'inpFor_Id':'hasProbado'
            },
            {
                'inpVal': 'monoculo',
                'labText': 'Es hora de quitarse el monóculo',
                'inpName': 'frases',
                'inpFor_Id':'quitaMonoculo'
            },
            {
                'inpVal': 'todas',
                'labText': 'Todas',
                'inpName': 'frases',
                'inpFor_Id':'todas'
            }
        ]
    }
]



for (let i=0; i < quizObj.length; i++){

let quiz = `
        <fieldset>
        <legend><h2>${quizObj[i].legend}</h2></legend>`

for (let j = 0; j < quizObj[i].answerAtts.length; j++) {

    let answer = `
        
            <label for="${quizObj[i].answerAtts[j].inpFor_Id}">"${quizObj[i].answerAtts[j].labText}" </label>
            <input id="${quizObj[i].answerAtts[j].inpFor_Id}" name="${quizObj[i].answerAtts[j].inpName}" value="${quizObj[i].answerAtts[j].inpVal}" type="radio" />
        `;
    quiz += answer;
}

quiz += `</fieldset>`

document.getElementById('quizColors').innerHTML += quiz;

}
document.getElementById('quizColors').innerHTML += `<input type="submit" value="Enviar respuestas"></input>`

//-------------------VALIDACIÓN-----------------------------


let msj //declaro msj para rellenarla con el mensaje a mostrar en cada caso más adelante.


const respuestas = {
    //clave = propiedad 'name', valor = 'value'
    'limon': 'amarillo',
    'frases': 'todas'
}

//Creo párrafo donde mostrar los errores
let p = document.getElementById('errors')
p.style.color = "red";
p.style.fontSize = "16px";

//Añado listener y llamo al objeto event para leer las respuestas del usuario
document.querySelector('form').addEventListener('submit',function (event){
   
       //Paralizo el envío del formulario
       event.preventDefault();

       //Asigno el valor de las respuestas del usuario a su respectiva variable
       let qLimon = event.target.limon.value;
       let qFrases = event.target.frases.value

       msj = '';//incio msj como stringnvacío

        //Pregunta 1: condiciones y mensajes de error

        if (qLimon == ''){
            msj += 'Pregunta 1:Selecciona alguna opción.<br>';
        }else if(qLimon == respuestas.limon){
            msj += 'Correcto. ¡Enhorabuena!<br>';
        }else{
            msj += 'Incorrecto. El limón no es de ese color.<br>'
        }

    //Pregunta 2: condiciones y mensajes de error

        if (qFrases == ''){
            msj += 'Pregunta 2: Selecciona alguna opción.<br>';
        }else if(qFrases == respuestas.frases){
            msj += 'Correcto. ¡Enhorabuena!<br>';
        }else{
            msj += 'Incorrecto. Parece que necesitas descansar.<br>';
        }
        
        p.innerHTML = msj
        
        msj = '';
});  
