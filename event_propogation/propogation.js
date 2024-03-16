let grandParent = document.getElementById('grandParent');
let parent = document.getElementById('parent');
let child = document.getElementById('child');

grandParent.addEventListener('click', function (e) {
   let clickNode = e.target;
   console.log('Grand Parent');
   // e.stopPropagation();
}, false);
parent.addEventListener('click', function (e) {
   let clickNode = e.target;
   console.log('Parent');
   e.stopPropagation();
},false);
child.addEventListener('click', function (e) {
   let clickNode = e.target;
   console.log('Child');
   e.stopPropagation();
},true);
// click child
//child





// question regarding event propogation  is it possible for diffrent event typey?
// can click propogate to doubleclick?