// Side 1: variables
var guide1 = Scene.getItem("J3I6B5II") as AnimatedItem;
var lamp1 = Scene.getItem("K0rHclm5") as AnimatedItem;
var lamp2 = Scene.getItem("n2EsFHQ4") as AnimatedItem;
var lamp3 = Scene.getItem("SpwzvvRc") as AnimatedItem;
var lamp4 = Scene.getItem("dmkRRE51") as AnimatedItem;
var spaceVideo11 = Scene.getItem("bCJA6HVk") as DrawingItem;
var spaceVideo12 = Scene.getItem("BFKfUdWk") as DrawingItem;
var tic1 = Scene.getItem("1uSmb7WU") as DrawingItem;

// Side 2: variables
var guide2 = Scene.getItem("WU2XedhD") as AnimatedItem;
var laptop = Scene.getItem("jHbJg26a") as AnimatedItem;
var spaceVideo21 = Scene.getItem("oADEZj2o") as DrawingItem;
var spaceVideo22 = Scene.getItem("mIEPEbuZ") as DrawingItem;
var tic2 = Scene.getItem("sWC90sv4") as DrawingItem;

// Side 3: variables
var guide3 = Scene.getItem("THvDC9x0") as AnimatedItem;
var grandmother = Scene.getItem("HEYUE1iN") as AnimatedItem;
var candy = Scene.getItem("c7j3eCxj") as AnimatedItem;
var candyPanel = Scene.getItem("NWiH40ct") as Cuboid;
var candyTable = Scene.getItem("V3ZeKOrf") as AnimatedItem;
var candyText = Scene.getItem("3qja4C7t") as TextItem;
var chair = Scene.getItem("lkokOPxN") as AnimatedItem;
var father = Scene.getItem("vEF95o7v") as AnimatedItem;
var mother = Scene.getItem("vOxCwgFu") as AnimatedItem;
var spaceVideo31 = Scene.getItem("3CfkKKfh") as DrawingItem;
var spaceVideo32 = Scene.getItem("c3kSUvit") as DrawingItem;
var tic3 = Scene.getItem("GBYTRyK1") as DrawingItem;

// Side 4: variables
var candle41 = Scene.getItem("ZeQctgaj") as AnimatedItem;
var candle42 = Scene.getItem("l2PN8ytB") as AnimatedItem;
var candle43 = Scene.getItem("scP4qtwt") as AnimatedItem;
var candle44 = Scene.getItem("UIEUg34f") as AnimatedItem;
var candle45 = Scene.getItem("42T4V1R5") as AnimatedItem;
var candle46 = Scene.getItem("nDb8xJp2") as AnimatedItem;
var candle47 = Scene.getItem("jZerAt2u") as AnimatedItem;
var candle48 = Scene.getItem("1yOGfAie") as AnimatedItem;
var candle49 = Scene.getItem("DB2nr6V1") as AnimatedItem;
var candle410 = Scene.getItem("Ou1fxEia") as AnimatedItem;
var candle411 = Scene.getItem("0SkvADh9") as AnimatedItem;
var candle412 = Scene.getItem("3d2gHlpP") as AnimatedItem;
var cupcake = Scene.getItem("jaJHTaWt") as AnimatedItem;
var guide4 = Scene.getItem("6PshG8U2") as AnimatedItem;
var spaceVideo41 = Scene.getItem("DRYOS9YD") as DrawingItem;
var spaceVideo42 = Scene.getItem("eORBhAA2") as DrawingItem;
var tic4 = Scene.getItem("XpDRCR6S") as DrawingItem;

// Side 5: variables
var dog = Scene.getItem("eMzGMtwb") as AnimatedItem;
var guide5 = Scene.getItem("1zfKElUf") as AnimatedItem;
var instructions5 = Scene.getItem("aH0ksrDW") as TextItem;
var side5number = Scene.getItem("G7F0rGUB") as TextItem;
var spaceVideo51 = Scene.getItem("qnmW152U") as DrawingItem;
var spaceVideo52 = Scene.getItem("LiO3bu5D") as DrawingItem;
var stopSign = Scene.getItem("qLqyB2xZ") as AnimatedItem;
var tic5 = Scene.getItem("p4RRP4YZ") as DrawingItem;

// Side 6: variables
var astronaut = Scene.getItem("lKAMqejU") as AnimatedItem;
var astronautGasTank = Scene.getItem("2sjaYLL6") as AnimatedItem;
var astronautHelmet = Scene.getItem("tmWb776z") as AnimatedItem;
var moon = Scene.getItem("ywTv7HZj") as AnimatedItem;
var rocket = Scene.getItem("prz3VgUm") as AnimatedItem;
var spaceVideo61 = Scene.getItem("d2oRuLUx") as DrawingItem;
var spaceVideo62 = Scene.getItem("uUF6UgT5") as DrawingItem;
var star61 = Scene.getItem("HQhC6QWF") as DrawingItem;
var star62 = Scene.getItem("nORcdh7M") as DrawingItem;
var star63 = Scene.getItem("vuNJuvLX") as DrawingItem;
var star64 = Scene.getItem("rdpeMOWv") as DrawingItem;
var star65 = Scene.getItem("ASopQw0U") as DrawingItem;
var star66 = Scene.getItem("xatrNAvV") as DrawingItem;




// Side 1: before start
function hideSide1(){
    guide1.visible = false;
    lamp1.visible = false;
    lamp2.visible = false;
    lamp3.visible = false;
    lamp4.visible = false;
    tic1.visible = false;
    
    spaceVideo11.visible = true;
    spaceVideo12.visible = true;
}

function hideSpaceVideo1(){
    spaceVideo11.visible = false;
    spaceVideo12.visible = false;
}

// Side 2: before start
// true -> show side 2
// false -> hide side 2
function showHideSide2(activateItem: boolean, activateSpace: boolean){
    guide2.visible = activateItem;
    laptop.visible = activateItem;
    tic2.visible = activateItem;

    spaceVideo21.visible = activateSpace;
    spaceVideo22.visible = activateSpace;
}

// Side 3: before start
function showHideSide3(activateItem: boolean, activateSpace: boolean){
    guide3.visible = activateItem;
    mother.visible = activateItem;
    father.visible = activateItem;
    grandmother.visible = activateItem;
    chair.visible = activateItem;
    candyTable.visible = activateItem;
    candy.visible = activateItem;
    candyPanel.visible = activateItem;
    candyText.visible = activateItem;
    tic3.visible = activateItem;

    spaceVideo31.visible = activateSpace;
    spaceVideo32.visible = activateSpace;
}

// Side 4: before start
function showHideSide4(activateItem: boolean, activateSpace: boolean){
    guide4.visible = activateItem;
    cupcake.visible = activateItem;
    candle41.visible = activateItem;
    candle42.visible = activateItem;
    candle43.visible = activateItem;
    candle44.visible = activateItem;
    candle45.visible = activateItem;
    candle46.visible = activateItem;
    candle47.visible = activateItem;
    candle48.visible = activateItem;
    candle49.opacity = 0;
    candle410.opacity = 0;
    candle411.opacity = 0;
    candle412.opacity = 0;
    tic4.visible = activateItem;

    spaceVideo41.visible = activateSpace;
    spaceVideo42.visible = activateSpace;
}

// Side 5: before start
function showHideSide5(activateItem: boolean, activateSpace: boolean){
    guide5.visible = activateItem;
    dog.visible = activateItem;
    stopSign.visible = activateItem;
    tic5.visible = activateItem;
    instructions5.visible = false;

    spaceVideo51.visible = activateSpace;
    spaceVideo52.visible = activateSpace;
}

// Side 6: before start
function showHideSide6(activateItem: boolean, activateSpace: boolean){
    rocket.visible = false;
    astronaut.visible = activateItem;
    astronautGasTank.visible = activateItem;
    astronautHelmet.visible = activateItem;
    moon.visible = activateItem;
    star61.visible = activateItem;
    star62.visible = false;
    star63.visible = false;
    star64.visible = false;
    star65.visible = false;
    star66.visible = false;

    spaceVideo61.visible = activateSpace;
    spaceVideo62.visible = activateSpace;
}

// Before start
hideSpaceVideo1();
showHideSide2(false, false);
showHideSide3(false, false);
showHideSide4(false, false);
showHideSide5(false, false);
showHideSide6(false, false);





// Side 1: actions
tic1.visible = false;

guide1.speech = "Antes de empezar, este juego trata de enseñar los principios básicos de la programación. " +
                "Si tienes cualquier duda, haz clic sobre mí."

guide1.input.onClick(firstStepSide1);

function firstStepSide1(){
    guide1.speech = "Vamos a empezar explicando el sistema binario. " +
                    "Es un sistema que representa los números con las cifras 0 y 1. " + 
                    "En los ordenadores, significa encendido (es decir, que hay corriente), " +
                    "o apagado (que no hay corriente). La cifra 1 significa encendido y la cifra 0 apagado.";

    guide1.input.onClick(secondStepSide1);
}

function secondStepSide1(){
    guide1.speech = "En nuestro caso, vamos a resolver 4 preguntas que se responden con Si o No. " +
                    "Si la respuesta es que sí, vamos a encender la lámpara correspondiente, " + 
                    "y si la respuesta es que no, la apagaremos. Ten cuidado porque no podrás hacer clics " + 
                    "eternamente, solamente puedes hacer clic 2 veces sobre cada lámpara. ¡Empezamos!";
    
    guide1.input.onClick(firstQuestionSide1);
}

function thirdStepSide1(){
    guide1.speech = "¡Muy bien, has respondido a todas las preguntas! Has conseguido la combinación 1010, " + 
                    "que en decimal es el número 10. Por favor, recuérdalo para la siguiente actividad. " + 
                    "Cuando termines pulsa sobre el tic verde para continuar.";
    tic1.visible = true;
}

function firstQuestionSide1(){
    guide1.speech = "Pregunta 1: ¿2 + 2 son 4?";
    lamp1.input.onClick(changeLampToNewColor.bind(this, lamp1));
    guide1.input.onClick(firstQuestionSolved.bind(this, lamp1));
}

function firstQuestionSolved(lamp: AnimatedItem){

    if((lamp.color.red == 255) && (lamp.color.green == 255) && (lamp.color.blue == 0)){
        guide1.speech = "¡Respuesta correcta!"
        lamp1.input.onClick(null);
    } else {
        guide1.speech = "¡Respuesta incorrecta!"
        changeLampToNewColor(lamp1);
        lamp1.input.onClick(null);
    }

    guide1.input.onClick(secondQuestionSide1);
}

function secondQuestionSide1(){
    guide1.speech = "Pregunta 2: ¿3 + 3 son 5?";
    lamp2.input.onClick(changeLampToNewColor.bind(this, lamp2));
    guide1.input.onClick(secondQuestionSolved.bind(this, lamp2));
}

function secondQuestionSolved(lamp: AnimatedItem){

    if((lamp.color.red == 255) && (lamp.color.green == 233) && (lamp.color.blue == 173)){
        guide1.speech = "¡Respuesta correcta!"
        lamp2.input.onClick(null);
    } else {
        guide1.speech = "¡Respuesta incorrecta!"
        changeLampToBaseColor(lamp2);
        lamp2.input.onClick(null);
    }

    guide1.input.onClick(thirdQuestionSide1);
}

function thirdQuestionSide1(){
    guide1.speech = "Pregunta 3: ¿El sistema decimal usa números de 0 a 9?";
    lamp3.input.onClick(changeLampToNewColor.bind(this, lamp3));
    guide1.input.onClick(thirdQuestionSolved.bind(this, lamp3));
}

function thirdQuestionSolved(lamp: AnimatedItem){

    if((lamp.color.red == 255) && (lamp.color.green == 255) && (lamp.color.blue == 0)){
        guide1.speech = "¡Respuesta correcta!"
        lamp3.input.onClick(null);
    } else {
        guide1.speech = "¡Respuesta incorrecta!"
        changeLampToNewColor(lamp3);
        lamp3.input.onClick(null);
    }

    guide1.input.onClick(fourthQuestionSide1);
}

function fourthQuestionSide1(){
    guide1.speech = "Pregunta 4: ¿El sistema binario usa números de 0 a 2?";
    lamp4.input.onClick(changeLampToNewColor.bind(this, lamp4));
    guide1.input.onClick(fourthQuestionSolved.bind(this, lamp4));
}

function fourthQuestionSolved(lamp: AnimatedItem){

    if((lamp.color.red == 255) && (lamp.color.green == 233) && (lamp.color.blue == 173)){
        guide1.speech = "¡Respuesta correcta!"
        lamp4.input.onClick(null);
    } else {
        guide1.speech = "¡Respuesta incorrecta!"
        changeLampToBaseColor(lamp4);
        lamp4.input.onClick(null);
    }

    guide1.input.onClick(thirdStepSide1);
}

function changeLampToNewColor(lamp: AnimatedItem){
    lamp.color = new Color(255,255,0);
    lamp.input.onClick(changeLampToBaseColor.bind(this, lamp));
}

function changeLampToBaseColor(lamp: AnimatedItem){
    lamp.color = new Color(255,233,173);
    lamp.input.onClick(null);
}



// Side 2: after side 1 is finished
tic1.input.onClick(showSide2HideSide1);

// Side 2: actions
function showSide2HideSide1(){
    hideSide1();
    showHideSide2(true, false);
    playActionsSide2();
}

function playActionsSide2(){
    tic2.visible = false;
    guide2.speech = "¡Buenas! Veo que has terminado la cara anterior, tu recompensa te espera " + 
                    "al final del juego, así que por lo pronto vamos a explicar las variables de programación.";
    guide2.input.onClick(firstStepSide2);
}

function firstStepSide2(){
    guide2.speech = "Una variable en informática es un elemento que contiene un valor. " + 
                    "Se puede entender de la siguiente forma: imagina que tienes una caja " + 
                    "en tu casa con la etiqueta Juguetes, y dentro tienes un coche de Hot Wheels. " + 
                    "En este caso la variable es la caja y el valor el coche.";
    guide2.input.onClick(secondStepSide2);
}

function secondStepSide2(){
    guide2.speech = "En informática, las variables pueden guardar números, letras/palabras y valores de Verdadero/Falso. Hay que tener cuidado porque no se pueden mezclar entre sí.";
    guide2.input.onClick(thirdStepSide2);
}

function thirdStepSide2(){
    guide2.speech = "A continuación, te voy a poner 3 preguntas. Tendrás que poner el valor " + 
                    "correcto a las variables. La variable estará al final de la frase entre corchetes.";
    guide2.input.onClick(fourthStepSide2);
}

function fourthStepSide2(){
    guide2.speech = null;
    guide2.input.onClick(null);
    laptop.thought = "¿Qué pasará si haces clic cobre mí?";
    laptop.input.onClick(fifthStepSide2);
}

function fifthStepSide2(){
    laptop.thought = "";
    firstLaptopQuestion();
    laptop.speech = "Vuelve a pulsar sobre mí.";
    laptop.input.onClick(sixthStepSide2);
}

function sixthStepSide2(){
    laptop.speech = null;
    guide2.speech = null;
    secondLaptopQuestion();
    laptop.speech = "Vuelve a pulsar sobre mí.";
    laptop.input.onClick(seventhStepSide2);
}

function seventhStepSide2(){
    laptop.speech = null;
    guide2.speech = null;
    thirdLaptopQuestion();
    laptop.speech = "Vuelve a pulsar sobre mí.";
    laptop.input.onClick(eighthStepSide2);
}

function eighthStepSide2(){
    laptop.speech = null;
    laptop.input.onClick(null);
    guide2.speech = "¡Enhorabuena, has superado esta cara!"
    tic2.visible = true;
}

function firstLaptopQuestion(){
    GUI.HUD.showQuizPanel({
        question: 'Selecciona verdadero o falso. El sol gira alrededor de la Tierra. [solución = _]',
        answer1: 'Verdadero',
        answer2: 'Falso',
        correctAnswer: 2,
        onCorrect: () => guide2.speech = "¡Perfecto!",
        onWrong: () => guide2.speech = "La respuesta correcta era Falso."
    });
}

function secondLaptopQuestion(){
    GUI.HUD.showQuizPanel({
        question: 'Selecciona el número correcto. En la cara anterior el número conseguido fue: [número = _]',
        answer1: '10',
        answer2: '1',
        answer3: '100',
        correctAnswer: 1,
        onCorrect: () => guide2.speech = "¡Perfecto!",
        onWrong: () => guide2.speech = "La respuesta correcta era 10."
    });
}

function thirdLaptopQuestion(){
    GUI.HUD.showQuizPanel({
        question: 'Selecciona la palabra correcta. El sol es un(a): [palabra = _].',
        answer1: 'Planeta',
        answer2: 'Cometa',
        answer3: 'Estrella',
        correctAnswer: 3,
        onCorrect: () => guide2.speech = "¡Perfecto!",
        onWrong: () => guide2.speech = "La respuesta correcta era Estrella."
    });
}



// Side 3: after side 2 is finished
tic2.input.onClick(showSide3HideSide2);

// Side 3: actions
function showSide3HideSide2(){
    showHideSide2(false, true);
    showHideSide3(true, false);
    playActionsSide3();
}

function playActionsSide3(){
    tic3.visible = false;
    guide3.speech = "¡Hola de nuevo! Aquí vamos a explicar lo que son los condicionales If – Else.";
    guide3.input.onClick(firstStepSide3);
}

function firstStepSide3(){
    guide3.speech = "Los condicionales, como su nombre indica, son condiciones que " + 
                    "indican una opción u otra. Por ejemplo, SI (va a llover) -> coge el paraguas.";
    guide3.input.onClick(secondStepSide3);
}

function secondStepSide3(){
    guide3.speech = "En este caso, el IF (condición) indica SI (condición), y ELSE, indica 'en caso contrario'. \n" +
                    "SI (va a llover) -> coge el paraguas, \n" +
                    "ELSE -> coge el bañador.";
    guide3.input.onClick(thirdStepSide3);
}

function thirdStepSide3(){
    guide3.speech = "En esta cara, vas a tener que pedirle dinero a tu abuela, padre y madre. " + 
                    "Puedes hacer clic sobre ellos las veces que quieras, hasta un máximo de 3 veces por persona. " + 
                    "Cuando tu quieras, tendrás que hacer clic sobre la mesa, " + 
                    "la cual te dirá si tienes dinero suficiente para las golosinas.";
    guide3.input.onClick(fourthStepSide3);
}

function fourthStepSide3(){
    guide3.speech = null;
    var totalBudget = {
        money: 0
    };
    var MAX_NUM_CLICKS = 3;

    grandmother.input.onClick(clickedOnGrandma.bind(this, totalBudget, 0, MAX_NUM_CLICKS));
    father.input.onClick(clickedOnFather.bind(this, totalBudget, 0, MAX_NUM_CLICKS));
    mother.input.onClick(clickedOnMother.bind(this, totalBudget, 0, MAX_NUM_CLICKS));

    guide3.input.onClick(fifthStepSide3.bind(this, totalBudget));
}

function fifthStepSide3(totalBudget: {money: number}){
    candyTable.speech = "¿Tienes dinero suficiente para las golosinas? Cuestan 3.50€";
    
    candyTable.input.onClick(sixthStepSide3.bind(this, totalBudget));
}

function sixthStepSide3(totalBudget: {money: number}){
    candyTable.speech = null;

    var candyCost = 3.5;

    if(totalBudget.money >= candyCost){
        guide3.speech = "¡Enhorabuena! Tienes dinero suficiente.";
    } else {
        guide3.speech = "¡Ohh! Te falta dinero para las golosinas.";
    }

    candyTable.input.onClick(null);

    tic3.visible = true;
}

function clickedOnGrandma(totalBudget: {money: number}, nClicks: number, maxNumClicks: number) {

    if(nClicks < maxNumClicks) {
        var money = giveMoney(0);
        totalBudget.money += money;

        guide3.speech = "Tienes " + totalBudget.money + " euros.";
        grandmother.input.onClick(clickedOnGrandma.bind(this, totalBudget, nClicks + 1, maxNumClicks));
    } else {
        grandmother.input.onClick(null);
    }
}

function clickedOnFather(totalBudget: {money: number}, nClicks: number, maxNumClicks: number) {

    if(nClicks < maxNumClicks) {
        var money = giveMoney(0);
        totalBudget.money += money;

        guide3.speech = "Tienes " + totalBudget.money + " euros.";
        father.input.onClick(clickedOnFather.bind(this, totalBudget, nClicks + 1, maxNumClicks));
    } else {
        father.input.onClick(null);
    }
}

function clickedOnMother(totalBudget: {money: number}, nClicks: number, maxNumClicks: number) {

    if(nClicks < maxNumClicks) {
        var money = giveMoney(0);
        Debug.log("RandomMoney: " + money + ", TotalBudget: " + totalBudget.money);
        totalBudget.money += money;
        Debug.log("Total: " + totalBudget.money);

        guide3.speech = "Tienes " + totalBudget.money + " euros.";
        mother.input.onClick(clickedOnMother.bind(this, totalBudget, nClicks + 1, maxNumClicks));
    } else {
        mother.input.onClick(null);
    }
}

function giveMoney(counter: number){
    var aux = 0;
    var min = 0.20;
    var max = 0.51;
    
    // Max es 0.51 porque Math.random() funciona asi: [0.20, 0.51)
    // Math.round(num * 100) / 100 -> redondea a 2 decimales
    aux = Math.round((Math.random() * (max - min) + min) * 100 + Number.EPSILON) / 100;
    //aux = Math.round((Math.random() * (max - min) + min) * 100 + 0.00001) / 100;

    return aux + counter;
}



// Side 4: after side 3 is finished
tic3.input.onClick(showSide4HideSide3);

// Side 4: actions
function showSide4HideSide3(){
    showHideSide3(false, true);
    showHideSide4(true, false);
    playActionsSide4();
}

function playActionsSide4(){
    tic4.visible = false;
    guide4.speech = "¡Hola! En esta cara vamos a explicar los bucles. " + 
                    "Hay dos tipos, aquí vamos a hablar del primer tipo.";
    guide4.input.onClick(firstStepSide4);
}

function firstStepSide4(){
    guide4.speech = "El primer bucle se llama “For”. Es un ciclo que cuenta desde un " + 
                    "punto de partida hasta una meta. Para que se entienda, vamos a poner " + 
                    "un ejemplo: un “for” serviría para contar de 1 a 5, de uno en uno. " + 
                    "Puedes poner el inicio que tú quieras y la meta que tú quieras, así como de cuánto en cuánto.";
    guide4.input.onClick(secondStepSide4);
}

function secondStepSide4(){
    guide4.speech = "En este ejercicio, la tarta tiene 8 velas y después de hacerte " + 
                    "una pregunta, saldrán más velas, representando el bucle.";
    guide4.input.onClick(thirdStepSide4);
}

function thirdStepSide4(){
    guide4.speech = null;
    questionAboutAge();
    tic4.visible = true;
}

function questionAboutAge(){
    GUI.HUD.showChoicePanel({
        question: '¿Qué edad tienes?',
        answer1: '9',
        answer2: '10',
        answer3: '11',
        answer4: '12',
        onAnswer: answerIndex => {
            if(answerIndex == 1){
                candle49.opacity = 1;
                candle410.opacity = 0;
                candle411.opacity = 0;
                candle412.opacity = 0;
            } else if(answerIndex == 2){
                candle49.opacity = 1;
                candle410.opacity = 1;
                candle411.opacity = 0;
                candle412.opacity = 0;
            } else if(answerIndex == 3){
                candle49.opacity = 1;
                candle410.opacity = 1;
                candle411.opacity = 1;
                candle412.opacity = 0;
            } else if(answerIndex == 4){
                candle49.opacity = 1;
                candle410.opacity = 1;
                candle411.opacity = 1;
                candle412.opacity = 1;
            }
        }
    });
}



// Side 5: after side 4 is finished
tic4.input.onClick(showSide5HideSide4);

// Side 5: actions
function showSide5HideSide4(){
    showHideSide4(false, true);
    showHideSide5(true, false);
    playActionsSide5();
}

function playActionsSide5(){
    tic5.active = false;
    dog.animation.playLooping("Chase tail");
    guide5.speech = "¡Hola! En esta cara vamos a explicar el segundo tipo de bucle.";
    guide5.input.onClick(firstStepSide5);
}

function firstStepSide5(){
    guide5.speech = "Este bucle se llama “while”. Es un ciclo que se va a repetir hasta " + 
                    "que ocurra una condición. Es decir, podemos jugar con la pelota hasta que " + 
                    "nuestra madre nos llame para entrar en casa. " + 
                    "O podemos contar de uno en uno hasta que lleguemos a 100.";
    guide5.input.onClick(secondStepSide5);
}

function secondStepSide5(){
    guide5.speech = "Lo mejor para entenderlo será verlo en directo. " + 
                    "Tenemos un perro que no para de jugar a morderse la cola, tú serás el que " + 
                    "decida cuándo va a parar. Investiga a ver qué tienes que hacer.";
    stopSign.input.onClick(stopDogChasingTail);
    guide5.input.onClick(null);
}

function stopDogChasingTail(){
    guide5.speech = null;
    stopSign.input.onClick(null);
    dog.animation.stop();
    tic5.active = true;
}



// Side 6: after side 5 is finished
tic5.input.onClick(showSide6HideSide5);

// Side 6: actions
function showSide6HideSide5(){
    showHideSide5(false, true);
    showHideSide6(true, true);
    playActionsSide6();
}

function playActionsSide6(){
    instructions5.visible = true;
    side5number.visible = false;
    astronaut.speech = "Creo que si has llegado hasta aquí es que has terminado todas las " + 
                        "caras anteriores, espero que te hayan sido de utilidad. Ahora mi " + 
                        "trabajo es darte la recompensa en forma de datos curiosos " + 
                        "sobre el espacio, ¡así que allá vamos!";
    star61.input.onClick(firstStepSide6);
}

function firstStepSide6() {
    star61.visible = false;
    star62.visible = true;
    astronaut.speech = "Dato 1: El Sol es tan grande que todos los planetas del " + 
                        "Sistema Solar caben dentro y ¡sobra espacio!";
    star62.input.onClick(secondStepSide6);
}

function secondStepSide6(){
    star62.visible = false;
    star63.visible = true;
    astronaut.speech = "Dato 2: Aunque Mercurio es el planeta más cercano al Sol, " + 
                        "Venus es el planeta más caliente.";
    rocket.visible = true;
    star63.input.onClick(thirdStepSide6);
}

function thirdStepSide6(){
    star63.visible = false;
    star64.visible = true;
    astronaut.speech = "Dato 3: Hasta ahora Júpiter era el planeta que más satélites " + 
                        "tenía (79), pero Saturno lo ha superado con 82 satélites.";
    rocket.animation.play("Open");
    star64.input.onClick(fourthStepSide6);
}

function fourthStepSide6(){
    star64.visible = false;
    star65.visible = true;
    astronaut.speech = "Dato 4: El cometa Halley tarda 75-76 años en dar la vuelta al Sol. " + 
                        "Este cometa es el único que los humanos podemos ver a simple vista " + 
                        "sin necesidad de un telescopio. La próxima vez que se verá, será en 2061.";
    astronaut.animation.play("Walk low gravity");
    star65.input.onClick(fifthStepSide6);
}

function fifthStepSide6(){
    star65.visible = false;
    star66.visible = true;
    astronaut.speech = "Dato 5: El primer hombre en pisar la luna fue Neil Armstrong en 1969.";
    star66.input.onClick(sixthStepSide6);
}

function sixthStepSide6(){
    star66.visible = false;
    astronaut.speech = "Dato 6: El primer ser vivo en llegar a la órbita terrestre fue una " + 
                        "perra rusa llamada Laika en 1957. En Moscú existe un monumento en su honor. \n" + 
                        "Para terminar, haz clic sobre el cohete.";
    rocket.input.onClick(seventhStepSide6);
}

function seventhStepSide6(){
    rocket.animation.play("Closed");
    astronaut.visible = false;
    astronautHelmet.visible = false;
    astronautGasTank.visible = false;

    rocket.transition.moveBy(new Vector3(0,10,0), 5);
}
