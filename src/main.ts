import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

app.innerHTML = `
<div>
  <div class="card">
    <button id="counter" type="button"></button>
    <button id="upgrade" type="button"></button>
    <button id="perSec" type="button"></button>
  </div>
</div>
`;
const gameName = "Zane's gamer";
let counter = 0;
let updateFrameSpeed = 0;
document.title = gameName;
const element2 = document.querySelector<HTMLButtonElement>("#counter")!;
const upgrade = document.querySelector<HTMLButtonElement>("#upgrade")!;
const perSec = document.querySelector<HTMLButtonElement>("#perSec")!;
let lastTime = performance.now();

const setCounter = (count: number) => {
  const currentTime = performance.now();
  const deltaTime = currentTime - lastTime;
  console.log(count);
  counter = count;
  if (deltaTime > 1000 / updateFrameSpeed) {
    lastTime = currentTime;
    counter += 1;
  }
  perSec.innerHTML = `You pollute ${updateFrameSpeed} per second`;
  element2.innerHTML = `You have created ${counter} polutions💨`;
  console.log("Wasa");
  requestAnimationFrame(() => setCounter(counter));
};

function upgradeFunc() {
  if (counter > 10) {
    counter -= 10;
    updateFrameSpeed += 1;
  }
}
setCounter(0);

element2.addEventListener("click", () => setCounter(counter + 1));

upgrade.addEventListener("click", () => upgradeFunc());

upgrade.innerHTML = "Upgrade";
const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);
