import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './IntroduceYours.css'

function IntroduceYours() {
  const navigate = useNavigate();

  const notif = {
      emptyFieldMsg: 'All fields must be filled!',
      invalidAgeMsg: 'Age cannot be negative!',
      msg: 'Refer to placeholders as guidance.',
  }; 

  const submitHandler = async (e) => {
      e.preventDefault();

      const name = document.querySelector("[name='name']").value.trim();
      const age = document.querySelector("[name='age']").value.trim();
      const furcolor = document.querySelector("[name='furcolor']").value.trim();
      const type = document.querySelector("[name='type']").value.trim();
      const owner = document.querySelector("[name='owner']").value.trim();
      const photo = document.querySelector("[name='photo']").value.trim();

      const emptyField = name.length==0 || age.length==0 || furcolor.length==0 ||
            type.length==0 || owner.length==0 || photo.length==0;
      const invalidAge = parseInt(age) < 0;

      //  showing notification
      if(emptyField || invalidAge) {
          const notification = document.getElementById('notif_container');
          const emptyFieldMsg = document.getElementById('emptyFieldMsg');
          const invalidAgeMsg = document.getElementById('invalidAgeMsg');
          emptyField ? emptyFieldMsg.innerHTML = notif.emptyFieldMsg :  emptyFieldMsg.innerHTML = '';
          invalidAge ? invalidAgeMsg.innerHTML = notif.invalidAgeMsg : invalidAgeMsg.innerHTML = '';
          notification.style.display = 'flex';
      } else {
          const notification = document.getElementById('notif_container');
          notification.style.display = 'none';

          // post method action
          try {
              const response = await axios.post('https://cats-api-seven.vercel.app/add-cat', {
                name: name,
                age: age,
                furcolor: furcolor,
                type: type,
                owner: owner,
                photo: photo,
              }, { 
                  headers: {
                    "Content-Type": "application/json",
              }});
          } catch (error) {
            console.log('Error: ' + error.message);
          } finally {
            navigate('/explore-colony');
          }
      }
  };

  useEffect(() => {
    document.title='Introduce Yours - MeCat';
  }, []);

    return (
        <>  
            <div id='notif_container' className='fixed top-0 justify-center w-full mt-7 sm:mt-10'>
                <div className='notif flex flex-col py-4 w-3/4 sm:w-3/5 text-center'>
                    <p id='emptyFieldMsg'></p>
                    <p id='invalidAgeMsg'></p>
                    <p>{ notif.msg }</p>
                </div>
            </div> 
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
                                type='text' placeholder='Papa Dolky' name='name'
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
        </>
    )
}
  
export default IntroduceYours;
