import './LightBtn.css'
interface LightBtnProps{
    BtnName:string;

}
const LightBtn = ({BtnName}:LightBtnProps) => {
  return (
    <div className="lets-talk-now">
    <button className="lets-talk-btn">
        {BtnName}

        <span className="span">→</span>
    </button>
  </div>
  )
}

export default LightBtn