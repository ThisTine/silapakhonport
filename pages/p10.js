import Tag from "../components/Tag";
import SmallPJ from "../components/SmallProject";
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
        <div style={{display:"flex",flexWrap:"wrap"}}>
        <SmallPJ pjimg="yearbook" framework={['nextjs','react']}  url="yearbook.thistine.com/" twobytwo={true}>
            Yearbook เว็บทำเนียบรุ่นรองผู้อำนวยการสถานศึกษาสังกัดสำนักงานศึกษาธิการจัดหวัดฉะเชิงเทราประจำปี 2563 โดยใช้ข้อมูลจาก google form เป็นฐานข้อมูลผ่าน google sheet
        </SmallPJ>
        <SmallPJ pjimg="ourop" framework={['nextjs','react']} url="thistine.com/ouropinions/" framework={['react']} twobytwo={true}>
        เว็บไซต์สำหรัมแสดง/รับฟังความคิดเห็น ภายในโรงเรียนโดยเรียกข้อมูลจาก google form ในรูป
        แบบ json เพื่อนำมาประมวลและแสดงผลผ่านหน้าเว็บอัตโนมัติ
        </SmallPJ>

        <SmallPJ pjimg="rotc" framework={['nextjs','react']} url="thistine.com/rotc/" framework={['php','jquery']} twobytwo={true}>
        เว็บไซต์เช็คชื่อนักเรียนสำหรับนักศึกษาวิชาทหารภายในศูนย์ฝึกนั้น ๆ ผ่านการ แสกน Barcode ภายในบัตรนักศึกษา
        โดยสามารถเรียกดูประวัติย้อนหลังและปริ้นเอกสารออกมาใช้ได้
        </SmallPJ>

        <SmallPJ pjimg="googlehome" framework={['nodejs','gcp','twitterdev']}  url="s.thistine.com/twapi" twobytwo={true}>
        Twitter Api - โปรเจกต์ open source สำหรับเรียกข้อมูลจาก
        twitter api นำมาประมวลผลผ่าน Nodejs
        และเรียกใช้งานผ่าน google home โดยใช้
        คำสั่งที่กำหนดเอง
        </SmallPJ>

        </div></div>
      </div>
    )
  }
  