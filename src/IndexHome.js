import {NbMessage} from "./components/"
console.log(NbMessage);
export default function IndexHome(){
  return (
      <div onClick={()=>{
        NbMessage.success({
          content:'45'
        })
      }}>index - home</div>
  )
}