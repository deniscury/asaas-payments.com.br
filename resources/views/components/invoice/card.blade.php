<div class="row" id="dvCreditCard">	
    <div class="offset-md-1 offset-xl-3 col-md-10 col-xl-6 mb-12">
        <div class="card shadow">
            <div class="card-body">
                <div class="form-group">
					<label>Número do Cartão</label>
					<input type="text" class="form-control" id="cardNumber" required>
				</div>					
				<div class="form-group row">
                    <div class="col-md-8">
                        <label>Data de Expiração</label>
                        <div class="form-inline">
                            <select class="form-control" id="expiryMonth">
                                @for($x = 1; $x <= 12; $x++)
                                    <option value="{{$x}}">{{$x}}</option>
                                @endfor
                            </select>&nbsp;/&nbsp; 
                            <select class="form-control" id="expiryYear">
                                @for($x = 2024; $x <= 2035; $x++)
                                    <option value="{{$x}}">{{$x}}</option>
                                @endfor
                            </select>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label>CCV</label>
                        <input type="text" class="form-control" id="ccv" required>
                    </div>
				</div>		
            </div>
            
			<div class="modal-footer">
				<button class="btn btn-success" id="btnCreditCard" onclick=creditCard();>Finalizar Pagamento</button>
			</div>
        </div>
    </div>	
</div>	