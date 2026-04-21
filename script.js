const form=document.getElementById("form");
const nameInput =document.getElementById("name");
const yearInput=document.getElementById("year");
const urlText=document.getElementById("url");
form.addEventListener ("submit",function(event){
event.preventDefault();
let baseUrl="https://localhost:8080/";
let params=[];
if(nameInput.value.trim()!==""){
params.push("name=" + encodeURIComponent(nameInput.value));
}
if(yearInput.value.trim()!==""){
params.push("year=" + encodeURIComponent(yearInput.value));

}
if(params.length>0){
baseUrl += "?" + params.join("&");
} 
urlText.textContent=baseUrl;

});




