import React, {useState, useEffect, useRef} from 'react';

const Dropdown = ({label, option, selected, onSelectedChange}) => {
    const[open, setOpen] = useState(false);
    const ref = useRef();                                       // creating ref for dropdown menu 

    // Body event listener with changing menu state only when menu was not clicked
    useEffect(()=>{
        const onBodyClick = (event) =>{                         // we must put function what to do going to event listener to variable to be able to remove it in cleanup function
            if (ref.current.contains(event.target)){            // checks if clicked component (event.target) is inside a component we made a reference (dropdown menu)
                return;
            }
            setOpen(false)
        }

        document.body.addEventListener('click', onBodyClick);

        return () =>{                                           // cleanup function to remove event listener from body
            document.body.removeEventListener("click", onBodyClick);
        }
    });

    // Rendering menu options
    const renderedOptions = option.map((option)=>{
        if (option.value === selected.value){
            return null                                         // null in react means do not render anything
        }

        return (
            <div 
                key={option.value} 
                className="item"
                onClick={() => {
                        onSelectedChange(option)
                    }
                }
            >
                {option.label}
            </div>
        );
    });

    return (//This JSX will build a dropdown menu
        <React.Fragment>
        <div ref={ref} className='ui form'>
            <div className='field'>
                <label className='label'>{label}</label>
                <div onClick={() => { setOpen(!open) } }                                        // changing the state of menu on click on the opposite state
                    className={`ui selection dropdown ${open ? "visible active" : ""}`}         // checking the state of menu a adding / removing classes of for the menu
                >
                    <i className='dropdown icon'></i>
                    <div className='text'>{selected.label}</div>
                    <div className={`menu ${open ? "visible transition" : ""}`}>                
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
                                              
        </React.Fragment>
    );
};

export default Dropdown;
//<p style={{color:selected.value}}>Lorem ipsum</p> 