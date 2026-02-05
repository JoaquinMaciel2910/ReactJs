import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ClientInformation } from './08-use-suspense/ClientInformation'
// import { MemoHook } from './06-memos/MemoHook'
// import { InstagromApp } from './07-useOptimistic/instagromApp'
// import { Toaster } from 'sonner'
// import { PokemonPage } from './03-examples/PokemonPage'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { TasksApp } from './05-useReducer/taskApp'
/* import { HooksApp } from './HooksApp'
import { TrafficLight } from './01-useState/TrafficLight'
import { TrafficLightEffect } from './02-useEffect/TrafficLightWithEffect'
import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook' */
// import { ScrambleWords } from './05-useReducer/ScrambleWords'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightEffect /> */}
    {/*     <TrafficLightWithHook />*/}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <InstagromApp /> */}
    <Suspense fallback={<h1>Cargando</h1>} >
      <ClientInformation />
    </Suspense>
  </StrictMode>,
)
