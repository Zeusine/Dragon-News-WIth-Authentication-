import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const Left = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
         fetch("/categories.json")
        .then( (res) => res.json())
        .then((data) => setCategories(data)
        )

        

    }, [])
   
    return (
        <div>
            <h2 className='font-semibold'>All Category</h2>
            <div className='flex flex-col gap-2 mt-5'>

                {
                    categories.map((category) =>
                        
                        
                        <NavLink to={`category/${category.id}`} className='btn' key={category.id}>{category.name}</NavLink>
                    )
                }


            </div>
        </div>
    );
};

export default Left;