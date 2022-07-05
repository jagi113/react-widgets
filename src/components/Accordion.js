import React, {useState} from 'react';

const Accordion = ({items}) => {
    //activating a state
    const [activeIndex, setActiveIndex] = useState(null);  // this is just array structuring for a activeIndex is set null and for settingactiveIndex is function assigning null

    const onTitleClick = (index) => {
        setActiveIndex(index); //this will update index after clicking
    };

    const renderedItems = items.map((item, index) =>{
        //creates a new variable active which if index and active index are equal will take value "active" otherwise not and this variable will be used in className
        const active = index === activeIndex? 'active' : ""; 

        return ( // if we put all the code into div, ui semantics will create a extra line around that div. Therefore we use React.Fragment instead
        <React.Fragment key={item.title}> 
            <div 
                className={"title" + active} // string concatenation
                onClick={()=> onTitleClick(index)} // this must be wrapped in arrow function otherwise it would run immediately after rendering
            >
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`} > 
                <p>{item.content}</p>
            </div>
        </React.Fragment>
    )});

/*EXERCISE PART - counting button clicks
    const[activeCount, setActiveCount] = useState(0);
    const onButtonClick =() => {
        setActiveCount(activeCount+1);
    };


    return <react.Fragment>
    <div style={{marginTop:"50px"}}>
        <button onClick={onButtonClick}>Click me!</button>
        <h4>You clicked {activeCount} times</h4>
    </div>
*/
    return (
    <React.Fragment>
    <div className='ui styled fluid accordion'>
        {renderedItems}
    </div>
    
    
    </React.Fragment>
    )
};

export default Accordion;    