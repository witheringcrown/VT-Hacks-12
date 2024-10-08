import { withAuthInfo, useRedirectFunctions, useLogoutFunction } from '@propelauth/react'

const LoggedIn = withAuthInfo((props) => {
    const logoutFunction = useLogoutFunction()
    const { redirectToLoginPage, redirectToSignupPage, redirectToAccountPage } = useRedirectFunctions()

    if (props.isLoggedIn) {
        return (
            <div>
                <p>You are logged in as {props.user.email}</p>
                <button onClick={() => redirectToAccountPage()}>Account</button>
                &nbsp;
                &nbsp;
                <button onClick={() => logoutFunction(true)}>Logout</button>
            </div>
        )
    } else {
        return (
            <div>
                <p>You are not logged in</p>
                <button onClick={() => redirectToLoginPage()}>Login</button>
                &nbsp;
                &nbsp;
                <button onClick={() => redirectToSignupPage()}>Signup</button>
            </div>
        )
    }
})

export default LoggedIn