# EZ Memes Solo Project
<!-- ABOUT THE PROJECT -->
## About The Project
This is the repo for [EZ Memes](https://github.com/justenanderson-commits/ezmemes), an app to chill and laugh for a few minutes...then get back to work!

https://user-images.githubusercontent.com/104015966/212783948-65e4d9a1-604b-44e7-9ea8-99aa673c8d82.mp4

## Abstract:
This application allows users to browse through a collection of memes provided by the Reddit API. A random meme is generated each time the home page loads. Users can then save those memes to their own collection (assuming only 1 user at this point in development). 

Link to [deployed app](https://ezmemes.vercel.app/)

## Installation Instructions:
1. Go to [this repo](https://github.com/justenanderson-commits/ezmemes) on Github
2. Click Fork > Create New Fork
3. Click Code
4. Copy the SSH url provided by GitHub
5. In the terminal, navigate to the new project repository
6. Type git clone and paste the URL
7. Run `cd ezmemes`
8. Run `npm install`. Note: Do not run `npm audit fix --force`. This will update to the latest version of packages, which are not wanted. 
9. Run `npm start` to start the program. (`Ctrl + C` will stop it.)
10. In a browser window, navigate to `http://localhost:3000/`.
11. The app should now ready to browse memes.  

## Context:
I followed a kanban workflow using Trello (for simplicity, since I was the only one working on the project). The total estimate is about 30 hours of work time invested over 5 days to create this application's functionality from scratch using React. The Cypress test suite was used for testing. Router provided the routing.
For accessability I chose large, basic font and neutral, high-contrast colors. 100% Lighthouse Accessibility score.

## Contributors:
- [Justen Anderson](https://github.com/justenanderson-commits)

## Learning Goals:
- Use the technology you’ve been working with over the course of the module to demonstrate mastery of the following:
-- React
-- Router
-- Asynchronous JavaScript
-- End to end testing with Cypress
- Create personas and user stories to describe your target audience.

- Work within constraints to deliver a product for your niche audience, which helps solve a problem unique to them.

- Your applications must have the following core functionality:
-- Display the data from the API in a way that applies directly to your audience
-- Ability for users to store/manipulate the data displayed in the application, such as favoriting or adding to a list, searching, commenting, etc
-- Multiple views handled by Router
-- Be deployed using Heroku, Surge, or any other similar service

## Tech Used:
- React
- Cypress
- Router
- GitHub
- Terminal
- VS Code
- Chrome Browser/Dev tools + React dev tools
- Zoom
- JavaScript
- Slack
- NPM Prop-Types
- Vercel
- Netlify
- Lighthouse

## Wins and Challenges
###Wins
- I definitely laughed a few times at the random memes that Reddit provides.

- I was able to complete the MVP despite some significant personal, non-coding challenges.  

###Challenges
- Cypress was quirky at best, and downright flaky at worst. It was laggy, crashed a few times, and tests failed intermittently. I had to restart Cypress to get tests to pass. Like Cypress just needed to reset for everything to work.

- Testing this application was very challenging because the home page displays a random meme, it's impossible to consistently test for that specific meme. Hence, some of the testing is set up to ensure that an image is loaded and visible, but doesn't test for that specific image.

 - It is possible to add duplicate memes to the My Memes page, but all will be deleted (because they have the same ID) if the delete button is clicked.

