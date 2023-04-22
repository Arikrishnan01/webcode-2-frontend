import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import './css/AllQuestion.css';

function AllQuestion() {
  return (
    <div className='all-questions'>
        <div className='all-questions-container'> 
            <div className='all-questions-left'>
                <div className='all-options'>
                    <div className='all-option'> 
                        <p>0</p>
                        <span>Votes</span>     
                    </div> 
                    <div className='all-option'> 
                        <p>0</p>
                        <span>Answers</span>     
                    </div> 
                    <div className='all-option'> 
                        <small>0 Views</small>     
                    </div>      
                </div>      
            </div>
            <div className='question-aswer'> 
                <Link to='/question'>How to drog and drop in ant design?</Link> 
                    <div style={{
                        width: "90%"
                    }}>  
                        <div>
                           <p>What I want is an exampl about how to make the drag and drop
                            of table that works properly, but I  cannot figure out how to make it work </p> 
                            <div style={{
                        display: "flex"
                    }}>
                        <span className='question-tags'>react</span>
                        <span className='question-tags'>ant</span>
                        <span className='question-tags'>frontend</span>
                    
                    <div className='author'>
                        <small>Timestamp</small>
                        <div className='author-details'>
                            <Avatar/>
                            <p>User name</p>
                        </div>
                    </div>
                    </div>
                        </div>
                </div> 
            </div> 
        </div>
    </div>
  )
}

export default AllQuestion
