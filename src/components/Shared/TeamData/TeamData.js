import React from 'react';
import ReactPlayer from 'react-player';

const TeamData = (props) => {
    console.log(props.data);
    const {strAwayTeam, strHomeTeam , strLeague, strEvent, strThumb , intAwayScore,strVideo, intHomeScore, strTimestamp} = props.data;
    
    return (
        <div class="col-md-3 g-5 text-center">
        <h5>{strLeague}</h5>
        <img src={strThumb} class="card-img-top" alt={strEvent} />
        <ReactPlayer url={strVideo} width='200px'
          height='200px' />
        <div class="card-body">
          <h5 class="card-title">{strHomeTeam} vs {strAwayTeam}</h5>
          <h4 class="card-text">{intAwayScore} - {intHomeScore}</h4>
          <p class="card-text"><small class="text-muted">{strTimestamp}</small></p>
          <button onClick={()=>{console.log("clicked")}} class="btn btn-primary">See Details</button>
        </div>
      </div>
    );
};

export default TeamData;