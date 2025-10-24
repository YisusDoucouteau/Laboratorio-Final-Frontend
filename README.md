# Laboratorio Final – Frontend (Angular)

## Estado del proyecto
| Ítem                              | Descripción                                 | Estado |
|----------------------------------|---------------------------------------------|:-----:|
| Rutas y layout                   | Home, NotFound, nav                         | ✅    |
| Servicio `ProductoService`       | CRUD contra API (`/api/productos`)          | ✅    |
| Página Productos                 | Listado + crear/editar/eliminar             | ✅    |
| PWA                              | `@angular/service-worker` + `ngsw-config`   | ✅    |
| Build prod                       | `ng build --configuration production`       | ✅    |

## Arranque rápido
```bash
npm i
# ajustar src/environments/environment.ts -> api: 'http://127.0.0.1:8000/api'
ng serve
