// ---> append function to add text

// const element=document.body;
// element.append("Hello" ," ","bye");


//  ---> creating an element in body of Html document
// const body=document.body;
// const div=document.createElement('div');
// const p=document.createElement('p');
// p.innerText="Hello, there";
// body.append(p);

//  --> innertext and textcontent

// const div=document.querySelector("#text");
// console.log(div.innerText);

//  --> it will display all the indentation
// console.log(div.textContent);

//  --> innerHtml

// const body=document.body;
// const div=document.createElement('div');
// const strong=document.createElement('strong');
// strong.innerText="Hello, There";
//  div.innerHTML="<strong>Hello, there</strong>";
// div.append(strong);
// body.append(div);

// --> remove()

// const div=document.querySelector('#container');
// const pwish=document.querySelector('.wish');
// const papologize=document.querySelector('.apologize');
// div.removeChild(pwish);
// papologize.remove();
// div.append(papologize);

// modifying attributes
const div=document.querySelector('#container');
 const pwish=document.querySelector('.wish');
 const papologize=document.querySelector('.apologize');
div.getAttribute('id');
div.setAttribute('id',"box");
pwish.removeAttribute('class');












