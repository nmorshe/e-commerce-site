import { useState, useEffect } from 'react';
import { useNavigate } from '../../node_modules/react-router-dom/dist/index';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const delay = setTimeout(() => {
            if (searchTerm) {
                navigate('/search?s=' + searchTerm);
            }
        }, 500);

        return () => clearTimeout(delay);


    }, [searchTerm, navigate]);

    const handleChange = (ev) => {
        setSearchTerm(ev.target.value);
    }

    return (
        <div id="search">
            <label>Search</label>
            <input type='text' name='search' onChange={handleChange} />
        </div>
    );
}

export default Search;