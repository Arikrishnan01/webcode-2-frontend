import React from 'react'
import './css/index.css'
import Sidebar from './Sidebar'
import Main from './Main'
// import { useState, useEffect } from 'react';
// import axios from 'axios';

function Index() {

  // const [question, setQuestion] = useState([]);

  // useEffect( () => {
  //   async function getQuestion(){
  //     await axios.get('/api/question').then((res) => {
  //       console.log(res.data)
  //     }).catch((err) => {
  //       console.log(err)
  //     });
  //   }
  //   getQuestion()
  // }, [])

  return (
    <div className='stack-index'>
           <div className='stack-index-content'>
                <Sidebar/>
                <Main/>
            </div>
    </div>
  )
}

export default Index
