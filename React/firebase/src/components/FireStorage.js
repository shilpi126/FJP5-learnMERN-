import React from 'react';
import { storage } from '../Firebase'
import {  ref , uploadBytesResumable ,  getDownloadURL} from "firebase/storage";

function FireStorage() {
    




    let upload = (e) => {
        let file = e.target.files[0];
        console.log(file);
        let fileRef = ref(storage, file.name);
        const uploadTask = uploadBytesResumable(fileRef, file);


        uploadTask.on('state_changed', (snapshot) => {

            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            
           
            
        
        }
    )
        
}


return (

        <input type="file"  onChange={upload} />

)
}

export default FireStorage