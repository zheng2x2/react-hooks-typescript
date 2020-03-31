import React, {useState} from 'react';

function Counter() {

    const [count, setCount ] = useState<number>(0);
    const onInc = () => setCount( count + 1 );
    const onDec = () => setCount( count - 1 );

    return (
        <div>
            <h2>2. useState</h2>
            <h1>{ count }</h1>
            <div>
                <button onClick={onInc}>+1</button>
                <button onClick={onDec}>-1</button>
            </div>

        </div>
    );
}

export default Counter;