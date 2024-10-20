    <div class="row">
        <div class="col-md-12 col-xl-12 mb-4">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <div class="row">
                        <div class="col-md-6 text-left">
                            <h6 class="m-0 font-weight-bold text-primary">Clientes</h6>
                        </div>
                        <div class="col-md-6 text-right">
                            <a class="btn btn-sm btn-success" href="javascript:addClient();">
                                <i class="fa fa-plus"></i>&nbsp;Novo cliente
                            </a>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped dataTable" id="tbClients" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Nome</th>
                                    <th>Documento</th>
                                    <th>Email</th>
                                    <th>Telefone</th>
                                    <th>CEP</th>
                                    <th>Endereço</th>
                                    <th>Número</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Código</th>
                                    <th>Nome</th>
                                    <th>Documento</th>
                                    <th>Email</th>
                                    <th>Telefone</th>
                                    <th>CEP</th>
                                    <th>Endereço</th>
                                    <th>Número</th>
                                    <th>Ações</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                <tr>
                                    <td colspan="9" class="text-center">
                                        @component('components/ajaxLoader')
                                        @endcomponent
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>        
    @component('components/client/maintenance')          
    @endcomponent  