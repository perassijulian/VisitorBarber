import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import axios from 'axios';
import './styles.scss';

import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import app from "../../../firebase";

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerWorker } from "../../../redux/workerService";
import { set } from 'mongoose';

const RegisterWorker = () => {
    const cleanFormData = {
        birthday: '',
        barber: true,
        hairdresser: false,
        dayAvailable: '',
        timeAvailable: '',
        averageCostHairdress: '',
        averageCostBarber: '',
        profilePicture: '',
        showcasePictures: [],
    }
    const [formData, setFormData] = useState(cleanFormData);
    const [profilePictureURL, setProfilePictureURL] = useState("");
    const [showcasePictures, setShowcasePictures] = useState([]);
    const [showcasePicturesURL, setShowcasePicturesURL] = useState([]);

    const [showcase, setShowcase] = useState("");
    const [file, setFile] = useState("");

    const storage = getStorage(app);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        setFormData((prevState) => {
            return ({
                ...prevState,
                [name] : type === 'checkbox'? checked : value
            })
        })
    }

    // const handleProfilePicture = (e) => {
    //     e.preventDefault();

    //     const fileName = new Date().getTime() + e.target.files[0].name;
    //     const storageRef = ref(storage, fileName);
    //     const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);

    //     // Register three observers:
    //     // 1. 'state_changed' observer, called any time the state changes
    //     // 2. Error observer, called on failure
    //     // 3. Completion observer, called on successful completion
    //     uploadTask.on(
    //     "state_changed",
    //     (snapshot) => {
    //         // Observe state change events such as progress, pause, and resume
    //         // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //         const progress =
    //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //         console.log("Upload is " + progress + "% done");
    //         switch (snapshot.state) {
    //         case "paused":
    //             console.log("Upload is paused");
    //             break;
    //         case "running":
    //             console.log("Upload is running");
    //             break;
    //         default:
    //         }
    //     },
    //     (error) => {
    //         // Handle unsuccessful uploads
    //     },
    //     () => {
    //         // Handle successful uploads on complete
    //         // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //             setProfilePictureURL(downloadURL)
    //         });
    //     }
    //     );
        
    // }

    // const handleShowcasePictures = (e) => {
    //     for (let i = 0; i < e.target.files.length; i++) {
    //         const newImage = e.target.files[i];
    //         newImage["id"] = Math.random();
    //         setShowcasePictures((prevState) => [...prevState, newImage])
    //         console.log('for loop done')
    //     }

    //     const promises = [];

    //     showcasePictures.map((image) =>{
    //         const fileName = new Date().getTime() + image.name;
    //         const storageRef = ref(storage, fileName);
    //         const uploadTask = uploadBytesResumable(storageRef, image);
    //         promises.push(uploadTask);

    //         // Register three observers:
    //         // 1. 'state_changed' observer, called any time the state changes
    //         // 2. Error observer, called on failure
    //         // 3. Completion observer, called on successful completion
    //         uploadTask.on(
    //             "state_changed",
    //             (snapshot) => {
    //                 // Observe state change events such as progress, pause, and resume
    //                 // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //                 const progress =
    //                 (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //                 console.log("Upload is " + progress + "% done");
    //                 switch (snapshot.state) {
    //                 case "paused":
    //                     console.log("Upload is paused");
    //                     break;
    //                 case "running":
    //                     console.log("Upload is running");
    //                     break;
    //                 default:
    //                 }
    //             },
    //             (error) => {
    //                 // Handle unsuccessful uploads
    //             },
    //             async () => {
    //                 await getDownloadURL(uploadTask.snapshot.ref)
    //                     .then((downloadURL) => {
    //                         console.log('downloadURL: ', downloadURL)
    //                         setShowcasePicturesURL([...showcasePictures, downloadURL])
    //                         console.log('showcasePicturesURL: ', showcasePicturesURL)
    //                 });
    //             }
    //         );
    //     })
    //     Promise.all(promises)
    //     .then(console.log('Uploading finished'))
    //     .catch((err) => console.log(err))
        

    // }

    const handleSubmit = async (e) => {
        e.preventDefault();

        //DO THIS WITH STATE.USER.CURRENTUSER ?
        //MAYBE IT'S NOT NEEDED CAUSE YOU CAN USE REQ.USER AFTER VALIDATION
        const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
        const currentUser = user && JSON.parse(user).currentUser;
        const id = currentUser?._id;

        try {
            const showcasePictures = await Promise.all(
              Object.values(showcase).map(async (file) => {
                const data = new FormData();
                data.append("file", file);
                data.append("upload_preset", "upload");
                const uploadRes = await axios.post(
                  "https://api.cloudinary.com/v1_1/julianjulian/image/upload",
                  data
                );
      
                const { url } = uploadRes.data;
                return url;
              })
            );

            const data = new FormData();
            data.append("file", file);
            data.append("upload_preset", "upload");
            const uploadRes = await axios.post(
                "https://api.cloudinary.com/v1_1/lamadev/image/upload",
                data
            );
            const { url } = uploadRes.data;
     
            const workerData = {...formData, id, showcasePictures, profilePicture: url};
            registerWorker(dispatch, workerData);
    
    //make PUT request to user to upload user.worker. Cause it need to be done once registerWorker.fulfilled
            navigate('/user/my-account');
          } catch (err) {console.log(err)}



    }

  return (
    <div className='registerWorker'>
        <div className='registerWorker--wrap'>
            <h1>Registrarme como trabajador</h1>
            <form onSubmit={handleSubmit} className='registerWorker--wrap--form'>
                <div className='registerWorker--wrap--form--birthday'>
                    <label>Fecha de nacimiento</label>
                    <input
                        type="date"
                        placeholder="Fecha de nacimiento"
                        onChange={handleChange}
                        name="birthday"
                        value={formData.birthday}
                    />
                </div>
                <div className='registerWorker--wrap--form--photo'>
                    <label>Seleccionar foto de perfil</label>
    {/**<FileBase
                        type='file'
                        multiple={false}
                        onDone={({base64}) => setFormData({...formData, profilePicture: base64})}
    />**/}  
                    <input
                        type="file"
                        id="file"
                        onChange={(e) => setFile(e.target.files)}
                    />
                </div>
                <div className='registerWorker--wrap--form--worksphoto'>
                    <label>Seleccionar trabajos Realizados</label>
    {/**<FileBase
                        type='file'
                        multiple={true}
                        onDone={({base64}) => setFormData({...formData, profilePicture: base64})}
                    />
    />
                    <input
                        type="file"
                        id="file"
                        multiple
                        onChange={handleShowcasePictures}
                    />**/}
                    <input
                        type="file"
                        id="file"
                        multiple
                        onChange={(e) => setShowcase(e.target.files)}
                    />
                    
                </div>
                <div className='registerWorker--wrap--form--profesion'>
                    <label>Mi profesión es</label>
                    <div className='registerWorker--wrap--form--profesion--checkbox'>
                        <div>
                            <input 
                                type="checkbox" 
                                id="barber" 
                                checked={formData.barber}
                                onChange={handleChange}
                                name="barber"
                            />
                            <label htmlFor="barber">Barbero</label>
                        </div>
                        <div>
                            <input 
                                type="checkbox" 
                                id="hairdresser" 
                                checked={formData.hairdresser}
                                onChange={handleChange}
                                name="hairdresser"
                            />
                            <label htmlFor="hairdresser">Peluquero</label>
                        </div>
                    </div>
                </div>
                <div className='registerWorker--wrap--form--availability'>
                    <label>Disponibilidad</label>
                    <input
                        type="text"
                        placeholder="Día (Ej: LUN a VIE)"
                        onChange={handleChange}
                        name="dayAvailable"
                        value={formData.dayAvailable}
                    />
                    <input
                        type="text"
                        placeholder="Hora (Ej: 8 a 18)"
                        onChange={handleChange}
                        name="timeAvailable"
                        value={formData.timeAvailable}
                    />
                </div>
                <div className='registerWorker--wrap--form--cost'>
                    <label>Costo promedio</label>
                    {formData.hairdresser&&<input
                        type="text"
                        placeholder="Servicio peluqueria"
                        onChange={handleChange}
                        name="averageCostHairdress"
                        value={formData.averageCostHairdress}
                    />}
                    {formData.barber&&<input
                        type="text"
                        placeholder="Servicio barbería"
                        onChange={handleChange}
                        name="averageCostBarber"
                        value={formData.averageCostBarber}
                    />}
                </div>
                <button>REGISTRARME</button>
            </form>
        </div>    
    </div>
  )
}

export default RegisterWorker