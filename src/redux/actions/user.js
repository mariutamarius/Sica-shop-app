import { signInWithGoogle } from '../../apis/firebase'
import { signInWithFacebook } from "../../apis/firebase";
import { signOut } from "../../apis/firebase";

export function startLoading() {
    return {
        type: 'START_LOADING'
    }
}

export function updateUserData(payload) {
    return {
        type: 'UPDATE_USER_DATA',
        payload
    }
}

export function updateUserError(payload) {
    return {
        type: 'UPDATE_ERROR',
        payload
    }
}

export function signInWithGoogleAction() {
    return function (dispatch) {
      dispatch(startLoading());
      signInWithGoogle()
        .then((response) => {
          const userData = response.user;
          dispatch(updateUserData(userData));
        })
        .catch((error) => {
          dispatch(updateUserError(error));
        });
    };
  }
  
  export function signInWithFacebookAction() {
    return function (dispatch) {
      dispatch(startLoading());
      signInWithFacebook()
        .then((response) => {
          const userData = response.user;
          dispatch(updateUserData(userData));
        })
        .catch((error) => {
          dispatch(updateUserError(error));
        });
    };
  }
  export function signOutAction() {
    return function (dispatch) {
      dispatch(startLoading());
      signOut()
        .then(() => {
          dispatch(updateUserData(null));
        })
        .catch((error) => {
          dispatch(updateUserError(error));
        });
    };
  }