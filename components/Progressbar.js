const Progress = (props)=>{
    const style = {width:props.width,background:props.bg};
    return(
        <div className="progress">
            <h1 >{props.title}</h1>
            <div  className="progress-bar">
                <div >
                <div className="progress-inner" style={style}> {props.width} </div>
                </div>
            </div>
        </div>
    )
}
export default Progress
