import * as fromUsuario from '../actions';

import { Usuario } from '../../models/usuario.model';

export interface UsuarioState {
  users: Usuario;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initState: UsuarioState = {
  users: null,
  loaded: false,
  loading: false,
  error: null,
};

export function usuarioReducer(
  state = initState,
  action: fromUsuario.usuarioAcciones
) {
  switch (action.type) {
    case fromUsuario.CARGAR_USUARIO:
      return { ...state, loading: true, error: null };

    case fromUsuario.CARGAR_USUARIO_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        users: { ...action.usuario },
      };

    case fromUsuario.CARGAR_USUARIO_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: {
          starus: action.payload.status,
          message: action.payload.message,
          url: action.payload.url,
        },
      };

    default:
      return state;
  }
}
