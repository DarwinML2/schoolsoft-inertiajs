<?php

namespace App\Models;

use App\Models\Scopes\Year;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Foundation\Auth\User as Model;

class Student extends Model
{
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    protected $table = 'year';

    protected $hidden = [
        'clave',
    ];

    protected $primaryKey = 'mt';

    protected $guarded = [];

    /**
     * The "booted" method of the model.
     */
    protected static function booted(): void
    {
        // //Siempre utilizar el year del colegio
        // static::addGlobalScope('year', function (Builder $builder) {
        //     $builder->where("year.year", Admin::admin()->year);
        // });
        //Siempre buscar los que estan activos
        static::addGlobalScope('active', function (Builder $builder) {
            $builder->where('year.fecha_baja', '0000-00-00');
        });
        //Siempre ordernar por apellidos
        static::addGlobalScope('surnameDesc', function (Builder $builder) {
            $builder->orderBy('year.apellidos');
        });
    }

    public function getFullNameAttribute(): string
    {
        return "$this->nombre $this->apellidos";
    }

    public function getFullNameReverseAttribute(): string
    {
        return "$this->apellidos $this->nombre";
    }

    public function scopeOfGrade(Builder $query, string $grade): void
    {
        $query->where('grado', $grade);
    }

    public function scopeOfClass(Builder $query, string $class, string $table = 'padres', $summer = false): void
    {
        $where = [
            ["$table.curso", $class],
            ["$table.baja", ''],
        ];
        if ($summer) {
            $where[] = ["$table.verano", '2'];
        }
        $query->join($table, "{$this->table}.ss", '=', "$table.ss")->where($where);
    }

    public function teacher(): BelongsTo
    {
        return $this->belongsTo(Teacher::class, 'grado', 'grado');
    }
}
