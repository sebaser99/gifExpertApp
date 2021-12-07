import React, {useState} from 'react';
import PropTypes  from 'prop-types';

export default function AddCategory({setCategories}) {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e)=>{
        setInputValue(e.target.value)

    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories(categories => [inputValue, ...categories ])
            setInputValue('')
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Busca un nuevo equipo de futbol"
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}