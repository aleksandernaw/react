import React, {useState} from 'react';
import { ENGINE_METHOD_PKEY_ASN1_METHS } from 'constants';
import { getPackedSettings } from 'http2';
import { PassThrough } from 'stream';
import './Hello.css';
import App from '../App';
export const Hello = () => {
  const [value, setValue] = useState('') 
  const [username, setUsername ] = useState('')
  

  const minLength = 4
  const maxLength = 10
  const valueLength: number = value.length;
  
  const password: string = 'olek123'
  const isPasswordCorrect = (value: string, password: string) => {
    return value === password;
  };

  const isValueLengthInRange = (val: number, lower: number, upper: number) =>{
    if (val > lower && val< upper) {
      return true
    } else {
      return false
    }
  }
  
  const conditionalText: string= isPasswordCorrect(value, password) ? 'poprawne hasło' : 'niepoprawne hasło';
  const inputColor = isValueLengthInRange(valueLength, minLength, maxLength) ? 'valid' : 'invalid';

  const inputForPassword = (
    <div>
        <input
        value={username}
        placeholder ="wpisz nazwe użytkownika"
        onChange={e => setUsername(e.target.value)}>
            
        </input>
      <input 
        className={inputColor}
        type="password"
        placeholder="wpisz hasło"
        value={value}
        onChange={e => setValue(e.target.value)}>
      </input>
    </div>
  )

  return (
    isPasswordCorrect(value, password) ? <App name={username}/> : inputForPassword
)

}