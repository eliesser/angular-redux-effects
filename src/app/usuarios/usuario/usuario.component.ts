import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/app.reducer';

import * as usuarioActions from '../../store/actions';

import { Usuario } from '../../models/usuario.model';

import { UsuarioState } from 'src/app/store/reducers';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [],
})
export class UsuarioComponent implements OnInit {
  usuario: Usuario;
  loading: boolean;
  error: any;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this.store.dispatch(new usuarioActions.cargarUsuario(id));

      this.store.select('usuario').subscribe((usuario: UsuarioState) => {
        this.usuario = usuario.users;
        this.loading = usuario.loading;
        this.error = usuario.error;
      });
    });
  }
}
