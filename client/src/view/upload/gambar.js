import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import {PlusOutlined} from '@ant-design/icons';
import Axios from 'axios';

function Gambar(props){
    const [Images,setImages] = useState([])

    const onDrop = (files) =>{
        let formData = new FormData()
        const config = {
            header :{'content-type':'multipart/form-data'}
        }
        formData.append('file',files[0])
        Axios.post('api/porduct/uploadImage',formData,config)
        .then(response => {
            if(response.data.succes){
                setImages([...Images,response.data.Image])
                props.rereshFunction([...Images,response.data.Image])
            }else{
                alert("gagal upload gambar") 
            }
        })
    }
    const onDelete = (image)=>{
        const index = Images.indexOf(image)

        let newImage = [...Images]
        newImage.slice(index,1)
        setImages(newImage)
        props.rereshFunction(newImage)
    }

    return(
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <Dropzone
                onDrop={onDrop}
                multiple={false}
                maxSize={800000000}
            >
                {({getRootProps,getInputProps})=>(
                    <div style={{width:"300px",height:"240px",border:"1px solid",display:"flex",alignItems:"center",justifyContent:"center"}}
                        {...getRootProps()}
                    >
                        <input {...getInputProps()}></input>
                        <PlusOutlined style={{fontSize:"3rem"}}/>
                    </div>
                )}
            </Dropzone>
            <div style={{display:"flex",width:"350px",height:"240px",overflowX:"scroll"}}>
                    <div onClick>
                        {Images.map((image,index)=>(
                            <div onClick={() => onDelete(image)}>
                                <img style={{minWidth:"300px",width:"300px",height:"240px"}} src={'http://localhost:3000/${image}'} alt={'productImg-${index}'}></img>
                            </div>
                        ))}
                        
                    </div>

            </div>
        </div>
    )
}
export default Gambar