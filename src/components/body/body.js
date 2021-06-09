import './body.css'

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import List from './list/list';
import Single from './single/single';
import Search from './search/search'
import Header from '../header/header'
import CachedIcon from '@material-ui/icons/Cached';
function Body(props) {
    var [notfound, setnotfound] = useState(false)
    var [loading, setloading] = useState(false)
    var [show, setShow] = useState(true)
    var [id, setId] = useState(null)
    var [state, setState] = useState([])
    useEffect(() => {
        setloading(true)
        axios.get(`http://localhost:8080/getdata`)
            .then(res => {
                const anime = res.data;
                setloading(false)
                setState(anime);
            })
    }, [])
    const click = (id) => {
        setnotfound(false);
        setShow(false);
        setId(id);
    }

    const search = (text) => {
        setloading(true)
        axios.get(`http://localhost:8080/search/${text}`).then(res => {
            setloading(false)
            if (res.data.length === 0) {
                
                getData()
            } else {
                setnotfound(false);
                setState(res.data)
            }
        });
    }
    const getData=()=>{
        setloading(true)
        axios.get(`http://localhost:8080/getdata`)
            .then(res => {
                const anime = res.data;
                setnotfound(true)
                setloading(false)
                setShow(true);
                setState(anime);
            })
    }
    const home=()=>{
        setnotfound(false);
        setloading(true)
        axios.get(`http://localhost:8080/getdata`)
            .then(res => {
                const anime = res.data;
                setloading(false)
                setShow(true);
                setState(anime);
            })
      }
    return (
        <>
            <Header click={home} />
            <Search click={search} />
            <div className="title">
                {loading? <div><CachedIcon fontSize="large"/> Loading...</div>:null}
                {notfound ? "anime searched not found list of available anime..." : null}
            </div>

            {show ? <List state={state} click={click} /> : <Single state={state.filter(i => i.id === id)} />}
        </>
    );
}

export default Body;