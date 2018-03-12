import React from 'react';
import CountDown from './countDown';

const childCount = (count)=> <div>{count>0 ? count: 'happy newYear'}</div>
export const ShowCount = ()=> {
    return (
        <div>
            <CountDown startCount={10}>
                {childCount}
            </CountDown>
        </div>
    )
}