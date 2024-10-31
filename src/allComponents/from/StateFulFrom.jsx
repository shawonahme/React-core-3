import { useState } from "react";


        const StateFulFrom = () => {

            const [name,setName] = useState("")
            const onchange = e =>{

                e.preventDefault()
                console.log(name)
                console.log(email)
          
            }
          
           const onChangeName = e =>{

            setName(e.target.value);
            
           }

           const [email,setEmail] = useState(null)
           const onchangeEmail = e =>{
            setEmail(e.target.value)
           }
           
            return (
                <div>

                    <form onSubmit={onchange}>

                    <input onChange={onChangeName} type="text" name="name" /><br />
                    <input onChange={onchangeEmail} defaultValue={'shawonahme@gmail.com'} type="email" name="email" placeholder="enter your email" /><br />
                    <input type="password" name="password"  placeholder="password"/> <br />
                    <input type="submit" />
                    </form> 
                </div>
            );
        };

        export default StateFulFrom;