import React, {useState} from 'react';
import {Header} from './components/layout/Header';
import {Map} from "./components/Map/Map";
import {SearchContext} from './contexts/search.context';
import {AddForm} from "./components/AddForm/AddForm";
import {Routes, Route} from 'react-router-dom';

export const App = () => {
    const [search, setSearch] = useState('');

    return (
        <SearchContext.Provider value={{search, setSearch}}>
            <Header/>
            <Routes>
                <Route path="/" element={<Map/>}/>
                <Route path="/add" element={<AddForm/>}/>
            </Routes>
        </SearchContext.Provider>
    );
}
