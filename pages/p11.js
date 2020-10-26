import Tag from "../components/Tag";
import SmallPJ from "../components/SmallProject";
import {SRLWrapper} from 'simple-react-lightbox'
export default function p10() {
    return (
      <div className="page" style={{background:"url(/img/p4.jpg)",backgroundSize:"cover",backgroundAttachment:"center"}}>
        <div className="border shadow"></div>
        <div className="centeralign">
          <div  className="title-con shadow" style={{marginTop:"20px"}}>
        <h1 className="title-text"> <Tag style={{fontSize:"3rem",letterSpacing:"3px"}} tagname="h1">กิจกรรม/โปรเจ็ค</Tag></h1>
        </div>
        </div>
        <div className="container" style={{height:"80%",width:"70%",marginTop:"15px"}}>
        <SmallPJ pjimg="thistine" framework={['nextjs','graphql','apollo','nodejs','react']} url="www.thistine.com" >
        เว็บไซต์ส่วนตัวของผมสำหรับใช้ ดูผลงาน รางวัล โปรเจ็กต์ ทั้งหมด ข้อมูลส่วนตัวที่สามารถเปิดเผยได้เกี่ยวกับตัวผมโดยสามารถดึงข้อมูลจาก backend api โดยใช้ graphql
        </SmallPJ>
        <SRLWrapper>
        <div className="activity">
            
            <div className="activity-con">
            <img src="/img/act/foodrive.jpg" className="activity-pic" />
            <p className="activity-parag"> กิจกรรม foodrive ช่วยเหลือผู้คนที่ได้รับ
ผลกระทบจากฮอริเคนในสหรัฐอเมริกาเมื่อ
ปี 2018 </p>
            </div>

            <div className="activity-con">
            <img src="/img/act/bed.jpg" className="activity-pic" />
            <p className="activity-parag"> กิจกรรมสร้างเตียงนอนสำหรับผู้ที่ได้รับ
ผลกระทบน้ำท่วมในสหรัฐอเมริจาเนื่อง
จากผลกระทบของ ฮอริเคน </p>
            </div>

            <div className="activity-con">
            <img src="/img/act/christ.jpg" className="activity-pic" />
            <p className="activity-parag"> กิจกรรมสร้างเตียงนอนสำหรับผู้ที่ได้รับ
ผลกระทบน้ำท่วมในสหรัฐอเมริจาเนื่อง
จากผลกระทบของ ฮอริเคน </p>
            </div>

            <div className="activity-con">
            <img src="/img/act/cookie.jpg" className="activity-pic" />
            <p className="activity-parag"> กิจกรรมอบคุกกี้สำหรับแจกจ่ายในวันคริสมาส </p>
            </div>
            
        </div>
        </SRLWrapper>
        </div>
      </div>
    )
  }
  