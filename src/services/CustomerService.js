


 const customers = [

	{id: 1, firstName: 'Pera', lastName: 'Peric', email: 'peraperic@gmail.com', products: '' },
	{id: 2, firstName: 'Djura', lastName: 'Djuric', email: 'djuradjuric@gmail.com', products: '' },
	{id: 3, firstName: 'Laza', lastName: 'Lazic', email: 'lazalazic@gmail.com', products: '' }
]

export default class CustomerService {
	
	list() {

		return customers
	}
}

export const customerService = new CustomerService()
