import React, { useState } from 'react';
import FileBase from 'react-file-base64';
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
    }
    const [formData, setFormData] = useState(cleanFormData);
    const [profilePicture, setProfilePicture] = useState(null);
    const [showcasePictures, setShowcasePictures] = useState([]);


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

    const handleProfilePicture = (e) => {
        let profilePictureURL = "";
        setProfilePicture(e.target.files[0])
        const storage = getStorage(app);

        //UPLOAD PROFILE PICTURE
        const fileName = new Date().getTime() + profilePicture.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, profilePicture);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on(
        "state_changed",
        (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
            case "paused":
                console.log("Upload is paused");
                break;
            case "running":
                console.log("Upload is running");
                break;
            default:
            }
        },
        (error) => {
            // Handle unsuccessful uploads
        },
        () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((profilePicture) => {
            // const product = { ...inputs, img: downloadURL, categories, size, color};
            // addProduct(product, dispatch);
            // const workerData = {...formData, id, profilePicture: downloadURL}
            // console.log(workerData)
            // registerWorker(dispatch, workerData);
            setFormData((prevState) => [...prevState, profilePicture])
            });
        }
        );

    }

    const handleShowcasePictures = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i];
            newImage["id"] = Math.random();
            setShowcasePictures((prevState) => [...prevState, newImage])
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //DO THIS WITH STATE.USER.CURRENTUSER ?
        //MAYBE IT'S NOT NEEDED CAUSE YOU CAN USE REQ.USER AFTER VALIDATION
        const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
        const currentUser = user && JSON.parse(user).currentUser;
        const id = currentUser?._id;

        let showcasePicturesURL = [];
        const promises = [];

        const storage = getStorage(app);

        //UPLOAD SHOWCASE PICTURES
        if (showcasePictures) {
            showcasePictures.map((image) =>{
                const fileName = new Date().getTime() + image.name;
                const storageRef = ref(storage, fileName);
                const uploadTask = uploadBytesResumable(storageRef, image);
                promises.push(uploadTask);

                // Register three observers:
                // 1. 'state_changed' observer, called any time the state changes
                // 2. Error observer, called on failure
                // 3. Completion observer, called on successful completion
                uploadTask.on(
                "state_changed",
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                    switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                    default:
                    }
                },
                (error) => {
                    // Handle unsuccessful uploads
                },
                async () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    // const product = { ...inputs, img: downloadURL, categories, size, color};
                    // addProduct(product, dispatch);
                    // const workerData = {...formData, id, profilePicture: downloadURL}
                    // console.log(workerData)
                    // registerWorker(dispatch, workerData);
                        showcasePicturesURL.push(downloadURL)
                    });
                }
                );
            })
            Promise.all(promises)
            .then(alert('All images uploaded'))
            .catch((err) => console.log(err))
        }
        const workerData = {...formData, id, showcasePictures: showcasePicturesURL};
        console.log(workerData)
        //registerWorker(dispatch, workerData);

//make PUT request to user to upload user.worker. Cause it need to be done once registerWorker.fulfilled
        //navigate('/user/my-account');
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
                        onChange={handleProfilePicture}
                    />
                </div>
                <div className='registerWorker--wrap--form--worksphoto'>
                    <label>Seleccionar trabajos Realizados</label>
    {/**<FileBase
                        type='file'
                        multiple={true}
                        onDone={({base64}) => setFormData({...formData, profilePicture: base64})}
                    />
    />**/}
                    <input
                        type="file"
                        id="file"
                        multiple
                        onChange={handleShowcasePictures}
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