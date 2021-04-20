import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Usuario } from 'src/app/models/usuario.model';

import { AppState } from '../../store/app.reducer';

import * as usuarosActions from '../../store/actions';

import { UsuariosState } from 'src/app/store/reducers';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [],
})
export class ListaComponent implements OnInit {
  usuarios: Usuario[] = [];
  loading: boolean;
  error: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new usuarosActions.cargarUsuarios());
    this.store.select('usuarios').subscribe((usuarios: UsuariosState) => {
      this.usuarios = usuarios.users;
      this.loading = usuarios.loading;
      this.error = usuarios.error;
    });
  }
}
