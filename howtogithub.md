# Functional-programming

## Project + Git init shit
Om project goed op te zeeten en goed te pushen naar GitHub volg deze stappen;

1. `npm init`
  - project + package.json initialiseren
2. `git init` in bash
3. **LEGE** repo aanmaken op GitHub
  - dus zonder README.md en zonder license
      - want dan krijg je de stappen te zien.
4. `git add .`
  - om alle files toe te voegen
5. `git status`
  - om te checken wat er klaar staat om te committen
6. `git commit -m "bericht"`
  - om te committen met een message
7. `git remote add origin https://github.com/GITHUB-NAAM/REPOSITORY-NAAM.git`
  - om vast te stellen waar je het naar moet pushen
8. `git push -u origin master`
  - om te pushen naar de master
9. Vervolgens doe je telkens weer `git add .`, `git status` en `git commit -m "..."` en `git push` om te pushen

<!-- ## Day 1: Monday
Today we got introduced to the API. First we tried connecting to the API.

## Day 2: Tuesday
API beter begrijpen. Bruikbaarder maken.
5 onderzoeksvragen bedenken.
- In welke tijd van het jaar worden de meeste boeken uitgebracht?
-
- Worden er tegenwoordig meer of minder boeken geschreven dan 50/60 jaar geleden?
-
-

## Day 3: Wednesday


## Day 4: Thursday
Onderzoeksrichting:
Vergelijken In de ban van de Ring (dutch) / Lord of the rings (english) J.R.R Tolkien met Harry Potter (dutch) / Harry Potter (english) J.K. Rowling gemiddeld aantal pagina's per taal

Tolkien Nederlands
stap 1: zoeken op Tolkien (dutch)
stap 2: post string "In de ban van de ring" (dutch)
stap 3: post string "De hobbit" (dutch)
stap 4: check minste aantal pagina's
stap 5: check meeste aantal pagina's
stap 6: check gemiddeld aantal pagina's

Tolkien Engels
stap 1: zoeken op Tolkien (english)
stap 2: post string "Lord of the rings" (english)
stap 3: post sting "The Hobbit" (english)
stap 4: check minste aantal pagina's
stap 5: check meeste aantal pagina's
stap 6: check gemiddeld aantal pagina's

Tolkien gemiddelde vergelijken
stap 1: neem het gemiddelde van nederlande serie
stap 2: neem het gemiddelde van engelse serie
stap 3: vergelijk de 2 met elkaar
stap 4: antwoord!

Rowling Nederlands
stap 1: zoeken op JKRowling (dutch)
stap 2: post string "Harry Potter" (dutch)
stap 3: check minste aantal pagina's
stap 4: check meeste aantal pagina's
stap 5: check gemiddeld aantal pagina's

Rowling Engels
stap 1: zoeken op JKRowling (english)
stap 2: post string "Harry Potter" (english)
stap 3: check minste aantal pagina's
stap 4: check meeste aantal pagina's
stap 5: check gemiddeld aantal pagina's

Rowling gemiddelde vergelijken
stap 1: neem het gemiddelde van nederlande serie
stap 2: neem het gemiddelde van engelse serie
stap 3: vergelijk de 2 met elkaar
stap 4: antwoord!

Laatste stappen
stap 1: Vergelijk het gemiddeld aantal pagina's van lord of the rings met harry Potter
stap 2: antwoord!

- Eerst zoek ik op de schrijver.
- Vervolgens reduce is deze resultaten tot de nodige verhalen-serie (lord of the rings en harry potter).
- Eerst in het nederlands, vervolgens in het engels.
- Vervolgens kijk ik naar het (gemiddeld) aantal pagina's.
- Noteer de uiterste (minste en meeste) en bereken daaruit het gemiddelde.
- Omdat het aantal boeken per serie niet uitkomt (Lord of the rings + de hobbit = 4 boeken, Harry potter = 7 boeken) ben ik benieuwd naar het gemiddelde aantal pagina's per serie.
  - Lord of the rings boeken zijn namelijk heel dik

Ik hoop er achter te komen dat de engelse boeken serie van harry potter een hoger gemiddeld aantal pagina's heeft dan de nederlandse serie, het zelfde geldt voor de lord of the rings serie

Ook hoop ik er achter te komen dat de harry potter serie een hoger gemiddeld aantal pagina's heeft dan de lord of the rings serie

## Day 5: Friday

### Results
Hier een overzicht van de resultaten voor de zoekopdrachten per auteur.

"author:J.R.R. Tolkien" -->
