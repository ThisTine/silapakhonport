import SmallPJ from "../components/SmallProject";
export default function Home() {
  return (
    <div className="page" style={{background:"url(/img/p1.jpg)",backgroundSize:"cover",backgroundAttachment:"center"}}>
      <div className="centeralign">
        <div  className="title-con shadow" style={{marginTop:"20px"}}>
      <h1 className="title-text" style={{letterSpacing:"10px"}} >PORTFOLIO</h1>
      </div>
      </div>
      <div className="homeqr">
          <div className="qrcode">
            <img className="qrcodeimg" src="/img/suqr.png"/>
            <p>Portfolio เล่มนี้ถูกจัดทำขึ้นโดยภาษา javascript ผ่าน Nextjs (แสกนเพื่อดู source code)</p>
            <div className="pj-text-con"><a className="pj-web-text" href='https://s.thistine.com/su' target="blank" style={{fontSize:"0.6rem"}} >https://s.thistine.com/su</a> </div>
            
          </div>
        </div>
      <div className="border shadow"></div>
      <div className="bottom" style={{paddingBottom:"70px"}}>
        <div className="container">
        <div className="name ">
        <p className="label" style={{margin: "0 10px",marginTop:"-20px",position:"absolute",left:"0"}}>นาย สิทธิโชค อ่วมศิริ</p>
        <h1 className="sans name-title firstname" style={{textTransform:"uppercase"}}>Sittichok</h1>
        <h1 className="sans name-title sername" style={{textTransform:"uppercase",textAlign:"right",margin: "-30px 0 0 0"}}>Ouamsiri</h1>
        <div className="school">
          <p className="label" style={{margin: "0 10px"}}>School</p>
          <h2 className="school-title" style={{fontSize:"1.5rem",letterSpacing:"3px"}}>Phanomsarakham "Phanom Adun Witthaya"</h2>
        </div>
        <div className="uniname">
          <div className="uniname-bottom">
          <div className="uniname-top">
            <p className="label uniname-label-name">SU</p>
            <p className="label uniname-label-name">มหาวิทยาลัยศิลปากร</p>
          </div>
            <p className="label uniname-label">สาขาวิศวกรรมอิเล็กทรอนิกส์และระบบคอมพิวเตอร์</p>
          </div>
        </div>

        </div>

        </div>
      </div>
    </div>
  )
}
