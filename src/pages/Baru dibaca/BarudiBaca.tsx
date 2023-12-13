import { IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';
import Toolbar from '../../components/toolbar/toolbar';
import MenuSlide from '../../components/menu-Slide/menuSlide';
import './BarudiBaca.css'
import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import { type User, fakeData } from './Dataa';

const barubaca = () => {
  const columns = useMemo<MRT_ColumnDef<User>[]>(
    () => [
      {
        accessorKey: 'authors',
        header: 'Authors',
      },
      {
        accessorKey: 'year',
        header: 'Year',
      },
      {
        accessorKey: 'tittle',
        header: 'Title',
      },
      {
        accessorKey: 'tag',
        header: 'Tag',
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data: fakeData,
    enableRowPinning: true,
    enablePagination: false,
    enableStickyHeader: true,
    rowPinningDisplayMode: 'bottom',
    getRowId: (row) => row.tittle,
    muiTableContainerProps: {
      sx: {
        maxHeight: '500px',
      },
    },
  });

  return (
    <>
      <MenuSlide></MenuSlide>
      <IonHeader className="read">
        <Toolbar pageName='Baru dibaca' imageLink='https://i.pinimg.com/564x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg' />
      </IonHeader>
     
      <MaterialReactTable table={table} />;
    </>
  )
};

export default barubaca;

