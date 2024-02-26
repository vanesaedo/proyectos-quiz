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
//Aquí estoy añadiendo el escuchador al formulario, desencadenándose a partir del evento submit.

document.querySelector('form').addEventListener('submit',function (event){
    //Comprobando que me lee lo que el usuario marca
       //Paralizo el envío del formulario
       event.preventDefault();
       //console.log(event.target.valor_de_name.valor_de_value)
       const qLimon = console.log(event.target.limon.value);
       const qFrases = console.log(event.target.frases.value);

       
       let msj = '';

    //Pregunta 1

        if (qLimon == undefined){
            console.log('Selecciona alguna opción\n'); 
            msj += 'Pregunta 1:Selecciona alguna opción\n';
        }else if(qLimon == respuestas.limon){
            console.log('Correcto. ¡Enhorabuena!\n');
            msj += 'Correcto. ¡Enhorabuena!\n';
        }else{
            console.log('Incorrecto. El limón no es de ese color.\n');
            msj += 'Incorrecto. El limón no es de ese color.\n'
        }

    //Pregunta 2

        if (qFrases == undefined){
            console.log('Selecciona alguna opción\n'); 
            msj += 'Pregunta 2: Selecciona alguna opción\n';
        }else if(qFrases == respuestas.frases){
            console.log('Correcto. ¡Enhorabuena!\n');
            msj += 'Correcto. ¡Enhorabuena!\n';
        }else{
            console.log('Incorrecto. Parece que necesitas descansar.\n');
            msj += 'Correcto. ¡Enhorabuena!\n'
        }

        if (msj.length != 0)
        alert(msj);
        let p = document.createElement("pre");
        let mensaje = document.createTextNode(msj);
        p.style.color = "red";
        p.style.fontSize = "12px";
        p.appendChild(mensaje);

        document.getElementById('errors').appendChild(p);
});  
/*
modificar el color del input[type="radio"] dependiendo del resultado:

Si una respuesta que obtenemos del formulario es igual la clave-valor a la que corresponde en el objeto de respuestas pintar de color verde el elemento marcado.

En caso contrario al anterior, pintar de color rojo.
*/


//LÓGICAS DE VALIDACIÓN POR TIPO DE INPUT DE FORMULARIO

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

//email:

//if !email.endsWith(".com")&& !email.endsWith.es || !email.includes("@"){
//    console.log('validation error' + email);
//    msj += 'Validation error';
//}