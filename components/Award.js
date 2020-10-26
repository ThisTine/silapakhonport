import {SRLWrapper} from 'simple-react-lightbox'
export default function Award({imgp,caption}){
    return(
        <SRLWrapper>
        <div className="award shadow">
        <img src={imgp} className="awardpic"/>
         <p className="awardcap">{caption}</p>
        </div>
        </SRLWrapper>
    )
}