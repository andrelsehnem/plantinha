import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Manrope_400Regular,
  Manrope_600SemiBold,
} from '@expo-google-fonts/manrope';
import { UserIdentification } from './src/pages/UserIdentification';
import { Welcome } from './src/pages/Wecome';


export default function App(){
  
  const fontsLoaded = useFonts({
    Manrope_400Regular,
    Manrope_600SemiBold
  });

  if(!fontsLoaded)
   return <AppLoading />
  else
    return(<UserIdentification />)
}