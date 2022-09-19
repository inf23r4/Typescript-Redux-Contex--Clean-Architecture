import { People } from '@/data';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React from 'react';


export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
	const pageSize = 5;
	const colums = [{
		field: 'name',
		headername: 'Name',
		flex: 1,
		minWidth: 150,
		renderCell: (params: GridRenderCellParams) => <>{params.value}</>
	}]
	return (<div >
		<DataGrid 
			disableColumnSelector
			disableSelectionOnClick
			autoHeight
			pageSize={pageSize}
			rowsPerPageOptions={[pageSize]} 
			columns={colums} 
			rows={People}
			getRowId={(row: any) => row.id}
			/>
	</div>);
};

export default Home;

