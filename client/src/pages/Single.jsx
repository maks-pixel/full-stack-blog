import React from 'react'
import {Link} from 'react-router-dom'
import cats from "../img/cats.jpg"
import smile from "../img/smile.jpg"
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
const Single = () => {
    return (
        <div className='single'>
            <div className='content'>
            <img src= {cats} alt="" />
            <div className="user">
                <img src={smile} alt=""></img>
                <div className="info">
                    <span> Maks</span>
                    <p> posted 2 days ago</p>
                </div>
                <diiv className="edit">
                    <Link to={`write?edit=2`}>
                    <img src={Edit} alt="" />
                    </Link>
                    <img src={Delete} alt="" />
                </diiv>
            </div>
            </div>
            <div className='menu'>m</div>

        </div>
    )
}

export default Single