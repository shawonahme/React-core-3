import { useContext } from "react";
import Cousine from "../Cousine";
import { myContext } from "../../../../../App";


const Uncle = () => {
 const myGift = useContext(myContext)    
    return (
        <div > 
                <h1>I am from uncle</h1>
                <p>{myGift}</p>

                <div style={{
                    border:'2px solid green'
                }}>
                <Cousine></Cousine>
                </div>
        </div>
    );
};

export default Uncle;