import { useState, useRef, useContext } from "react";
import AuthContext from "./auth-context";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    try {
      if (isLogin) {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCKWoR7yhvw1UDVPb3Y6Sd7U08cGcIvdXQ",
          {
            method: "POST",
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setIsLoading(false);

        if (response.ok) {
          const data = await response.json();
          authCtx.login(data.idToken, enteredEmail);
          alert("Login successfully");

          setTimeout(() => {
            navigate("/");
          }, 1200);
        } else {
          // const errorData = await response.json();
          let errorMessage = "Authentication failed";
          throw new Error(errorMessage);
        }
      } else {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCKWoR7yhvw1UDVPb3Y6Sd7U08cGcIvdXQ",
          {
            method: "POST",
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setIsLoading(false);

        if (response.ok) {
          alert("Account created successfully");
        } else {
          // const errorData = await response.json();
          let errorMessage = "Authentication failed";
          throw new Error(errorMessage);
        }
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const forgetPasswordHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    setIsLoading(true);

    try{
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCKWoR7yhvw1UDVPb3Y6Sd7U08cGcIvdXQ",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: enteredEmail,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setIsLoading(false);
    if(response.ok){
      alert("Check your mail for password reset link")
    }
    else{
      let errorMessage = "Please enter registered mailId"
      throw new Error(errorMessage);

    }

  } 
  catch(error){
    alert(error.message)

  }

}


  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">
        {isLogin ? "Login" : "Sign Up"}
      </h1>
      <form
        className="bg-white shadow-md rounded-lg px-8 py-6"
        onSubmit={submitHandler}
      >
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ref={emailInputRef}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-semibold mb-2">
            Your Password
          </label>
          <input
            type="password"
            id="password"
            required
            className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ref={passwordInputRef}
          />
        </div>
        <div className="mb-4">
          {!isLoading && (
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
              {isLogin ? "Login" : "Create Account"}
            </button>
          )}
          {isLoading && <p>Sending request...</p>}
        </div>
        <div className="text-sm text-gray-600">
          <button
            type="button"
            className="underline"
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
        <div>
          <button
            className="text-small text-red-500"
            onClick={forgetPasswordHandler}
          >
            Forget Password
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignupForm;
