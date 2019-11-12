First and foremost, I want to thank the Carroll Bradford team for allowing me to do this challenge. It's an honor to be given this opportunity to showcase what I can this. This is my notes section where I am writing my process in making this web app. Here I will be listing my step by step process and also including some of the problems I faced and how I was able to overcome them (HINT: Google!!) but for the most part it was fun building this and I hope you all enjoy. 

# MY PROCESS:

1. I started out by reading what was given to me and how I am going to approach the project. I tend to do a lot of brainstorming here, so sometimes I do sketches or think about how I will approach the project. This phase was about an hour-hour half to really think about how I will do this.

2.I asked Mr. Suarez if it was possible to approach the data fetching a bit differently, simply because my PHP skills are not there yet. I figured I can still comeplete the project and approach it a different way (Figured I could get a pass just this once to showcase what I can do ). Was given the green light.

3. I started out by using "vue create" and picked out my default presets (had to include "no-console: 0" to allow me to use console.log for debugging purposes).

4. Downloaded all the dependencies that I would need for the project which included: 
    - Axios: For my data fetching purposes.
    -Bootstrap: Use it for its easy to use UI features and layout system and for the Navbar.
    -Vue-Toasted: To show a pop up message incase the client forget to select a type. 
    - Sass: For styling purposes.
    -Vue-Router: Routing purposes!

5. Started making my own JSON file that would represent the mock data that I would be using and manipulating later. File: "construction.json"

6. Started with my first component "App.vue" and started to style the body and make sure everything was intact to proceed with my other components. Proceed on with my then component called "Main" --> (Later separated things to different components just for readability and because I thought it looks nicer that way.) My "Main" would have my search and my project listings. Like I said, that was going to be too much code for one component so I decided to split them.

7. Made the Search Component with ease and styled it. On to the fun part: the data.

8. Here with the data it was a bit tricky because I had to structure the JSON a couple of times but finally decided on the final look. Used Axios to fetch the data and used the try catch way to fetch my data and catch and potential errors. I used the "v-for" directive to iterate over all the projects and made sure to use the Bootstrap Card component to list out all the projects. Great! Now that all my projects are listed, I wasnt pleased with the look. I figured having a router would help out and so I decided to implement that as well. Seperating the two components. 

9. Started putting in the logic for the search in order to redirect the user to the appropriate project type. 

10. Started to create the add form to add a project (using a method) and also a delete button to delete the last project. 

11. Implemented the styling using SASS and was able to make it look clean and professionally. I wanted this to look very pleasing to the user. 