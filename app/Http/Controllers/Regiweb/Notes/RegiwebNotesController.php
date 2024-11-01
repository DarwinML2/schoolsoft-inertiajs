<?php

namespace App\Http\Controllers\Regiweb\Notes;

use App\Enums\FlashMessageKey;
use App\Enums\PagesEnum;
use App\Enums\TrimesterEnum;
use App\Http\Controllers\Controller;
use App\Models\Teacher;
use Illuminate\Container\Attributes\CurrentUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class RegiwebNotesController extends Controller
{
    public function __construct(
        #[CurrentUser()] protected Teacher $user
    ) {
        $user->load('grades');
    }
    public function index()
    {
        return Inertia::render('Regiweb/Notes/Index');
    }

    public function submit(Request $request)
    {
        $validated = $request->validate([
            'grade' => [
                'required',
                'string',
                Rule::in($this->getGradesArray()),
            ],
            'page' => [
                'required',
                'string',
                Rule::enum(PagesEnum::class),
            ],
            'trimester' => [
                'required',
                'string',
                Rule::enum(TrimesterEnum::class),

            ],
        ]);

        return to_route('regiweb.notes.show', $validated);
    }


    public function show(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'grade' => [
                'required',
                'string',
                Rule::in($this->getGradesArray()),
            ],
            'page' => [
                'required',
                'string',
                Rule::enum(PagesEnum::class),
            ],
            'trimester' => [
                'required',
                'string',
                Rule::enum(TrimesterEnum::class),

            ],
        ]);
        if ($validator->fails()) {
            return redirect()->route('regiweb.notes.index')->with(FlashMessageKey::ERROR_LIST->value, $validator->errors());
        }
        $validated = $validator->validated();

        return Inertia::render('Regiweb/Notes/Show', $validated);
    }
    private function getGradesArray(): array
    {
        $gradesArray = $this->user->grades()->pluck('curso')->toArray();
        return $gradesArray;
    }
}
