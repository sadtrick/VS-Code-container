import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

function say(a, b) {
  print(a + " " + b);
}

say("hello", "world", "!");

function myLoop() {
  let mayData = "1";
  for (let i = 0; i < 5; i++) {
    let mayData = "2";
    console.log(mayData);
  }
}

var x = "Foo";
"length" in x; // Noncompliant: TypeError
0 in x;        // Noncompliant: TypeError

const y = "Foo";
"length" in y;
0 in y;
"footbar" in y;


export default app
