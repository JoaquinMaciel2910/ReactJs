
import { CustomHeader } from './mock-data/shared/components/CustomHeader'
import { Searchbar } from './mock-data/shared/components/Searchbar'
import { PreviousSearches } from './mock-data/gifs/Components/PreviousSearches'
import { GifsContainer } from './mock-data/gifs/Components/GifsContainer'
import { useGifs } from './mock-data/gifs/hooks/useGifs'


export const GifsApp = () => {

    const { gifs, previousTerms, handleTermClicked, handleSearch } = useGifs()

    return (
        <>
            <CustomHeader title="GifsApp" description=" Encuentra los mejores gifs" />


            <Searchbar placeHolder="Encuentra tu gif" buttonName="Buscar" onQuery={handleSearch} />

            <PreviousSearches title="Busquedas Recientes" searches={previousTerms} onLabelClicked={handleTermClicked} />

            <GifsContainer gifs={gifs} />


        </>
    )
}
