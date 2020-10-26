import Tag from "../components/Tag";
import Award from "../components/Award";
export default function p6() {
    return (
      <div className="page" style={{background:"url(/img/p4.jpg)",backgroundSize:"cover",backgroundAttachment:"center"}}>
        <div className="border shadow"></div>
        <div className="centeralign">
          <div  className="title-con shadow" style={{marginTop:"20px"}}>
        <h1 className="title-text"> <Tag style={{fontSize:"3rem",letterSpacing:"3px"}} tagname="h1">รางวัลที่ภาคภูมิใจ</Tag></h1>
        </div>
        </div>
        <div className="container" style={{height:"50%",width:"70%",marginTop:"15px"}}>
        <div className="sixbytwo">
        <div className="haf">
        <Award imgp="/img/certi/cefr.jpg" caption="ผลการสอบ Oxford CEFR ระดับ B1 (2019)" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/efsetctf.jpg" caption="ผลการทดสอบ EFset CEFR ระดับ C1 (2020)" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/movie.jpg" caption="การแข่งขันศิลป่ะหัตถกรรมระดับชาติ ครั้งที่ ๖๙ หมวด หนังสั้น (เหรียญเงิน)" />
        </div>
        <div className="haf">
            {/* waiting for รด. */}
        <Award imgp="/img/certi/rotc.jpg" caption="เข้าร่วมการประกวด รด.นวัตกรรม" />
        </div>
            
        </div>

        </div>
      </div>
    )
  }
  