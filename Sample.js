import Loop1 from './Loop1.mp4';
import ScrollImg from './Scroll.jpeg';

const App = () => 
{
  return (
    <div style={{height: "100vh"}}>
      <video autoPlay={true} muted loop={true} id="myVideo" style={{height:"100vh", width:"100%", objectFit:"cover"}}>
        <source src={Loop1} type="video/mp4" />
      </video>
      <div style={{position: "absolute", width:"1000px", height:"100%", top:"-3px", left:"180px"}}>
        <img src={ScrollImg} style={{width:"inherit", height:"inherit"}}/>
      </div>
    </div>
  );
}
}
export default App;
