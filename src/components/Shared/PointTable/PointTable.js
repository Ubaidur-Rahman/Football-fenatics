import React, { useEffect, useState } from 'react';
import TeamData from '../TeamData/TeamData';

const PointTable = () => {
    const [teamData, setTeamData] = useState([])
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4328'
        fetch(url)
        .then(res => res.json())
        .then(data => setTeamData(data.events))
    },[])
    return (
        <div className="row">
            {
                teamData.map(team => <TeamData data={team} key={team.idEvent} />)
            }
        </div>
    );
};

export default PointTable;