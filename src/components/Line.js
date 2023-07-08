import React, { useEffect, useState } from 'react'
import SignOut from './SignOut'
import {db} from "../firebase.js"

const Line = () => {
    const [messages, setMessages] = useState();

    useEffect(() => {
        db.collection("messages")
        .orderBy("createdAt")
        .limit(50)
        .onSnapshot((snapshot) => {
            setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    return (
        <div>
            {console.log(messages)}
        <SignOut />
        </div>
    )
}

export default Line
