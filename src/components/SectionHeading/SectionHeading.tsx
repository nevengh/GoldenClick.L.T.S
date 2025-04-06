import './SectionHeading.css'

interface SectionHeadingProps{
    subTitle:string;
    MainTitle:string;
    MainSpan:string;
}
const SectionHeading = ({subTitle,MainTitle,MainSpan}:SectionHeadingProps) => {
  return (
    <div className='SectionHeading'>
        <h4>{subTitle}</h4>
        <h1>{MainTitle} <span>{MainSpan}</span> </h1>
    </div>
  )
}

export default SectionHeading