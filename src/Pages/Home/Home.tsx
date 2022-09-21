import { People } from '@/data';
import { Person } from '@/models';
import { Checkbox } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React, {useState} from 'react';


export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
	const [ selectedPeople, setSelectedPeople ] = useState<Person[]>([])
	const pageSize = 5;

	const findPerson = (person: Person) => !!selectedPeople.find(p => p.id === person.id);
	const filterPerson = (person: Person) => selectedPeople.filter(p => p.id !== person.id);

	const handleChange = (person: Person) =>{
		setSelectedPeople(findPerson(person)? filterPerson(person) : [...selectedPeople , person])
	}
	const colums = [
		{
			field: 'actions',
			headerName: '',
			width:50,
			renderCell: (params: GridRenderCellParams) => <>{
				<Checkbox size="small" checked={findPerson(params.row)} onChange={() => handleChange(params.row)}/>
			}</>
		},
		{
		field: 'name',
		headername: 'Name',
		flex: 1,
		minWidth: 150,
		renderCell: (params: GridRenderCellParams) => <>{params.value}</>
	},
	{
		field: 'category',
		headername: 'Categories',
		flex: 1,
		minWidth: 150,
		renderCell: (params: GridRenderCellParams) => <>{params.value}</>
	},
	{
		field: 'company',
		headername: 'Company',
		flex: 1,
		minWidth: 150,
		renderCell: (params: GridRenderCellParams) => <>{params.value}</>
	}]
	return (<div >
		<DataGrid 
			columns={colums} 
			rows={People}
			disableColumnSelector
			disableSelectionOnClick
			autoHeight
			pageSize={pageSize}
			rowsPerPageOptions={[pageSize]} 
			getRowId={(row: any) => row.id}
			/>
	</div>);
};

export default Home;

