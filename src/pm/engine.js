import { UiEngine } from "./engine";
import { render } from "./render";

const element = document.getElementById("app");
const engine = new UiEngine(element, render);

export { engine };
