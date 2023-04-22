import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {TagsInput} from 'react-tag-input-component';
import './Question.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from "../../features/userSlice";
import axios from 'axios';

function Question() {

    const user = useSelector(selectUser);
    const [loading, setLoading] = useState(false);

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState("");

    const history = useHistory()

    const handleQuill = (value) => {
        setBody(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(title !== "" && body !== "")
        {
            setLoading(true)
            const bodyJSON = {
                title: title,
                body: body,
                tag: JSON.stringify(tags),
                user: user 
            }

            await axios.post('./api/question', bodyJSON).then((res) => {
                alert("Question added successfully")
                setLoading(false)
                history.push('/')
            }).catch((err) => {
                console.log(err)
                setLoading(false)
            })
        }
    }

  return (
    <div className='add-question'>
        <div className='add-question-container'>
            <div className='head-title'>
                <h1>Ask a pubblic question</h1>
            </div>
            <div className='qeustions-container'>
                <div className='qeustions-options'>
                    <div className='qeustions-option'>
                        <div className='title'>
                            <h3>Title</h3>
                            <small>
                                Be specific and imaging you're asking
                                a question another person
                            </small>
                            <input 
                                type='text'
                                placeholder='Add question title'
                                value = {title}
                                onChange = {(e) => setTitle(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='qeustions-option'>
                    <div className='title'>
                            <h3>Body</h3>
                            <small>
                                Include all the informations someone 
                                would need to answer your question
                            </small>
                            <ReactQuill 
                                className='react-quill'
                                theme='snow'
                                value= {body}
                                onChange={handleQuill}
                            />
                        </div>
                    </div>
                    <div className='qeustions-option'>
                    <div className='title'>
                            <h3>Tags</h3>
                            <small>
                                Add up to 5 tags  to discribe what your question is about
                            </small>
                            <TagsInput
                                name='tags'
                                placeHolder='Press enter add to new tags'
                                value={tags}
                                onChange={setTags}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <button  
                disabled={loading}
                type="submit"
                onClick={handleSubmit}
                className='button'>
                {loading ? 'Adding question...' : 'Add your question'}    
                </button>
        </div>
    </div>
  )
}

export default Question
