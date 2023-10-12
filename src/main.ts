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
let lastTime = performance.now();

const setCounter = (count: number) => {
  const currentTime = performance.now();
  const deltaTime = currentTime - lastTime;
  const updateFrameSpeed = 1;
  console.log(count);
  counter = count;
  if (deltaTime > 1000 / updateFrameSpeed) {
    lastTime = currentTime;
    counter += 1;
  }
  element2.innerHTML = `You have created ${counter} polutions💨`;
  console.log("Wasa");
  requestAnimationFrame(() => setCounter(counter));
};
setCounter(0);
element2.addEventListener("click", () => setCounter(counter + 1));

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);
