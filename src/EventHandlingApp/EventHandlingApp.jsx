import React,{useState} from 'react';

function EventHandlingApp(){
    const[paragraph, setParagraph] = useState('functional component');

    function onClick(){
        setParagraph('Button Clicked');
    }

    return (
        <>
           <p>{paragraph}</p>
           <button onClick={onClick}>Click me</button>
        </>
    )
}

export default EventHandlingApp