import React from 'react';
import { FormBtn } from '../Form';
import { Input } from '../Form';
import { TextArea } from '../Form';

const inputForm = ({ handleInputChange, imageUploadHandler, createPlant, plantname, description }) => (
    <div>
        <Input
            type='file'
            onChange={imageUploadHandler}
        />
        <Input
            name={plantname}
            onClick={handleInputChange}
        />
        <TextArea
            name={description}
            onClick={handleInputChange}
        />
        <FormBtn
            onClick={createPlant}
        >Create Plant</FormBtn>
    </div>
)

export default inputForm;