import Award from "../components/Award";
import Tag from "../components/Tag";
export default function p5() {
    return (
      <div className="page" style={{background:"url(/img/p4.jpg)",backgroundSize:"cover",backgroundAttachment:"center"}}>
        <div className="border shadow"></div>
        <div className="centeralign">
          <div  className="title-con shadow" style={{marginTop:"20px"}}>
        <h1 className="title-text"> <Tag style={{fontSize:"3rem",letterSpacing:"3px"}} tagname="h1">รางวัลที่ภาคภูมิใจ</Tag></h1>
        </div>
        </div>
        <div className="container" style={{height:"50%",width:"55%",marginTop:"15px"}}>
        <div className="twoinpage">
            <div className="one">
            <Award imgp="/img/certi/webapp.jpg" caption="การแข่งขันศิลปหัตถกรรมระดับชาติ ครั้งที่ ๖๙ หมวด Web applications (เหรียญทอง)"/>
            </div>
            <div className="two">
            <Award imgp="/img/certi/ctf.jpg" caption="เข้าร่วมการแข่งขันทักษะด้านความมั่นคงไซเบอร์ (Royal Thai Air Force Junior CTF 2020) "/>
            </div>
        </div>

        </div>
      </div>
    )
  }
  