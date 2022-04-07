import {NbMessage} from "./components/"
export default function IndexHome(){
  return (
      <div onClick={()=>{
        NbMessage.success({
          content:'45'
        })
      }}>index - home</div>
  )
}