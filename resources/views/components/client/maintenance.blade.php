<div id="maintenanceClient" class="modal fade">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">						
				<h4 class="modal-title">Manutenção Cliente</h4>
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			</div>
			<div class="modal-body">					
				<div class="form-group">
					<label>Nome</label>
					<input type="hidden" class="form-control" id="clientId">
					<input type="text" class="form-control" id="clientName" required>
				</div>					
				<div class="form-group">
					<label>Documento</label>
					<div class="row">
						<div class="col-md-3">
							<select class="form-control" id="documentType">
								<option value="CPF">CPF</option>
								<option value="CNPJ">CNPJ</option>
							</select>
						</div>
						<div class="col-md-9">
							<input type="text" class="form-control" id="clientDocument" required>
						</div>
					</div>
				</div>							
				<div class="form-group">
					<label>Email</label>
					<input type="text" class="form-control" id="clientEmail" required>
				</div>						
				<div class="form-group">
					<label>Telefone</label>
					<input type="text" class="form-control" id="clientPhone" required>
				</div>					
				<div class="form-group">
					<label>CEP</label>
					<input type="text" class="form-control" id="clientPostalCode" required>
				</div>						
				<div class="form-group">
					<div class="row">
						<div class="col-md-8">
							<label>Endereço</label>
							<input type="text" class="form-control" id="clientAddress" required>
						</div>
						<div class="col-md-4">
							<label>Número</label>
							<input type="text" class="form-control" id="clientAddressNumber" required>
						</div>
					</div>
				</div>						
			</div>
			<div class="modal-footer">
				<button class="btn btn-default" data-dismiss="modal">Cancelar</button>
				<button class="btn btn-success" id="btnSaveClient" onclick=saveClient();>Salvar</button>
			</div>
		</div>
	</div>
</div>