import React, {useState} from 'react';
import { ENGINE_METHOD_PKEY_ASN1_METHS } from 'constants';
import { getPackedSettings } from 'http2';
import { PassThrough } from 'stream';
import './Hello.css';
export const Hello = () => {
    const minLength = 4
    const maxLength = 10
    const [value, setValue] = useState('') 
    const valueLength: number = value.length;
    const password: string = 'olek123'
    const conditionalText: string= value ===password ? 'poprawne hasło' : 'niepoprawne hasło';
    const isValueLengthInRange = (val: number, lower: number, upper: number) =>{
        if (val > lower && val< upper) {
            return true
        } else {
            return false
        }
    }
    const inputColor = isValueLengthInRange(valueLength, minLength, maxLength) ? 'valid' : 'invalid';
    return(
    <div>
        <input 
            className={inputColor}
            type="password"
            placeholder="wpisz hasło"
            value={value}
            onChange={e => setValue(e.target.value)}>
        </input>
    <p id='haslo'>{conditionalText}</p>
    <p>{valueLength}</p>
    </div>
)

}