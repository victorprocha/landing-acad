const menuButton = document.getElementsByClassName("menu")[0];
const aside = document.getElementsByTagName("aside")[0];
const background = document.getElementsByClassName("background")[0];


let showMenu = false;

menuButton.addEventListener("click", () =>{
    handleChange();
});

background.addEventListener("click", () =>{
    handleChange();
});

aside.addEventListener("click", () =>{
    handleChange();
});


function handleChange(){
    if(showMenu){
        aside.style.translate = "-280px";
        aside.style.transition = "0.3s";
        background.style.display = "none";
        showMenu = false;
    }else{
        aside.style.translate = "0px";
        aside.style.transition = "0.3s";
        background.style.display = "flex";
        showMenu = true;
    }
}