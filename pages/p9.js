import Tag from "../components/Tag";
import Project from "../components/Project";
export default function p9() {
    const img1 = {folder:"short", file:[["1"],["2"],["3"],["4"]]}
    const img2 = {folder:"class", file:[["1"],["2"],["3"],["4"],['5']]}
    return (
      <div className="page" style={{background:"url(/img/p4.jpg)",backgroundSize:"cover",backgroundAttachment:"center"}}>
        <div className="border shadow"></div>
        <div className="centeralign">
          <div  className="title-con shadow" style={{marginTop:"20px"}}>
        <h1 className="title-text"> <Tag style={{fontSize:"3rem",letterSpacing:"3px"}} tagname="h1">กิจกรรม/โปรเจ็ค</Tag></h1>
        </div>
        </div>
        <div className="container" style={{height:"80%",width:"70%",marginTop:"15px"}}>
        <Project description="โปรเจกต์ open source สำหรับย่อลิงค์/กำหนดรหัสผ่าน และ
            สร้าง QR code พร้อมระบบ Admin จัดการข้อมูล" picConHeight="55%" framework={['php','jquery','mysql']} url="github.com/ThisTine/shorturl">
            {img1.file.map(item=>{return(
                <img key={Math.random()} src={`/img/${img1.folder}/${item[0]}.jpg`} className={item[1] ? item[1] : "pj-img"} />
            )})}
        </Project>

        <Project description="Class-schedule โปรเจกต์ open source สำหรับการจัดการ
ห้องเรียน - ตารางเรียน - วันหยุด (สำหรับในช่วง covid19 ที่ให้นักเรียนมาได้แค่ 25 คนต่อห้อง) ในรูปแบบ PWA ที่สามารถใช้งานได้แบบ offline
" picConHeight="50%" framework={['react']} url="github.com/ThisTine/class-schedule">
            {img2.file.map(item=>{return(
                <img key={Math.random()} src={`/img/${img2.folder}/${item[0]}.jpg`} className={item[1] ? item[1] : "pj-img"} />
            )})}
            
        </Project>

        </div>
      </div>
    )
  }
  