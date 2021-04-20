import { Action } from '@ngrx/store';

import { Usuario } from '../../models/usuario.model';

export const CARGAR_USUARIO = '[Usuario] Cargar usuario';
export const CARGAR_USUARIO_FAIL = '[Usuario] Cargar usuario fail';
export const CARGAR_USUARIO_SUCCESS = '[Usuario] Cargar usuario success';

export class cargarUsuario implements Action {
  readonly type = CARGAR_USUARIO;
  constructor(public id: string) {}
}

export class cargarUsuarioFail implements Action {
  readonly type = CARGAR_USUARIO_FAIL;
  constructor(public payload: any) {}
}

export class cargarUsuarioSuccess implements Action {
  readonly type = CARGAR_USUARIO_SUCCESS;
  constructor(public usuario: Usuario) {}
}

export type usuarioAcciones =
  | cargarUsuario
  | cargarUsuarioFail
  | cargarUsuarioSuccess;
