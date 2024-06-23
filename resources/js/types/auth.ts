import { Date_ } from ".";

export interface Teacher {
  id: number;
  nombre: string;
  apellidos: string;
  nombre_completo: string;
  ss: string;
  tel_res: string;
  tel_emer: string;
  cel: string;
  posicion: string;
  genero: string;
  fecha_nac: Date;
  fecha_ini: Date;
  fecha_daja: Date;
  nivel: string | null;
  preparacion1: string;
  preparacion2: string;
  grado: string | null;
  email1: string;
  email2: string;
  dir1: string;
  dir2: string;
  pueblo1: string;
  esta1: string;
  zip1: string;
  dir3: string;
  dir4: string;
  pueblo2: string;
  esta2: string;
  zip2: string;
  club1: string | null;
  club2: string | null;
  club3: string | null;
  club4: string | null;
  club5: string | null;
  usuario: string;
  clave: string;
  tipo: string;
  foto: Blob;
  grupo: string;
  activo: string;
  idioma: string;
  ufecha: Date_;
  re_e: string;
  year: string;
  cel_com: string;
  alias: string;
  baja: string;
  pre1: string | null;
  pre2: string | null;
  pre3: string | null;
  pre4: string | null;
  pre5: string | null;
  vi1: string | null;
  vi2: string | null;
  vi3: string | null;
  vi4: string | null;
  vi5: string | null;
  se1: string | null;
  se2: string | null;
  se3: string | null;
  se4: string | null;
  se5: string | null;
  comp: string;
  lic1: string | null;
  lic2: string | null;
  lic3: string | null;
  lic4: string | null;
  lp1: string | null;
  lp2: string | null;
  lp3: string | null;
  lp4: string | null;
  fex1: Date_ | null;
  fex2: Date_ | null;
  fex3: Date_ | null;
  fex4: Date_ | null;
  pe1: string;
  pe2: string;
  pe3: string;
  pe4: string;
  pe5: string;
  pe6: string;
  pe7: string;
  pe8: string;
  dep: number;
  dep_des: string;
  docente: string;
  foto_name: string;
  email_smtp: string;
  clave_email: string;
  host_smtp: string;
  port: number;
  host: string;
  tipo_foro: number;
  avatar: string;
  fechas: number;
  tri: number | null;
  pe9: string;
  pe10: string;
  pe11: string;
  pe12: string;
  pe13: string;
  pe14: string;
  pe15: string;
  pe16: string;
  cbarra: string | null;
}

export interface School {
  colegio: string;
  dir1: string;
  dir2: string;
  pueblo1: string;
  esta1: string;
  zip1: string;
  dir3: string;
  dir4: string;
  pueblo2: string;
  esta2: string;
  zip2: string;
  correo: string;
  telefono: string;
  fax: string;
  logo: string;
  foto: string;
  director: string;
  usuario: string;
  clave: string;
  principal: string;
  pagina: string;
  idioma: string;
  filename: string;
  filename2: string;
  filesize: string;
  filesize2: string;
  filetype: string;
  filetype2: string;
  description: string;
  ft1: Date_;
  ft2: Date_;
  ft3: Date_;
  ft4: Date_;
  ft5: Date_;
  ft6: Date_;
  ft7: Date_;
  ft8: Date_;
  men_ini: string;
  men_nota: string;
  grupo: string;
  activo: string;
  ufecha: Date_;
  id: string;
  year: string;
  Colegio2: string;
  dir5: string;
  dir6: string;
  pueblo3: string;
  est3: string;
  zip3: string;
  tel3: string;
  tel4: string;
  pag_ini2: string;
  fax2: string;
  email3: string;
  email4: string;
  a: string;
  b: string;
  c: string;
  d: string;
  f: string;
  sutri: string;
  vala: string;
  valb: string;
  valc: string;
  vald: string;
  valf: string;
  sie: string;
  sieab: string;
  asist: string;
  asis: string;
  curso: string;
  por1: string;
  por2: string;
  por3: string;
  cv: string;
  np: string;
  teg: string;
  tr1: string;
  tr2: string;
  tr3: string;
  tr4: string;
  vt1: string;
  vt2: string;
  vt3: string;
  vt4: string;
  email5: string;
  cm: string;
  tpa: string;
  nin: string;
  tarjeta: string;
  forzar: string;
  clavepadre: string;
  nivel: string;
  fechav1: Date_;
  fechav2: Date_;
  nota: string;
  prom: string;
  cant: string;
  sem: string;
  nota2: string;
  prom2: string;
  cant2: string;
  sem2: string;
  nota3: string;
  prom3: string;
  cant3: string;
  sem3: string;
  bo1: string;
  bo2: string;
  bo3: string;
  bo4: string;
  mensa: string;
  tar: string;
  men_inac: string;
  inactivo: string;
  year2: string;
  vs1: string;
  vs2: string;
  vf: string;
  ns1: string;
  ns2: string;
  nf: string;
  bloqueo: string;
  codigo: string;
  bloqueoauto: string;
  des1: string;
  des2: string;
  des3: string;
  controlb: string;
  param1: string;
  param2: string;
  param3: string;
  param4: string;
  param5: string;
  param6: string;
  esn: number;
  esncodigo: string;
  esnmes: string;
  act_paypal: string;
  email_paypal: string;
  costo: number;
  caja: number;
  rec: string;
  asis1: Date_;
  asis2: Date_;
  asis3: Date_;
  asis4: Date_;
  asis5: Date_;
  asis6: Date_;
  asis7: Date_;
  asis8: Date_;
  clave_email: string;
  host_smtp: string;
  port: number;
  email_smtp: string;
  host: string;
  tri: number;
  fec_t: Date_;
  se1: string;
  se2: string;
  fin: string;
  paypalcodigo: string;
  enf: string;
  nmf: string;
  dia_vence: number;
  etd: string;
  npn: string;
  cppd: string;
  codc1: string;
  codc2: number;
  suantri: string;
  nel: string;
  chk: string;
  not1: string;
  not2: string;
  fra: number;
  vnf: string;
  hdp: string;
  hdt: number;
  token_whatsapp: string | null;
  cel_whatsapp: string | null;
  rema_msg: string | null;
  can_min: number;
  ip7: string;
  fecha7: string;
  hora7: string;
}
