import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

app.innerHTML = `
<div>
  <div class="card">
    <button id="counter" type="button"></button>
  </div>
</div>
`;
const gameName = "Zane's gamer";

document.title = gameName;
const element2 = document.querySelector<HTMLButtonElement>("#counter")!;

element2.innerHTML = '💨';


const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);