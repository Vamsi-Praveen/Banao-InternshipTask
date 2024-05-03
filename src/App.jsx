import { Info, MapPin, Pencil, X } from 'lucide-react';
import React, { useState } from 'react';
import Banner from './components/Banner';
import Header from './components/Navbar';
import Navigation from './components/Navigation';
import Feed from './components/Feed';
import FeedAnnounce from './components/FeedAnnounce';
import RecommendedGroups from './components/RecommendedGroups';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [signUpForm, setSignUpForm] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  return (
    <>
      <div className='relative'>
        <Header modal={setModalOpen} isLogin={isLogin} />
        <Banner />
        <main className='min-h-screen w-full md:px-28 px-1 pb-6'>
          <div className='py-3 px-2'>
            <Navigation />
          </div>
          <div className='w-full flex pt-3'>
            <div className='flex-1 md:px-5 px-2'>
              <div className='flex flex-col gap-3'>
                <Feed title={'What if famous brands had regular fonts? Meet RegulaBrands!'} avatar={'/pic1.jpeg'} image={'/post1.jpeg'} name={"Sharan Kumar"} category={'Article'} />
                <Feed title={'Tax Benefits for Investment under National Pension Scheme launched by Government'} avatar={'/pic2.jpeg'} image={'/post2.jpeg'} name={"Sarah West"} category={'Education'} />
                <FeedAnnounce avatar={'/pic3.jpeg'} image={'/car.jpeg'} negative btnText={'Visit Website'} name={"Ronal Jones"} time={'Fri,12 Oct,2018'} location={'Ahemadabad, India'} category={"Meetup"}
                  title={'Finance & Investment Elite Social Mixer @Lujiazui'}
                />
                <FeedAnnounce avatar={'/pic4.jpeg'} positive btnText={'Apply on Timejobs'} name={"Joseph Gray"} location={'Nodia, India'} category={"Job"} company={'Innovaccer Analytics Private Ltd.'}
                  title={'Software Developer'}
                />
              </div>
              <div className='md:hidden fixed right-5 bottom-5 bg-pencil1 w-[50px] h-[50px] cursor-pointer rounded-full flex items-center justify-center'
                onClick={() => {
                  setModalOpen(true)
                }}
              >
                <Pencil className='text-white w-5 h-5' />
              </div>
            </div>
            <div className='w-[300px] md:block hidden'>
              <div className='flex items-center justify-between px-2 pb-2 border-b border-gray-200'>
                <div className='flex items-center justify-center gap-1 text-black/80'>
                  <MapPin />
                  {
                    isLogin ? <p>Enter Location</p> : <div className='flex gap-1'>
                      <p>Noida,</p>
                      <p>India</p>
                    </div>
                  }

                </div>
                <Pencil className='h-5 w-5' />
              </div>
              <div className='flex gap-2 text-gray-500 text-sm mt-5 font-light'>
                <Info className='h-10 w-10' />
                <p>Your location will help us serve better and extend a personalised experience.</p>
              </div>
              {
                isLogin && <div className='mt-4'>
                  <RecommendedGroups />
                </div>
              }
            </div>
          </div>
        </main>
      </div>
      <div className={`w-full h-screen bg-black/60 ${modalOpen ? 'fixed' : 'hidden'} inset-0 overflow-hidden flex md:items-center md:justify-center justify-end flex-col gap-2`}>

        <div className='md:w-[60%] h-[500px] w-full bg-white md:rounded-md relative overflow-hidden rounded-t-[12px] '>
          <div className='bg-green-100 items-center justify-center py-2 hidden md:flex'>
            <p className='font-medium text-green-700'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
          </div>
          <div className='p-5 h-full'>
            <div className='flex items-center justify-between'>
              <h1 className='hidden md:block text-black font-bold text-2xl'>{signUpForm ? 'Sign In' : 'Create Account'}</h1>
              <h1 className='md:hidden text-black font-bold text-2xl'>{signUpForm ? 'Welcome back,' : 'Create Account'}</h1>
              <div className='rounded-full bg-black/80 p-1 md:hidden'
                onClick={() => {
                  setModalOpen(false)
                }}
              >
                <X className='w-4 h-4 text-white' />
              </div>
              <p className='text-sm cursor-pointer md:block hidden'
                onClick={() => { setSignUpForm((prev) => !prev) }}
              >{signUpForm ? 'Dont you have an account?' : 'Already have an account?'} <span className='text-[#495DC6] font-bold'>{signUpForm ? 'Create new for free' : 'Sign In'}</span></p>
            </div>
            <div className='w-full flex md:flex-row flex-col py-2 px-2 mt-3'>
              <div className='flex-1 space-y-2 w-full'>
                {
                  !signUpForm && <div className='flex gap-2'>
                    <input placeholder='FirstName' className='input' />
                    <input placeholder='LastName' className='input' />
                  </div>
                }
                <div className='flex flex-col gap-2'>
                  <input placeholder='Email' className='input' />
                  <input placeholder='Password' className='input' />
                  {
                    !signUpForm &&
                    <input placeholder='Confirm Password' className='input' />
                  }
                </div>
                <div className='md:block flex items-center justify-between py-2'>
                  <div className={`bg-[#495DC6] rounded-full py-2 ms:px-0 px-2 cursor-pointer flex items-center justify-center min-w-[100px]`}
                    onClick={() => {
                      setIsLogin(true)
                      setModalOpen(false)
                    }}
                  >
                    <p className='font-bold text-white md:text-base text-sm'>{signUpForm ? 'Sign In' : 'Create An Account.'}</p>
                  </div>
                  <p className='md:hidden'>or <span className='text-[#495dc6] font-bold underline'
                    onClick={() => {
                      setSignUpForm(prev => !prev)
                    }}
                  >{!signUpForm ? 'Signin' : 'Create Account'}</span></p>
                </div>
                <div className='md:pt-5 flex flex-col gap-2'>
                  <div className='border border-gray-100 rounded-sm flex items-center justify-center py-2'>
                    <div className='flex items-center gap-2'>
                      <img src='/fb.png' className='h-6 w-6' />
                      <p>Sign Up with Facebook</p>
                    </div>
                  </div>
                  <div className='border border-gray-100 rounded-sm flex items-center justify-center py-2'>
                    <div className='flex items-center gap-2'>
                      <img src='/google.png' className='h-6 w-6' />
                      <p>Sign Up with Google</p>
                    </div>
                  </div>
                  {
                    signUpForm &&
                    <p className='font-bold text-center underline'>Forgot Password? </p>
                  }
                </div>
              </div>
              <div className='md:flex-1'>
                <img src='/atg_illustration.png' className='md:block hidden' />
                {
                  !signUpForm && <p className="text-sm text-gray-500 font-light ml-3 ">By signing up, you agree to our Terms & conditions, Privacy policy</p>
                }
              </div>
            </div>
          </div>
        </div>
        <div className='bg-gray-300 rounded-full p-2 absolute right-10 top-10 cursor-pointer hidden md:block'
          onClick={() => { setModalOpen(false) }}
        >
          <X className='h-5 w-5' />
        </div>
      </div>

    </>
  )
}

export default App