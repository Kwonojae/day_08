import React from 'react';
import './MusicItem.css'
import { FaFireAlt } from 'react-icons/fa';
import { FaFileDownload } from 'react-icons/fa';
import { FaFax } from 'react-icons/fa';


const MusicItem = () => {
    return (
        <>
        <tr>
            <td>  </td>
            <td>
                <img src="" width="50" alt=""/>
            </td>
            <td>  </td>
            <td>   </td>
            <td>
                <FaFileDownload /> 
                <FaFax/> 
                <FaFireAlt/> 
            </td>
        </tr>
    </>
    );
};

export default MusicItem;
