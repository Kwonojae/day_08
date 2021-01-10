import React from 'react';
import MusicItem from './MusicItem';
import './MusicList.css'

const MusicList = () => {
    return (
        <div className="MusicList">
                <table>
                    <colgroup>
                        <col className="w1" />
                        <col className="w2" />
                        <col className="w3" />
                        <col className="w4" />
                        <col className="w5" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>순위</th>
                            <th>앨범</th>
                            <th>곡명</th>
                            <th>가수</th>
                            <th>상승</th>
                        </tr>
                    </thead>
                    <tbody>
                                          
                    </tbody>
                </table>
            </div>
    );
};

export default MusicList;
