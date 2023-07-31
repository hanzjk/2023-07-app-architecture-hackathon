import axios from 'axios'
import oauth from 'axios-oauth-client'

let accessToken: string = '';

export function setAccessToken(token: string) {
    accessToken = token;
}

export const API = axios.create({
    baseURL: window.config.baseURL
   
});
