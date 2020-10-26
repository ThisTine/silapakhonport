import Tag from "../components/Tag";
export default function p2() {
    return (
      <div className="page" style={{background:"url(/img/p2.jpg)",backgroundSize:"cover",backgroundAttachment:"center"}}>
        <div style={{width:"100%",height:"100%",overflow:"hidden",position:"absolute"}} >
        <img src="/img/p2-2.png" style={{height:"100%",zIndex:"3",position:"absolute",pointerEvents:"none"}}/>
        </div>
        <div className="centeralign">
          <div  className="title-con shadow" style={{marginTop:"20px"}}>
        <h1 className="title-text"> <Tag style={{fontSize:"3rem",letterSpacing:"3px"}} tagname="h1">About me</Tag></h1>
        </div>
        </div>
        <div className="ab-layout container  container-width">
          <div className="ab-bg shadow">
            <span style={{position:"absolute",top:"0",right:"0",padding:"20px"}}>X</span>
            <div className="ab-basic">
              <h1 style={{width:"100%"}}> <Tag style={{fontSize:"1.25rem",letterSpacing:"3px"}} tagname="h2">Basic Info</Tag> </h1>
              <div style={{width:"70%"}}>
                <p className="ab-basic-text"> <span className="label ab-label">Name</span> นาย สิทธิโชค อ่วมศิริ</p>
                <p className="ab-basic-text"> <span className="label ab-label">birth day</span> 14 กุมภาพันธ์ 2546</p>
                <p className="ab-basic-text"> <span className="label ab-label">Dad</span>นาย xxxx อ่วมศิริ</p>
                <p className="ab-basic-text"> <span className="label ab-label">Mom</span>นาง xxxx อ่วมศิริ</p>
                </div>
              <div style={{width:"30%"}}>
                <p className="ab-basic-text"> <span className="label ab-label">Age</span> 17 ปี</p>
                <p className="ab-basic-text"> <span className="label ab-label">Nationality</span> ไทย</p>
                </div>
                <div style={{width:"100%"}}>
                <p className="ab-basic-text"> <span className="label ab-label">Study Abord</span> Clayton High school, North Carolina</p>
                <p className="ab-basic-text"> <span className="label ab-label">กำลังศึกษาอยู่</span> โรงเรียนพนมสารคาม "พนมอดุลวิทยา"</p>
                <p className="ab-basic-text" style={{marginLeft:"40px"}}> <span className="label ab-label">แผนการเรียน</span> วิทย์-คณิต</p>
                </div>
            </div>
            <div className="ab-basic">
              <div style={{width:"20%"}}></div>
            <h1 style={{width:"80%",textAlign:"left"}}> <Tag style={{fontSize:"1.25rem",letterSpacing:"3px"}} tagname="h2">Contact</Tag> </h1>
              <div style={{width:"100%"}}>
                <p style={{marginLeft:"30px"}} className="ab-basic-text"> <span style={{whiteSpace:"nowrap",alignItems:"center",display:"flex"}} className="label ab-label">ที่อยู่ปัจจุบัน</span> xxx หมู่ xxx ต.xxxx อ.xxxx จ.xxxxxx xxxxx</p>
                <p className="ab-basic-text" style={{marginLeft:"30px"}}> <span className="label ab-label">Website</span> www.thistine.com</p>
                <p className="ab-basic-text space" style={{marginLeft:"90px"}}> <span className="label ab-label">Phone number</span>xxxx</p>
                <p style={{marginLeft:"120px"}} className="ab-basic-text space"> <span className="label ab-label">Facebook</span>Sittichok Uamsiri</p>
                </div>
            </div>
            <div className="ab-hobby">
              <div  style={{width:"90%",display:'flex',justifyContent:"flex-end"}}>
                <h1  style={{fontSize:"2rem"}}> <Tag style={{fontSize:"1.25rem",letterSpacing:"3px"}} tagname="h2">Hoppies</Tag> </h1>
              </div>
              <div className="spas" style={{width:"100%",marginLeft:"150px"}}>
                <ol style={{margin:"10px 0 0 0 "}}>
                  <li><p>ทดลองเขียนโปรแกรม</p></li>
                  <li><p>ถ่ายรูป</p></li>
                  <li><p>ดูหนัง/อนิเมะ</p></li>
                </ol>
              </div>
              
              <div ></div>
            </div>
          </div>
        </div>
        <div className="border shadow"></div>
      </div>
    )
  }
  