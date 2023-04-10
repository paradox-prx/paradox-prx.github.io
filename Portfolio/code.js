function revert(){
    document.getElementById("home4").style["background-image"]="url(back.jpg)";
}
function changebg(name){
    let element= document.getElementById("home4")
    element.style["background-image"]="linear-gradient(rgba(0,0,0,0.82),rgba(0,0,0,0.82)),url("+name+")";
    element.style['background-size']='cover';
    element.style['background-repeat']='no-repeat';


}