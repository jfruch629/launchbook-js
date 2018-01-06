// Exercise: Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.
document.getElementsByTagName('form')[0];
document.getElementsByTagName('nav')[0];

// Exercise: Find the sidebar on the left by using its id.
document.getElementById('sidebar-left');
// Exercise: Find the 'Pages' and 'Groups' sections of the sidebar by using their class.
document.getElementById('sidebar-left').getElementsByClassName('pages');
document.getElementById('sidebar-left').getElementsByClassName('groups');

// Exercise: Find all of the comments on the page.
document.getElementsByClassName('comments');

// Exercise: Find the first comment on the page.
document.getElementsByClassName('comments')[0];

// Exercise: Find the last comment on the page.
let comments = document.getElementsByClassName('comments');
let lastCommentIndex = comments.length - 1;
comments[lastCommentIndex];
// Exercise: Find the fourth comment on the page. Make sure you grab the fourth *comment* rather than the fourth *block* of comments. You may need more than one line of code!
 document.getElementsByClassName('panel')[3];

// Exercise: Find one of the ads in the sidebar and hide them.
ad = document.getElementById("sidebar-right").getElementsByClassName("ads")[0].getElementsByClassName("ad-slot")[0];

ad.style.visibility = 'hidden';

// Exercise: Set the visibility on the ad that you hid in the previous exercise to make it visible again.
ad = document.getElementById("sidebar-right").getElementsByClassName("ads")[0].getElementsByClassName("ad-slot")[0];

ad.style.visibility = 'visible';

// Exercise: Use `setAttribute` to change `src` attribute of one of the ads in the sidebar.
adUpdate = document.getElementById("sidebar-right").getElementsByClassName("ads")[0].getElementsByClassName("ad-slot")[0];

let replaceAdArea = adUpdate.getElementsByTagName('img')[0];
replaceAdArea.setAttribute('src', 'http://placebear.com/200/300')
// Exercise: Find Sam's post and change its text to something incredible.
let postArea = document.getElementsByClassName('media-body')[4];
let post = postArea.getElementsByTagName('p')[0];
post.innerHTML = 'THIS IS ALL SO MAGNIFICENT!';
// Exercise: Find the first post and add the `.post-liked` class to it.
firstPost = document.getElementsByClassName('media-body')[0];
firstPost.className = firstPost.className + ' post-liked';
// Exercise: Find the second post and remove the `.post-liked` class.
secondPost = document.getElementsByClassName('media-body')[2];
secondPost.classList.remove('post-liked');
