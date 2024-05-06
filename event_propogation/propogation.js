/*
* Event Propogation:
Event propagation is a mechanism in JavaScript that controls how events are handled in the Document Object Model (DOM) tree. It has below 2 phases
* Event Capturing (Trickling): 
   hapens first from   Parent --> Child
* Event Bubbling:
happens after caputuring phase  child  -- > Parent
* stopPropagation :
Stops furthur journey(Propogation) of the event in DOM
* stopImmediatePropagation:
used to stop propogation on similar eventslistners also 
*/

let grandParent = document.getElementById('grandParent');
let parent = document.getElementById('parent');
let child = document.getElementById('child');

const captureGrandParent = false;
const capturepParent = false;
const captureChild = false;

const stopGrandParentPropogation = true;
const stopParentPropogation = true;
const stopChildPropogation = false;

grandParent.addEventListener('click', function (e) {
   let clickNode = e.target;
   console.log('Grand Parent');

   if (stopGrandParentPropogation) e.stopPropagation();
}, captureGrandParent);

parent.addEventListener('click', function (e) {
   let clickNode = e.target;
   console.log('Parent');
   if (stopParentPropogation) e.stopPropagation();
}, capturepParent);

child.addEventListener('click', function (e) {
   let clickNode = e.target;
   console.log('Child');
   if (stopChildPropogation) e.stopPropagation();
}, captureChild);


//! Doubt => question regarding event propogation  is it possible for diffrent event type ?  can click propogate to doubleclick?