import Baba from "./Parents/Baba";
import Ma from "./Parents/Ma";
import Uncle from "./Parents/uncle/Uncle";


const Dada = () => {
    const myName = 'shawon'
    return (
        <>
        <h1>I am From Dada</h1>
       <div style={
        {
             border:'2px solid red',
             padding:'30px',display:'flex',justifyContent:'space-around',
             gap:'10px'
        }
       }>
      
        <div style={{  border:'2px solid red',padding:'10px'}}>
            
            <Baba></Baba>
            
        </div>
        <div style={{  border:'2px solid red',padding:'10px'}}>
            
            <Uncle myName={myName}></Uncle>
            
        </div>
        <div style={{  border:'2px solid red',padding:'10px'}}>
            
       <Ma></Ma>
            
        </div>
       
       </div>
       </>
    );
};

export default Dada;