const quizData = [
    {
        question: 'Qual a linguagem de programação mais usada em 2022?',
        a:'JavaScript',
        b:'C++',
        c:'Python',
        d:'Java',
        correct:'a'
    }, 
    {
        question: 'Para acessarmos um elemento através de seu ID, usamos:',
        a:"getElementbyid('id_do_elemento');",
        b:"document.getelementbyid('id_do_elemento');",
        c:"document.getElementById('id_do_elemento');",
        d:"getElementById('id_do_elemento');",
        correct:'c'
    }, 
    {
        question: 'Qual definição de class  abaixo está correta?',
        a:'public class Carro { }',
        b:'class Carro ({ });',
        c:'class Carro { }',
        d:'class Carro [ ]',
        correct:'c'
    }, 
    {
        question: 'Para finalizar o loop atual e prosseguir para a próxima iteração, usamos:',
        a:'exit;',
        b:'break;',
        c:'sai agora!!!!',
        d:'continue;',
        correct:'d'
    }, 
    {
        question: 'Para obtermos o valor de um atributo de um elemento, usamos:',
        a:"getAttribute(element, 'atributo');",
        b:"element.getAttribute('atributo');",
        c:"element.get('atributo'); ",
        d:"elementGet('atributo'); ",
        correct:'b'
    }
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;  

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    // check resposta selecionada
    const answer = getSelected();

    // check resposta correta
    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        let txtSingPlural = "questão"  
        if(score > 1){txtSingPlural = "questões"}

       currentQuiz++;
       if (currentQuiz <quizData.length){
        loadQuiz();
       }else {
        quiz.innerHTML = `
        <h2>Parabéns! Você concluiu o Quiz JavaScript. Respondeu corretamente ${score}/${quizData.length} ${txtSingPlural}. </h2>
        
        <button onclick="location.reload()">Refazer o teste</button>
        `;
       }
    }
});

