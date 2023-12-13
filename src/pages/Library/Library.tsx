import { IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';
import ToolbarTamu from '../../components/toolbar/toolbarGuest';
import MenuSlideGuest from '../../components/menu-Slide/menuSlideGuest';
import { useMemo, useState } from 'react';
import {
  MaterialReactTable,
  // createRow,
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
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';

const Example = () => {
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string | undefined>
  >({});

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
        // muiEditTextFieldProps: {
        //   type: 'email',
        //   required: true,
        //   error: !!validationErrors?.year,
        //   helperText: validationErrors?.year,
        //   //remove any previous validation errors when user focuses on the input
        //   onFocus: () =>
        //     setValidationErrors({
        //       ...validationErrors,
        //       year: undefined,
        //     }),
        //   //optionally add validation checking for onBlur or onChange
        // },
      },
      {
        accessorKey: 'tittle',
        header: 'tittle',
        // muiEditTextFieldProps: {
        //   type: 'email',
        //   required: true,
        //   error: !!validationErrors?.lastName,
        //   helperText: validationErrors?.lastName,
        //   //remove any previous validation errors when user focuses on the input
        //   onFocus: () =>
        //     setValidationErrors({
        //       ...validationErrors,
        //       tittle: undefined,
        //     }),
        // },
      },
      {
        accessorKey: 'tag',
        header: 'tag',
        // muiEditTextFieldProps: {
        //   type: 'email',
        //   required: true,
        //   error: !!validationErrors?.tag,
        //   helperText: validationErrors?.tag,
        //   //remove any previous validation errors when user focuses on the input
        //   onFocus: () =>
        //     setValidationErrors({
        //       ...validationErrors,
        //       tag: undefined,
        //     }),
        // },
      },


    ],
    [validationErrors],
  );

  //call CREATE hook
  const { mutateAsync: createUser, isPending: isCreatingUser } =
    useCreateUser();
  //call READ hook
  const {
    data: fetchedUsers = [],
    isError: isLoadingUsersError,
    isFetching: isFetchingUsers,
    isLoading: isLoadingUsers,
  } = useGetUsers();
  //call UPDATE hook
  const { mutateAsync: updateUser, isPending: isUpdatingUser } =
    useUpdateUser();
  //call DELETE hook
  const { mutateAsync: deleteUser, isPending: isDeletingUser } =
    useDeleteUser();

  // CREATE action
  // const handleCreateUser: MRT_TableOptions<User>['onCreatingRowSave'] = async ({
  //   values,
  //   table,
  // }) => {
  //   const newValidationErrors = validateUser(values);
  //   if (Object.values(newValidationErrors).some((error) => error)) {
  //     setValidationErrors(newValidationErrors);
  //     return;
  //   }
  //   setValidationErrors({});
  //   await createUser(values);
  //   table.setCreatingRow(null); //exit creating mode
  // };

  // UPDATE action
  // const handleSaveUser: MRT_TableOptions<User>['onEditingRowSave'] = async ({
  //   values,
  //   table,
  // }) => {
  //   const newValidationErrors = validateUser(values);
  //   if (Object.values(newValidationErrors).some((error) => error)) {
  //     setValidationErrors(newValidationErrors);
  //     return;
  //   }
  //   setValidationErrors({});
  //   await updateUser(values);
  //   table.setEditingRow(null); //exit editing mode
  // };

  // DELETE action
  // const openDeleteConfirmModal = (row: MRT_Row<User>) => {
  //   if (window.confirm('Are you sure you want to delete this user?')) {
  //     deleteUser(row.original.authors);
  //   }
  // };

  const table = useMaterialReactTable({
    columns,
    data: fetchedUsers,
    createDisplayMode: 'row', // ('modal', and 'custom' are also available)
    editDisplayMode: 'row', // ('modal', 'cell', 'table', and 'custom' are also available)
    enableEditing: false,
    enableRowActions: false,
    // positionActionsColumn: 'last',

    //action
    // getRowId: (row) => row.authors,
    // muiToolbarAlertBannerProps: isLoadingUsersError
    //   ? {
    //     color: 'error',
    //     children: 'Error loading data',
    //   }
    //   : undefined,
    // muiTableContainerProps: {
    //   sx: {
    //     minHeight: '500px',
    //   },
    // },
    // onCreatingRowCancel: () => setValidationErrors({}),
    // onCreatingRowSave: handleCreateUser,
    // onEditingRowCancel: () => setValidationErrors({}),
    // onEditingRowSave: handleSaveUser,

  });

  return (
    <>
      <MenuSlideGuest></MenuSlideGuest>
      <IonHeader className="Fav">
        <ToolbarTamu pageName='Perpustakaan' imageLink='https://i.pinimg.com/564x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg' />
      </IonHeader>

      <MaterialReactTable table={table} />;
    </>
  )
};

//CREATE hook (post new user to api)
function useCreateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (user: User) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (newUserInfo: User) => {
      queryClient.setQueryData(
        ['users'],
        (prevUsers: any) =>
          [
            ...prevUsers,
            {
              ...newUserInfo,
              id: (Math.random() + 1).toString(36).substring(7),
            },
          ] as User[],
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
  });
}

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

//UPDATE hook (put user in api)
function useUpdateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (user: User) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (newUserInfo: User) => {
      queryClient.setQueryData(
        ['users'],
        (prevUsers: any) =>
          prevUsers?.map((prevUser: User) =>
            prevUser.authors === newUserInfo.authors ? newUserInfo : prevUser,
          ),
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
  });
}

//DELETE hook (delete user in api)
function useDeleteUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (userId: string) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (userId: string) => {
      queryClient.setQueryData(
        ['users'],
        (prevUsers: any) =>
          prevUsers?.filter((user: User) => user.authors !== userId),
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
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

const validateRequired = (value: string) => !!value.length;
const validateEmail = (email: string) =>
  !!email.length &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );

function validateUser(user: User) {
  return {
    year: !validateRequired(user.year)
      ? 'year is Required'
      : '',
    tittle: !validateRequired(user.tittle) ? 'tittle is Required' : '',
    tag: !validateRequired(user.tag) ? 'Incorrect tag Format' : '',

  };
}