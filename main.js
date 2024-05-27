let userName=document.getElementById("name")
console.log(userName);

function clickMe(){
    userName.innerText="fahad"
}

function changeColor(){
    userName.style.color="blue"
}

function bigFont(){
    userName.style.fontSize="20px"
}

function smallFont(){
    userName.style.fontSize="12px"
}

function backColor(){
    userName.style.background="yellow"
}
function Image1(){
    userName.style.backgroundImage="url(https://images.pexels.com/photos/19782827/pexels-photo-19782827/free-photo-of-man-walking-on-a-path-by-the-shore-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load)"
    // userName.style.backgroundImage="url(https://images.pexels.com/photos/24247434/pexels-photo-24247434/free-photo-of-white-building-with-blue-sky-windows.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load)"
}

function Image2(){
    userName.style.backgroundImage="url(https://images.pexels.com/photos/24247434/pexels-photo-24247434/free-photo-of-white-building-with-blue-sky-windows.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load)"
}