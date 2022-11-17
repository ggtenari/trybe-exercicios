interface iCepService {
  addressByCep(cep: string, num: number): Promise<string>
  cepByAddress(address: string, num: number): Promise<string>
}

interface iFooCepAPI {
  getAddressByCEP(cep: string, number: number): Promise<string>
  getCepByAddress(address: string, number: number): Promise<string>
}

export {
  iFooCepAPI,
  iCepService
}