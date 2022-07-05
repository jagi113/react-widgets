import React, {useState, useEffect} from 'react';
import axios from 'axios';


const WikiSearch = () =>{
    const[term, setTerm] = useState("programming"); 
    const[debouncedTerm, setDebouncedTerm] = useState(term);
    const[results, setResults] = useState([]);

    //Sets debouncedTerm if term has not changed for 1000ms
    useEffect(()=>{
        const timerID= setTimeout(()=>{
            setDebouncedTerm(term);
        }, 1000);
        
        return()=>{
            clearTimeout(timerID);
        };
    }, [term]);

    //Sets api search for initial term calling
    useEffect(()=>{
        const search = async() =>{
            const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action:"query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: debouncedTerm//Term cannot be an empty string, so either we put there some "default" term or we call search only if term is defined.
                },
            });
            setResults(data.query.search)
            
        };
        search();
    }, [debouncedTerm]);

    

    const renderedResults = results.map((result)=>{
        return(
            <div className='item' key={result.pageid}>
                <div className='right floated content'>
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className='ui button'>Link</a>
                </div>
                <div className='content'>
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`}> 
                        <div className='header'>
                            {result.title}
                        </div>
                    </a>
                    <span dangerouslySetInnerHTML={{ __html:result.snippet }}></span>   
                </div>
            </div>
        )
    });

    return(
        <React.Fragment>
            <div className="ui form">
                <div className='field'>
                <label>Enter Search Term</label>
                <input className='input' value={term} onChange={e => setTerm(e.target.value)}></input>
                </div>
            </div>
            <div className='ui celled list'>
                {renderedResults}
            </div>
        </React.Fragment>
    );
};

export default WikiSearch;