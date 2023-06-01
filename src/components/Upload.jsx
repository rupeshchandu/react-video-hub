import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { storage } from '../Firebase';
import { ref,uploadBytes } from 'firebase/storage';


const Upload = () => {

  const [fileupload,setfileupload] = useState(null);

  const uploadfile = async()=>{
      if (!fileupload) return;
      const filesfolderref = ref(storage,`files/${fileupload.name}`);
      try {
        await uploadBytes(filesfolderref,fileupload);
        alert("File Uploaded Suceesfully");

      } catch (error) {
        console.log(error.message);
      }
  }

  return (
    <Container
      maxW={"container.xl"}
      h = {"100vh"}
      p = {"16"}
      >

        <VStack color={"purple.500"} h = {"full"} justifyContent = "center">

          <AiOutlineCloudUpload  size = {"10vmax"}/>

          <form>

            <HStack>
              <Input required type = {"file"} onChange={(e)=>setfileupload(e.target.files[0])}  css = {{
                "&::file-selector-button":{
                  border : "none",
                  width : "calc(100% + 36px)",
                  height : "100%",
                  marginLeft : "-18px",
                  color : "purple",
                  backgroundColor : "white",
                  cursor : "pointer"
                }
              }}/> 
              <Button colorScheme={"purple"} type = "button" onClick={uploadfile} >Upload</Button>
            </HStack>
            
          </form> 

        </VStack>

    </Container>
  )
}

export default Upload;