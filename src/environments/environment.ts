// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

//const baseUrl = 'http://127.0.0.1:5000/';
const baseUrl = 'https://micro-candidatos-kdbo2knypq-uc.a.run.app/';
const urlBaseAutenticacion = 'https://micro-autenticacion-kdbo2knypq-uc.a.run.app';
const urlBaseEmpresa = 'https://micro-empresa-kdbo2knypq-uc.a.run.app';
export const environment = {
  production: false,
  baseUrl,
  urlBaseAutenticacion,
  urlBaseEmpresa
};
