import {SRLWrapper} from 'simple-react-lightbox'
const SmallPJ = (props)=>{
    return(
        
        <div className={props.twobytwo ? "pj-small pj-twobytwo " : "pj-small "} style={props.twobytwo && {width:"calc(50% - 30px)",flexDirection:"column"}}>
            <SRLWrapper>
            {props.twobytwo && <div className="pj-small-pic small-pic" style={{display:"block",width:"100%",position:"relative",height:"100px",borderRadius:"15px"}}>
                <img src={`/img/smallpj/${props.pjimg}.jpg`} style={{height:"auto",width:"100%"}} />
            </div>}

           {!props.twobytwo && <div className="pj-small-pic " style={props.picConHeight ? {height:`${props.picConHeight}`} : {}}>
           
                <img src={`/img/smallpj/${props.pjimg}.jpg`}/>
                
            </div>}
            </SRLWrapper>
            <div className="pj-small-description" style={props.twobytwo && {width:"100%",padding:"0"}}>
                <p className="pj-small-description-text" style={props.twobytwo ? {fontSize:"0.75rem"} : {boxSizing:'border-box',paddingLeft:"10px"}}>{props.children}</p>
                <div className="pj-small-bottom">
                <div className="pj-web pj-small-web">
    <a className="pj-web-text" href={`https://${props.url}`} target="blank" style={props.twobytwo && {fontSize:"0.75rem"}}>{props.url}</a>
                </div>
                <div className="small-framework">
                    {props.framework && props.framework.map(item=>{
                        return(
                            <img key={Math.random()} src={`/img/framework/${item}.jpg`} className="framework-logo shadow" />
                        )
                    })}
                </div>
                </div>
            </div>

        </div>
        
    )
}

export default SmallPJ