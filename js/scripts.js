var answers = {};

var question_one = document.getElementById('step-1');
var question_two = document.getElementById('step-2');
var question_three = document.getElementById('step-3');
var question_four = document.getElementById('step-4');
var question_five = document.getElementById('step-5');

function storeAnswer(question_number, event){
    if(event.target.type === 'radio'){
        console.log(event.target.value);
        answers['step'+question_number] = parseInt(event.target.value);
        console.log(answers);
    }
}

question_one.addEventListener('click', function(event){
    storeAnswer(1, event)
})
question_two.addEventListener('click', function(event){
    storeAnswer(2, event)
})
question_three.addEventListener('click', function(event){
    storeAnswer(3, event)
})
question_four.addEventListener('click', function(event){
    storeAnswer(4, event)
})
question_five.addEventListener('click', function(event){
    storeAnswer(5, event)
})

function totalScore(){
    var total_score = 
    answers.step1+
    answers.step2+
    answers.step3+
    answers.step4+ 
    answers.step5;
    
    return total_score;
}

function getInfoBasedOnScore(){

    var score_info = "";
    
    if(totalScore() < 6){

        // Remove os elementos com a classe "columns"
        var columnsElements = document.getElementsByClassName("columns");
        while (columnsElements.length > 0) {
        columnsElements[0].parentNode.removeChild(columnsElements[0]);
        }

        // Adicione o link para index.html à navbar-brand
        var navbarBrand = document.querySelector(".navbar-brand");
        navbarBrand.href = "index.html";

        var score_info = "Você tirou uma nota abaixo da média esperada! Continue estudado e tente novamente. \n Conheça a instituição do Senac e aumente seus conhecimentos:";
        var iframe = document.createElement("iframe");

        // Defina os atributos do iframe
        iframe.src = "https://www.youtube.com/embed/hR_VC3EfxLs?si=yrUtZaIHJYydGuqu"; // URL do conteúdo do iframe
        iframe.width = "auto"; // Largura do iframe em pixels
        iframe.height = "auto"; // Altura do iframe em pixels
        iframe.frameBorder = "0"; // Desativar a borda do iframe (opcional)
    
        // Adicione o iframe ao elemento de contêiner na página
        var container = document.getElementById("iframeContainer");
        container.appendChild(iframe);
        
        // Adicione o código HTML ao elemento de contêiner
        var columnsDiv = document.createElement("div");
        columnsDiv.className = "columns";
        var columnDiv = document.createElement("div");
        columnDiv.className = "column";
        var button = document.createElement("button");
        button.className = "btn botao";
        button.type = "button";
        button.textContent = "Sair";
        // Adicione o evento de clique ao botão para redirecionar para index.html
        button.addEventListener("click", function() {
            window.location.href = "index.html";
        });

        columnDiv.appendChild(button);
        columnsDiv.appendChild(columnDiv);
        container.appendChild(columnsDiv);

    }
    if(totalScore() >= 6 && totalScore() < 8){
        var score_info = "Parabéns! Você tirou uma boa!";

            // Remove os elementos com a classe "columns"
            var columnsElements = document.getElementsByClassName("columns");
            while (columnsElements.length > 0) {
            columnsElements[0].parentNode.removeChild(columnsElements[0]);
            }

            // Adicione o link para index.html à navbar-brand
            var navbarBrand = document.querySelector(".navbar-brand");
            navbarBrand.href = "index.html";

           // Adicione o iframe ao elemento de contêiner na página
        var iframe = document.createElement("iframe");
        var container = document.getElementById("iframeContainer");

        // Adicione o código HTML ao elemento de contêiner
        var columnsDiv = document.createElement("div");
        columnsDiv.className = "columns";
        var columnDiv = document.createElement("div");
        columnDiv.className = "column";
        var button = document.createElement("button");
        button.className = "btn botao";
        button.type = "button";
        button.textContent = "Sair";

                // Adicione o evento de clique ao botão para redirecionar para index.html
        button.addEventListener("click", function() {
            window.location.href = "index.html";
        });

        columnDiv.appendChild(button);
        columnsDiv.appendChild(columnDiv);
        container.appendChild(columnsDiv);


    }if(totalScore() >=8){
        var score_info = "Parabéns! Você tirou uma excelente nota!";

        // Remove os elementos com a classe "columns"
        var columnsElements = document.getElementsByClassName("columns");
        while (columnsElements.length > 0) {
        columnsElements[0].parentNode.removeChild(columnsElements[0]);
        }

        // Adicione o link para index.html à navbar-brand
        var navbarBrand = document.querySelector(".navbar-brand");
        navbarBrand.href = "index.html";

         // Adicione o iframe ao elemento de contêiner na página
        var iframe = document.createElement("iframe");
        var container = document.getElementById("iframeContainer");

        // Adicione o código HTML ao elemento de contêiner
        var columnsDiv = document.createElement("div");
        columnsDiv.className = "columns";
        var columnDiv = document.createElement("div");
        columnDiv.className = "column";
        var button = document.createElement("button");
        button.className = "btn botao";
        button.type = "button";
        button.textContent = "Sair";

        // Adicione o evento de clique ao botão para redirecionar para index.html
        button.addEventListener("click", function() {
            window.location.href = "index.html";
        });

        columnDiv.appendChild(button);
        columnsDiv.appendChild(columnDiv);
        container.appendChild(columnsDiv);

            }

    return score_info;
}

var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');

function nextQuestion(question_number){
    var current_question_number = question_number - 1;
    var question_number = question_number.toString();
    var current_question_number = current_question_number.toString();

    var el = document.getElementById('question-'+question_number);
    var el2 = document.getElementById('question-'+current_question_number);

    el.style.display = "block";
    el2.style.display = "none";
}

submit1.addEventListener('click', function(){
    nextQuestion(2);
    growProgressBar('40%');
})
submit2.addEventListener('click', function(){
    nextQuestion(3);
    growProgressBar('60%');
})
submit3.addEventListener('click', function(){
    nextQuestion(4);
    growProgressBar('80%');
})
submit4.addEventListener('click', function(){
    nextQuestion(5);
    growProgressBar('100%');
})
submit5.addEventListener('click', function(){
    nextQuestion(6);
})

submit5.addEventListener('click', function(){
    document.getElementById("printtotalscore").innerHTML = totalScore();
    document.getElementById("printscoreinfo").innerHTML = getInfoBasedOnScore();
})

function growProgressBar(percentage_width){
    var bar = document.getElementById("progress_bar");
    bar.style.width = percentage_width;
}