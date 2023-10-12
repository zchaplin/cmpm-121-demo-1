import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

app.innerHTML = `
<div>
  <div class="card">
    <button id="tottal" type="button"></button>
    <button id="counter" type="button"></button>
    <button id="upgradeOne" type="button"></button>
    <button id="upgradeTwo" type="button"></button>
    <button id="upgradeThree" type="button"></button>
    <button id="perSec" type="button"></button>
  </div>
</div>
`;

let counter = 0;
let updateFrameSpeed = 0;
const element2 = document.querySelector<HTMLButtonElement>("#counter")!;
element2.innerHTML = `Fart to speed up<div>🚴💨`;
const tottal = document.querySelector<HTMLButtonElement>("#tottal")!;

interface Upgrade {
  button: HTMLButtonElement;
  name: string;
  cost: number;
  effect: number;
  times: number;
}

const upgrades: { [key: string]: Upgrade } = {
  upgradeOne: {
    button: document.querySelector<HTMLButtonElement>("#upgradeOne")!,
    name: "Chicken",
    cost: 10,
    effect: 0.1,
    times: 0,
  },
  upgradeTwo: {
    button: document.querySelector<HTMLButtonElement>("#upgradeTwo")!,
    name: "Beans",
    cost: 100,
    effect: 2,
    times: 0,
  },
  upgradeThree: {
    button: document.querySelector<HTMLButtonElement>("#upgradeThree")!,
    name: "Todd Cobell",
    cost: 1000,
    effect: 50,
    times: 0,
  },
};

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
  perSec.innerHTML = `You speed up ${updateFrameSpeed.toFixed(
    1,
  )} mph per second`;
  tottal.innerHTML = `You are going ${counter} miles per hour`;
  requestAnimationFrame(() => setCounter(counter));
};

function upgradeFunc(upgrade: string) {
  if (counter >= upgrades[upgrade].cost) {
    counter -= upgrades[upgrade].cost;
    updateFrameSpeed += upgrades[upgrade].effect;
    upgrades[upgrade].cost *= 1.15;
    upgrades[upgrade].times += 1;
    upgrades[upgrade].button.innerHTML = `${
      upgrades[upgrade].name
    }<div>Cost: ${upgrades[upgrade].cost.toFixed(2)} Speed<div>Count: ${
      upgrades[upgrade].times
    }`;
  }
}
setCounter(0);

element2.addEventListener("click", () => setCounter(counter + 1));

for (const upgrade in upgrades) {
  upgrades[upgrade].button.addEventListener("click", () =>
    upgradeFunc(upgrade),
  );
  upgrades[upgrade].button.innerHTML = `${
    upgrades[upgrade].name
  }<div>Cost: ${upgrades[upgrade].cost.toFixed(2)} Speed<div>Count: ${
    upgrades[upgrade].times
  }`;
}

const header = document.createElement("h1");
header.innerHTML = "Zanes gamering";
app.append(header);
