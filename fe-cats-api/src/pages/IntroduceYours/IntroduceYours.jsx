import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './IntroduceYours.css'

function IntroduceYours() {
  const navigate = useNavigate();
  const submitHandler = (e) => {
      console.log('Submit button clicked!')
  };

  useEffect(() => {
    document.title='Introduce Yours - MeCat';
  }, []);

    return (
      <div className='idy flex flex-col w-full h-screen sm:w-3/4'>
        <div className='text-main-brown'>
          <h1>Introduce Yours</h1>
        </div>
        <hr className='line my-1.5 w-4/5' />
        <div className='flex flex-col mt-3 w-4/5 space-y-0.5 items-center'>
            {/* form rows */}
            <div className='flex w-full h-10 items-center'>
                <div className='idy-label flex pr-3 w-5/12 h-full '>
                    <p>Name</p>
                </div>
                <div className='idy-input flex w-7/12 h-full '>
                    <input className='w-full h-4/5 placeholder:italic' required
                        type='text' placeholder='Papa Dolky' name='name' minLength='1'
                    />
                </div>
            </div>
            <div className='flex w-full h-10 items-center'>
                <div className='idy-label flex pr-3 w-5/12 h-full '>
                    <p>Age</p>
                </div>
                <div className='idy-input flex w-7/12 h-full '>
                    <input className='w-full h-4/5 placeholder:italic' required
                        type='number' placeholder='7' name='age' min='0'
                    />
                </div>
            </div>
            <div className='flex w-full h-10 items-center'>
                <div className='idy-label flex pr-3 w-5/12 h-full '>
                    <p>Fur Color</p>
                </div>
                <div className='idy-input flex w-7/12 h-full '>
                    <input className='w-full h-4/5 placeholder:italic' required
                        type='text' placeholder='Orange Stripes' name='furcolor'
                    />
                </div>
            </div>
            <div className='flex w-full h-10 items-center'>
                <div className='idy-label flex pr-3 w-5/12 h-full '>
                    <p>Type</p>
                </div>
                <div className='idy-input flex w-7/12 h-full '>
                    <input className='w-full h-4/5 placeholder:italic' required
                        type='text' placeholder='Persian' name='type'
                    />
                </div>
            </div>
            <div className='flex w-full h-10 items-center'>
                <div className='idy-label flex pr-3 w-5/12 h-full '>
                    <p>Owner</p>
                </div>
                <div className='idy-input flex w-7/12 h-full '>
                    <input className='w-full h-4/5 placeholder:italic' required
                        type='text' placeholder='Rava Attar' name='owner'
                    />
                </div>
            </div>
            <div className='flex w-full h-10 items-center'>
                <div className='idy-label flex pr-3 w-5/12 h-full '>
                    <p>Photo Link</p>
                </div>
                <div className='idy-input flex w-7/12 h-full '>
                    <input className='w-full h-4/5 placeholder:italic' required
                        type='url' placeholder='https://photo.link/here' name='photo'
                    />
                </div>
            </div>
            {/* form rows */}
        </div>
        <div onClick={(e) => submitHandler(e)} className='main-btn flex mt-5 w-4/5 h-12 sm:w-2/3 sm:hover:w-4/5'>
            <h2>Submit</h2>
        </div>
      </div>
    )
}
  
export default IntroduceYours;
