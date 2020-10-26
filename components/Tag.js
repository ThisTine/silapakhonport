export default function Tag(props){
    return(
        <span className="tag">
            <span> {"<"} </span>
            <span> 
            {props.tagname}
            </span>
            <span> {">"} </span>
            <span style={props.style ? props.style : {}}>{props.children}</span>
            <span> {"</"} </span>
            <span > 
            {props.tagname}
            </span>
            <span> {">"}  </span>
        </span>
    )
}