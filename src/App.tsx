import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Pages */
import Home from './pages/Home';
import FormLogin from './pages/Form/FormLogin';
import FavCol from './pages/favorite collection/favCol';
import Notification from './pages/Notification/Notification';
import Admin from './pages/Admin/homeAdmin';
import Setting from './pages/Setting';
import Library from './pages/Library/Library';
import LibraryMember from './pages/Library/LibraryMember';
import HalamanAwal from './pages/tampilanawal/HalamanAwal';
// import FormRegis from './pages/Form/FormRegis';
import Trash from './pages/Trash/Trash';
import PublikasiFile from './pages/publikasi/PublikasiFile';
import Profile from './pages/Profile/profile';
import Bacananti from './pages/BacaNanti/Bacananti';
import PageTamu from './pages/PageGuest/PageTamu';
import barubaca from './pages/Baru dibaca/BarudiBaca';
import Publikasiadmin from './pages/Admin/PublikasiAdmin/Publikasiadmin';
import DataDosen from './pages/Admin/Dosen/DaftarDosen';
import DataMahasiswa from './pages/Admin/Mahasiswa/DaftarMahasiswa';
import DataTamu from './pages/Admin/Guest/DaftarTamu';
import DataNotif from './pages/Admin/Pemberitahuan/DaftarNotif';



setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/halamantamu" component={PageTamu} />
        <Route exact path="/formMember" component={FormLogin} />
        {/* <Route exact path="/formMember" component={FormRegis} /> */}
        <Route exact path="/bacananti" component={Bacananti} />
        <Route exact path="/favorit" component={FavCol} />
        <Route exact path="/baruSajaDibaca" component={barubaca} />
        <Route exact path="/pemberitahuan" component={Notification} />
        <Route exact path="/sampah" component={Trash} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/daftardosen" component={DataDosen} />
        <Route exact path="/daftarmahasiswa" component={DataMahasiswa} />
        <Route exact path="/daftarguest" component={DataTamu} />
        <Route exact path="/infopemberitahuan" component={DataNotif} />
        <Route exact path="/publikasiadmin" component={Publikasiadmin} />
        <Route exact path="/publikasiSaya" component={PublikasiFile} />
        <Route exact path="/setting" component={Setting} />
        <Route exact path="/perpustakaan" component={Library} />
        <Route exact path="/login" component={HalamanAwal} />
        <Route exact path="/PerpustakaanSaya" component={LibraryMember} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
