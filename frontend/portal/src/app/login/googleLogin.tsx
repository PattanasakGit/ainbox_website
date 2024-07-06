'use client';

import React, { useState } from 'react';
import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
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
      className="w-full bg-blue-500 text-white py-2 my-4 rounded-md hover:bg-blue-600 transition-colors duration-200"
    >
      Login with Google
    </button>
  );
};

export default GoogleLoginButton;