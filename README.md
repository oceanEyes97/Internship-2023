# Internship-2023
This is repository is for internship code review and it is not ment to be used in any other way.

This project was built using React,TalwindCSS,JSON-Server,and React-Router.

#Project setup

Tools that are needed is Node.js installed for the node package manager and an IDE,preferable VS Code.
After installing the tools,open the project in VS Code and open a new terminal (CTRL+SHIFT+`) 
and enter the command npm install to install the nodue moddules
and all the dependacies that are in package.json.
*NOTE* pleace make sure that you opened the project right,in the terminal the last path should say /my-project.
If not simply enter cd my-project in the terminal.

#Project structure

The data folder contains the JSON data called data.json that the application is working with.
Nodue modules contain all the dependacies that are requred for the application to run.
Public folder contains only one html file index.html.
React injects all the content here.
Src folder contains all the source code.
Components contain all the react componets.
Images contain two icons that are used in react components.
index.js is our root of the application where react injects content into index.html.
RouterConst.jsx contains our routes.
*Note*
Since this project is done with TailwindCSS,at the top of the index.css file is :
@tailwind base;
@tailwind components;
@tailwind utilities;



![image](https://user-images.githubusercontent.com/127392785/224554190-53314c00-e2fe-4fbd-a013-45cce1e4511a.png)


#Project start up
To start the application first open a terminal (CTRL+SHIFT+`) 
(make sure that the last path in the terminal says /my-project)
and run the compand npx json-server --watch data/data.json --port 8000
to start the JSON server on port 8000.
Open a new terminal,make sure that the last path in the terminal says /my-project
an then run the comand npm run start, to start the application.

#Audditional feature

This project could have been done with out React-Router,but in purpouse for keeping the application
as a SPA(Single Page Application) ,better user navigation and code managment i have implemented it here.


![image](https://user-images.githubusercontent.com/127392785/224556314-a8400b5f-014f-42ed-9729-2987a1e049ce.png)

#This is the look of the Web Application

