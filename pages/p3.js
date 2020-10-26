import Tag from "../components/Tag";
import Progress from "../components/Progressbar";
export default function p3() {
    return (
      <div className="page" style={{background:"url(/img/p3.jpg)",backgroundSize:"cover",backgroundAttachment:"center"}}>
        <div className="border shadow"></div>
        <div className="centeralign">
          <div style={{position:"absolute",bottom:"0",background:"white",padding:" 0 10px",borderRadius:"5px"}}><p>*ความถนัดทั้งหมดวัดโดยความถี่ในการใช้และความเข้าใจในภาษานั้น ๆ ของผม</p></div>
          <div  className="title-con shadow" style={{marginTop:"20px"}}>
        <h1 className="title-text"> <Tag style={{fontSize:"3rem",letterSpacing:"3px"}} tagname="h1">Skill & Aptitude</Tag></h1>
        </div>
        </div>
        <div className="container container-width" style={{height:"50%",width:"80%"}}>

        <div className="ab-skill shadow" style={{height:"45%"}}>
        <div style={{width:"50%",boxSizing:'border-box',padding:"10px"}}>
        <h1 className="sec-title">ความสามารถในการเขียนโปรแกรมโดยรวม</h1>
        <Progress width="90%" bg="#e74c3c" ani={{data:"flip-up",delay:"100"}} title="back-end-website"/>
        <Progress width="85%" bg="#e74c3c" ani={{data:"flip-up",delay:"200"}} title="Front-end-website"/>
        </div>
        <div style={{width:"50%",boxSizing:'border-box',padding:"10px"}}>
        <Progress width="60%" bg="#e74c3c" ani={{data:"flip-up",delay:"300"}} title="Android Application Development"/>
        <Progress width="50%" bg="#e74c3c" ani={{data:"flip-up",delay:"400"}} title="Artificial Intelligence (AI) Development"/>
        </div>
        </div>

        <div className="ab-skill shadow">
            <div style={{width:"50%",boxSizing:'border-box',padding:"10px"}}>
          <h1 className="sec-title">ความถนัดทางด้านภาษาคอมพิวเตอร์</h1>
            <Progress width="96%" bg="#f1c40f" title="Javascript & Typescript"/>
            <Progress width="92%" bg="#e74c3c"  title="HTML & CSS"/>
            <Progress width="90%" bg="#6EC1E4"  title="PHP"/>
            <Progress width="80%" bg="#3498db"  title="Python"/>
            <Progress width="88%" bg="#e67e22"  title="SQL"/>
            <Progress width="75%" bg="#e67e22"  title="C++/C#"/>
            <Progress width="70%" bg="#2980b9"  title="Dart"/>
            <Progress width="65%" bg="#f39c12"  title="Java"/>
            <Progress width="50%" bg="#2980b9"  title="kotlin"/>
            </div>
            <div style={{width:"50%",boxSizing:'border-box',padding:"10px"}}>
            <h1 className="sec-title">ความถนัดทางด้านLibrary/Frameworks</h1>
            <Progress width="92%" bg="#8bf6ff" title="React"/>
            <Progress width="90%" bg="#087f23" title="NodeJS"/>
            <Progress width="92%" bg="#8bf6ff" title="ReactNative"/>
            <Progress width="80%" bg="#ffeb3b" title="Jquery"/>
            <Progress width="65%" bg="#001064" title="Nextjs"/>
            <Progress width="75%" bg="#03a9f4" title="Flutter"/>
            <Progress width="75%" bg="#2e7d32" title="Django"/>
            <Progress width="70%" bg="#8e44ad" title="Bootstrap"/>
            <Progress width="65%" bg="#e74c3c" title="Vuejs & Angularjs"/>
            </div>
        </div>

        </div>
      </div>
    )
  }
  