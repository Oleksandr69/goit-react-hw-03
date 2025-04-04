import css from './SearchBox.module.css'


const SearchBox = ({value, onSearch}) => {
    return (
    <div className={css.search}>
        <p >Search by name.</p>
            <input
                type='text'
                value={value}
                onChange={(e) =>  onSearch(e.target.value)}  
             className={css.inputSearch} />
    </div>
 )}
export default SearchBox;
