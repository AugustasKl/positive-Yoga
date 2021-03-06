import bulletPoint from './../../../assets/svg/bulletPoint.svg'
import classes from './BulletItem.module.css'

// BulletItem component received data from BulletSection uses it in order
// to render the selected arguments to user.

const BulletItem=(props)=>{
    return(
    <li className={classes.bullet}>
        <img src={bulletPoint} alt="bulletpoint logo"/>
        <div className={classes.text}>{props.bullet}</div>
    </li>
    )
}
export default BulletItem