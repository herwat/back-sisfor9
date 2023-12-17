import { IonButtons, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ToolbarAdmin from '../../../components/toolbar/toolbarAdmin';
import MenuSlideAdmin from '../../../components/menu-Slide/menuSlideAdmin';
import './DaftarDosen.css'
import { useEffect, useMemo, useState } from 'react';
import {
  MRT_EditActionButtons,
  MaterialReactTable,
  type MRT_ColumnDef,
  type MRT_Row,
  type MRT_TableOptions,
  useMaterialReactTable,
} from 'material-react-table';
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
    QueryClient,
    QueryClientProvider,
    useMutation,
    useQuery,
    useQueryClient,
  } from '@tanstack/react-query';
import { type DafDos, fakeData } from '../../Admin/Dosen/DataDosen';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import {db} from "../../firebase/firebase";


async function addNewCondition(newCondition: DafDos) {
  // Menambahkan data baru ke Firestore dan mendapatkan referensi dokumen
  const timestamp = new Date();
  const querySnapshot = await getDocs(collection(db, 'DaftarDosen'));
  const numberOfDafDos = querySnapshot.size;

  // Menambahkan data baru ke Firestore dan mendapatkan referensi dokumen
  const docRef = await addDoc(collection(db, 'DaftarDosen'), {
    ...newCondition,
    timestamp,
    // Menambahkan nomor berurutan
    no: numberOfDafDos + 1,
  });

  // Mengambil ID dokumen yang dihasilkan
  const newId = docRef.id;

  // Menge-update ID di dalam dokumen Firestore dengan ID yang dihasilkan
  await setDoc(doc(db, 'DaftarDosen', newId), {
    ...newCondition,
    id: newId,
    timestamp,
    no: numberOfDafDos + 1,
  });

  // Menggunakan ID dokumen sebagai ID item
  const conditionWithId = { ...newCondition, id: newId, timestamp, no: numberOfDafDos + 1 };

  // Jika perlu, Anda dapat mengembalikan conditionWithId dari fungsi ini
  return conditionWithId;
}


const Example = () => {
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string | undefined>
  >({});

  const columns = useMemo<MRT_ColumnDef<DafDos>[]>(
    () => [
       {
        header: 'No',
        enableEditing: true,
        size: 80,
        accessorKey:'no',
        isSortable: true, // Enable sorting for this column
    
      },
      {
        header: 'Id',
        enableEditing: false,
        size: 80,
        accessorKey: 'id',
        
      },
      {
        accessorKey: 'dosen',
        header: 'dosen',
        muiEditTextFieldProps: {
          type: 'email',
          required: true,
          error: !!validationErrors?.dosen,
          helperText: validationErrors?.dosen,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              dosen: undefined,
            }),
        },
      },
      {
        accessorKey: 'bidangkeahlian',
        header: 'bidangkeahlian',
        muiEditTextFieldProps: {
          type: 'email',
          required: true,
          error: !!validationErrors?.bidangkeahlian,
          helperText: validationErrors?.bidangkeahlian,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
             bidangkeahlian: undefined,
            }),
          //optionally add validation checking for onBlur or onChange
        },
      },
      

    ],
    [validationErrors],
  );


  //CALL CREATE HOOK
  const { mutateAsync: createUser, isPending: isCreatingUser } = useCreateUser();
  const {
    data: fetchedUsers = [],
    isError: isLoadingUsersError,
    isFetching: isFetchingUsers,
    isLoading: isLoadingUsers,
  } = useGetUsers();
  const { mutateAsync: updateUser, isPending: isUpdatingUser } = useUpdateUser();
  const { mutateAsync: deleteUser, isPending: isDeletingUser } = useDeleteUser();


  //CREATE ACTION

  const handleCreateUser: MRT_TableOptions<DafDos>['onCreatingRowSave'] = async ({
    values,
    table,
  }) => {
    const newValidationErrors = validateUser(values);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
  
    // Menambahkan data baru ke Firestore dan mendapatkan conditionWithId
    const conditionWithId = await addNewCondition(values);
  
    // Memicu refetch untuk memperbarui data
    queryClient.invalidateQueries({ queryKey: ['DaftarDosen'] });
  
    // Anda dapat menggunakan conditionWithId sesuai kebutuhan
    console.log('Item baru dengan ID:', conditionWithId);
  
    table.setCreatingRow(null);
  };
  

   // Fungsi untuk UPDATE
const handleSaveUser: MRT_TableOptions<DafDos>['onEditingRowSave'] = async ({
  values,
  table,
}) => {
  const newValidationErrors = validateUser(values);
  if (Object.values(newValidationErrors).some((error) => error)) {
    setValidationErrors(newValidationErrors);
    return;
  }
  setValidationErrors({});
  await updateUser(values);
  table.setEditingRow(null);
};

// Fungsi untuk DELETE
const openDeleteConfirmModal = async (row: MRT_Row<DafDos>) => {
  if (window.confirm('Apakah Anda yakin ingin menghapus baris ini?')) {
    await deleteUser(row.original.id);
  }
};


  const table = useMaterialReactTable({
    columns,
    data: fetchedUsers,
    initialState: { columnVisibility: { id: false } },
    createDisplayMode: 'modal',
    editDisplayMode: 'modal',
    enableEditing: true,
    enableRowActions: true,
    positionActionsColumn: 'last',

    
  
    getRowId: (row) => row.id,
    muiToolbarAlertBannerProps: isLoadingUsersError
      ? {
          color: 'error',
          children: 'Error loading data',
        }
      : undefined,
    muiTableContainerProps: {
      sx: {
        minHeight: '500px',
      },
    },
    onCreatingRowCancel: () => setValidationErrors({}),
    onCreatingRowSave: handleCreateUser,
    onEditingRowCancel: () => setValidationErrors({}),
    onEditingRowSave: handleSaveUser,


        //optionally customize modal content

    renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h5">Add Dosen</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {internalEditComponents}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
    renderEditRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h5">Edit</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {internalEditComponents}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: 'flex', gap: '1rem',}}>
        <Tooltip title="Edit">
          <IconButton onClick={() => table.setEditingRow(row)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => openDeleteConfirmModal(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    renderTopToolbarCustomActions: ({ table }) => (
      <Button className="ButtonAdd"
        variant="contained"
        onClick={() => {
          table.setCreatingRow(true);
        }}
      >
       Add Dosen
      </Button>
    ),
    state: {
      isLoading: isLoadingUsers,
      isSaving: isCreatingUser || isUpdatingUser || isDeletingUser,
      showAlertBanner: isLoadingUsersError,
      showProgressBars: isFetchingUsers,
    },
    
  });

     return (
        <>
          <MenuSlideAdmin></MenuSlideAdmin>
    
          <IonPage className="DafDos">
          <IonHeader className="Dosen">
            <ToolbarAdmin
              pageName="Dosen"
              imageLink="https://i.pinimg.com/564x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg"/>
          </IonHeader>
    
          <MaterialReactTable table={table} />
          </IonPage>
        </>
      );
  
};

//CREATE hook (post new user to api)

function useCreateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (user: DafDos) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return Promise.resolve();
    },
    onMutate: (newUserInfo: DafDos) => {
      queryClient.setQueryData(
        ['DaftarDosen'],
        (prevUsers: any) => {
          return [...prevUsers, newUserInfo] as DafDos[];
        }
      );
    },
  });
}
//READ hook (get users from api)

function useGetUsers() {
  return useQuery<DafDos[]>({
    queryKey: ['DaftarDosen'],
    queryFn: async () => {
      const querySnapshot = await getDocs(collection(db, 'DaftarDosen'));
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as DafDos));

      // Secara eksplisit mengurutkan data berdasarkan kolom "No"
      const sortedData = data.sort((a, b) => a.no - b.no);

      return sortedData;
    },
    refetchOnWindowFocus: false,
  });
}


//UPDATE hook (put user in api)

// Hook untuk UPDATE (memperbarui data di Firestore)
function useUpdateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (updatedCondition: DafDos) => {
      // Memperbarui dokumen di Firestore
      await setDoc(doc(db, 'kondisi', updatedCondition.id), updatedCondition);
      return Promise.resolve();
    },
    onMutate: (newConditionInfo: DafDos) => {
      queryClient.setQueryData(
        ['users'],
        (prevConditions: any) =>
          prevConditions?.map((prevCondition: DafDos) =>
            prevCondition.id === newConditionInfo.id ? newConditionInfo : prevCondition
          ),
      );
    },
  });
}

// Hook untuk DELETE (menghapus data di Firestore)
function useDeleteUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (conditionId: string) => {
      // Menghapus dokumen di Firestore
      await deleteDoc(doc(db, 'DaftarDosen', conditionId));
      return Promise.resolve();
    },
    onMutate: (conditionId: string) => {
      queryClient.setQueryData(
        ['users'],
        (prevConditions: any) =>
          prevConditions?.filter((condition: DafDos) => condition.id !== conditionId),
      );
    },
  });
}

const queryClient = new QueryClient();

const ExampleWithProviders = () => (
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

function validateUser(user: DafDos) {
  return {
    bidangkeahlian: !validateRequired(user.bidangkeahlian) ? 'bidangkeahlian is Required' : '',
 
  };
}