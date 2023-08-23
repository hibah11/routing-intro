interface info {
    bootcampname : string;
    date : string;
    duration : Number;
}

function Bootcamp (props:info){
return(
    <>
    <h1>{props.bootcampname}</h1>
    <h4>{props.date}</h4>
    <h4>{props.duration}</h4>
    </>
);
}

export default Bootcamp;