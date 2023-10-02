import '../styles/Shimmer.css';
import '../styles/ShimmerAnimation.css';

const ShimmerCard = (i) =>{
  return(
    <div className="shimmer-card" key={i}>
      <div className='shimmer-img animation'></div>
      <div className='shimmer-title animation'></div>
      <div className='shimmer-subtitle animation'></div>
      <div className='shimmer-star-rate'>
        <div className='shimmer-star animation'></div>
        <div className='shimmer-rate animation'></div>
      </div>
    </div>
  )
}
const Shimmer = () => {
  return (
    
      <div className="shimmer-container">

        {
          Array(10).fill("").map((e,i)=>{

          return (<ShimmerCard i={i} />)
          })
        }
        
      </div>
    
  );
};
export default Shimmer;
