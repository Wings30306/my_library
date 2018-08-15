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

- 


## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This project was deployed via Github pages.

## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- Many thanks to my fellow student Simen for the reminder/tip about overflow to keep this site as responsive as possible in spite of the non-responsiveness of the dc charts.
- Nakita McCool of the Code Institute Tutor team, THANKS A MILLION for the help with getting that datatable sorted.
- [Mr. Data Converter](https://shancarter.github.io/mr-data-converter/) has been a very helpful tool in converting an Excel file to usable JSON data format. 
- Bootswatch's lovely theme Sketchy supplied the typography. 