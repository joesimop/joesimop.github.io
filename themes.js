let root = document.documentElement;
let theme = 1;

console.log("here");

function toggleTheme(){
  if (theme){
    root.style.setProperty("--text", "#f2f2f2");
    root.style.setProperty("--bg", "#121314");
    root.style.setProperty("--accent", "#a6e0cc");
    document.getElementById("toggler").className = "fa fa-sun-o";
    theme = 0;
  } else{
    root.style.setProperty("--text", "#121314");
    root.style.setProperty("--bg", "#f2f2f2");
    root.style.setProperty("--accent", "#a6e0cc");
    document.getElementById("toggler").className = "fa fa-moon-o";
    theme = 1;
  }
}
