import { useDispatch } from 'react-redux';
import './Filters.scss';
import CategoryFilter from './CategoryFilter';

import { Search } from '../Search/Search';
import { setSelectedCategory } from '../../store/albumslice';



export const Filters = () => {
    const dispatch = useDispatch();
    

    return <div className='categoryFilterContainer'>
        <div>Filters</div>
        <CategoryFilter/>
        <div onClick={()=>dispatch(setSelectedCategory(''))}>Reset</div>
        <Search/>
    </div>
}