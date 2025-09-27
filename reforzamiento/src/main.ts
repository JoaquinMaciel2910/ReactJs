import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
/* import './bases/01-const-let'
import './bases/03-object-literal.ts'
import './bases/04-arrays.ts' */
import './bases/05-functions.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello World</h1>
    <h2>{firstname}</h2>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
