import './css/style.css'
import {useState,useEffect} from 'react'
import {useRouter} from 'next/router'
import SimpleReactLightbox from "simple-react-lightbox";
import Head from 'next/head'
export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [pagenum,setpagenum] = useState(0)
  const [ispagenumshow,setisnumbershow] = useState(false)
  const split = ()=>{
    if(router.pathname === '/'){
      setisnumbershow(true)
      setpagenum(1)
    }
    if(router.pathname && router.pathname.includes('p')){
      const splitpath = router.pathname.split('p')
      if(splitpath.length === 2){
        if(parseInt(splitpath[1])){
          const pagenumber = parseInt(splitpath[1])
          setpagenum(pagenumber)
          setisnumbershow(true)
          console.log(pagenumber)
        }
      }
    }
  }
  const keyhandle = (e)=>{
    if(pagenum !== 0){
      if(e.code === "ArrowRight"){
        if(pagenum === 12){
          return push('rep')
        }
        push('plus')
      }
      if(e.code === "ArrowLeft"){
        if(pagenum !== 1){
          push('div')
        }
      }

    }

  }
  useEffect(()=>{
    document.addEventListener("keydown", keyhandle, false);
    return () => {
      document.removeEventListener("keydown", keyhandle, false);
    };
  })
  useEffect(()=>{
    split()
  },[router])
  const push = (opa)=>{
    if(opa === 'rep'){
      return router.push('/')
    }
    let pagenumber
    if(opa === 'div'){
    pagenumber = (pagenum - 1).toString()
     console.log(pagenumber)
    }
    else if(opa === 'plus'){
     pagenumber = (pagenum + 1).toString()
     console.log(pagenumber)
    }else {
      return console.log("Wrong !")
    }
    if(opa === 'div' && pagenum === 2){
      return router.push('/')
    }
    router.push(`/p${pagenumber}`)
    
  }
    return (
    <>
    <Head>
      <title>PORTFOLIO | นาย สิทธิโชค อ่วมศิริ | มหาวิทยาลัยศิลปากร</title>
      <meta name="robots" content="noindex" />
    </Head>
{ispagenumshow &&( <>    {pagenum !== 1 && (<button className="backarrow" onClick={()=>{push('div')}}> 👈 </button>)}
    <button className="forward" onClick={()=>{
      if(pagenum === 12){
        push('rep')
      }else{
        push('plus')
      }
      }}> 👉 </button> </>)}
      <SimpleReactLightbox>
      
    <Component {...pageProps} />
    </SimpleReactLightbox>
    </>)
  }