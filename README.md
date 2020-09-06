Milestone Project 2

# Match the Pairs

This website is my second project after the culmination of studying the fundamentals of JavaScript and interactive frontend development including jQuery. 

The website can be found at [Match the Pairs](https://jonwil91.github.io/milestone-2/).

## UX

This website was developed in order to allow the user to play a classic game of matching the pairs. I selected a Pokemon theme as the images for my cards, as it allowed me to have images on the front and back of the cards that were linked and it is a nostalgic theme for many.

[Link to images folder to view wireframe initial sketch](https://github.com/JonWil91/Match-the-Pairs/tree/master/assets/images)

The final design of the website follows the original sketches made at the start of the development process. It was evident that the design worked well for desktop, and the sidebar feature layout had to be amended approriately for mobile and tablet users.

## User stories:

As a user I would expect to click the Start Game button and the game to then begin.

As a user I would expect if a pair of cards did not match they would return to being face down.

As a user I would expect if a pair of cards matched then they would remain face up.

As a user I would expect some form of indication that I had won the game.

## Features

The layout for the single page for the website is responsive to mobile, tablet and desktop users to ensure the most enjoyable experience.

### Sidebar:

The sidebar has a title image of the popular Pokemon series, this was not created by myself and was taken from google; the source will be referenced at the bottom of the readMe file. Below this title is a box which contains a brief explanation of the goal of the game, giving instruction on how to play. Once the user has clicked the Start Game option a timer would then begin until they finish the game. Below this button is also a refresh button if the user wishes to start the game again at any point during play. The refresh button and timer were originally in the game body, upon review the layout worked better with them in the sidebar box.

### Game body:

The game body consists of 16 cards, these are spread evenly across the page with the Pokeball image on the back facing side, and a number of Pokemon images on the other side which are revealed when clicked. When clicking cards to find pairs it is only possible for two cards to be selected in turn, if these cards are a pair they remain turned over, if not the card is turned back around. When the final pair is matched a victory div covers the screen, stating the time taken to complete the game and the option to click to restart the game.

### Additional features to be implemented:

* I would like to add audio to the page to play the well known Pokemon theme tune, there would be an option to mute this audio.
* I would like to add the option to select three different difficulties to vary the game.
* There is currently a bug which allows users to select both cards with a double click which needs to be debugged, the game functions appropriately with a single click however.
* I would like to add a flip animation to the cards.

## Technologies Used

1. HTML
2. CSS
3. JavaScript
4. GitPod was the IDE used in the development of building this website.
5. Bootstrap4 was used to aid the development process in the layout and responsiveness of the website.
6. jQuery framework was used in conjunction with Bootstrap4 to refer to JavaScript technologies used to improve the efficiency of the website.
7. Google Fonts
8. Font Awesome

## Deployment

The website was developed using the GitPod IDE, a new repository was created using the Code Institute reccomended template for GitPod. From GitPod it was possible to make commits and push changes onto GitHub.

1. Log into Github.
2. Select Milestone2-ii from JonWil91 repository
3. Select the settings option from the top right
4. Sroll down to GitHub pages, and select master branch as Source
5. Upon giving GitHub a few moments to complete the task, the website was refreshed and it was possible to select the live link for the website under GitHub Pages.

## Testing

Responsive Design:

* The website is employs mobile first design and allows users to view content as efficiently as possible via different viewing devices. For both mobile and tablet users, the sidebar feature is set on top of the game body. For desktop users the sidebar appears at the side of the game body.

The HTML and CSS code has been run through validators, and any errors found have been dealt with.

The website was tested against the user stories to ensure that the features acted as would be expected.

The website has currently been tested across multiple mobile and tablet devices, and the following browsers:

* Safari
* Chrome
* Firefox
* Microsoft Edge

## Credits

### Content:

* The text on this site was written by the developer, with the exceception of the image title which is referenced below.

### Media 

The Pokemon images used for the website were taken from the following sources:

[Pokemon title image](https://www.google.com/search?q=pokemon+gotta+catch+em+all&sxsrf=ALeKk01d1_xrUgeuLxLiM7so3a66BTIasw:1582470050248&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi_vNmp-OfnAhVOiFwKHTzNDRIQ_AUoAXoECBcQAw&biw=1440&bih=718#imgrc=HyxGgDw1ZesBcM )

[Pokemon images](http://pngimg.com/imgs/fantasy/pokemon/)

[Pokeball image](https://www.google.com/search?q=pokeball&sxsrf=ALeKk010K1nkhsVJGvwKqvHjgnW1WmaCMw:1582470334894&source=lnms&tbm=isch&sa=X&ved=2ahUKEwik9rax-efnAhVlmVwKHS5hAbAQ_AUoAXoECAwQAw&biw=1440&bih=718#imgrc=DFif-MzWVi8IWM)

### Code

* The code for the shuffle function to randomise the cards was taken from this [StackOverflow](//https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
) post.
* The code for the onlyUnique function used to check if a card was a match was taken from this [StackOverflow](//https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates) post.
* The code for the victory function with pop up div was inspired by a youtube tutorial by [Web Dev Simplied and PortEXE](https://www.youtube.com/watch?v=3uuQ3g92oPQ). The overlay-text and overlay-text.visible CSS classes were also copied from this source.

### Acknowledgements

A special thanks goes to:

* My Code Institute mentor Ali Ashik for his time and support in explaining specific and broad concepts.
* The Code Institute support team for consistent positive support.
* Brother in law Tom, and colleagues Kieran and Ross for their patience and support in improving my JavaScript and Git knowledge.

### Disclaimer:

The content of this website is for educational purposes only.
