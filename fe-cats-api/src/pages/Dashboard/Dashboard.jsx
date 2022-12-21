import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title='Dashboard - MeCat';
  }, []);

    return (
      <div className='dashboard flex flex-col w-full h-screen sm:w-3/4'>
        <div className='text-main-brown'>
          <h1>MeCat</h1>
        </div>
        <hr className='line my-1.5 w-4/5' />
        <div className='flex flex-col mt-3 w-4/5 space-y-2.5 items-center'>
          <div  onClick={() => navigate('/introduce-yours')} 
                className='main-btn w-full h-12 sm:w-4/5 sm:hover:w-full'>
            <h2>Introduce Yours</h2>
          </div>
          <div  onClick={() => navigate('/explore-colony')} 
                className='main-btn w-full h-12 sm:w-4/5 sm:hover:w-full'>
            <h2>Explore Colony</h2>
          </div>
          <div className='disable-btn w-full h-12 sm:w-4/5'>
            <h2>Coming Soon</h2>
          </div>
        </div>
      </div>
    )
}
  
export default Dashboard;
