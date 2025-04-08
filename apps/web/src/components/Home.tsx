import { useDispatch, useSelector } from "react-redux";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";
import { logout } from "../store/authSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error("Login error:", err.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
    } catch (err) {
      console.error("Logout error:", err.message);
    }
  };

  if (loading) return <p className="text-center mt-10 text-gray-600">Loading...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-2xl shadow-md text-center max-w-sm w-full">
        {user ? (
          <>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Welcome, {user.name}
            </h2>
            <img
              src={user.photo}
              alt="profile"
              className="rounded-full mx-auto mb-4 w-16 h-16 object-cover"
            />
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition"
          >
            Login with Google
          </button>
        )}
      </div>
    </div>
  );
}
