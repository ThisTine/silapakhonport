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
        <Award imgp="/img/certi/oeg.jpg" caption="เข้าร่วมโปรแกรมนักเรียนแลกเปลี่ยน ณ ประเทศ สหรัฐอเมริกา ปี 2019-2020" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/etech.jpg" caption="รางวัลชนะเลิศ Computer Graphic & Homepage Contest" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/Nextjs.png" caption="เข้าร่วม nextjs conf 2020" />
        </div>
        <div className="haf">
        <Award imgp="/img/certi/aws.jpg" caption="เข้าร่วม AWS | AWSOME DAY" />
        </div>
            
        </div>

        </div>
      </div>
    )
  }
  