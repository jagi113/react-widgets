import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Convert = ({language, text}) => {
    const [translated, setTranslated] = useState("");
    const[debouncedText, setDebouncedText] = useState(text);

    useEffect(()=>{                 // to avoid a lot of api requests we put timeout on text to be translated.
        const timerID= setTimeout(()=>{
            setDebouncedText(text);
        }, 1000);
        
        return()=>{
            clearTimeout(timerID);
        };
    }, [text]);

    useEffect (()=>{        
        const doTranslation = async()=>{        // create a helper function for async function
            const {data} = await axios.post(          // from response we will get only data part
                'https://translation.googleapis.com/language/translate/v2',
                {},         // this must be empty object because of google apis 
                {           // this is for query parameters
                    params: {   
                        q: debouncedText,
                        target: language.value,
                        key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
                    }
                }
            );
            setTranslated(data.data.translations[0].translatedText)
        }

        doTranslation();
    }, [language, debouncedText]);
    
    return (
        <div>
            <h1 className='ui header'>{translated}</h1>
        </div>
    )
    ;
};

export default Convert;