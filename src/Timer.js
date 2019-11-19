import React from 'react';

const Timer=(props) => {

    var secondes = Math.floor((props.ms/1000)%60);
    var minutes = Math.floor((props.ms/(1000*60))%60);
    var Hours = Math.floor((props.ms/(1000*60*60))%24);

    Hours = (Hours < 10) ? "0" +Hours : Hours;
    minutes= (minutes < 10) ? "0" +minutes : minutes;
    secondes = (secondes < 10) ? "0" +secondes : secondes;
return(
<div>
    <h1>{Hours+':'+minutes+':'+secondes}</h1>
</div>
)
}

export default Timer
