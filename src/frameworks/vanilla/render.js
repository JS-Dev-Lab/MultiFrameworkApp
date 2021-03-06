function render({ state: { array, name, count } }) {
  return `<h1>Hello ${name}</h1>
 <input value="${name}" onInput="commands.setName(event.target.value)"></input>
 <p>${name.length}</p>
 <p>${count}</p><button onClick="commands.add()">My button</button>
 <ul>${array.map(value => `<li>${value}</li>`).join("")}</ul>`;
}

export { render };
