import React from "react";

function App(){

    const [headingText, setHeadingText] = React.useState("");
    const [isMouseOver, setMouseOver] = React.useState(false);

    function handleClick(){
        setHeadingText("XXXXXX");
    }
    function handleMouseOver(){
        console.log("Mouse Over");
        setMouseOver(true);
    }
    function handleMouseOut(){
        console.log("Mouse Over");
        setMouseOver(false);
    }

    function handleChangeName(event){
        setHeadingText(event.target.value);
    }

    return(
        <div>
            <h1>Hello {headingText}</h1>
            <input onChange={handleChangeName} type="text" placeholder="What's your name?"></input>
            <button onClick={handleClick}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                style={{backgroundColor: isMouseOver? "black" : "white"}}
            >
                Submit
            </button>
        </div>
    );
}

export default App;