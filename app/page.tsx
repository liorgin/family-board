// "use client";

// import { getMonth } from './common/DateUtils';
// import Auth from './components/Auth';
// import GoogleLogin from './components/GoogleLoginButton';
// import { MainCalendar } from './components/MainCalendar';
// import { useWindowSize } from '@uidotdev/usehooks';
// import { useEffect, useState } from 'react';
import GoogleLogin from './components/GoogleLoginButton';
import {Signin} from './components/Signin';


export default function Home() {

  // const [orientation, setOrientation] = useState<'row' | 'col'>('col');

  // const days = getMonth();
  // const size = useWindowSize();

  // useEffect(() => {
  //   if(!size?.width || !size?.height) return;

  //   if (size.width > size.height) {
  //     setOrientation('row');
  //   } else {
  //     setOrientation('col');
  //   }
  // }, [size]);

  const onLogin = (cred: google.accounts.id.CredentialResponse) => {
    console.log(cred)
  }

  return (
    <>
{/*  */}
    <Signin/>
      {/* <Auth/>
      <div className={`flex flex-${orientation} h-screen w-full`}>
      <div className='flex-1'>
        <GoogleLogin text='signin_with'
         onLogin={(cred) => console.log(cred)}
          onError={() => console.error('error')}
           />
      </div>
      <div className='flex-1 w-full'>
        <MainCalendar />
      </div>
    </div>  */}
    </>
  );
}
