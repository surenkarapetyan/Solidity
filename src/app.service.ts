import {HttpException, Injectable} from '@nestjs/common';

@Injectable()
export class AppService {

    analyze(code) {
        const imports = [];
        const contracts = [];
        const arr = code.split(/[\s\n]/);
        arr.map((el,i) => {
            if(el === 'import') {
                imports.push(arr[i + 1].replaceAll(/["';]/g,''))
            }
            if(el === 'contract') contracts.push(arr[i+1])
        })
        if(!contracts.length && !imports.length){
            throw new HttpException('There are no imports and contracts', 400)
        }
        return {
            "imports": [
                ...imports
            ],
            "contracts": [
                ...contracts
            ]
        };
    }
}
