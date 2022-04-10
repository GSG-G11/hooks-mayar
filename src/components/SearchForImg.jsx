import { useEffect } from 'react';
import { useState } from 'react';

function SearchForImg() {
    const [word, setWord] = useState('cat');
    const [data, setData] = useState([]);
    useEffect(() => {
        const abortController = new AbortController();
        fetch(
        `https://api.giphy.com/v1/gifs/search?q=${word}&api_key=GB2TIpB11wLmKBbNbYZ5b6F9HMYXs38a`,
        { signal: abortController.signal }
        )
        .then((res) => res.json())
        .then((data) => setData(data.data));
        return () => {
            setData([])
            abortController.abort();
            };
    }, [word]);
    return (
        <div>
        <input
            placeholder="search for any thing"
            onChange={(e) => setWord(e.target.value)}
            value={word}
        ></input>
        {data.map((obj) => (
            <img src={obj.images.original.url} alt=""></img>
        ))}
        </div>
    );
}
export default SearchForImg;
