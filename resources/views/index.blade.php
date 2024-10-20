@component('components/header',
    array(
        'title' => $title
    )
)
@endcomponent

<div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">{{$title}}</h1>
</div>

@foreach($components as $component => $variables)
    @component('components/'.$component, $variables)
    @endcomponent          
@endforeach

@component('components/footer', array("scripts" => $scripts))
@endcomponent