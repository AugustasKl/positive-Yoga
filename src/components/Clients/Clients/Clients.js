import Button from '../../utils/Button'
import classes from './Clients.module.css'
import ClientsList from '../ClientsList/ClientsList'


//Clients component is responsible for rendering ClientsList and Button components

const Clients=()=>{
    return(
        <section className={classes.clients}>
            <h2>Hear success stories from our clients</h2>
            <ClientsList/>
            <Button>Get my plan</Button>
        </section>
    )
}
export default Clients