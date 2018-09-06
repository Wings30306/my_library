# My Library

Data Visualisation Project for the second Milestone project of Code Institute's Full-Stack Development Bootcamp. 

I had actually been intending to get something similar to this done for a while now, though the original plan involved static charts in Excel (which I never got around to). 

I have *so many* books! The data used here only comprises my "active collection", so to speak, the ones I like to re-read so keep handy in my study. Even just that portion alone is over 200 books! 

It's been very interesting to find out exactly how the languages and genres stack up. 
 
## UX
 
With this many books to choose from, it's no wonder that sometimes it's hard to pick just one. For that reason, I really wanted to use this website to make it easier on myself by using the charts to cut down the selection according to what I'm currently in the mood for: which language, which genre, whether I want to read a series or not.

I did create some [wireframes](wireframes/original-version) but on screen the layout didn't look as nice as I thought it would. I've since changed it, added an extra chart and the table at the bottom instead of the search buttons as a more practical alternative.

## Features
 
### Existing Features

The main features of this site are the different charts: 
- Authors: a bar chart listing the number of books per author
- Genre: a pie chart showing the different genres in my library
- Series vs Standalone: a bar chart comparing total number of books that are part of a series to the total number of books that are stand-alones. Included in this is also a number display showing the actual total number of series present.
- Protagonist's Gender: a pie chart detailing the main characters' gender: male, female, multiple (for books written from alternating points of view and collections of short stories) and none (for books without a main character).
- Languages: Dutch and English. Dutch is my native language, but does it show in my collection?
- Selected books: a table which lists the books selected in the other charts.

### Features Left to Implement

What I would really love to add in future is a search option that picks a random book by selecting genre, gender etc instead of having to select it from the filtered table. 

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [HTML](https://en.wikipedia.org/wiki/HyperText_Markup_Language) for rendering the page
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) for personal touches to lay-out
- [Bootstrap](https://getbootstrap.com/) for the grid, which makes the page mobile friendly, insofar as the non-responsive charts allow.
- [Bootswatch](https://bootswatch.com/) for the theme. I chose [Sketchy](https://bootswatch.com/sketchy/) for the hand-written yet still legible look.
- [JSON](https://www.json.org/) for the data structure, at the recommendation of Moosa Hassan.
- for rendering the charts:
  1. [D3](https://d3js.org/)
  1. [JQuery](http://jquery.com/)
  1. [Popper](https://popper.js.org/)
  1. [Crossfilter](http://square.github.io/crossfilter/)
  1. [DC](https://dc-js.github.io/dc.js/)
  1. [Queue](https://github.com/d3/d3-queue)
- And of course the main requirement for this project: [JavaScript](https://www.javascript.com/) for getting the actual data into the charts



## Testing

I've run the code through the [html-validator](https://validator.w3.org/). No problems were shown.

---

I also checked the CSS through the [css-validator](http://jigsaw.w3.org/css-validator/). This showed several warnings and errors, mainly in the linked files for bootstrap, bootswatch and such. For my own CSS-file, it showed the following warnings:

![alt text][warnings]

[warnings]: testing/w3c_css_validation_warnings.png "CSS Warnings"

However, I decided to leave these in because they are necessary in older browsers and the extra tags don't appear to be causing any harm in the newer ones that don't require them. 

---

In terms of Javascript, there wasn't that much to test as I mostly made use of the existing d3 and dc libraries and the graphs and table rendering was test enough. 

However, I did notice the table has an out-of-place line at the top in Google Chrome. Other browsers do sort the datatable properly, and I've been reliably informed this is a known issue in Chrome. 

## Deployment

This project was deployed via Github pages.

## Credits

### Acknowledgements

- Many thanks to my fellow student [Simen Daehlin](https://github.com/Eventyret) for the reminder/tip about overflow to keep this site as responsive as possible in spite of the non-responsiveness of the dc charts.
- Nakita McCool of the Code Institute Tutor team, THANKS A MILLION for the help with getting that datatable sorted.
- [Mr. Data Converter](https://shancarter.github.io/mr-data-converter/) has been a very helpful tool in converting an Excel file to usable JSON data format. 
- Bootswatch's lovely theme Sketchy supplied the typography. 