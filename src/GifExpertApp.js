import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp= ()=>{
    const [categories, setCategories] = useState(["Real Madrid"])
    // const handleCategory = ()=>{
    //     // setCategories([...categories, "AC Milan"])
    //     setCategories(categories => [...categories, "AC Milan"])
    // }
    return(
        <>
            
            <h2 className="logo">Gif Expert App</h2>
            <AddCategory setCategories={setCategories} />
            <ol>
                {
                    categories.map(category =>
                        <GifGrid
                            category={category}
                            key={category}
                        />

                        )
                }
            </ol>
            
        </>
    )
}

export default GifExpertApp