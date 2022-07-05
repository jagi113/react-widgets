import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

//LANGUAGE OPTION FOR DROPDOWN
const option = [
    {
      label: "Afrikaans",
      value: "af"
    },
    {
      label: "Arabic",
      value: "ar"
    },
    {
      label: "Hindi",
      value: "hi"
    },
    {
        label: "Czech",
        value: "cs"
    },
    {
      label: "French",
      value: "fr"
    },
    {
        label: "Russian",
        value: "ru"
    },
    {
        label: "Slovak",
        value: "sk"
    },

  ]

const Translate = () =>{
    const [language, setLanguage] = useState(option[0]);
    const [text, setText] = useState("");

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label className='label'>Enter text for translation</label>
                    <input value={text} onChange={(e) => setText(e.target.value)}></input>
                </div>
            </div>
            <Dropdown 
                label="Select a Language"
                selected={language} 
                onSelectedChange={setLanguage} // since the change takes place in component we must pass that change function too
                option={option}
            />
            <hr></hr>
            <h3 className='ui header'>Output</h3>
            <Convert text={text} language={language} />
        </div>
    );    
};

export default Translate;