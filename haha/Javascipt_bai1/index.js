function SetUpEventForDiv(){
    var obj = document.getElementById("div1");
    obj.onclick = Div1_Click;
    obj.onmouseover = Div1_OnMouseOver;
    obj.onmouseout = Div1_OnMouseOut;
}

function Div1_Click(){
    var obj = document.getElementById("div1");
    obj.innerHTML = "Nhi yêu Sang không?";
    obj.setAttribute("style", "background-color: yellow");
}

function Div1_OnMouseOver(){
    var obj = document.getElementById("div1");
    obj.innerHTML = "Nhi yêu Sang nhiều lắm";
    obj.setAttribute("style", "background-color: blue");
}

function Div1_OnMouseOut(){
    var obj = document.getElementById("div1");
    obj.innerHTML = "Sang cũng yêu Nhi nhiều lắm";
    obj.setAttribute("style", "background-color: pink");
}
