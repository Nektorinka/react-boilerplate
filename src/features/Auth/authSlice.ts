import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/rootReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import AuthService, { User } from './AuthService'

const initialState: State = {
  token: '',
}

type State = {
  token: string
  user?: User
}

const getSliceState = (state: RootState) => state.auth

export const authSelectors = {
  getToken: (state: RootState) => getSliceState(state).token,
  getUser: (state: RootState) => getSliceState(state).user,
}

const login = createAsyncThunk('auth/login', (/* todo: определить аргументы  */) => {
  // @ts-ignore /* todo: удалить, когда будут описаны типы  */
  return AuthService.login(/* todo: определить аргументы  */)
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.pending, (state) => {

    })
    builder.addCase(login.fulfilled, (state, { payload }) => {

    })
    builder.addCase(login.rejected, (state, { error }) => {

    })
  },
})

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'user'],
}

export const {} = authSlice.actions
export default persistReducer(persistConfig, authSlice.reducer)
