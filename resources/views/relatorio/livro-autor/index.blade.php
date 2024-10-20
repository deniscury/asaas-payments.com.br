@component('components/cabecalho',
    array(
        'titulo' => 'Livros Agrupados por Autor'
    )
)
@endcomponent
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Relatório Gerencial de Livros Agrupados por Autor</h1>
    </div>
    
    <div class="row">      
        <div class="col-xl-12 col-md-12 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                Filtros
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                                @component('components/relatorio/livro-autor/filtros')
                                @endcomponent
                            </div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-search fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="row">
        <div class="col-md-12 col-xl-12 mb-4">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Livros</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped dataTable" id="tbRelatorio" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Autor</th>
                                    <th>Título</th>
                                    <th>Editora</th>
                                    <th>Edição</th>
                                    <th>Ano Publicação</th>
                                    <th>Valor</th>
                                    <th>Assuntos</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="8" class="text-center">
                                        @component('components/ajaxLoader')
                                        @endcomponent
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Código</th>
                                    <th>Autor</th>
                                    <th>Título</th>
                                    <th>Editora</th>
                                    <th>Edição</th>
                                    <th>Ano Publicação</th>
                                    <th>Valor</th>
                                    <th>Assuntos</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>                   

@component('components/rodape',
    array(
        'scripts' => array('index', 'assunto', 'autor', 'livro', 'livro-autor')
    )
)
@endcomponent