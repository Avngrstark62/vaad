import { useDispatch } from 'react-redux';
import { auth, provider, signInWithPopup } from '../firebase';
import { setUser } from '../store/authSlice';

function Login() {
  const dispatch = useDispatch();

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      dispatch(setUser({
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
      }));
    } catch (err) {
      console.error('Login failed:', err.message);
    }
  };

  return (
    <button onClick={loginWithGoogle}>
      Login with Google
    </button>
  );
}

export default Login;

