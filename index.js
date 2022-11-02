document.addEventListener("DOMContentLoaded", () => {
  const style = "position: absolute; right: 0; bottom: 0; user-select: none;";
  const art = document.createElement("span");

  art.style = style + "color: #fff;";
  art.innerHTML = `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿<br>⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿<br>⣿⣿⣿⣿⠟⣡⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣦⡙⢿⣿⣿⣿⣿<br>⣿⣿⠟⣡⡾⠋⢀⣠⣾⠟⠋⠁⠄⠄⠄⠄⠄⠙⠻⣷⣀⣼⣿⡇⠛⣦⡙⢿⣿⣿<br>⣟⠡⣾⡋⠄⢀⣾⣿⣿⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠹⠿⠿⠿⠇⠄⠈⢻⣦⢙⣿<br>⣿⣷⡘⢷⣄⢸⣿⣿⣿⣿⣷⣶⣶⣶⣶⣶⣶⣶⣤⣤⣀⡀⠄⠄⢀⣴⠟⣡⣾⣿<br>⣿⣿⣿⣦⡙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣠⡾⢡⣾⣿⣿⣿<br>⣿⣿⣿⣿⣷⣌⠻⣦⡀⠄⠄⠄⠉⠉⠉⠉⠉⠉⠙⠛⢿⣿⡿⢋⣴⣿⣿⣿⣿⣿<br>⣿⣿⣿⣿⣿⣿⣷⡘⢿⣤⣾⣿⣷⣦⡀⣀⣀⣀⣀⣤⣾⠟⣡⣿⣿⣿⣿⣿⣿⣿<br>⣿⣿⣿⣿⣿⣿⣿⣿⣦⡙⢿⡟⠛⠛⠛⠛⠛⠛⣹⡿⢡⣾⣿⣿⣿⣿⣿⣿⣿⣿<br>⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣌⠻⣧⡀⠄⠄⣠⡾⢋⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿<br>⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡌⠿⣦⣴⠟⣡⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿<br>⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡙⢡⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿<br>⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿<br>⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿`;

  art.addEventListener("mouseenter", () => {
    art.style = style + "color: #000;";
  });
  art.addEventListener("mouseleave", () => {
    art.style = style + "color: #fff;";
  });

  document.body.append(art);
});
