function Calculo(form1) {
	    p=(form1.peso.value);
		a=(form1.altura.value);
		imc=(p/(a*a));
		alert(imc);
		
		if (imc<17){
			alert("Muito abaixo do peso");}
			else {
				if (imc<=18.49) {
			    alert("Abaixo do peso");}
				else{
					if (imc<=24.99) {
						alert("Peso NORMAL");}
					else{ if (imc<=29.99){
							    alert("Acima do peso");	}
						  else{	if (imc<=34.99){       
									    alert("Obesidade I");}
								else{ if (imc<=39.99){    
										alert("Obesidade II - Severa");}								
										else {if (imc>40) {       
												alert("Obesidade III - Mórbida");}
										} 
		
									} 
								}
						
				        }
			        }

				}
				
			
		
	}