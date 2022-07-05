import React, {useState, useEffect} from 'react';
import axios from 'axios';


const WikiSearch = () =>{
    const[term, setTerm] = useState(""); 
    const[results, setResults] = useState([]);

    

    useEffect(()=>{
        const search = async() =>{
            const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action:"query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: term //Term cannot be an empty string, so either we put there some "default" term or we call search only if term is defined.
                },
            });
            setResults(data.query.search)
            
        };

        //to check that this is first search:
        if (term && !results.length){
            search() //for first search we do not want to wait 1 second
        } else {
            const timeoutID= setTimeout(()=>{ //Must assign timeout function value which is its ID to a variable to be able to cancel it by its id
                if (term) {
                    search();
                }
            }, 1000); // this will take a bit too long for initial search therefore we put it only for second search

            return (()=>{   // This is a clean up function of useEffect which will be called before a new useEffect will take place
                clearTimeout(timeoutID);
            })
        }
    }, [term],);

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