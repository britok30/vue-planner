First and foremost, I want to thank the Carroll Bradford team for allowing me to do this challenge. It's an honor to be given this opportunity to showcase what I can this. This is my notes section where I am writing my process in making this web app. Here I will be listing my step by step process and also including some of the problems I faced and how I was able to overcome them (HINT: Google!!) but for the most part, it was fun building this and I hope you all enjoy. 

# MY PROCESS:

1. I started out by reading what was given to me and how I am going to approach the project. I tend to do a lot of brainstorming here, so sometimes I do sketches or think about how I will approach the project. This phase was about an hour-hour half to really think about how I will do this.

2. I asked Mr. Suarez if it was possible to approach the data fetching a bit differently, simply because my PHP skills are not there yet. I figured I can still complete the project and approach it a different way (Figured I could get a pass just this once to showcase what I can do ). Was given the green light.

3. I started out by using "vue-create" and picked out my default presets (had to include "no-console: 0" to allow me to use console.log for debugging purposes).

4. Downloaded all the dependencies that I would need for the project which included: 
 - Axios: For my data fetching purposes.
 -Bootstrap: Used it for it's easy to use UI features and layout system and for the Navbar.
 -Vue-Toasted: To show a pop-up message in case the client forgets to select a type. 
 - Sass: For styling purposes.
 -Vue-Router: Routing purposes!

5. I started making my own JSON file that would represent the mock data that I would be using and manipulating later. File: "construction.json"

6. I started with my first component "App.vue" and started to style the body and make sure everything was intact to proceed with my other components. Proceed on with my then component called "Main" --> (Later separated things to different components just for readability and because I thought it looks nicer that way.) My "Main" would have my search and my project listings. As I said, that was going to be too much code for one component so I decided to split them.

7. Made the Search Component with ease and styled it. On to the fun part: the data.

8. With the data, it was a bit tricky because I had to structure the JSON a couple of times but finally decided on the final look. Used Axios to fetch the data and used the try-catch way to fetch my data and catch and potential errors. I used the "v-for" directive to iterate over all the projects and made sure to use the Bootstrap Card component to list out all the projects. Great! Now that all my projects are listed, I wasn't pleased with the look. I figured having a router would help out and so I decided to implement that as well. Separating the two components. 

9. I started putting in the logic for the search in order to redirect the user to the appropriate project type. 

10. Started to create the add form to add a project (using a method) and also a delete button to delete the last project. 

11. Implemented the styling using SASS and was able to make it look clean and professional. I wanted this to look very pleasing to the user. Implemented a navbar component for looks. 



# PROBLEMS I FACED: 

1. Overall my major problem was obviously getting accustomed to Vue again. I believe Vue is super fun to work with and just wanted to be able to gain feel again for Vue. I spent most of my time learning along the way but implementing what I knew was crucial for me and that's why I felt comfortable despite not having used Vue in some time. Looking forward to using Vue more. 

2. Structure. Coming from a React background I had to get accustomed to the Vue structure with single-file components. It felt natural after a while because of how familiar I am with everything including (HTML, CSS, and the JS script formating for data).

3. Iterating the projects. I knew that v-for was the use case for this but I had to search where I needed to place it to get things going. Again, learn on the go.

4. The data. Obviously I took a different approach and I would do things differently. Just being able to display the data took some time but with some searching and from prior experiences, I was able to pick it up quickly with Vue. 

5. The Add/Delete methods. The delete method was simple because I simply had to ".pop()" the array. With add, it took some time to figure out that I had to change the state a bit, but with some experimenting and research, I was able to do it. 


# THINGS I WOULD CHANGE:

1. My approach with the data. Obviously with some time and learning, implementing a backend to store data information would make this app so much better. I would love to expand my knowledge and continue making this a better overall experience for any client using this. This is my form of thinking in terms of how I approach a project. I envision myself as if all the projects I make are real-world projects that my team and I are making for the company. I want to make sure the project works and is good to go. Definitely adding a backend for the data would be a huge step-up. 






THANK YOU CARROLL BRADFORD. HOPE TO HEAR BACK FROM YOU SOON! 