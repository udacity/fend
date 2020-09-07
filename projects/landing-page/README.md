# FEND Landing Page Project
In this project, we're being asked to complete three different things but do it dynamically with Javascript.
1. Add a navigation Bar.
2. Monitor the Active Section of the HTML page. 
3. Scroll seemlessly to the section when clicked from Navbar. 

## How to do this?
To do this we're going to have to split the HTML into sections using an array, so we can manipulate that array. By having an array we can just call the sections from that and keep an active tracking. We're also going to need to have a place hodler for active section and a remove class function.

A user can move through the page 1 of 2 ways, by scrolling or click and what we'd like to do, is once a person clicks from the navbar, we'd like to replcace the active section with the section theyb just clicked. However, if someone is just scrolling throught he page, the middle section, or one most present to them will be the main section that will hold our active place holder. As we add more sections, they will be added to the navbar from the javascript we built to dynamically build the navbar, rather than relying on the HTML to do it. 