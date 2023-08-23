import '../../Style/SignIn/SignIn.css'
import { submitSignIn } from '../../Actions/Submit.actions';
import { useDispatch, useSelector } from 'react-redux';
import SignInReducer from '../../Reducers/Submit.reducer';



const SignIn = () => {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(submitSignIn(e.target.username.value, e.target.password.value))

    }
    const user = useSelector((state) => state.SignInReducer.user)
    if (user) {
        window.location.href = '/user'
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content ">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                    </div>
                    {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                    <button className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    );
};

export default SignIn;