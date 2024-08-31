import axios from 'axios'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

const BASE_URL = __IS_DEV__ ? 'http://localhost:8000' : 'https://production.com'

export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY)
    }
})
