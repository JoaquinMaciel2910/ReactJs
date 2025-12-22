import React from 'react'
import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './mock-data/shared/components/CustomHeader'
import { Searchbar } from './mock-data/shared/components/Searchbar'
import { PreviousSearches } from './mock-data/gifs/Components/PreviousSearches'
import { GifsContainer } from './mock-data/gifs/Components/GifsContainer'

export const GifsApp = () => {
    return (
        <>
            <CustomHeader title="GifsApp" description=" Encuentra los mejores gifs" />


            <Searchbar placeHolder="Encuentra tu gif" buttonName="Buscar" />

            <PreviousSearches title="Busquedas Recientes" searches={['Goku', 'Dragon ball']} />

            <GifsContainer gifs={mockGifs} />


        </>
    )
}
