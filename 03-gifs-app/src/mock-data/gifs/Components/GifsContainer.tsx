import { mockGifs, type Gif } from "../../gifs.mock"


interface Props {
    gifs: Gif[]
}
export const GifsContainer = ({ gifs }: Props) => {
    return (
        <div className='gifs-container'>

            {gifs.map((gif) => (
                <div key={gif.id} className='gift-card'>
                    <img src={gif.url} alt={gif.title} />

                    <h3> {gif.title} </h3>

                    <p> {gif.width}x{gif.height} (1.5mb) </p>
                </div>
            ))}
        </div>

    )
}
