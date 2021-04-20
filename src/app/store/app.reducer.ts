import { ActionReducerMap } from '@ngrx/store';

import * as reducers from './reducers';

export interface AppState {
  usuarios: reducers.UsuariosState;
}

export interface AppState {
  usuario: reducers.UsuarioState;
}

export const appReducers: ActionReducerMap<AppState> = {
  usuarios: reducers.usuariosReducer,
  usuario: reducers.usuarioReducer,
};
