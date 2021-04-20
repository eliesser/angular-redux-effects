import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as usuariosActions from '../actions';

import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuariosEffects {
  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}

  cargarUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usuariosActions.CARGAR_USUARIOS),
      mergeMap(() =>
        this.usuarioService.getUsers().pipe(
          map((users) => {
            return new usuariosActions.cargarUsuariosSuccess(users);
          }),
          catchError((error) => {
            return of(new usuariosActions.cargarUsuariosFail(error));
          })
        )
      )
    )
  );
}
