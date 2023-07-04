import { Link } from 'react-router-dom';
import './Button.scss';
import Icon from '../icon/Icon';

/**
 * 
 * @param { text | isLink | justIcon | icon | extraClass | goTop | goTo | handleClick | isDisable | preventDefault } props 
 * @returns 
 */

function Button (props) {

    function goTop() {
        // Function to scroll to top of the detail page
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
        console.log('Vamos')
    }

    function handleClick (e) {
        if(props.goTop) {
            goTop();
        }
        if(props.preventDefault) {
            e.preventDefault();
        }
        props.handleClick()
    }

    return (
        <>
        { props.isLink ?

            <Link onClick={props.goTop ? goTop : ''} to={props.goTo} className={`btn linkAsBtn ${props.justIcon ? 'btnIcon' : ''} ${props.extraClass ? props.extraClass : ''}`}>
                {props.icon ? <Icon iconID={props.icon} /> : ''}
                {props.text ? props.text : ''}
            </Link>

        :

            <button onClick={(e) => handleClick(e)} className={`btn ${props.justIcon ? 'btnIcon' : ''} ${props.extraClass ? props.extraClass : ''}`} disabled={props.isDisabled}>
                {props.icon ? <Icon iconID={props.icon} /> : ''}
                {props.text ? props.text : ''}
            </button>

        }
        </>
    );
}

export default Button