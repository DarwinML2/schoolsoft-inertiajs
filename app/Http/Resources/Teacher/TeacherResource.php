<?php

namespace App\Http\Resources\Teacher;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class TeacherResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "nombre" => $this->nombre,
            "apellidos" => $this->apellidos,
            "ss" => $this->ss,
            "tel_res" => $this->tel_res,
            "tel_emer" => $this->tel_emer,
            "cel" => $this->cel,
            "posicion" => $this->posicion,
            "genero" => $this->genero,
            "fecha_nac" => $this->fecha_nac,
            "fecha_ini" => $this->fecha_ini,
            "fecha_daja" => $this->fecha_daja,
            "nivel" => $this->nivel,
            "preparacion1" => $this->preparacion1,
            "preparacion2" => $this->preparacion2,
            "grado" => $this->grado,
            "email1" => $this->email1,
            "email2" => $this->email2,
            "dir1" => $this->dir1,
            "dir2" => $this->dir2,
            "pueblo1" => $this->pueblo1,
            "esta1" => $this->esta1,
            "zip1" => $this->zip1,
            "dir3" => $this->dir3,
            "dir4" => $this->dir4,
            "pueblo2" => $this->pueblo2,
            "esta2" => $this->esta2,
            "zip2" => $this->zip2,
            "club1" => $this->club1,
            "club2" => $this->club2,
            "club3" => $this->club3,
            "club4" => $this->club4,
            "club5" => $this->club5,
            "usuario" => $this->usuario,
            "clave" => $this->clave,
            "tipo" => $this->tipo,
            "foto" => $this->foto,
            "grupo" => $this->grupo,
            "activo" => $this->activo,
            "idioma" => $this->idioma,
            "ufecha" => $this->ufecha,
            "re_e" => $this->re_e,
            "year" => $this->year,
            "cel_com" => $this->cel_com,
            "alias" => $this->alias,
            "baja" => $this->baja,
            "pre1" => $this->pre1,
            "pre2" => $this->pre2,
            "pre3" => $this->pre3,
            "pre4" => $this->pre4,
            "pre5" => $this->pre5,
            "vi1" => $this->vi1,
            "vi2" => $this->vi2,
            "vi3" => $this->vi3,
            "vi4" => $this->vi4,
            "vi5" => $this->vi5,
            "se1" => $this->se1,
            "se2" => $this->se2,
            "se3" => $this->se3,
            "se4" => $this->se4,
            "se5" => $this->se5,
            "comp" => $this->comp,
            "lic1" => $this->lic1,
            "lic2" => $this->lic2,
            "lic3" => $this->lic3,
            "lic4" => $this->lic4,
            "lp1" => $this->lp1,
            "lp2" => $this->lp2,
            "lp3" => $this->lp3,
            "lp4" => $this->lp4,
            "fex1" => $this->fex1,
            "fex2" => $this->fex2,
            "fex3" => $this->fex3,
            "fex4" => $this->fex4,
            "pe1" => $this->pe1,
            "pe2" => $this->pe2,
            "pe3" => $this->pe3,
            "pe4" => $this->pe4,
            "pe5" => $this->pe5,
            "pe6" => $this->pe6,
            "pe7" => $this->pe7,
            "pe8" => $this->pe8,
            "dep" => $this->dep,
            "dep_des" => $this->dep_des,
            "docente" => $this->docente,
            "foto_name" => $this->foto_name ? create_tenant_file_url($this->foto_name) : null,
            "email_smtp" => $this->email_smtp,
            "clave_email" => $this->clave_email,
            "host_smtp" => $this->host_smtp,
            "port" => $this->port,
            "host" => $this->host,
            "tipo_foro" => $this->tipo_foro,
            "avatar" => $this->avatar,
            "fechas" => $this->fechas,
            "tri" => $this->tri,
            "pe9" => $this->pe9,
            "pe10" => $this->pe10,
            "pe11" => $this->pe11,
            "pe12" => $this->pe12,
            "pe13" => $this->pe13,
            "pe14" => $this->pe14,
            "pe15" => $this->pe15,
            "pe16" => $this->pe16,
            "cbarra" => $this->cbarra,
        ];
    }
}