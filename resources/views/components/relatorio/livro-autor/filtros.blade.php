<div class="row">
	<div class="col-md-12">				
		<div class="form-group">
			<label>Autor</label>
			<input type="text" class="form-control" id="autor">
		</div>		
	</div>
</div>
<div class="row">
	<div class="col-md-4">				
		<div class="form-group">
			<label>Título</label>
			<input type="text" class="form-control" id="titulo">
		</div>		
	</div>	
	<div class="col-md-5">				
		<div class="form-group">
			<label>Editora</label>
			<input type="text" class="form-control" id="editora">
		</div>		
	</div>		
	<div class="col-md-3">						
		<div class="form-group">
			<label>Ano de Publicação</label>
			<input type="number" class="form-control" id="anoPublicacao">
		</div>	
	</div>				
</div>	
<div class="row">	
	<div class="col-md-4">						
		<div class="form-group">
			<label>Assuntos </label>
			<select type="text" class="form-control" id="assunto">
			</select>
		</div>	
	</div>	
	<div class="col-md-5">						
		<div class="form-group">
			<label>Valor </label>
    		<div class="form-inline"> 
				<small>De:&nbsp;</small><input type="text" class="form-control" id="valorInicio"><small>&nbsp;a&nbsp;</small><input type="text" class="form-control" id="valorFim">
			</div>
		</div>	
	</div>					
</div>
<div class="row text-right">
	<div class="col-md-12">	
		<button class="btn btn-success" onclick=atualizarRelatorio();>Buscar</button>
	</div>
</div>