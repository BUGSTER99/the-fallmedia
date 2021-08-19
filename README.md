# The Fallmedia
Program Name: The Fallmedia

Written in: JavaScript

Version: 1.0

What is this app?
Simply put, The Fallmedia is a mini social media application where user can login, register, and share what's happening on their life.

===

A simple social media application utilizing React, Socket io, Next.js, Node.js/Express.js, and MongoDb.
This app was finished thanks to this course: https://www.udemy.com/course/mernstack-nextjs-withsocketio/
It was a very important warmup on developing MERN (MongoDB, Express, React, Node) stack in my internship program at Synapsis.id.

The stack works like this:
1. React is the main frontend tool on this project, ~90% of this app is designed with react and the rest is made by normal JS
2. Express server was used to evaluate the app locally as well for bug finding and fixing, then the app is deployed on herokuapp
3. The Express.js itself is used for web framework that helps to implement functions like routing (by router class) that not only redirect the user to the intended webpage but also for handling error
4. Socket.io is used for "real-time" updates over new posts, notification, messages, and user online status**
5. All of the data that the user input is stored on MongoDB, and Cloudinary is used for image repository, in which the the app will call both id to show the correct image and user data on client
6. The cropping image functionality come from a package called react-cropper, user can zoom-in, change the aspect ratio of the crop, and then upload it when it fits their need

** There is a considerable delay between all the activity (posts, notification, messages, and user online status) in some cases, when a notif (like a like or comment) is given by a user, this app still needs user to refresh the page first, either by reloading the site or just changin tabs

===

How to use?
If you just want to use the web app, it is already deployed on herokuapp over this link: https://the-fallmedia.herokuapp.com/
1. If you haven't registered, then you need to signup an account
2. Input all the necessary data, note that other social links is optional
3. After login, you can post an image, status, comment, chats, and receive all kinds of notification, you can also search other users via the homepage's search button
4. The app uses JWT (Jason Web Token) that will keep you logged in for 2 days, when you open the app next time, you don't need to login anymore!

In case you want to download this repo and run the app locally instead:
1. Download the zip of this file
2. Extract it somewhere on your device
3. Make sure you already have node.js installed and working properly on your device
4. Open a terminal/command prompt then redirect it to your zip extraction folder
5. Initialize install on all the dependencies first, run "npm install" on you terminal
6. Once finished you can run "npm run dev" to start the Express server
7. If it succeeded, the local link will be on: http://localhost:3000

===

Limitation(s):

1. The upload media can only receive image-type, cannot receive any other file-type
2. My registration on sendGrid which should be used to provide password reset capability via email of this app was rejected, so unfortunately users cannot recover their account if they forgot their password
3. The notif "password must be atleast 6 characters" still show up even though the page is login screen, not signup
4. While the MongoDB database will get updated accordingly in real-time with updates of the web (say a user delete a post or comment, then the db will also delete said post or comment), the image is still stored in Cloudinary repo, which will eventually can make the repo full with unused image
