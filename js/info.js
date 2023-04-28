document.addEventListener('DOMContentLoaded', function() {
    var clicks =0;
    document.getElementById("extendButton").addEventListener("click", () => {
        clicks++;
        document.querySelector(".wrapper").classList.toggle("extendWrapper");
        document.querySelector(".nav").classList.toggle("extendedNav");
        if(clicks>1) {
            document.querySelector(".wrapper").classList.toggle("reverse-extendWrapper");
            document.querySelector(".nav").classList.toggle("reverse-extendedNav");
        }

    })
    document.getElementById("historyButton").addEventListener("click", () => {

    })
    document.addEventListener("click", (e) => {
        console.log(e.target.id)
        if(e.target && e.target.id == "historyButton") {
            document.getElementById("content").innerHTML = '\
            <p>Język C++ powstał w latach 80. XX wieku jako rozszerzenie języka C, który był wówczas jednym z najpopularniejszych języków programowania. Bjarne Stroustrup, duński informatyk, jest uznawany za głównego twórcę języka C++. Pracując w Bell Labs, Stroustrup zauważył, że wiele zadań programistycznych wymaga wykorzystania technik programowania obiektowego, które nie były dostępne w języku C.</p>\
            <p>Stroustrup postanowił rozszerzyć język C o mechanizmy programowania obiektowego, aby stworzyć bardziej wydajne i elastyczne narzędzie. W rezultacie powstał język C++, który pozwalał programistom korzystać zarówno z tradycyjnych struktur proceduralnych, jak i z nowych mechanizmów programowania obiektowego, takich jak dziedziczenie, polimorfizm czy enkapsulacja.</p>\
            \
            <p>Pierwsza oficjalna specyfikacja języka C++ została opublikowana w 1985 roku. Język ten szybko zdobył popularność wśród programistów, ponieważ pozwalał na tworzenie bardziej złożonych i skalowalnych programów. W kolejnych latach język C++ ewoluował, dodając nowe funkcje i poprawiając wydajność.</p>\
            \
            <p>Dzięki swojej elastyczności i wydajności, C++ znalazł szerokie zastosowanie w różnych dziedzinach. Język ten jest często wykorzystywany do projektowania gier komputerowych, tworzenia systemów operacyjnych, tworzenia aplikacji sieciowych, budowy baz danych, programowania mikrokontrolerów, robotyki i wielu innych obszarów.</p>\
            \
            <p>Obecnie C++ jest jednym z najpopularniejszych języków programowania na świecie. Jego wszechstronność i wydajność sprawiają, że jest często wybierany przez programistów, którzy szukają narzędzia do tworzenia efektywnych i skalowalnych rozwiązań.</p>\
            ';
        } else if(e.target && e.target.id == "controversionsButton") {
            document.getElementById("content").innerHTML = '\
            <p>\
            Język C++ nie jest pozbawiony kontrowersji. Oto niektóre z głównych kwestii, które są często omawiane:\
            </p>\
            <p>\
            1. Złożoność i trudność: C++ jest językiem o rozbudowanej składni i wielu zaawansowanych mechanizmach. Niektórzy programiści uważają, że nauka i zrozumienie wszystkich aspektów języka może być trudne i czasochłonne.\
            </p>\
            <p>\
            2. Bezpieczeństwo i zarządzanie pamięcią: Język C++ daje programistom dużą swobodę w zarządzaniu pamięcią, ale jednocześnie wiąże się to z większą odpowiedzialnością za unikanie błędów, takich jak wycieki pamięci czy dostęp do nieprawidłowych obszarów pamięci.\
            </p>\
            <p>\
            3. Skomplikowane reguły: C++ posiada wiele zaawansowanych funkcji, takich jak szablony, dziedziczenie wielokrotne czy wyjątki, które wymagają od programistów ścisłego przestrzegania skomplikowanych reguł i konwencji. To może prowadzić do trudności w utrzymaniu i rozwoju dużych projektów.\
            </p>\
            <p>\
            4. Brak wstecznej kompatybilności: C++ jest językiem, który ewoluował na przestrzeni lat, co spowodowało pewne zmiany w jego składni i zachowaniu. To może stwarzać problemy dla programistów, którzy muszą utrzymywać starsze projekty w nowych wersjach języka.\
            </p>\
            ';
        } else if(e.target && e.target.id == "howTostart") {
            document.getElementById("content").innerHTML = '\
            <p>\
            rozpoczęcie pracy z językiem c++ jest bardzo łatwe i nie wymaga dużo czasu.\
            za to możemy dziękować microsoftowi.\
            </p>\
            <p>\
            instalacja c++ jest bardzo prosta.\
            wystarczy wejść na stronę: https://visualstudio.microsoft.com/pl/vs/features/cplusplus/\
            i pobrać visual studio.\
            </p>\
            <p>\
            po zainstalowaniu visual studio z pakietem c++ możemy zacząć pisać nasze pierwsze programy.\
            </p>\
            '
        } else if(e.target && e.target.id == "basicsOfCpp") {
            document.getElementById("content").innerHTML = '\
            <p>\
            Po otworzeniu visual studio możemy stowrzyć nowy projekt.\
            W tym celu klikamy na "utwórz nowy projekt" i wybieramy "konsolowy program c++".\
            </p>\
            <p>\
            Po utworzeniu projektu możemy zacząć pisać nasz pierwszy program.\
            </p>\
            <p>\
            by zacząć musimy napisać:\
            </p>\
            <p>\
            #include <iostream>\
            int main()\
            {\
            }\
            #include <iostream> - jest to biblioteka, która pozwala nam na korzystanie z funkcji cout i cin.\
            int main() - jest to funkcja, która jest wykonywana jako pierwsza.\
            wiele poradników poleca używanie "using namespace std;"\
            jednak jest to niebezpieczne i nie powinno się tego robić.\
            </p>\
            by stworzyć nową zmieną musimy napisać:\
            <p>\
            int a = 5;\
            tworzy to zmienną a typu int czyli liczba całkowita, o nazwie a i przypisuje jej wartość 5.\
            jest wiele typów zmiennej podstawowe to:\
            int - liczba całkowita\
            float - liczba zmiennoprzecinkowa\
            double - liczba zmiennoprzecinkowa o podwójnej precyzji\
            char - pojedynczy znak\
            string - ciąg znaków, jednak przy deklarowany string trzeba użyć std::string\
            bool - wartość logiczna true/false\
            </p>\
            <p>\
            aby wyświetlić tekst na ekranie musimy napisać:\
            std::cout << "tekst" << std::endl;\
            std::endl - jest to znak nowej linii\
            </p>\
            natomiast aby pobrać dane od użytkownika musimy napisać:\
            std::cin >> a;\
            użytkownik wpisuje dane które są przypisywane do zmiennej a.\
            </p>\
            z tą wiedzią możemy napisać prosty program\
            <p>\
            #include <iostream>\
            int main()\
            {</br>\
            int a;\
            int b;\
            std::cout << "podaj pierwszą liczbę: ";</br>\
            std::cin >> a;\
            std::cout << "podaj drugą liczbę: ";</br>\
            std::cin >> b;</br>\
            std::cout << "suma: " << a + b << std::endl;</br>\
            }\
            </p>\
            ten program pobiera od użytkownika dwie liczby i wyświetla ich sumę.\
            </p>\
            można zauważyć że do dodawania liczb używamy operatora +. \
            jest wiele operatorów:</br>\
            + - dodawanie</br>\
            - - odejmowanie</br>\
            * - mnożenie</br>\
            / - dzielenie</br>\
            % - reszta z dzielenia</br>\
            == - porównanie jeśli się zgadza</br>\
            != - porównanie ale jeśli się nie zgadza</br>\
            > - większe</br>\
            < - mniejsze</br>\
            >= - większe lub równe</br>\
            <= - mniejsze lub równe</br>\
            </p>\
            '
        }
    })
    
});