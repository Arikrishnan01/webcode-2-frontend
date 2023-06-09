import { Link } from 'react-router-dom';
import React from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import AllQuestion from './AllQuestion';
import './css/Main.css';

function Main() {
  return (
    <div className='main'>
        <div className='main-container'>
            <div className='main-top'>
                <h2>All Questions</h2>
                <Link to='/add-question'>
                    <button>Ask Questions</button>
                </Link>
            </div>
            <div className='main-dec'>
                <p>All Questions stat</p>
                    <div className='main-filter'>
                        <div className='main-tabs'>
                            <div className='main-tab'>
                                <Link>Newest</Link>
                            </div>
                            <div className='main-tab'>
                                <Link>Active</Link>
                            </div>
                            <div className='main-tab'>
                                <Link>More</Link>
                            </div>
                        </div>
                        <div className='main-filter-item'>
                            <FilterListIcon/>
                            <p>Filter</p>
                        </div>
                    </div>
            </div>
            <div className='questions'>
                <div className='question'>
                    <AllQuestion />
                    <AllQuestion />
                    <AllQuestion />
                    <AllQuestion />
                    <AllQuestion />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main;
