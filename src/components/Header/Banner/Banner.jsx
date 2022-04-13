import './Banner.css'

const Banner = ({message}) => {
    return ( <div className="banner">
        <h3 className='banner-text'>{message}</h3>
        <button className='btn-invite'>Invite Now</button>
    </div> );
}
 
export default Banner;