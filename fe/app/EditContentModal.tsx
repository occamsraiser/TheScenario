"use client";
import React, {useEffect, useState} from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure} from "@nextui-org/react";
import ContentForm from './ContentForm';



const EditContentModal = ({title, existingContent, contentId, handleEdit}) => {
    
    const [content, setContent] = useState(existingContent); // populate from what we want to edit
    const [submit, setSubmit] = useState(false); 

    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure(); // modal status info

    const setContentAndSubmit = (contentToSubmit: string) => {
        setContent(contentToSubmit);
        setSubmit(true);
    }

    useEffect(()=>{
        
        if (!submit || !content)
            return; // making sure not to submit edit data unless we have content and a submit request

        setSubmit(false);
        handleEdit(contentId, content);
        setContent('');
        onClose();

    },[submit, content])

    useEffect(()=>{
        if (content && !isOpen)
            onOpen(); // open the modal
    },[content])

    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                    <ModalBody className="flex w-full">
                        <ContentForm 
                            content={content} 
                            onSubmitSendContent={setContentAndSubmit} 
                        ></ContentForm>
                    </ModalBody>
                </>
                )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default EditContentModal;