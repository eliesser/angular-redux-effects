import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as usuarioActions from '../actions';

import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuarioEffects {
  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}

  cargarUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usuarioActions.CARGAR_USUARIO),
      mergeMap((action: usuarioActions.cargarUsuario) =>
        this.usuarioService.getUserById(action.id).pipe(
          map((user) => {
            return new usuarioActions.cargarUsuarioSuccess(user);
          }),
          catchError((error) => {
            return of(new usuarioActions.cargarUsuarioFail(error));
          })
        )
      )
    )
  );
}
