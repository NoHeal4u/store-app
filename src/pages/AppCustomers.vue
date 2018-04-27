<template>
	
	<div>
		
		<h1>App Customers</h1>

		<ul class= "list-group">

			<li class="list-group-item" v-for="customer in customers" :key = "customer.id">
		

			{{ customer.lastName }} {{ customer.firstName }} <button @click = "removeCustomer(customer) " class="btn btn-secondary"> Remove </button>



			</li>

		</ul>
	</div>	



</template>

	

<script>
	
	import { customerService } from '../services/CustomerService'

	export default {

		data() {

			return {

				customers: customerService.list()
				
			}
		}

		

	}



</script>