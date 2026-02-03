export interface ScrambledWordState {

    word: string[];
    currentWord: string;
    scrambledWord: string;
    guess: string;
    points: number;
    errorCounter: number;
    maxAllowErrors: number;
    skipCounter: number;
    maxSkips: number;
    isGameOver: boolean;
    totalWords: number;
}

const GAME_WORDS = [
    'REACT',
    'JAVASCRIPT',
    'TYPESCRIPT',
    'HTML',
    'ANGULAR',
    'SOLID',
    'NODE',
    'VUEJS',
    'SVELTE',
    'EXPRESS',
    'MONGODB',
    'POSTGRES',
    'DOCKER',
    'KUBERNETES',
    'WEBPACK',
    'VITE',
    'TAILWIND',
];

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
    return word
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');
};

export const getInitialState = (): ScrambledWordState => {

    const shuffleWords = shuffleArray([...GAME_WORDS])

    return {
        currentWord: shuffleWords[0],
        errorCounter: 0,
        guess: '',
        isGameOver: false,
        maxAllowErrors: 3,
        maxSkips: 3,
        points: 0,
        scrambledWord: scrambleWord(shuffleWords[0]),
        skipCounter: 0,
        word: shuffleWords,
        totalWords: shuffleWords.length
    }
}

export type ScrambleWordsActions =
    | { type: 'SET_GUESS', payload: string }
    | { type: 'CHECK_ANSWER' }
    | { type: 'SKIP_WORD' }
    | { type: 'START_NEW_GAME', payload: ScrambledWordState }

export const scrambleWordReducer = (state: ScrambledWordState, action: ScrambleWordsActions): ScrambledWordState => {

    switch (action.type) {
        case 'SET_GUESS':
            return {
                ...state,
                guess: action.payload.trim().toUpperCase(),
            };

        case 'CHECK_ANSWER':

            if (state.currentWord === state.guess) {

                const newWord = state.word.slice(1)



                return {
                    ...state,
                    word: newWord,
                    points: state.points + 1,
                    guess: '',
                    currentWord: newWord[0],
                    scrambledWord: scrambleWord(newWord[0])
                }

            }

            return {
                ...state,
                guess: '',
                errorCounter: state.errorCounter + 1,
                isGameOver: state.errorCounter + 1 >= state.maxAllowErrors
            }

        case 'SKIP_WORD': {
            if (state.skipCounter >= state.maxSkips) { return state }

            const updatedWords = state.word.slice(1)

            return {
                ...state,
                skipCounter: state.skipCounter + 1,
                word: updatedWords,
                currentWord: updatedWords[0],
                scrambledWord: scrambleWord(updatedWords[0]),
                guess: ''
            }
        }

        case 'START_NEW_GAME': {

            return action.payload

        }
        default: return state
    }

}