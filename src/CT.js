import './App.css'
export default function Ct(prop){
    return(
    <section>
        <div className="CT">
        <h1>Want to Contact Us?</h1>
        <button onClick={prop.handleClick}> Get Details</button>
        </div>
        

    </section>)
}