// ./CepService.ts
import {iCepService, iFooCepAPI} from './interfaces'

class CepService implements iCepService{
  constructor(private cepApi: iFooCepAPI) {}

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;