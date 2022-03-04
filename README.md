# Visitor barber

Project proposed by a friend who works as a home hairdresser and barber. The requirement is to be a website in the style of PedidosYa, Uber, Airbnb, etc. where service providers register and users can view their profiles. 

### Showcase

You can check the latest version at https://visitor-barber.vercel.app/

## Focus

First big project I face. Although in this repository I focused mainly on the front end, I tried to do it from scratch to reaffirm my knowledge in React.js and avoid using external front end modules (the only one used was the carousel).

## Concepts

The main concepts that I reaffirmed doing this project were the concept of composable component, the use of mapping for rendering, the determination of requirements, conditional rendering, the use of SASS variables and mixin, starting with responsive design, using redux as state manager and to link back and front end, etc.

## Main challenges I have faced

### Linking workers info with their user

When I had to create a user and then ask them if they also wanted to be a worker I've faced an interesting decision. Since I consider that the number of users was going to be considerably higher than the number of workers I decided to register both data in separate models, linked by their unique _id. Although models, controllers, routes, slices and other functions were almost similar, the fact of taking the _id of the already logged user made me test a lot of knowledge.


## Status

While it is not a completed project, I am not currently working on this repository. The reason is that I'm focusing on the backend part and then I will resume this repo.


### Stack

The stack used is React.js and SASS as CSS processor. 