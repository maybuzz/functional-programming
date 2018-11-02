# Functional-programming

## Onderzoeksvragen
- In welke tijd van het jaar worden de meeste boeken uitgebracht?
- Worden er tegenwoordig meer of minder boeken geschreven dan 50/60 jaar geleden?
- Is er een verband tussen genres en de lengte van de titels?
-

### Onderzoeksrichting
Vergelijken In de ban van de Ring (dutch) / Lord of the rings (english) J.R.R Tolkien met Harry Potter (dutch) / Harry Potter (english) J.K. Rowling gemiddeld aantal pagina's per taal.

Ik ben benieuwd hoeveel procent de Harry Potter serie uitmaakt van Rowling haar collectie in de OBA. Dit zelfde geldt voor de Lord of the Rings serie van Tolkien.

## Stappen-stappen-plan
Ik heb voor mezelf eerst alles opgedeeld in algemene stappen. Vervolgens ben ik deze een voor een aan gaan pakken. De code is te vinden in Results.

<details><summary>Stap 1: J.R.R. Tolkien Nederlands</summary>
 ```
  stap 1: zoeken op Tolkien (dutch)   
  stap 2: post string "In de ban van de ring" (dutch)   
  stap 3: post string "De hobbit" (dutch)   
  stap 4: check minste aantal pagina's   
  stap 5: check meeste aantal pagina's   
  stap 6: check gemiddeld aantal pagina's
 ``
</details>

<details><summary>Stap 2: J.R.R. Tolkien Engels</summary>
  stap 1: zoeken op Tolkien (english)    
  stap 2: post string "Lord of the rings" (english)    
  stap 3: post sting "The Hobbit" (english)    
  stap 4: check minste aantal pagina's    
  stap 5: check meeste aantal pagina's    
  stap 6: check gemiddeld aantal pagina's     
</details>

<details><summary>Stap 3: J.R.R. Tolkien gemiddelde vergelijken</summary>
 stap 1: neem het gemiddelde van nederlande serie      
 stap 2: neem het gemiddelde van engelse serie     
 stap 3: vergelijk de 2 met elkaar     
 stap 4: antwoord!     
</details>

<details><summary>Stap 4: J.K. Rowling Nederlands</summary>
stap 1: zoeken op J.K. Rowling (dutch)     
 stap 2: post string "Harry Potter" (dutch)     
 stap 3: check minste aantal pagina's     
 stap 4: check meeste aantal pagina's     
 stap 5: check gemiddeld aantal pagina's     
</details>

<details><summary>Stap 5: J.K. Rowling Engels</summary>
 stap 1: zoeken op JKRowling (english)     
 stap 2: post string "Harry Potter" (english)     
 stap 3: check minste aantal pagina's     
 stap 4: check meeste aantal pagina's     
 stap 5: check gemiddeld aantal pagina's     
</details>

<details><summary>Stap 6: J.K. Rowling gemiddelde vergelijken</summary>
 stap 1: neem het gemiddelde van nederlande serie     
 stap 2: neem het gemiddelde van engelse serie     
 stap 3: vergelijk de 2 met elkaar     
 stap 4: antwoord!    
</details>

<details><summary>Stap 7: Laatste stappen</summary>
  stap 1: Vergelijk het gemiddeld aantal pagina's van lord of the rings met harry Potter    
  stap 2: antwoord!    
</details>

---   

### Results
Hier een overzicht van de resultaten voor de zoekopdrachten per auteur.

#### In de ban van de ring, door J.R.R. Tolkien (dutch)

```js
facet:"language(dut)",
q:"author:J.R.R. Tolkien" // = 29 resultaten
```
https://zoeken.oba.nl/api/v1/search/?authorization=1e19898c87464e239192c8bfe422f280&facet=type%28book%29&facet=language%28dut%29&librarian=true&q=author%3AJ.R.R.%20Tolkien&refine=true

```js
facet:"language(dut)",
q:"title:In de ban van de ring" // = 22 resultaten
```
https://zoeken.oba.nl/api/v1/search/?authorization=1e19898c87464e239192c8bfe422f280&facet=type%28book%29&facet=language%28dut%29&librarian=true&q=title%3AIn%20de%20ban%20van%20de%20ring&refine=true

####  Lord of the rings, by J.R.R. Tolkien (english)

```js
facet:"language(eng)",
q:"author:J.R.R. Tolkien" // = 37 resultaten
```
https://zoeken.oba.nl/api/v1/search/?authorization=1e19898c87464e239192c8bfe422f280&facet=type%28book%29&facet=language%28eng%29&librarian=true&q=author%3AJ.R.R.%20Tolkien&refine=true

```js
facet:"language(eng)",
q:"title:Lord of the rings" // =  12 resultaten
```
https://zoeken.oba.nl/api/v1/search/?authorization=1e19898c87464e239192c8bfe422f280&facet=type%28book%29&facet=language%28eng%29&librarian=true&q=title%3ALord%20of%20the%20rings&refine=true

#### De Hobbit, door J.R.R. Tolkien (dutch & english)
```js
facet:"language(dut)",
q:"title:De hobbit" // =  24 resultaten
```
https://zoeken.oba.nl/api/v1/search/?authorization=1e19898c87464e239192c8bfe422f280&facet=type%28book%29&facet=language%28dut%29&librarian=true&q=title%3ADe%20hobbit&refine=true

```js
facet:"language(eng)",
q:"title:The hobbit" // =  6 resultaten
```
https://zoeken.oba.nl/api/v1/search/?authorization=1e19898c87464e239192c8bfe422f280&facet=type%28book%29&facet=language%28eng%29&librarian=true&q=title%3AThe%20hobbit&refine=true

####  Harry Potter, door J.K. Rowling (dutch)

```js
facet:"language(dut)",
q:"auteur:J.K. Rowling" // = 19 resultaten
```
https://zoeken.oba.nl/api/v1/search/?authorization=1e19898c87464e239192c8bfe422f280&facet=type%28book%29&facet=language%28dut%29&librarian=true&q=author%3AJ.K.%20Rowling&refine=true

```js
facet:"language(dut)",
q:"title: Harry Potter" // = 27 resultaten
```
https://zoeken.oba.nl/api/v1/search/?authorization=1e19898c87464e239192c8bfe422f280&facet=type%28book%29&facet=language%28dut%29&librarian=true&q=title%3AHarry%20Potter&refine=true

#### Harry Potter, by J.K. Rowling (english)

```js
facet:"language(eng)",
q:"author:J.K. Rowling" // =  25 resultaten
```
https://zoeken.oba.nl/api/v1/search/?authorization=1e19898c87464e239192c8bfe422f280&facet=type%28book%29&facet=language%28eng%29&librarian=true&q=author%3AJ.K.%20Rowling&refine=true

```js
facet:"language(eng)",
q:"title: Harry Potter" // =  21 resultaten
```
https://zoeken.oba.nl/api/v1/search/?authorization=1e19898c87464e239192c8bfe422f280&facet=type%28book%29&facet=language%28eng%29&librarian=true&q=title%3AHarry%20Potter&refine=true
