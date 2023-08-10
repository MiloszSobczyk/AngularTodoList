# Domain Model: Task Manager
## Description
Task manager is a program to manage your tasks allowing you to add new ones, edit them and change their status. It has integration with API, that allows you to resume your work on other device after finishing it.

## User stories
- I want to add new tasks
- I want to change tasks status
- I want to archive tasks
- I want to edit tasks
- I want to be able to resume my work after I close the application
- I want to be able to resume my work in different place

## Model
### Task
- title: String
- description: String
- status: enum ('Incomplete', 'Complete', 'Archived')
- _id: String (generated by Express Api)
- _v: number (generated by Express Api)

## Used technologies
### Frontend:
- Angular
- TypeScript
- HTML
- CSS
### Backend:
- Node.js with Express framework
- MongoDB database
