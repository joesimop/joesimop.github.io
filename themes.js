let root = document.documentElement;
let theme;

function toggleTheme(){
  if (theme == 1){
    localStorage.setItem("theme", 0);
    theme = 0;
    updateTheme(theme);
  } else{
    localStorage.setItem("theme", 1);
    theme = 1;
    updateTheme(theme);
  }
}

function updateTheme(theme){
  if (theme == 1){
    root.style.setProperty("--text", "#121314");
    root.style.setProperty("--bg", "#f2f2f2");
    root.style.setProperty("--accent", "#a6e0cc");
    document.getElementById("toggler").className = "fa fa-moon-o";
  } else{
    root.style.setProperty("--text", "#f2f2f2");
    root.style.setProperty("--bg", "#121314");
    root.style.setProperty("--accent", "#a6e0cc");
    document.getElementById("toggler").className = "fa fa-sun-o";
  }

}
