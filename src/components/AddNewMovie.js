import React, { useState } from 'react';
import addBtn from '../img/Add.jpg' ;
import { Card, Modal, Form ,Input, } from 'antd';

const AddNewMovie = ({addMovie}) => {
    const [visible , setVisible] =useState(false);

    const [title , setTitle] =useState();
    const [description, setDescription] =useState();
    const [posterUrl , setPosterUrl] =useState();
    const [rate , setRate] =useState();
    
    const layout = {
      labelCol :{span :8},
      wrapperCol :{span: 16},
    };

    const handleOk = () => {
       addMovie({
         id: Date.now() ,
         title : title ,
         description : description,
         posterUrl : posterUrl ,
         rate : rate,
       });
       setVisible(false);
      };
    const handleShow =() =>setVisible(true);
    const handleCancel =() =>setVisible(false);
   
  return (
    <>  
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="..." src={addBtn} />}
    onClick ={handleShow}
    >
  </Card>

<Modal
  title="Add your favourite movie.."
  visible={visible}
  onOk={handleOk}
  onCancel={handleCancel}

>

   <Form name="basic" {...layout}>
     <Form.Item label ="Title">
       <Input value={title} onChange={(e) =>setTitle(e.target.value)} name="title" />
     </Form.Item>
     <Form.Item label ="Description">
       <Input value={description} onChange={(e) =>setDescription(e.target.value)} name="description" />
     </Form.Item>
     <Form.Item label ="Poster Url">
       <Input value={posterUrl} onChange={(e) =>setPosterUrl(e.target.value)} name="posterUrl" />
     </Form.Item>
     <Form.Item label ="Rate">
       <Input value={rate} onChange={(e) =>setRate(e.target.value)} name="rate" />
     </Form.Item>
   </Form>
 </Modal>
    
</>

  );
  
};

 export default AddNewMovie


