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
                'inpName': 'q1',
                'inpFor_Id':'azul'
        
            },
            {
                'inpVal': 'verde',
                'labText': 'Verde',
                'inpName': 'q1',
                'inpFor_Id':'verde'
            },
            {
                'inpVal': 'rojo',
                'labText': 'Rojo',
                'inpName': 'q1',
                'inpFor_Id':'rojo'
            },
            {
                'inpVal': 'amarillo',
                'labText': 'Amarillo',
                'inpName': 'q1',
                'inpFor_Id':'amarillo'

            }
        ]
    },
    {
        //2nd question of the quiz object. [0] Question statement.[1]<label> and <input> tags attributes.

        'legend': '¿Cuál de estas expresiones  te resulta familiar?',
        'answerAtts': [
            {
                'inpVal': 'haceCosas',
                'labText': 'Esto hace cosas',
                'inpName': 'q2',
                'inpFor_Id':'haceCosas'
            },
            {
                'inpVal': 'probado',
                'labText': '¿Pero lo has probado?',
                'inpName': 'q2',
                'inpFor_Id':'hasProbado'
            },
            {
                'inpVal': 'monoculo',
                'labText': 'Es hora de quitarse el monóculo',
                'inpName': 'q2',
                'inpFor_Id':'quitaMonoculo'
            },
            {
                'inpVal': 'todas',
                'labText': 'Todas',
                'inpName': 'q2',
                'inpFor_Id':'todas'
            }
        ]
    },
    {
         //3rd question of the quiz object. [0] Question statement.[1]<label> and <input> tags attributes.

         'legend': '¿Cómo se llama la hija de Thor?',
         'answerAtts': [
             {
                 'inpVal': 'monica',
                 'labText': 'Mónica',
                 'inpName': 'q3',
                 'inpFor_Id':'monica'
             },
             {
                 'inpVal': 'torita',
                 'labText': 'Torita',
                 'inpName': 'q3',
                 'inpFor_Id':'torita'
             },
             {
                 'inpVal': 'hipatia',
                 'labText': 'Hipatia',
                 'inpName': 'q3',
                 'inpFor_Id':'hipatia'
             },
             {
                 'inpVal': 'torrija',
                 'labText': 'Torrija',
                 'inpName': 'q3',
                 'inpFor_Id':'torrija'
             }
         ]
    },
    {
        //4rd question of the quiz object. [0] Question statement.[1]<label> and <input> tags attributes.

        'legend': '¿Qué animal vive y se reproduce sólo en el polo Sur?',
        'answerAtts': [
            {
                'inpVal': 'mofeta',
                'labText': 'Mofeta',
                'inpName': 'q4',
                'inpFor_Id':'mofeta'
            },
            {
                'inpVal': 'caracol',
                'labText': 'Caracol',
                'inpName': 'q4',
                'inpFor_Id':'caracol'
            },
            {
                'inpVal': 'pinguino',
                'labText': 'Pingüino',
                'inpName': 'q4',
                'inpFor_Id':'pinguino'
            },
            {
                'inpVal': 'lobo',
                'labText': 'Lobo',
                'inpName': 'q2',
                'inpFor_Id':'lobo'
            }
        ]
   },
   {
    //5th question of the quiz object. [0] Question statement.[1]<label> and <input> tags attributes.

    'legend': '¿En qué estación del año caen las hojas?',
    'answerAtts': [
        {
            'inpVal': 'verano',
            'labText': 'Verano',
            'inpName': 'q5',
            'inpFor_Id':'verano'
        },
        {
            'inpVal': 'primavera',
            'labText': 'Primavera',
            'inpName': 'q5',
            'inpFor_Id':'primavera'
        },
        {
            'inpVal': 'otoño',
            'labText': 'Otoño',
            'inpName': 'q5',
            'inpFor_Id':'otoño'
        },
        {
            'inpVal': 'invierno',
            'labText': 'Invierno',
            'inpName': 'q5',
            'inpFor_Id':'invierno'
        }
    ]
}
]



for (let i=0; i < quizObj.length; i++){

let quiz = `
<fieldset>
<span>
<h1 class="pregunta">"${quizObj[i].legend}" </h1>
</span>
<article>   
`
//recorre el objeto answer que contiene las posibles respuestas
for (let j = 0; j < quizObj[i].answerAtts.length; j++) {

    let answer = `
        <div>
        <label class="respuestaRadio="${quizObj[i].answerAtts[j].inpFor_Id}">${quizObj[i].answerAtts[j].labText}</label>
        <input id="${quizObj[i].answerAtts[j].inpFor_Id}" name="${quizObj[i].answerAtts[j].inpName}" value="${quizObj[i].answerAtts[j].inpVal}" type="radio" required/>
        </div>
        `
        quiz += answer;
       
}

quiz += `<article></fieldset>`

document.getElementById('quizColors').innerHTML += quiz;

}
document.getElementById('quizColors').innerHTML += `<input type="submit" value="Enviar respuestas"></input>`

//-------------------VALIDACIÓN-----------------------------


let msj //declaro msj para rellenarla con el mensaje a mostrar en cada caso más adelante.


const respuestas = {
    //clave = propiedad 'name', valor = 'value'
    'answ1': 'amarillo',
    'answ2': 'todas',
    'answ3':'torrija',
    'answ4':'pinguino',
    'answ5':'otoño'
}

//Creo párrafo donde mostrar los errores
let p = document.getElementById('errors')
p.style.color = "red";
p.style.fontSize = "16px";
p.style.display = "block";

//Añado listener y llamo al objeto event para leer las respuestas del usuario
document.querySelector('form').addEventListener('submit',function (event){
   
       //Paralizo el envío del formulario
       event.preventDefault();

       //Asigno el valor de las respuestas del usuario a su respectiva variable
       let userAnsw1 = event.target.q1.value;
       let userAnsw2 = event.target.q2.value;
       let userAnsw3 = event.target.q3.value;
       let userAnsw4 = event.target.q4.value;

       msj = '';//incio msj como string vacío

    //Possible answer 1: Output errors

       if(userAnsw1 == respuestas.answ1){
            msj += 'Q1: Correcto. ¡Enhorabuena!<br>';
        }else{
            msj += 'Q1: Incorrecto. El limón no es de ese color.'
        }

    //Possible answer 2:  Output errors

        if(userAnsw2 == respuestas.answ2){
            msj += 'Q2: Correcto. ¡Enhorabuena!<br>';
        
        }else{
            msj += 'Q2: Incorrecto. Parece que necesitas descansar.<br>';
        }
    //Possible answer 3: Output errors
        if(userAnsw3 == respuestas.answ3){
            msj += 'Q3: Correcto. ¡Enhorabuena!<br>';
        }else{
            msj += 'Q3: Incorrecto. Parece que necesitas descansar.<br>';
        }

    //Possible answer 4: Output errors
        if(userAnsw4 == respuestas.answ4){
            msj += 'Q4: Correcto. ¡Enhorabuena!<br>';
        }else{
            msj += 'Q4: Incorrecto. Parece que necesitas descansar.<br>';
        }
        p.innerHTML = msj;
        alert(msj);
        
        msj = '';
});  
