# Functional programming

## Table of contents

- [Installation](## Installation)
- [Introduction](## Introduction)    
  - [Questions and hypothesis](### Questions and hypothesis)  
- [Process](## Process)
    - [First try](### First try)
    - [Iterations](### Iterations)    
    - [Conclusion](### Conclusion)       
- [Data](## Data)    
  - [API](## API)    
  - [Code](## Code)   
- [Todo](## Todo)
- [Credits](## Credits)
  - [Resources](### Resources)
- [License](## License)     

## Installation



## Introduction

During this project we learned how to work with an API. For this project we used the API of the public library of Amsterdam (`OBA`). We learned how to connect to the API and get data. The first week was dedicated to doing research. Formulate questions and collect data. The second week was dedicated to learning how to work with `D3`. This language is used for creating datavisualisations.

#### Questions

I picked `question 5`.

Here I describe every question and explained why I didn't pick that one:

<details><summary>**1. What day of the week most people come to the library to lend books?**</summary>    

  ```
  This question could not be answered because we did not have access to this type of data due to privacy of users/customers
  ```

</details>

<details><summary>**2. What time of year do the most books get published?**</summary>    

  ```
  I must say I didn't really try to answer this question because this meant getting publish-data of every book in the OBA -which is almost impossible-. Instead of changing the question and adding some type of genre or something, I went on with another question.
  ```

</details>

<details><summary>**3. Do writers nowadays write more or less books than 50/60 years ago?**</summary>    

  ```
The reason I didn't proceed with this question is because I found it kind of hard to find this data. The OBA API contains all kinds of data, but not much about the author. For this question I should collect author data of modern book and older (50/60 year old) books. Then find out how many books were written by those writers. This is kind of hard -and not that interesting to me-.
  ```

</details>

<details><summary>**4. Is there a connection to genres and the length of the titles?**</summary>    


  This question I tried to answer for a day or something. I thought it would be fun to do something with genres and titles and this was one of the first things that I thought of. First I wanted to compare titles and summaries and maybe do something with the total pages too. After a while I noticed it didn't really get my any further. And this wasn't really interesting to me either...



</details>   

<details><summary>**5. What is the connection of the average number of pages of the Harry Potter- and Lord of the Rings book series?**</summary>    

  This time I thought of something that would interest me. I thought of books I liked and books I used to read when I was little. Soon I thought of Harry Potter. I read the whole series, in english too. Lord of the Rings is somewhat similar to Harry Potter. Wouldn't it be fun to compare the two? JK Rowling always interested me, so did JRR Tolkien. Eventually that is what I did; I compared the Harry Potter series by Rowling to Lord of the Rings and The Hobbit, by Tolkien.


</details>

####  Hypothesis

...

Vergelijken In de ban van de Ring (dutch) / Lord of the rings (english) J.R.R Tolkien met Harry Potter (dutch) / Harry Potter (english) J.K. Rowling gemiddeld aantal pagina's per taal.

Ik hoop er achter te komen dat de Engelse boeken serie van Harry Potter een hoger gemiddeld aantal pagina's heeft dan de Nederlandse serie, het zelfde geldt voor de Lord of the Rings serie.

Ook hoop ik er achter te komen dat de Harry Potter serie een hoger gemiddeld aantal pagina's heeft dan de Lord of the Rings serie.

Ik ben ook benieuwd hoeveel procent de Harry Potter serie uitmaakt van Rowling haar collectie in de OBA. Dit zelfde geldt voor de Lord of the Rings serie van Tolkien.

## Process

...

Over eerste poging, overstap naar chelseas ding en overige dingen waar ik naar heb gekeken

### First try

...

Ik heb om te beginnen veel hulp van Folkert-Jan vd Pol, Daniel vd Velde en Dennis Wegereef gehad. Zij hebben elk onderdelen geleverd die ik heb gebruikt in mijn datavisualisatie. Zo hebben Dennis en Folkert een API gebouwd die ik heb gebruikt. Ook heb ik veel met hen aan mijn code gezeten en functies geschreven. Daniel heeft ons vooral aan het begin goed geholpen. De eerste dagen van het project heeft hij de hele API uitgepluist.

Voor mijn uiteindelijke datavisualisatie heb ik deze [Lynda tutorial](https://www.lynda.com/D3-js-tutorials/Creating-meaninful-color-scales/594451/619567-4.html?srchtrk=index%3a3%0alinktypeid%3a2%0aq%3ad3%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2) gekeken.

Dit ging best wel goed, totdat ik erachter kwam dat mijn data niet goed ingeladen werd. Op advies van Titus stapte ik over op een ander voorbeeld.

### Iterations

During this project I tried collecting data in a few different ways. One of the first is shown here;

Here I tried collection all the books written by JK Rowling and JRR Tolkien.  

```js
axios.all([
  obaApi.getAll("search", {
       facet: "type(book)&facet=language(dut)",
       q: "author:J.K. Rowling",
       librarian: true,
       refine: true
     }),
  obaApi.getAll("search", {
      facet: "type(book)&facet=language(dut)",
      q: "author:J.R.R. Tolkien",
      librarian: true,
      refine: true
    })
])
```

## Data

...

### API

We all started with [Rijk's API](www.blabla.nl). Soon some students created a new API connection. I was using Folkert's code at first, but switched to Gijs his API. I chose this one because I wanted to be be able to collect all the books at once, instead of collecting 20 books a page. This piece of code is from my `index.js` file and shows how I require and connect to the API using the `PUBLIC key` for authorization.

```js
const gissaApi = require("./oba-api-gissa.js")

const obaApi = new gissaApi({
  public: process.env.PUBLIC
})
```

### Code

`axios.all([...])` -> function to combine all the `.get` requests. Puts them together. This creates 2 data objects with all the books. At first I thought this would help me out, but


`This is how you took up something in the API`
```js
obaApi.getAll("search", {
  facet: "type(book)&facet=language(dut)",
  q: "author:J.R.R. Tolkien",
  librarian: true,
  refine: true
})
```

### Conclusion

...

Ik ben met Chelsea, Linda en Jessy gaan zitten. Zij kwamen met .

Hier heb ik mijn uiteindelijke datavisualisatie uit gemaakt.

Achteraf ben ik wel blij en trots met wat ik geleerd heb. Ookal ben ik nogsteeds niet tevreden over mijn eindoplevering. Ik hoop dit voor de herkansing te kunnen verbeteren.

## To do

- [x] Write (english) README.md
- [ ] Update `table-of-contents`
- [ ] Fix bugs in data, filter and fix mistakes
- [x] Get Dutch `JRR Tolkien` & `JK Rowling` data
- [ ] Get English `JRR Tolkien` & `JK Rowling` data
- [ ] Get both (`JK Rowling`, `JRR Tolkien`) data at the same time
- [x] Push data to JSON file
- [ ] Compare series (`Harry Potter`, `Lord of the Rings`, `De Hobbit`) by calculating average page number
- [x] Create D3 datavisualisation, `bar chart`
- [ ] `Bar chart` 2 ways; 1 way for each writer. Horizontal bars, vertical yAxis

## Credits

Titus Wormer [@wooorm](https://github.com/wooorm)    
`API` van Folkert-Jan vd Pol [@FJvdP](https://github.com/FJvdPol/functional-programming/blob/master/api/oba-api.js)    
`API` van Gijs Laarman [@gijslaarman](https://github.com/gijslaarman/functional-programming/blob/master/modules/oba-api/index.js)   
`README.md` van Daniel vd Velde [@danielvandevelde](https://github.com/DanielvandeVelde/functional-programming/blob/master/README.md)

### Resources

* [Lynda tutorial](https://www.lynda.com/D3-js-tutorials/Creating-meaninful-color-scales/594451/619567-4.html?srchtrk=index%3a3%0alinktypeid%3a2%0aq%3ad3%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2)
* [Uiteindlijke voorbeeld van Chelsea & Linda](https://bl.ocks.org/bricedev/0d95074b6d83a77dc3ad)

## License
