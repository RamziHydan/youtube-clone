import React from 'react'
import { categories } from '../utils/constants'
import { Stack } from '@mui/material'

// const selectCategory = 'New'; // now we no longer in need to use static variable

const SideBar = ({
    selectCategory,setSelectedCategory
}) => {
  return (
    <Stack direction="row" 
    sx={{
        overflow:"auto",
        height:{ sx:'auto' , md: '95%' },
        flexDirection: { md:'column' },
    }} >

        {categories.map((category) => (
            <button 
            className='category-btn'
            onClick={()=> setSelectedCategory(category.name) }
            style={{
                background: category.name === selectCategory && '#FC1503',
                color:'white',
            }}
              key={category.name}
            >
                <span
                style={{ color:category.name === selectCategory ? 'white' : 'red',
                    marginRight: '15px'
                 }}
                >{ category.icon }</span>

                <span
                style={{ 
                    opacity: category.name === selectCategory ? '1' : '0.8'
                 }}
                >{ category.name }</span>
            </button>
        ))}

    </Stack>
  )
}

export default SideBar