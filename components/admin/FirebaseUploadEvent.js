import { Button, Grid, Input, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Image from "next/image";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { db, storage } from "../../firebase";
import ButtonWithConfirm from "../general/ButtonWithConfirm";

const FirebaseUploadForm = ({
    config,
    folder,
    updateCounter,
    setUpdateCounter,
}) => {
    const [formData, setFormData] = useState(
        JSON.parse(JSON.stringify(config))
    );
    const [isUploading, setIsUploading] = useState(false);

    const handleFieldChange = (e, field, index) => {
        const newFieldData = {
            ...formData.fields[index],
            value: e.target.value,
        };

        let newFormDataFields = formData.fields;
        newFormDataFields[index] = newFieldData;
        setFormData({ ...formData, fields: newFormDataFields });
    };

    const handleUpload = async () => {
        if (formData.fields[0].value === "") {
            setFileError("Please Enter a Title");
            return;
        }
        addDoc(collection(db, folder), {
            ...formData,
            dateUploaded: Date.now(),
            startDate: formData.fields[1].value,
        });

        //check to see if document with selected Title already exists

        setFormData(JSON.parse(JSON.stringify(config)));

        setIsUploading(false);
        setUpdateCounter(updateCounter + 1);
    };

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                backgroundColor: "lightblue",
                padding: "1em",
                borderRadius: "5px",
            }}
        >
            <Typography variant="h3" sx={{ color: "black" }}>
                Upload new item to {folder}.
            </Typography>

            {formData.fields.map((field, index) => {
                return (
                    <TextField
                        InputLabelProps={{ shrink: true }}
                        type={field.type}
                        color="secondary"
                        label={field.name}
                        key={index}
                        multiline={field.multiline}
                        rows={field.rows}
                        value={field.value}
                        onChange={(e) => {
                            handleFieldChange(e, field, index);
                        }}
                    />
                );
            })}

            <ButtonWithConfirm
                handleClick={handleUpload}
                isDisabled={isUploading}
                buttonText="Upload"
                dialogText="Are you sure you want to upload this item?"
                notificationText="File Uploading..."
            />
        </Box>
    );
};

export default FirebaseUploadForm;
