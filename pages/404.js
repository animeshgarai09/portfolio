import Error from '../public/svg/404.png'
import AppHead from '../constants/AppHead';
import Header from '../components/Header';
import Image from 'next/image'
const NotFound = () => {
    return (
        <>
            <AppHead title='Not found - Portfolio' />
            {/* <Header mbload={false}/> */}
            <div className='con_404'>
                < Image
                    src={Error}
                    alt='Page not found'
                    priority='true'
                    layout="fill"
                    quality='75'
                    placeholder='blur'
                    className="img_404"
                />
            </div>
        </>
    )
}

export default NotFound
