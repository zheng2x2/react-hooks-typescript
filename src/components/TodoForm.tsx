import React, {useState} from 'react';
import { useTodosDispatch } from '../context/TodoContext';

function TodoForm() {

    const [value, setValue] = useState('');
    const dispatch = useTodosDispatch();

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        //TODO : 새항목 추가
        dispatch({
            type: 'CREATE',
            text: value
        })
        setValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input value={value} placeholder="해야할일 ?!"
                    onChange={e=> setValue(e.target.value)} />
            <button>등록</button>
        </form>
    );
}

export default TodoForm;