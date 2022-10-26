import { useContext } from "react";
import AppContext from "../context/AppContext";

const SearchItem = () => {
    const { search, setSearch } = useContext(AppContext);
    return (
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='search'>Search</label>
            <input
                className="input-field"
                id='search'
                type='text'
                role='searchbox'
                placeholder='Search Items'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    )
}

export default SearchItem
