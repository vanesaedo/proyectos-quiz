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

//VALIDACIÓN

//Añado un EventListener al formulario, que vigila cuándo se produce el evento sumbit(cuando pulsamos el botón enviar (submit). Y llamamos a la función event que contiene la info de lo que ha registrado nuestro form.

const respuestas = {
    //clave = propiedad 'name', valor = 'value'
    'limon': 'amarillo',
    'frases': 'todas'
}

document.querySelector('form').addEventListener('submit',function (event){
    //Comprobando que me lee lo que el usuario marca
       //Paralizo el envío del formulario
       event.preventDefault();
       //console.log(event.target.valor_de_name.valor_de_value)
       const qLimon = console.log(event.target.limon.value);
       const qFrases = console.log(event.target.frases.value);

       let msj = '';

    //Pregunta 1

        if (qLimon == ''){
            //console.log('Selecciona algún color para el limón.');
            msj += 'Selecciona algún color para el limón.'; 
        }else if(qLimon == respuestas.limon){
            //console.log('Correcto, el limón es amarillo. ¡Enhorabuena!');
            msj += 'Correcto, el limón es amarillo. ¡Enhorabuena!'; 
        }else{
            //console.log('El limón no es de ese color. Inténtalo de nuevo.');}
            msj += 'El limón no es de ese color. Inténtalo de nuevo.';
        };

    //Pregunta 2
/*
        if (qFrases == ''){
            console.log('Selecciona algún color para el limón.'); 
        }else if(qLimon == respuestas.limon){
            console.log('Correcto, el limón es amarillo. ¡Enhorabuena!');
        }else{
            console.log('El limón no es de ese color. Inténtalo de nuevo.');}
            */
});  

//Todos los elementos (después se asignará cada expresión a una variable)
//console.log(event.target.elements

//Radio: 
//console.log(event.target.valor_de_name.value)

//CheckBox:
//console.log(event.target.valor_de_name.checked) - Booleano
//Lógica de validación
//if (!accept || !span){console.log('Por favor, acepta condiciones y envío de publicidad.')}

//Texto: 
//console.log(event.target.valor_de_name.value)
//lógica de validación
//if (value_de_name.length > 30){console.log('nombre fuera de tamaño: ha de ser menor de 30)}

//Select:
//console.log(event.target.valor_de_name.value)