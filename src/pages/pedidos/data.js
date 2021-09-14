import profile from '../../assets/default-avatar.jpg';

export const defaultValues = {
  id: '#NULL',
  email: '',
  image: { profile },
  status: 'em andamento',
  budgetList: {
    store: 'Fornecedor Anonimo',
    products: [],
  },
  data: '14/09/2021',
};
export const pedidos = [
  {
    id: '#2245',
    cliente: 'Jânio Quadros',
    email: 'janio.quadros@planalto.gov',
    image:
      'https://cpdoc.fgv.br/sites/default/files/imagens/dossies/nav_jgoulart/fotos/Modulo2/CCfoto155.jpg',
    status: 'concluído',
    startTime: '08:00',
    endTime: '18:00',
    data: '24/08/2021',
    budgetList: {
      store: 'Leroy Merlim',
      products: [
        { id: 0, name: 'cimento', quantity: '10', price: '30' },
        { id: 1, name: 'tijolo', quantity: '4000', price: '900' },
      ],
    },
  },
  {
    id: '#2246',
    cliente: 'Getúlio Vargas',
    email: 'getulio.vargas@planalto.gov',
    image:
      'https://espacodemocratico.org.br/wp-content/uploads/2020/09/get.jpg',
    status: 'em andamento',
    data: '28/08/2021',
    startTime: '08:00',
    endTime: '18:00',
    budgetList: {
      store: 'Castelo Forte',
      produtcs: [{ id: 0, name: 'argamassa', quantity: '5', price: '15' }],
    },
  },
  {
    id: '#2247',
    cliente: 'Juscelino Kubitschek',
    email: 'juscelino.kubitschek@planalto.gov',
    image:
      'https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/a66acc0e81e86787088c888d6dac37be.jpg',
    status: 'cancelado',
    data: '31/08/2021',
    startTime: '08:00',
    endTime: '18:00',
    budgetList: {
      store: 'Amanco',
      pro: [{ id: 0, name: 'cano pvc 2m', quantity: '10', price: '12' }],
    },
  },
];
export const headTable = ['Id', 'Clientes', 'Fornecedor', 'Status', 'Data'];
