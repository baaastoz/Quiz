const questions = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
        answer: "Brasília"
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        options: ["Terra", "Marte", "Júpiter", "Saturno"],
        answer: "Júpiter"
    },
    {
        question: "Quem escreveu 'Dom Casmurro'?",
        options: ["Machado de Assis", "José de Alencar", "Jorge Amado", "Guimarães Rosa"],
        answer: "Machado de Assis"
    },

    {
        question: "Qual é a fórmula química da água?",
        options: ["H2O", "CO2", "O2", "NaCl"],
        answer: "H2O"
    },
    {
        question: "Qual é o elemento químico com o símbolo 'Au'?",
        options: ["Ouro", "Prata", "Cobre", "Platina"],
        answer: "Ouro"
    },
    {
        question: "Qual é o nome do continente onde se encontra o Egito?",
        options: ["África", "Ásia", "Europa", "América"],
        answer: "África"
    },
    {
        question: "Quem pintou a Mona Lisa?",
        options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "Qual é a maior cadeia de montanhas do mundo?",
        options: ["Andes", "Himalaia", "Rochosas", "Alpes"],
        answer: "Himalaia"
    },
    {
        question: "Quem foi o primeiro homem a pisar na Lua?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
        answer: "Neil Armstrong"
    },
    {
        question: "Qual é a língua mais falada no mundo?",
        options: ["Inglês", "Mandarim", "Espanhol", "Árabe"],
        answer: "Mandarim"
    },
    {
        question: "Qual é a capital da França?",
        options: ["Paris", "Londres", "Berlim", "Madri"],
        answer: "Paris"
    },
    {
        question: "Qual é o maior oceano do planeta?",
        options: ["Atlântico", "Índico", "Pacífico", "Ártico"],
        answer: "Pacífico"
    },
    {
        question: "Qual é o número atômico do carbono?",
        options: ["6", "12", "14", "8"],
        answer: "6"
    },
    {
        question: "Quem escreveu 'A Divina Comédia'?",
        options: ["Dante Alighieri", "Virgílio", "Petrarca", "Boccaccio"],
        answer: "Dante Alighieri"
    },
    {
        question: "Qual é o maior animal terrestre?",
        options: ["Elefante", "Rinoceronte", "Girafa", "Hipopótamo"],
        answer: "Elefante"
    },
    {
        question: "Qual é a capital do Japão?",
        options: ["Tóquio", "Osaka", "Kyoto", "Hiroshima"],
        answer: "Tóquio"
    },
    {
        question: "Qual é o planeta conhecido como o 'Planeta Vermelho'?",
        options: ["Marte", "Vênus", "Mercúrio", "Urano"],
        answer: "Marte"
    },
    {
        question: "Qual é a moeda oficial dos Estados Unidos?",
        options: ["Dólar", "Euro", "Yen", "Libra"],
        answer: "Dólar"
    },
    {
        question: "Quem é o autor de 'O Pequeno Príncipe'?",
        options: ["Antoine de Saint-Exupéry", "J.K. Rowling", "Charles Dickens", "Herman Melville"],
        answer: "Antoine de Saint-Exupéry"
    },
    {
        question: "Qual é o nome da famosa torre localizada em Paris?",
        options: ["Torre Eiffel", "Torre de Pisa", "Torre de Londres", "Torre de Belém"],
        answer: "Torre Eiffel"
    },
    {
        question: "Qual é o maior deserto do mundo?",
        options: ["Saara", "Gobi", "Kalahari", "Antártida"],
        answer: "Antártida"
    },
    {
        question: "Qual é a fórmula química do sal de cozinha?",
        options: ["NaCl", "KCl", "MgCl2", "CaCl2"],
        answer: "NaCl"
    },
    {
        question: "Qual é o nome da famosa obra de William Shakespeare que retrata a história de um príncipe dinamarquês?",
        options: ["Hamlet", "Macbeth", "Romeu e Julieta", "Otelo"],
        answer: "Hamlet"
    },
    {
        question: "Qual é a capital da Itália?",
        options: ["Roma", "Milão", "Nápoles", "Turim"],
        answer: "Roma"
    },
    {
        question: "Qual é a principal fonte de energia do Sol?",
        options: ["Fusão nuclear", "Fissão nuclear", "Combustão química", "Reação eletroquímica"],
        answer: "Fusão nuclear"
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        options: ["Júpiter", "Saturno", "Urano", "Netuno"],
        answer: "Júpiter"
    },
    {
        question: "Qual é o nome do famoso físico que formulou a teoria da relatividade?",
        options: ["Albert Einstein", "Isaac Newton", "Niels Bohr", "Galileo Galilei"],
        answer: "Albert Einstein"
    },
    {
        question: "Quem foi o primeiro presidente dos Estados Unidos?",
        options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        answer: "George Washington"
    },
    {
        question: "Qual é o país conhecido como a Terra do Sol Nascente?",
        options: ["Japão", "China", "Coreia do Sul", "Tailândia"],
        answer: "Japão"
    },
    {
        question: "Qual é o autor do livro '1984'?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Margaret Atwood"],
        answer: "George Orwell"
    },
    {
        question: "Qual é a principal causa do aquecimento global?",
        options: ["Emissões de gases de efeito estufa", "Desmatamento", "Poluição dos oceanos", "Uso de pesticidas"],
        answer: "Emissões de gases de efeito estufa"
    },
    {
        question: "Qual é o maior lago do mundo em volume de água?",
        options: ["Lago Baikal", "Lago Superior", "Lago Vitória", "Lago Ontario"],
        answer: "Lago Baikal"
    },
    {
        question: "Qual é o nome da famosa obra de arte de Michelangelo localizada na Capela Sistina?",
        options: ["A Criação de Adão", "O Juízo Final", "A Última Ceia", "A Primavera"],
        answer: "A Criação de Adão"
    },
    {
        question: "Qual é o nome da peça de teatro escrita por William Shakespeare sobre um rei escocês?",
        options: ["Macbeth", "Hamlet", "Otelo", "Rei Lear"],
        answer: "Macbeth"
    },
    {
        question: "Qual é o nome da maior floresta tropical do mundo?",
        options: ["Amazônia", "Congo", "Sumatra", "Daintree"],
        answer: "Amazônia"
    },
    {
        question: "Quem foi o explorador que chegou à América em 1492?",
        options: ["Cristóvão Colombo", "Vasco da Gama", "Fernão de Magalhães", "Pedro Álvares Cabral"],
        answer: "Cristóvão Colombo"
    },
    {
        question: "Qual é o nome do satélite natural da Terra?",
        options: ["Lua", "Marte", "Júpiter", "Sol"],
        answer: "Lua"
    },
    {
        question: "Qual é o nome do planeta conhecido por seus anéis?",
        options: ["Saturno", "Netuno", "Urano", "Marte"],
        answer: "Saturno"
    },
    {
        question: "Quem escreveu 'O Senhor dos Anéis'?",
        options: ["J.R.R. Tolkien", "J.K. Rowling", "C.S. Lewis", "George R.R. Martin"],
        answer: "J.R.R. Tolkien"
    },
    {
        question: "Qual é o símbolo químico para o oxigênio?",
        options: ["O", "O2", "Ox", "O3"],
        answer: "O"
    },
    {
        question: "Qual é o nome da estrela mais próxima da Terra?",
        options: ["Sol", "Proxima Centauri", "Sirius", "Alpha Centauri"],
        answer: "Sol"
    },
    {
        question: "Qual é o país mais populoso do mundo?",
        options: ["China", "Índia", "Estados Unidos", "Indonésia"],
        answer: "China"
    },
    {
        question: "Qual é o maior oceano da Terra?",
        options: ["Pacífico", "Atlântico", "Índico", "Ártico"],
        answer: "Pacífico"
    },
    {
        question: "Qual é o nome do maior mamífero marinho?",
        options: ["Baleia Azul", "Orca", "Baleia Jubarte", "Delfim"],
        answer: "Baleia Azul"
    },
    {
        question: "Quem foi o líder do movimento pelos direitos civis nos Estados Unidos na década de 1960?",
        options: ["Martin Luther King Jr.", "Malcolm X", "Rosa Parks", "Nelson Mandela"],
        answer: "Martin Luther King Jr."
    },
    {
        question: "Qual é o nome do órgão que bombeia sangue no corpo humano?",
        options: ["Coração", "Pulmão", "Fígado", "Rim"],
        answer: "Coração"
    },
    {
        question: "Qual é o elemento químico com o símbolo 'Fe'?",
        options: ["Ferro", "Flúor", "Fósforo", "Neônio"],
        answer: "Ferro"
    },
    {
        question: "Qual é o maior continente do mundo em termos de área?",
        options: ["Ásia", "América do Norte", "África", "Antártida"],
        answer: "Ásia"
    },
    {
        question: "Quem foi o primeiro imperador romano?",
        options: ["Augusto", "Júlio César", "Nero", "Constantino"],
        answer: "Augusto"
    },
    {
        question: "Qual é o nome da mais famosa biblioteca da antiguidade?",
        options: ["Biblioteca de Alexandria", "Biblioteca do Vaticano", "Biblioteca Nacional", "Biblioteca Britânica"],
        answer: "Biblioteca de Alexandria"
    },
    {
        question: "Qual é a capital da Austrália?",
        options: ["Camberra", "Sydney", "Melbourne", "Brisbane"],
        answer: "Camberra"
    },
    {
        question: "Qual é o nome do famoso complexo de templos no Egito construído como túmulo para Ramsés II?",
        options: ["Abu Simbel", "Luxor", "Karnak", "Saqqara"],
        answer: "Abu Simbel"
    },
    {
        question: "Qual é a capital da Alemanha?",
        options: ["Berlim", "Munique", "Hamburgo", "Colônia"],
        answer: "Berlim"
    },
    {
        question: "Qual é o nome do autor de 'Harry Potter'?",
        options: ["J.K. Rowling", "C.S. Lewis", "J.R.R. Tolkien", "Suzanne Collins"],
        answer: "J.K. Rowling"
    },
    {
        question: "Qual é o nome da teoria científica que explica a origem do universo?",
        options: ["Teoria do Big Bang", "Teoria da Relatividade", "Teoria da Evolução", "Teoria da Gravidade"],
        answer: "Teoria do Big Bang"
    },
    {
        question: "Qual é o nome do famoso cientista que formulou as leis do movimento e da gravidade?",
        options: ["Isaac Newton", "Galileo Galilei", "Nikola Tesla", "Albert Einstein"],
        answer: "Isaac Newton"
    },
    {
        question: "Qual é o nome da peça de teatro escrita por Shakespeare sobre um príncipe dinamarquês?",
        options: ["Hamlet", "Otelo", "Macbeth", "Rei Lear"],
        answer: "Hamlet"
    },
    {
        question: "Qual é o nome do maior continente em termos de população?",
        options: ["Ásia", "África", "América do Norte", "Europa"],
        answer: "Ásia"
    },
    {
        question: "Qual é o nome da primeira mulher a ganhar um Prêmio Nobel?",
        options: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Lise Meitner"],
        answer: "Marie Curie"
    },
    {
        question: "Qual é o nome do maior animal terrestre?",
        options: ["Elefante", "Girafa", "Hipopótamo", "Rinoceronte"],
        answer: "Elefante"
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        options: ["Júpiter", "Saturno", "Urano", "Netuno"],
        answer: "Júpiter"
    },
    {
        question: "Qual é a unidade básica de informação em computação?",
        options: ["Bit", "Byte", "Megabyte", "Gigabyte"],
        answer: "Bit"
    },
    {
        question: "Qual é a capital do Canadá?",
        options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
        answer: "Ottawa"
    },
    {
        question: "Quem é o autor de 'O Hobbit'?",
        options: ["J.R.R. Tolkien", "C.S. Lewis", "J.K. Rowling", "George R.R. Martin"],
        answer: "J.R.R. Tolkien"
    },
    {
        question: "Qual é o nome do mais famoso artista do Renascimento italiano, conhecido por sua pintura e escultura?",
        options: ["Leonardo da Vinci", "Michelangelo", "Rafael", "Donatello"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "Qual é o nome da teoria científica que explica a origem e evolução das espécies?",
        options: ["Teoria da Evolução", "Teoria da Relatividade", "Teoria do Big Bang", "Teoria da Gravidade"],
        answer: "Teoria da Evolução"
    },
    {
        question: "Qual é o nome do maior sistema de rios do mundo?",
        options: ["Rio Amazonas", "Rio Nilo", "Rio Yangtze", "Rio Mississippi"],
        answer: "Rio Amazonas"
    }

];

const correctsound = document.getElementById('correct-sound')
const incorrectsound = document.getElementById('incorrect-sound')

let currentQuestionIndex = 0;
let score = 0;

function showModal() {
    const modal = document.getElementById('modal');
    const questionElement = document.getElementById('modal-question');
    const optionsElement = document.getElementById('modal-options');
    const nextButton = document.getElementById('next-question');
    const feedbackElement = document.getElementById('feedback');

    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach(option => {
        const label = document.createElement('label');
        label.classList.add('option');

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'option';
        input.value = option;

        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        optionsElement.appendChild(label);
    });

    feedbackElement.textContent = ''; // Limpa o feedback anterior
    feedbackElement.classList.remove('correct', 'incorrect');
    modal.style.display = 'block';

    nextButton.onclick = () => {
        const selectedOption = document.querySelector('input[name="option"]:checked');
        if (selectedOption) {
            if (selectedOption.value === question.answer) {
                feedbackElement.textContent = 'Resposta correta!';
                feedbackElement.classList.add('correct');
                score++;
                correctsound.play();
            } else {
                feedbackElement.textContent = 'Resposta incorreta. A resposta correta é: ' + question.answer;
                feedbackElement.classList.add('incorrect');
                incorrectsound.play();

            }

            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                setTimeout(showModal, 2000); // Exibe a próxima pergunta após 2 segundos
            } else {
                document.getElementById('result').textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
                document.getElementById('result').classList.add(score === questions.length ? 'correct' : 'incorrect');
                modal.style.display = 'none';
                document.getElementById('start').style.display = 'block';
            }
        }
    };
}

document.getElementById('start').addEventListener('click', () => {
    document.getElementById('start').style.display = 'none';
    showModal();
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

window.onclick = (event) => {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
};