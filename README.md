# Chat OPT
A chat client for Other People Talking

A learning environment created with credit to [@blackgirlbytes](https://github.com/blackgirlbytes) via their [article](https://dev.to/github/how-to-run-a-frontend-workshop-in-codespaces-2ede)

## Goals of this repo

- Provide a foundation for students to create a chat interface with a friend / teammate / arch-nemesis
- Provide basic understanding of core concepts of web development
- Start to touch on systems architecture and more complex concepts

## High Level Syllabus 

- Lesson 0: Get the environment up and running and start with a basic [http-server](https://www.npmjs.com/package/http-server) to preview changes 
  - run `npm run dev` to get an http server up and running
  - get initial git setup running
  - fork the repo
  - `git push origin` once changes committed
- Lesson 1: Build a web interface using HTML and the power of forms 
  - build a simple form that submits via `GET` and displays the text values in the URL
- Lesson 2: Style it to be user friendly via CSS
  - make the form user-friendly, get design consistency and a usable layout 
  - set up and style a chat history panel
- Lesson 3: Make it interactive with other implementations by leveraging Javascript
  - disable button and form submission if no message entered
  - give UX guidance if user is trying to send an empty message
  - avoid HTML form submission
  - if new message is valid, append message to chat history container
- Lesson 4: Using concepts such as databases and sockets to get things running at scale
  - set up network connectivity to a server/service (local or remote)
  - enable authentication to prevent unauthorized access
  - enable end-to-end communication

