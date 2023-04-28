let questionIndex = null
function randInt(min,max) {
    min = Math.ceil(min)
    max=Math.floor(max)
    return Math.floor(Math.random()*(max-min+1)) + min
}
document.addEventListener("DOMContentLoaded", () => {
    var questions =
    [
        ["Jakie są zalety języka C++?", true, "A: Szybkość i wydajność</br>B: łatwa składnia"],
        ["Czym charakteryzuje się dziedziczenie wielokrotne w C++?", true, "A: Klasa może dziedziczyć od wielu klas</br>B: Klasa może mieć tylko jedno dziedziczenie"],
        ["Jakie są podstawowe typy danych w języku C++?", true, "A: int, float, char</br>B: string, boolean, double"],
        ["Jakie są różnice między językiem C a C++?", true, "A: C++ wprowadza programowanie obiektowe</br>B: C++ ma bardziej ograniczoną składnię"],
        ["Co to jest przestrzeń nazw (namespace) w C++?", true, "A: Mechanizm grupowania identyfikatorów</br>B: Sposób na zabezpieczenie danych przed dostępem z zewnątrz"],
        ["Co to jest szablon (template) w języku C++?", true, "A: Ogólny wzorzec do tworzenia funkcji lub klas</br>B: Specjalny typ danych dla przechowywania wielu wartości"],
        ["Czym różnią się referencja i wskaźnik w C++?", true, "A: Referencja jest aliasem dla istniejącej zmiennej</br>B: Wskaźnik przechowuje adres pamięci"],
        ["Jaki jest składniowy operator przypisania w C++?", true, "A: =</br>B: :="],
        ["Jak zainicjalizować tablicę w C++?", true, "A: Przy użyciu nawiasów klamrowych</br>B: Poprzez przypisanie wartości do każdego indeksu osobno"],
    ]
    var generateButton = document.getElementById("generate")
    var content = document.getElementById("content")
    var answearedQuestions=[]

    function generateQuestion() {
        if(answearedQuestions.length == questions.length) {
            content.innerHTML = "Wszystkie pytania zostały już wylosowane"
            document.getElementById("generate").remove()
        }else{
            questionIndex=randInt(0,questions.length-1)
            while(answearedQuestions.includes(questionIndex)) {
                questionIndex=randInt(0,questions.length-1)
            }
            content.innerHTML = questions[questionIndex][0].concat('</br>'.concat(questions[questionIndex][2].concat('</br>\
            <button id="answearTrue">A</button>\
            <button id="answearFalse">B</button>\
            ')))
        }
    }
    generateButton.addEventListener("click", () => {
        generateQuestion();
    })
    document.addEventListener("click", (e) => {
        if(e.target && e.target.id == "answearTrue") {
            if(questions[questionIndex][1] == true) {
                answearedQuestions.push(questionIndex)
                alert("Dobrze")
            } else {
                alert("Źle")
            }
            generateQuestion();
        }
        if(e.target && e.target.id == "answearFalse") {
            if(questions[questionIndex][1] == false) {
                alert("Dobrze")
                answearedQuestions.push(questionIndex)
            } else {
                alert("Źle")
            }
            generateQuestion();
        }
    })
})