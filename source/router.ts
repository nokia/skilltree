import CEL from 'connect-ensure-login';
import { Router } from 'express';
import Passport from 'passport';

import * as Controllers from './controllers';
import * as Middlewares from './middlewares';

const router: Router = Router();
const loggedOutRoute = '/';
const loggedInRoute = '/profile';

// MIDDLEWARES
router.use(Middlewares.IsAuthenticated);

// GET ROUTES
router.get('/', CEL.ensureLoggedOut({
  redirectTo: loggedInRoute
}), Controllers.IndexGet);

router.get('/profile', CEL.ensureLoggedIn({
  redirectTo: loggedOutRoute
}), Controllers.ProfileGet);

router.get('/registration', CEL.ensureLoggedOut({
  redirectTo: loggedInRoute
}), Controllers.RegistrationGet);

router.get('/search', CEL.ensureLoggedIn({
  redirectTo: loggedOutRoute
}), Controllers.SearchGet);

// POST ROUTES
router.post('/login', Passport.authenticate('local', {
  successRedirect: loggedInRoute,
  failureRedirect: loggedOutRoute,
  failureFlash: true
}));

router.post('/registration', CEL.ensureLoggedOut({
  redirectTo: loggedInRoute
}), Controllers.RegistrationPost);

router.post('/profile', CEL.ensureLoggedIn({
  redirectTo: loggedOutRoute
}), Controllers.ProfilePost);

// DELETE ROUTES
router.post('/logout', CEL.ensureLoggedIn({
  redirectTo: loggedOutRoute
}), Controllers.LogoutDelete);


export default router;