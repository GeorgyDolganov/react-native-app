import React, {useMemo, useReducer, useContext} from 'react';
import {AsyncStorage} from 'react-native';
import axios from 'axios';

import reducer, {initialState, LOGGED_IN, LOGGED_OUT} from './reducer';

export const TOKEN_KEY = 'token';
export const USER_KEY = 'user';
export const keys = [TOKEN_KEY, USER_KEY];

const AuthContext = React.createContext();

function AuthProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState || {});

    const getAuthState = async () => {
        try {
            let data = await getStorageData();
        }
    }
}