import { useEffect } from 'react';
import * as ROUTS from './constants/routes';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// Components
import Home from './pages/Home';
import Browse from './pages/Browse';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { logIn, selectUser } from './Redux/features/userSlice';
// firebase
import { firebase } from './lib/firebase/firebase';
import { getUserDataFromLS } from './Redux/features/utility';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  // login Stuff
  useEffect(() => {
    if (getUserDataFromLS() != null) {
      dispatch(logIn((getUserDataFromLS())))
    }
    // else {
    //   firebase.auth().onAuthStateChanged((authUser) => {
    //     dispatch(logIn({
    //       uid: authUser.uid,
    //       email: authUser.email,
    //     }))
    //   })
    // }
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTS.HOME}>
          <Home />
        </Route>
        <Route exact path={ROUTS.SIGN_IN}>
          {!user ?
            <SignIn />
            :
            <Redirect to={ROUTS.BROWSE} />
          }
        </Route>
        <Route exact path={ROUTS.SIGN_UP}>
          {!user ?
            <SignUp />
            :
            <Redirect to={ROUTS.BROWSE} />
          }
        </Route>
        <Route exact path={ROUTS.BROWSE}>
          {user ?
            <Browse />
            :
            <Redirect to={ROUTS.SIGN_IN} />
          }
        </Route>
        <Redirect to={ROUTS.HOME} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
