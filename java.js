function rozwijaj ()
            {
                document.getElementById ("p1").innerHTML = "Obecnie pracuję w firmie, w której jest mi dobrze, ale to za mało.... Patrzę do przodu. Uczęszczam na kurs zawodowy, na którym uczę się pracy z bazą danych. Poza tym znam Excela na poziomie dobrym"
            }
            console.log(window.scrollY)

            function changeColor() {
                
                if ( window.scrollY <500 ) {
                    document.body.className = 'w'
                } else if ( window.scrollY < 800 ) {
                    document.body.className = 'c'
                } else if (window.scrollY < 1500 ) {
                    document.body.className = 'p'
                } else if (window.scrollY < 3000 ) {
                    document.body.className = 'y'
                }
            
            }

            document.getElementById("p2").style.color = "black";

            