import React, { useContext } from 'react';
import { primaryContext } from '../../contexts/PrimaryContext'
import { DataContext } from './components/DataContextProvider';

function Footer () {
    const { user } = primaryContext(PrimaryContext);

    return <footer>&copy; {user.name}, {new Date().getFullYear()}</footer>;
}

export default Footer;