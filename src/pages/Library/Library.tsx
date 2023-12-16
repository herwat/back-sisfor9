import { IonHeader, IonPage } from '@ionic/react';
import ToolbarTamu from '../../components/toolbar/toolbarGuest';
import MenuSlideGuest from '../../components/menu-Slide/menuSlideGuest';
import { useMemo, useState } from 'react';
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  type MRT_Row,
  type MRT_TableOptions,
  useMaterialReactTable,
} from 'material-react-table';
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { type User, fakeData } from './makeData';

const Example = () => {

  const columns = useMemo<MRT_ColumnDef<User>[]>(
    () => [
      {
        accessorKey: 'authors',
        header: 'authors',
        enableEditing: false,
        size: 50,
      },
      {
        accessorKey: 'year',
        header: 'year',
      },
      {
        accessorKey: 'tittle',
        header: 'tittle',
      },
      {
        accessorKey: 'tag',
        header: 'tag',
      },


    ],
    [],
  );

  //call READ hook
  const {
    data: fetchedUsers = [],
  } = useGetUsers();

  const table = useMaterialReactTable({
    columns,
    data: fetchedUsers,
    createDisplayMode: 'row', // ('modal', and 'custom' are also available)
    editDisplayMode: 'row', // ('modal', 'cell', 'table', and 'custom' are also available)
    enableEditing: false,
    enableRowActions: false,

  });

  return (
    <>
      <MenuSlideGuest></MenuSlideGuest>
      <IonPage id='main-content'>
        <IonHeader className="Fav">
          <ToolbarTamu pageName='Perpustakaan' imageLink='https://i.pinimg.com/564x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg' />
        </IonHeader>

        <MaterialReactTable table={table} />;
      </IonPage>
    </>
  )
};

//READ hook (get users from api)
function useGetUsers() {
  return useQuery<User[]>({
    queryKey: ['users'],
    queryFn: async () => {
      //send api request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve(fakeData);
    },
    refetchOnWindowFocus: false,
  });
}

const queryClient = new QueryClient();

const ExampleWithProviders = () => (
  //Put this with your other react-query providers near root of your app
  <QueryClientProvider client={queryClient}>
    <Example />
  </QueryClientProvider>
);

export default ExampleWithProviders;
