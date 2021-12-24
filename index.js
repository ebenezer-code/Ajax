var btn = document.getElementById('btn');

btn.addEventListener("click", ()=>{
    
var ourRequest = new XMLHttpRequest();
ourRequest.open("Get","https://ibanking.stanbicibtcbank.com/#/auth/login");
ourRequest.onload = function () {
    var myData = JSON.parse(ourRequest.responseText);
    renderHTML(myData);
};
ourRequest.send();
});
