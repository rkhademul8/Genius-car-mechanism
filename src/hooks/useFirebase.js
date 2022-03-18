import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthtication from "../Pages/Login/Firebase/firebase.init";

initializeAuthtication()

const useFirebase=()=>{
    const [user, setuser]=useState({})
    const [isLoading, seIstLoading]=useState(true)

    const auth = getAuth();
   
    const signInUsingGoogle=()=>{
        seIstLoading(true)
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
                setuser(result.user)
            })
            .finally(()=> seIstLoading(false))
    }

    // obser user change
    useEffect(()=>{
      const unsubscibed=  onAuthStateChanged(auth, (user) => {
            if (user) {
             setuser(user)
            } else {
                setuser({})
            }
            seIstLoading(false)
          });

          return ()=>unsubscibed

    },[])

    const logOut=()=>{
        seIstLoading(true)
        signOut(auth)
        .then(()=>{

        })
        .finally(()=> seIstLoading(false))
    }


    return{
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase