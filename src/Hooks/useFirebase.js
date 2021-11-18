import { useEffect, useState } from "react"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import initializeFirebase from "../components/firebase/firebase.init";



//INITIALIZE APP
initializeFirebase();


const useFirebase = () => {
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading ] = useState(true);

    const auth = getAuth();

    //Email REgister Login
    const registerUser = (email, password) => { 
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            })
            .finally(()=> setIsLoading(false))

    }

    const loginUser = (email,password,location,history) => {
        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                console.log(destination);
                history.replace(destination);
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
            .finally(()=> setIsLoading(false))
            ;

    }



    //LOGOUT 
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            //Successfully Sign Out
               
            }).catch((error)=>{
                //An error happended
            })
            .finally(()=> setIsLoading(false))

    }
    // OBSERVE STATE CHANGE
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
           
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])

    return {
        user,
        logout,
        setUser,
        isLoading,setIsLoading,
        registerUser,
        loginUser
    }



}

export default useFirebase;