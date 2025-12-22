

interface Props {
    placeHolder: string
    buttonName?: string
}
export const Searchbar = ({ placeHolder, buttonName }: Props) => {
    return (
        <div className='search-container'>
            <input type="text" placeholder={placeHolder} />
            <button>{buttonName}</button>

        </div>)

}
