import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export const signUpUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode, "error codes")
    });
}