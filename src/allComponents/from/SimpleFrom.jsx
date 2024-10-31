

const SimpleFrom = () => {

    const onchange = (e)=>{
        e.preventDefault();

        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log
    }
    return (
        <div>
            


            <form onSubmit={onchange}>

            <input type="text"  name="name" placeholder="enter your name"/><br />
            <input type="email" name="email" placeholder="enter your email" /><br />
            <input type="password" name="password"  placeholder="password"/> <br />
            <input type="submit" />
            </form>
        </div>
    );
};

export default SimpleFrom;