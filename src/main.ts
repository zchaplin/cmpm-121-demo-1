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
let counter = 0;
document.title = gameName;
const element2 = document.querySelector<HTMLButtonElement>("#counter")!;
const setCounter = (count: number) => {
  counter = count;
  element2.innerHTML = `You have created ${counter} polutions💨`;
  console.log("Wasa");
};
setInterval(() => setCounter(counter + 1), 1000);

element2.addEventListener("click", () => setCounter(counter + 1));
setCounter(0);
const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);
