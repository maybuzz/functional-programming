# Functional-programming

## Introduction

Ik ben nog lang niet klaar en heb het dan ook opgegeven om te proberen om het af te krijgen. Ik was niet tevreden met mijn datavisualisatie. Ook niet met de mate waarin dit (niet) aansluit met mijn onderzoek -dat ook nog niet af was-.

## Credits

Ik heb om te beginnen veel hulp van Folkert-Jan vd Pol, Daniel vd Velde en Dennis Wegereef gehad. Zij hebben elk onderdelen geleverd die ik heb gebruikt in mijn datavisualisatie. Zo hebben Dennis en Folkert een API gebouwd die ik heb gebruikt. Ook heb ik veel met hen aan mijn code gezeten en functies geschreven. Daniel heeft ons vooral aan het begin goed geholpen. De eerste dagen van het project heeft hij de hele API uitgepluist.

Voor mijn uiteindelijke datavisualisatie heb ik deze [Lynda tutorial](https://www.lynda.com/D3-js-tutorials/Creating-meaninful-color-scales/594451/619567-4.html?srchtrk=index%3a3%0alinktypeid%3a2%0aq%3ad3%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2) gekeken.

Dit ging best wel goed, totdat ik erachter kwam dat mijn data niet goed ingeladen werd. Op advies van Titus stapte ik over op een ander voorbeeld.

Ik ben met Chelsea, Linda en Jessy gaan zitten. Zij kwamen met [een nieuw voorbeeld](https://bl.ocks.org/bricedev/0d95074b6d83a77dc3ad).

Hier heb ik mijn uiteindelijke datavisualisatie uit gemaakt.

Achteraf ben ik wel blij en trots met wat ik geleerd heb. Ookal ben ik nogsteeds niet tevreden over mijn eindoplevering. Ik hoop dit voor de herkansing te kunnen verbeteren.

## Table of contents
[1. Onderzoeksvragen](#onderzoeksvragen)<br>
[2. Onderzoeksrichting](#onderzoeksrichting)<br>
[3. Stappen-stappen-plan](#stappen-stappen-plan)<br>
[4. Results](#results)<br>

## TODO
Tolkien "foute data" omzetten naar goeie (2 dl. blabla en [104])

#### J.R.R. Tolkien Engels
  stap 1: zoeken op Tolkien (english)    
  stap 2: post string "Lord of the rings" (english)    
  stap 3: post sting "The Hobbit" (english)    
  stap 4: check minste aantal pagina's    
  stap 5: check meeste aantal pagina's    
  stap 6: check gemiddeld aantal pagina's     

#### J.R.R. Tolkien gemiddelde vergelijken
  stap 1: neem het gemiddelde van nederlande serie      
  stap 2: neem het gemiddelde van engelse serie     
  stap 3: vergelijk de 2 met elkaar     
  stap 4: antwoord!

## Onderzoeksvragen
- In welke tijd van het jaar worden de meeste boeken uitgebracht?
- Worden er tegenwoordig meer of minder boeken geschreven dan 50/60 jaar geleden?
- Is er een verband tussen genres en de lengte van de titels?
- Wat is het verband tussen het gemiddeld aantal pagina's van de Harry Potter- en Lord of the Rings serie?

### Onderzoeksrichting
Vergelijken In de ban van de Ring (dutch) / Lord of the rings (english) J.R.R Tolkien met Harry Potter (dutch) / Harry Potter (english) J.K. Rowling gemiddeld aantal pagina's per taal.

Ik hoop er achter te komen dat de Engelse boeken serie van Harry Potter een hoger gemiddeld aantal pagina's heeft dan de Nederlandse serie, het zelfde geldt voor de Lord of the Rings serie.

Ook hoop ik er achter te komen dat de Harry Potter serie een hoger gemiddeld aantal pagina's heeft dan de Lord of the Rings serie.

Ik ben ook benieuwd hoeveel procent de Harry Potter serie uitmaakt van Rowling haar collectie in de OBA. Dit zelfde geldt voor de Lord of the Rings serie van Tolkien.

## Stappen-stappen-plan
Ik heb voor mezelf eerst alles opgedeeld in algemene stappen. Vervolgens ben ik deze een voor een aan gaan pakken. De code is te vinden in Results.


#### J.R.R. Tolkien
  **stap 1:** zoeken op Tolkien    
  **stap 2:** post string "In de ban van de ring"  
  **stap 3:** post string "De hobbit"   
  **stap 4:** check minste aantal pagina's   
  **stap 5:** check meeste aantal pagina's   
  **stap 6:** check gemiddeld aantal pagina's

#### J.K. Rowling
**stap 1:** zoeken op J.K. Rowling   
 **stap 2:** post string "Harry Potter"   
 **stap 3:** check minste aantal pagina's     
 **stap 4:** check meeste aantal pagina's     
 **stap 5:** check gemiddeld aantal pagina's       

#### Laatste stappen
  **stap 1:** Vergelijk het gemiddeld aantal pagina's van lord of the rings met harry Potter    
  **stap 2:** antwoord!    

---   

### Data
Hier een overzicht van de resultaten voor de zoekopdrachten per auteur.

#### "In de ban van de ring" & "De Hobbit", door J.R.R. Tolkien (dutch)

```js
facet:"language(dut)",
q:"author:J.R.R. Tolkien" // = 29 resultaten
```
[Resultaten voor "J.R.R. Tolkien" (dutch)](https://zoeken.oba.nl/api/v1/search/?authorization=1e19898c87464e239192c8bfe422f280&facet=type%28book%29&facet=language%28dut%29&librarian=true&q=author%3AJ.R.R.%20Tolkien&refine=true)

```js
facet:"language(dut)",
q:"title:In de ban van de ring" // = 22 resultaten
```
[Resultaten voor "In de ban van de Ring" (dutch)](https://zoeken.oba.nl/api/v1/search/?authorization=1e19898c87464e239192c8bfe422f280&facet=type%28book%29&facet=language%28dut%29&librarian=true&q=title%3AIn%20de%20ban%20van%20de%20ring&refine=true)

```js
facet:"language(dut)",
q:"title:De hobbit" // =  24 resultaten
```
[Resultaten voor "De Hobbit" (dutch)](https://zoeken.oba.nl/api/v1/search/?authorization=1e19898c87464e239192c8bfe422f280&facet=type%28book%29&facet=language%28dut%29&librarian=true&q=title%3ADe%20hobbit&refine=true)


####  "Lord of the rings" & "The Hobbit", by J.R.R. Tolkien (english)

```js
facet:"language(eng)",
q:"author:J.R.R. Tolkien" // = 37 resultaten
```
[Resultaten voor "J.R.R. Tolkien" (english)](https://zoeken.oba.nl/api/v1/search/?authorization=1e19898c87464e239192c8bfe422f280&facet=type%28book%29&facet=language%28eng%29&librarian=true&q=author%3AJ.R.R.%20Tolkien&refine=true)

```js
facet:"language(eng)",
q:"title:Lord of the rings" // =  12 resultaten
```
[Resultaten voor "Lord of the Rings" (english)](https://zoeken.oba.nl/api/v1/search/?authorization=1e19898c87464e239192c8bfe422f280&facet=type%28book%29&facet=language%28eng%29&librarian=true&q=title%3ALord%20of%20the%20rings&refine=true)

```js
facet:"language(eng)",
q:"title:The hobbit" // =  6 resultaten
```
[Resultaten voor "The Hobbit" (english)](https://zoeken.oba.nl/api/v1/search/?authorization=1e19898c87464e239192c8bfe422f280&facet=type%28book%29&facet=language%28eng%29&librarian=true&q=title%3AThe%20hobbit&refine=true)

---

####  "Harry Potter", door J.K. Rowling (dutch)

```js
facet:"language(dut)",
q:"auteur:J.K. Rowling" // = 19 resultaten
```
[Resultaten voor "J.K. Rowling" (dutch)](https://zoeken.oba.nl/api/v1/search/?authorization=1e19898c87464e239192c8bfe422f280&facet=type%28book%29&facet=language%28dut%29&librarian=true&q=author%3AJ.K.%20Rowling&refine=true)

```js
facet:"language(dut)",
q:"title: Harry Potter" // = 27 resultaten
```
[Resultaten voor "Harry Potter" (dutch)](https://zoeken.oba.nl/api/v1/search/?authorization=1e19898c87464e239192c8bfe422f280&facet=type%28book%29&facet=language%28dut%29&librarian=true&q=title%3AHarry%20Potter&refine=true)


#### "Harry Potter", by J.K. Rowling (english)

```js
facet:"language(eng)",
q:"author:J.K. Rowling" // =  25 resultaten
```
[Resultaten voor "J.K. Rowling" (english)](https://zoeken.oba.nl/api/v1/search/?authorization=1e19898c87464e239192c8bfe422f280&facet=type%28book%29&facet=language%28eng%29&librarian=true&q=author%3AJ.K.%20Rowling&refine=true)

```js
facet:"language(eng)",
q:"title: Harry Potter" // =  21 resultaten
```
[Resultaten voor "Harry Potter" (english)](https://zoeken.oba.nl/api/v1/search/?authorization=1e19898c87464e239192c8bfe422f280&facet=type%28book%29&facet=language%28eng%29&librarian=true&q=title%3AHarry%20Potter&refine=true)
