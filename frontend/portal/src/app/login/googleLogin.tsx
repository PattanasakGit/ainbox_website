'use client';

import React, { useState } from 'react';
import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { FcGoogle } from "react-icons/fc";
import { gapi } from 'gapi-script';

interface GoogleLoginButtonProps {
  clientId: string;
  onSuccess: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void;
  onFailure: (error: any) => void;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ clientId, onSuccess, onFailure }) => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  const loadGoogleScript = () => {
    if (!isScriptLoaded) {
      const script = document.createElement("script");
      script.src = "https://apis.google.com/js/platform.js";
      script.onload = () => {
        setIsScriptLoaded(true);
        initializeGoogleLogin();
      };
      document.body.appendChild(script);
    } else {
      initializeGoogleLogin();
    }
  };

  const initializeGoogleLogin = () => {
    gapi.load('auth2', () => {
      gapi.auth2.init({ client_id: clientId }).then(
        () => {
          const auth2 = gapi.auth2.getAuthInstance();
          auth2.signIn().then(
            (googleUser: GoogleLoginResponse | GoogleLoginResponseOffline) => onSuccess(googleUser),
            (error: any) => onFailure(error)
          );
        },
        (error: any) => onFailure(error)
      );
    });
  };

  return (
    <button
      onClick={loadGoogleScript}
      className="flex justify-center w-[100%] items-center bg-white text-[#555] py-2 px-4 rounded-md hover:bg-gray-200 transition-colors duration-200 border border-gray-300"
    >
      <FcGoogle className='mr-4 text-[25px]'/>
      Login with Google
    </button>
  );
};

export default GoogleLoginButton;