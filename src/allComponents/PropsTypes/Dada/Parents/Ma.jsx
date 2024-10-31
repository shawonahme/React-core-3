import { useContext } from "react";
import { countContext, myContext } from "../../../../App";


const Ma = () => {


    const [money] =useContext(countContext)
    return (
        <div>
            <h1>i am from ma</h1>
            <h1>{money}</h1>
        </div>
    );
};

export default Ma;