import Tag from "../components/Tag";
import {SRLWrapper} from 'simple-react-lightbox'
export default function p5() {
    return (
      
      <div className="page" style={{background:"url(/img/p4.jpg)",backgroundSize:"cover",backgroundAttachment:"center"}}>
        
        <div className="border shadow"></div>
        <div className="centeralign">
          <div  className="title-con shadow" style={{marginTop:"20px"}}>
        <h1 className="title-text"> <Tag style={{fontSize:"3rem",letterSpacing:"3px"}} tagname="h1">รางวัลที่ภาคภูมิใจ</Tag></h1>
        </div>
        </div>
        
        <div className="container" style={{height:"50%",width:"70%",marginTop:"15px"}}>
        <div className="p5pic">
        <SRLWrapper>
            <img src="/img/certi/p5pic1.jpg" style={{width:"100%"}} />
            </SRLWrapper>
        </div>
        <div className="twopiconebigcap">
            <div className="one" style={{boxSizing:"border-box",padding:"0 5px"}}>
            <SRLWrapper>
           <img src="/img/certi/memofcong.jpg" width="100%" />
           </SRLWrapper>
            </div>
            <div className="two" style={{boxSizing:"border-box",padding:"0 5px"}}>
            <SRLWrapper>
            <img src="/img/certi/senate.jpg" width="100%" />
            </SRLWrapper>
            </div>
            <div className="three">
            <div className="text-con shadow">
            <p>เข้าร่วมพูดคุยแลกเปลี่ยนความคิด ทางด้านการเมือง/สิ่งแวดล้อม
            วัฒนธรรม และอื่น ๆ กับ สมาชิกสภาผู้แทนราษฎร และ วุฒิสามาชิก
            THOM TILLIS และ DAVID ROUZER จากรัฐ NORTH CAROLINA
            และได้รับเกียรติบัตรจกการทำกิจกรรมสาธารณะประโยชน์ต่าง ๆ ให
            กับรัฐ</p>
            </div>
            
            </div>
        </div>

        </div>
        
      </div>
    )
  }
  