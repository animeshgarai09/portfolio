import Error from '../public/png/404.png'
import Header from '../components/Header';
import Image from 'next/image'
const NotFound = () => {
    return (
        <>
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
