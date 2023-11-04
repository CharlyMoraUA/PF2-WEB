// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

//const baseUrl = 'http://127.0.0.1:5000/';
// const baseUrl = 'https://micro-candidatos-kdbo2knypq-uc.a.run.app/';
// const urlBaseAutenticacion = 'https://micro-autenticacion-kdbo2knypq-uc.a.run.app';
// const urlBaseEmpresa = 'https://micro-empresa-kdbo2knypq-uc.a.run.app';
const baseUrl = 'http://127.0.0.1:8080/'; //micro Candidate
const urlBaseAutenticacion = 'http://127.0.0.1:8081'; // micro auth
const urlBaseEmpresa = 'http://127.0.0.1:8082/'; //micro Gestion empresa
const urlBaseEquipos = 'http://127.0.0.1:8083/'; //micro Gestion equipos
export const environment = {
  production: false,
  baseUrl,
  urlBaseAutenticacion,
  urlBaseEmpresa,
  urlBaseEquipos
};