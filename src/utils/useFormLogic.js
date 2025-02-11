import { useState, useRef } from 'react';

export default function useFormLogic(initialList) {
  const [formIndex, setFormIndex] = useState(null); // For item index
  const [showForm, setShowForm] = useState(false); // For form visibility
  const [list, setList] = useState(initialList); // For the list of entries in a section
  const [mode, setMode] = useState(null); // For edit or add form
  const initialDataRef = useRef(null); // Saves initial details for when user cancels

  const handleShowForm = (newMode, index) => {
    if (newMode === 'edit') {
      initialDataRef.current = { ...list[index] };
      setFormIndex(index);
    }
    setMode(newMode);
    setShowForm(true);
  };

  const resetList = (emptyValue) => {
    if (typeof emptyValue === 'object' && emptyValue !== null) {
      // For personal details and summary
      setList({...emptyValue})
    } else {
      setList([]);
    }
  };

  // Handle closing the form
  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleCancelForm = () => {
    if (formIndex !== null) {
      const updatedList = [...list];
      updatedList[formIndex] = { ...initialDataRef.current };
      setList(updatedList);
    }
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (formIndex !== null) {
      const updatedList = [...list];
      updatedList[formIndex] = { ...updatedList[formIndex], [name]: value };
      setList(updatedList);
    } else {
      // For Personal Details and Summary
      setList({ ...list, [name]: value });
    }
  };

  // Handle new item input
  const handleNewInputChange = (e, newItem, setNewItem) => {
    const { name, value } = e.target;

    setNewItem({
      ...newItem,
      [name]: value,
    });
  };

  // Handle adding new item for given list
  const handleAddItem = (e, newItem, setNewItem, initialNewItemState) => {
    e.preventDefault();

    setList([...list, newItem]);
    setNewItem(initialNewItemState);
    handleCloseForm(e.target.name);
  };

  // Handle deleting an item
  const handleDeleteItem = (index) => {
    if (window.confirm('Are you sure you want to delete this experience?')) {
      const updatedList = list.filter((_, i) => i !== index);
      setList(updatedList);

      setFormIndex(null); 
      initialDataRef.current = null;
    }
  };

  return {
    list,
    showForm,
    mode,
    formIndex,
    handleShowForm,
    handleCloseForm,
    handleCancelForm,
    handleInputChange,
    handleNewInputChange,
    handleAddItem,
    handleDeleteItem,
    resetList,
  };
}
