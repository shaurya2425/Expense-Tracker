import React, { useRef, useState } from 'react'
import { LuUser,LuUpload,LuTrash } from 'react-icons/lu';

function ProfilePhotoSelector({image,setImage}) {

    const inputRef=useRef(null);
    const[previewUrl,setPreviewUrl] = useState(null);


    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if(file)
        {
            // Update the image state
            setImage(file);

            // Generate preview URL from the file
            const preview = URL.createObjectURL(file);
            setPreviewUrl(preview);
        }
    }

    const handleRemoveImage = ()=>{
        setImage(null);
        setPreviewUrl(null)
    }

    const onChooseFile = () => {
        inputRef.current.click();
    }




  return (
    <div className='flex justify-center mb-6'>
        <input 
            type='file'
            accept='image/*'
            ref={inputRef}
            onChange={handleImageChange}
            className='hidden'    
        />

        {!image?(
            <div className='w-20 h-20 flex items-center justify-center bg-purple-100 rounded-full relative' >
                <LuUser className='text-4xl text-purple-500 ' />

                <button
                 type='button'
                 className=''
                 onClick={onChooseFile}
                >
                <LuUpload className='w-8 h-8 flex items-center justify-center bg-purple-500 text-white rounded-full p-2 absolute -bottom-0 right-1' />
                </button>

            </div>
        ) : (
            <div className='w-20 h-20 flex items-center justify-center bg-purple-100 rounded-full relative' >
                <img 
                    src={previewUrl} 
                    alt="profile-photo"  
                    className='w-20 h-20 rounded-full object-cover'
                />

                <button 
                    type='button'
                    className=''
                    onClick={handleRemoveImage}
                >
                <LuTrash className='w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full absolute p-2 -bottom-0 right-1' />
                </button>

            </div>
        )
    }

    </div>
  )
}

export default ProfilePhotoSelector
