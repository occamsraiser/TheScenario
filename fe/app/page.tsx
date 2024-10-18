"use client";

import { useEffect, useState } from "react";
import CreateContentModal from "./CreateContentModal";
import EditContentModal from "./EditContentModal";
import TableComponent from "./TableComponent";
import { getAllData, createData, updateDataById, deleteDataById } from "./api.service";

export default () => {

  const [state, setState] = useState(null);
  const [data, setData] = useState([]);
  const [loadData, setLoadData] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);
  const [idToEdit, setIdToEdit] = useState(null);
  const [contentToEdit, setContentToEdit] = useState(null);

  useEffect(()=>{

    if (!loadData)
      return;

    setLoadData(false)
    getAllData().then(res=>{
      setState(res); // this dumps to console, just informational
      setData(res); // this is used to build the display table
    });
  },[loadData])

  useEffect(()=>{
    console.log("getAllData is", state);
  },[state])

  const handleShowEditModal = (id: string, content:string) => {
    setIdToEdit(id);
    setContentToEdit(content);
    setShowEditModal(true);
  }

  const handleDelete = (id: string) => {
    deleteDataById(id).then(res=>{
      setLoadData(true);
    })
  }

  const handleCreate = (content: string) => {
    createData({
      'user-entry': content,
      'time': Date()
    }).then(res=>{
      setLoadData(true);
    })
  }

  const handleEdit = (id: string, content: string) => {
    updateDataById(id, {
      'user-entry': content,
      'time': Date()
    }).then(res=>{
      setLoadData(true);
  })
  }

  const tableColumns = [
    {
      key: "_id",
      label: "ID",
    },
    {
      key: "content",
      label: "CONTENT",
    },
    {
      key: "updatedAt",
      label: "UPDATED AT"
    },
    {
      key: "actions",
      label: "ACTIONS",
    },
  ];

  return (
    <main className="center p-4 w-full flex flex-wrap">
      <div className="p-4">
        <TableComponent 
          items={data} 
          label="Data from backend" 
          columns={tableColumns} 
          handleDelete={handleDelete}
          handleEdit={handleShowEditModal}
        ></TableComponent>
      </div>
      <div className="p-4">
        <CreateContentModal 
          title="Create Content"
          handleCreate={handleCreate}
        ></CreateContentModal>
      </div>
      { showEditModal && <EditContentModal 
                            title="Edit Content"
                            contentId={idToEdit}
                            handleEdit={handleEdit}
                            existingContent={contentToEdit}
                          ></EditContentModal> }
    </main>
  )
}