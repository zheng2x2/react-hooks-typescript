import React from 'react'

type GreetingsProps = {
    name: string;
    mark: string;
    optional?: string;
    onClick: (nmae: string) => void;
}

function Greetings({name, mark, optional, onClick} : GreetingsProps) {

    const handleClick = () => onClick(name);

    return (
        <div>
            <h2>1. props</h2>
            Hello, {name} {mark}
            {optional && <p>{optional}</p>}
            <div>
                <button onClick={handleClick}>Click me</button>
            </div>
        </div>
    );
}
// const Greetings = ({name, mark, optional} : GreetingsProps) => (
//     <div>
//         Hello, {name} {mark}
//         {optional && <p>{optional}</p>}
//     </div>
// );
Greetings.defaultProps = {
    mark: '!'
};

export default Greetings;