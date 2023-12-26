
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center h-[600px]'>
            <div className='space-y-6 text-center'>
                <h1 className='text-3xl font-semibold'>404!</h1>
                <p className='text-lg font-medium'>Sorry! No Page is Found</p>
                <p><Link to={'/'}><button className='btn btn-primary  '>Go Home</button></Link></p>
            </div>
            
        </div>
    );
};

export default ErrorPage;