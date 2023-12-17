import { IonHeader, IonPage } from '@ionic/react';
import ToolbarTamu from '../../components/toolbar/toolbarGuest';
import MenuSlideGuest from '../../components/menu-Slide/menuSlideGuest';
import { db } from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useMemo, useState } from 'react';
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  useMaterialReactTable,
} from 'material-react-table';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { type User, fakeData } from './makeData';
import './Library.css';

const Example = () => {
  type DocType = {
    authors: string;
    year: string;
    title: string;
    tags: string;
  }
  const [users, setUsers] = useState<DocType[]>([])
  const docsCollectionRef = collection(db, "documents")

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(docsCollectionRef);
      setUsers(data.docs.map((doc) => ({
        authors: doc.data().authors,
        year: doc.data().year,
        title: doc.data().title,
        tags: doc.data().tags
      })));
    }

    getUsers()
  }, [])

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
        accessorKey: 'title',
        header: 'title',
      },
      {
        accessorKey: 'tags',
        header: 'tags',
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
      <IonPage id='main-content' className="LibraryTamu">
        <IonHeader className="Fav">
          <ToolbarTamu pageName='Perpustakaan' imageLink='https://i.pinimg.com/564x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg' />
        </IonHeader>
        {/* <div>
          {users.map((user) => {
            return (
              <div>
                <h6>Authors: {user.authors}</h6>
              </div>
            )
          })}
        </div> */}
        <div style={{ height: '900px' }}>
          <MaterialReactTable table={table} />;
        </div>
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
  <QueryClientProvider client={queryClient}>
    <Example />
  </QueryClientProvider>
);

export default ExampleWithProviders;
