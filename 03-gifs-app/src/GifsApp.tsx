import React, { useState } from 'react'
import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './mock-data/shared/components/CustomHeader'
import { Searchbar } from './mock-data/shared/components/Searchbar'
import { PreviousSearches } from './mock-data/gifs/Components/PreviousSearches'
import { GifsContainer } from './mock-data/gifs/Components/GifsContainer'
import { getGifsByQuery } from './mock-data/gifs/actions/get-gifs-by-query.action'
import type { Gif } from './mock-data/gifs/interfaces/gif.interface'


export const GifsApp = () => {

    const [gifs, setgifs] = useState<Gif[]>([])

    const [previousTerms, setPreviousTerms] = useState<string>([]);

    const handleTermClicked = (term: string) => {
        return (
            console.log({ term })
        )
    }

    const handleSearch = async (query: string) => {

        query = query.trim().toLowerCase();

        if (query.length === 0) return;

        if (previousTerms.includes(query)) return;

        setPreviousTerms([query, ...previousTerms].slice(0, 8))

        const gifs = await getGifsByQuery(query);

        setgifs(gifs)

    }

    return (
        <>
            <CustomHeader title="GifsApp" description=" Encuentra los mejores gifs" />


            <Searchbar placeHolder="Encuentra tu gif" buttonName="Buscar" onQuery={handleSearch} />

            <PreviousSearches title="Busquedas Recientes" searches={previousTerms} onLabelClicked={handleTermClicked} />

            <GifsContainer gifs={gifs} />


        </>
    )
}
