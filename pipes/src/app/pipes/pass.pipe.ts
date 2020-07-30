import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pass'
})
export class PassPipe implements PipeTransform {

  transform(value: string, activo: boolean = false): string {
    /*
  	let pass: string = '';
  	console.log('hola?');
    if(!activo){
    	for(let i=0;i<value.length;i++){
    		pass+='*'
    	}
    	return pass;
    }	

    return value;
  }*/

  	return ( !activo ) ? '*'.repeat( value.length ) : value;
  }

}
