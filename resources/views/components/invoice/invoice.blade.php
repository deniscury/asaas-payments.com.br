<div id="invoiceModal" class="modal fade">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">						
				<h4 class="modal-title">Gerar Cobrança</h4>
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			</div>
			<div class="modal-body">
				<div class="row">	
					<div class="col-xl-12 col-md-12 mb-12">
						<div class="card border-left-primary shadow h-100 py-2">
							<div class="card-body">
								<div class="row no-gutters align-items-center">
									<div class="col mr-2">
										<div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
											Cliente
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
					<div class="col-xl-12 col-md-12 mb-12">
						<div class="card border-left-success shadow h-100 py-2">
							<div class="card-body">
								<div class="row">
									<div class="col-md-6 form-group">
										<label>Tipo de Cobrança</label>
										<select class="form-control" id="invoiceBillingType">
											<option value="BOLETO">Boleto</option>
											<option value="CREDIT_CARD">Cartão de Crédito</option>
											<option value="PIX">PIX</option>
										</select>
									</div>
									<div class="col-md-6 form-group">
										<label>Valor</label>
										<input type="text" class="form-control" id="invoiceValue" required>
									</div>	
								</div>
							</div>
						</div>
					</div>	
				</div>
			</div>
			<div class="modal-footer">
				<button class="btn btn-default" data-dismiss="modal">Cancelar</button>
				<button class="btn btn-success" id="btnInvoice" onclick=generateInvoice();>Efetuar Pagamento</button>
			</div>
		</div>
	</div>
</div>