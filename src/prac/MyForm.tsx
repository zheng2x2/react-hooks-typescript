import React, {useState, useRef} from 'react';

type MyFormProps = {
    onSubmit: (form: {name: string; description: string}) => void;
}
function MyForm({ onSubmit }: MyFormProps){

    const inputRef = useRef<HTMLInputElement>(null);

    const [form, setForm] = useState({
        name: '',
        description: ''
    });

    const { name, description } = form;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name] : value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);
        setForm({
            name:'',
            description:''
        }); //초기화
        if(!inputRef.current) {
            return;
        }
        inputRef.current.focus();
    };

    return (
        <div>
            <h2>3. 인풋상태관리하기 ( onChange? )</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" value={name} onChange={onChange} ref={inputRef}/>
                <input name="description" value={description} onChange={onChange}/>
                <button type="submit">등록</button>
            </form>
        </div>
    )
}

export default MyForm;