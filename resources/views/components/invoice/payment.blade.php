    <div class="row">
        <div class="col-xl-6 col-md-8 offset-xl-3 offset-md-2 mb-4">
            <div class="card shadow mb-4">
                <div class="card-header py-3 text-center">
                    <h6 class="m-0 font-weight-bold text-success">Espelho da Cobrança</h6>
                    <input type="hidden" id="invoiceId" value={{$invoice}}>
                </div>
                <div class="row">	
					<div class="col-md-12 col-xl-12 mb-12">
						<div class="card border-left-primary shadow h-100 py-2">
							<div class="card-body">
								<div class="row no-gutters align-items-center">
									<div class="col mr-2">
										<div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
											Dados do Cliente
										</div>
										<div class="text-md text-primary" id="clientData">
											@component('components/ajaxLoader')
											@endcomponent
										</div>
									</div>
									<div class="col-auto">
										<i class="fas fa-user fa-2x text-gray-300"></i>
									</div>
								</div>
							</div>
						</div>
					</div>	
				</div>	
                <div class="row">	
					<div class="col-md-12 col-xl-12 mb-12">
						<div class="card border-left-success shadow h-100 py-2">
							<div class="card-body">
								<div class="row no-gutters align-items-center">
									<div class="col mr-2">
										<div class="text-xs font-weight-bold text-success text-uppercase mb-1">
											Dados do Pedido
										</div>
										<div class="text-md text-success" id="invoiceData">
											@component('components/ajaxLoader')
											@endcomponent
										</div>
									</div>
									<div class="col-auto">
										<i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
									</div>
								</div>
							</div>
						</div>
					</div>	
				</div>	
                
                @component('components/invoice/paid')
                @endcomponent 

                @component('components/invoice/bill')
                @endcomponent 
                
                @component('components/invoice/pix')
                @endcomponent   

                @component('components/invoice/card')
                @endcomponent   
            </div>
        </div>
    </div>  