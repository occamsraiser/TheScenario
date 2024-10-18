"use client";
import React, {useEffect, useState} from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure} from "@nextui-org/react";
import ContentForm from './ContentForm';



const CreateContentModal = ({title, handleCreate}) => {
    
    const [content, setContent] = useState('');
    const [submit, setSubmit] = useState(false);

    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    useEffect(()=>{
        if (!submit || !content)
            return;

        setSubmit(false);
        handleCreate(content);
        setContent('');

    },[submit, content])

    const setContentAndSubmit = (contentToSubmit: string) => {
        setContent(contentToSubmit);
        setSubmit(true);
        onClose();
    }

    return (
        <>
            <Button onPress={onOpen}>{title}</Button>
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

export default CreateContentModal;