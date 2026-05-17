import swimming from '../assets/swimming.png'
import playGround from '../assets/playground.png'
import Class from '../assets/class.png'

const QZone = () => {
    return (
        <div className='bg-base-200 p-7 space-y-5'>
            <img src={swimming} alt="" />
            <img src={Class} alt="" />
            <img src={playGround} alt="" />
        </div>
    );
};

export default QZone;