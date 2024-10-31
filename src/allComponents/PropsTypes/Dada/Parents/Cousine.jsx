import { useContext } from "react";
import { myContext } from "../../../../App";


const Cousine = () => {
    const www = useContext(myContext)
    return (
        <div>
             <h1>
                I am from cousine
                </h1>
                <p>
                    {www}
                </p>
            
        </div>
    );
};

export default Cousine;