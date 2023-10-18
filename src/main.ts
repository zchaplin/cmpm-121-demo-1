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
    <button id="upgradeFour" type="button"></button>
    <button id="upgradeFive" type="button"></button>
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
  description: string;
  cost: number;
  effect: number;
  times: number;
  type: string;
}

const upgrades: { [key: string]: Upgrade } = {
  upgradeOne: {
    button: document.querySelector<HTMLButtonElement>("#upgradeOne")!,
    name: "Chicken",
    description: "This will make you fart .1 seconds faster",
    cost: 10,
    effect: 0.1,
    times: 0,
    type: "normal",
  },
  upgradeTwo: {
    button: document.querySelector<HTMLButtonElement>("#upgradeTwo")!,
    name: "Beans",
    description:
      "The magical fruit increases flatulence production by 2 a second",
    cost: 100,
    effect: 2,
    times: 0,
    type: "normal",
  },
  upgradeThree: {
    button: document.querySelector<HTMLButtonElement>("#upgradeThree")!,
    name: "Todd Cobell",
    description:
      "The holly Mr.Cobell is said to have the magic combo to sckyrocket you to mars",
    cost: 1000,
    effect: 50,
    times: 0,
    type: "normal",
  },
  upgradeFour: {
    button: document.querySelector<HTMLButtonElement>("#upgradeFour")!,
    name: "Stronger Gut",
    description:
      "Increase your ability to consume food at the cost of less speed",
    cost: 150,
    effect: 0.9,
    times: 0,
    type: "boost",
  },
  upgradeFive: {
    button: document.querySelector<HTMLButtonElement>("#upgradeFive")!,
    name: "The Nuclear Option",
    description: "There are 19 billion kilocalories in a kg of uranium",
    cost: 100000,
    effect: 10000,
    times: 0,
    type: "normal",
  },
};

const perSec = document.querySelector<HTMLButtonElement>("#perSec")!;

let lastTime = performance.now();

const setCounter = (count: number) => {
  const currentTime = performance.now();
  const deltaTime = currentTime - lastTime;
  console.log(count);
  counter = count;
  if (deltaTime > 10 / updateFrameSpeed) {
    lastTime = currentTime;
    counter += 1 / 100;
  }
  perSec.innerHTML = `You speed up ${updateFrameSpeed.toFixed(
    1,
  )} mph per second`;
  tottal.innerHTML = `You are going ${counter.toFixed(2)} miles per hour`;
  requestAnimationFrame(() => setCounter(counter));
};

function upgradeFunc(upgrade: string) {
  if (upgrades[upgrade].type === "boost") {
    console.log("Boost");
    if (counter > upgrades[upgrade].cost) {
      counter -= upgrades[upgrade].cost;
      upgrades[upgrade].cost *= 1.3;
      for (const grade in upgrades) {
        upgrades[grade].cost *= upgrades[upgrade].effect;
      }
      drawUpgrades();
    }
    return;
  }
  if (counter >= upgrades[upgrade].cost) {
    counter -= upgrades[upgrade].cost;
    updateFrameSpeed += upgrades[upgrade].effect;
    upgrades[upgrade].cost *= 1.15;
    upgrades[upgrade].times += 1;
    drawUpgrades();
  }
}
function drawUpgrades() {
  for (const upgrade in upgrades) {
    upgrades[upgrade].button.innerHTML = `${
      upgrades[upgrade].name
    }<div>Cost: ${upgrades[upgrade].cost.toFixed(2)} Speed<div>Descripton: ${
      upgrades[upgrade].description
    } <div>Count: ${upgrades[upgrade].times}`;
  }
}
setCounter(0);

element2.addEventListener("click", () => setCounter(counter + 1));

for (const upgrade in upgrades) {
  upgrades[upgrade].button.addEventListener("click", () =>
    upgradeFunc(upgrade),
  );
  drawUpgrades();
}

const header = document.createElement("h1");
header.innerHTML = "Zanes gamerin";
app.append(header);
