import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';

import './Filters.scss';
import { setSelectedCategory } from '../../store/albumslice';


 const CategoryFilter = () => {
    const dispatch = useDispatch();
    const categoryList = useSelector((state) => state.album.categories);

    const FilterItems = () => {
        return Object.keys(categoryList).map(key => {
                return <Dropdown.Item key={key} onClick={()=>dispatch(setSelectedCategory(key))}> {key} </Dropdown.Item>
            })
    }

    return <div className='dropdownFilter'>
        <Dropdown>
            <Dropdown.Toggle variant="default" id="dropdown-basic" className='transparentBtn'>
                Select a category
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <FilterItems/>
            </Dropdown.Menu>
        </Dropdown>
    </div>
}

export default React.memo(CategoryFilter);