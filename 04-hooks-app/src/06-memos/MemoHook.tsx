import { useState } from "react"
import { MyTitle } from "./UI/MyTitle"
import { MySubtitle } from "./UI/MySubtitle"




export const MemoHook = () => {

    const [title, setTitle] = useState('Hola')
    const [subTitle, setSubtitle] = useState('Mundo')
    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-thin text-white ">Memo App</h1>

            <MyTitle title={title} />

            <MySubtitle subtitle={subTitle} />

            <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => { setTitle('Hello') }
                }
            >Cambiar titulo</button>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => { setSubtitle('Bye') }
                }
            >Cambiar subtitulo</button>

        </div >
    )
}
