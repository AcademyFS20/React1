import React from 'react';

 function Table(props) {
    return (
        <div>
            <table class="min-w-full border-collapse block md:table">
		<thead class="block md:table-header-group">
			<tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Identifier</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Book Name</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Author</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Category</th>
                <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">NB pages</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
			</tr>
		</thead>
		<tbody class="block md:table-row-group">
			<tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Book Name</span>{props.title}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Author</span>{props.author}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Category</span>{props.category}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">NB pages</span>{props.nbpages}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
					<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Update</button>
					<button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
				</td>
			</tr>
		
		
					
		</tbody>
	</table>
        </div>
    )
}
export default Table;