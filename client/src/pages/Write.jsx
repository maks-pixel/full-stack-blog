import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
    const [value, setValue] = useState('');

    console.log(value);
    return (
        <div className='add'>
            <div className='content'>
                <input type="text" placeholder="Title" />
                <div className='editorContainer'>
                    <ReactQuill xlassName="editor" theme="snow" value={value} onChange={setValue} />
                </div>
            </div>
            <div className='menu'>
                <div className='item'>
                    <h1>Publish</h1>
                    <span>
                        <b>Status: </b> Draft
                    </span>
                    <span>
                        <b>Visability: </b> Public
                    </span>
                    <input style={{ display: "none" }} type="file" name="" id="file" />
                    <label className='file' htmlFor="file"> Upload image</label>
                    <div className="buttons">
                        <button>Save as draft</button>
                        <button>Update</button>
                    </div>
                </div>

                <div className='item'>
                    <h1>Catagory</h1>
                    <div className="cat">
                        <input type="radio" name="cat" value="art" />
                        <label htmlFor="art">Art</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="science" />
                        <label htmlFor="science">Science</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="technology" />
                        <label htmlFor="tech">Technology</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="Movies" />
                        <label htmlFor="movies">Movies</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="design" />
                        <label htmlFor="design">Design</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="food" />
                        <label htmlFor="food">Food</label>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Write