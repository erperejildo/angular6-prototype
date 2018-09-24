# British Airways PoC

The objective of this PoC is to demostrate how to integrate new projects/components such Angular or React into AngularJS.

## Run projects

Enter in the different folders to read the documentation and have all of them running at the same time.

## Versions used

- AngularJS 1.5
- Angular 6
- React 16.4.1

----------

# Why Angular?

Angular is one of the biggest framework on the market and this makes Angular stable and professional but <i>With great power comes great responsibility</i>:
  - The learning curve is much bigger compare with other technologies like React in this case. The good point is that we will end up with a real framework on our hands
  - No reason to install 3rd party libraries or having problem with the offical documentation (or Stackoverflow)

## So what about if we can't upgrade?

It's understandble when we have a big project and we want to move everything to a newer technology face issues like this one.

Our approach here was create a totally separete new project (considering that we already had AngularJS working). Both of them running at the same time but linked each other.

If you check app.components out inside AngularJS project you will see that we are picking the style files up from the Angular one (this could be done in the other way around also).

On the same way we linked the menu options (app.component.html) to Angular. This would be replaced using some environment variables in order to use the real links when we compile the project.

## Angular 6 integration
  Google doesn't support Angular project integration to old AngularJS. They "force" you to upgrade to the new version (
<a href="https://angular.io/guide/upgrade" target="_blank">more info</a>).

There are
  <a href="https://stackoverflow.com/questions/41303831/angular2-component-in-angular1-app" target="_blank">some ways</a> to do this but you will find some problems anyway:</div>
<ul class="circles">
  <li>No official support</li>
  <li>Definetely not the easiest and cleanest approach (specially on big projects)</li>
  <li>Problem to get new devs into a project like that</li>
  <li>Development time. Probably faster refactoring the actual code and doing a normal upgrade to Angular</li>
</ul>

# React

React has a number of qualities which make it relatively easy to integrate into code bases written in other frameworks.


## Library vs framework
  
React is much more like a library than a framework and because of that it doesn't limit you in how you use it. React provides you with a set of tools and allows you to decide if and how you want to use them.

## It's modular

React apps are built as components. Components are anything from full pages to single elements on a page. A website is split
  into sections and each section is built as an independent component, these components are brought together to create the
  entire website or web app. Because of this it makes it simple to take individual components and reuse them or integrate
  them elsewhere.

These qualities meant we were able to integrate the React component simply by lifting and shifting it, making no changes
  at all to it's code, and placing it in the AngularJS app. All that was needed to be done was configure the AngularJS app
  to be able to read React code using some libraries.

## Approach

The `upgrade-business` component was split into 4 seperate components, one parent (outer layer) and 3 child components (the
  3 steps). The parent component (often called a container) is a class and stateful component, this means that it's where
  all the logic and dynamic data is stored for the entire component. The 3 child components are functional and stateless,
  they are only responsible for the presentational aspect and don't handle any complex functionality. This approach is common and allows for easy scalability, if you want to remove a step you can just stop rendering it in the parent, if you want to add another step you could reuse an existing step component and pass in different props.

## What other benefits are there with React?

As well as the benefits mentioned above - flexibility, modularity and scalability - React benefits from good performance
  due to it's 'virtual DOM' implementation. Everytime something on the page changes, React looks through the page, compares
  the current DOM with the virtual DOm and only updates the parts of the real DOM which have changed, rather than re-rendering the whole page. This makes React very efficient and speeds up page re-rendering.

## What other drawbacks of using React?
 
 Some of the drawbacks of using React are:

- It's not a framework: 
  As well as being a benefit, this is also a drawback as it means it will be harder to do everything a full framework can do
  and you will likely need to rely on third party frameworks. There's also no pre-defined way for how to structure the app
  so it's easier to create bad structures which can cause issues in the long term.

- Learning curve:
  React is a very different way of developing compared to Angular and some elements of it can be confusing coming from Angular. React also does a lot behind the scenes and can make some behaviour quite confusing and difficult to debug.


## Other options
  - AngularJS + Angular: new pages and components using Angular. The main problem here is that we could end up having the same component on 2 different languages if we need new components for AngularJS (we can't have Angular inside AngularJS pages)
  - AngularJS + React: new pages and components using React. The good thing here is tha we could also reuse new components on old pages
  - AngularJS + Angular + React : new pages and components using Angular. For components needed on new and old pages we'd write them using React. This is the option that we implemented here and we consider the best one
  Angular: everything would be written using the new version. Obviously this would take more time but taking the first option (AngularJS + Angular) should be easier and faster
