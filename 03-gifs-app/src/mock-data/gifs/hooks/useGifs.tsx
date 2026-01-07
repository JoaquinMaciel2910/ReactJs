import React from 'react'
import { useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

export const useGifs = () => {


    const [gifs, setgifs] = useState<Gif[]>([])

    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

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

    return {
        gifs,
        previousTerms,
        handleTermClicked,
        handleSearch

    }
}
