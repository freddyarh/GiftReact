import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

export const GifExpertApp = () => {
    // const categories = ['one punch', 'samura', 'Dragon Ball'];
    const [categories, setCategories] = useState(['']);

    // const handleAdd = () => {
    //     // setCategories( categories );
    //     setCategories(['Hunter',...categories]);
    // }

    return (
        <>
            <h1>Gift Expert App</h1>
            <AddCategory setCategories= { setCategories } />
            <hr/>

            <ol>
                {
                    categories.map( category => (
                        <GifGrid key = { category } category = { category }/>
                    ))
                }
            </ol>
            
        </>
    )
}

