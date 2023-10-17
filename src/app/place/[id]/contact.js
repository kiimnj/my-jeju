"use client"
import { useState } from "react";



export default function Contact({address, roadaddress, phone}) {
    const [on, setOn] = useState(false);
    console.log(on)

    return (
        <>
            <dl>
                <dt>주소</dt>
                <dd>
                    {address} 
                    <span className="small-font" onClick={() => setOn(!on)}> 도로명 <span className={`${on && "spin180"}`}>▼</span></span>
                    {on && <div className="address-modal">{roadaddress}</div>}
                </dd>
            </dl>
            <dl>
                <dt>연락처</dt>
                <dd>{phone}</dd>
            </dl>

        </>
    )
}