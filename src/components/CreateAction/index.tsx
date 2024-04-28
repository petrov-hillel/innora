import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setNewAction } from '../../store/actions';
import { Close } from '../../helpers/icons';
import { v4 as uuid } from 'uuid';
import {FormErrors, FormState} from "../../helpers/types";
import './styles.scss';

const CreateAction: React.FC<{ setShowAllActions: (value: boolean) => void }> = ({ setShowAllActions }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [formState, setFormState] = useState<FormState>({
    name: '',
    description: ''
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    name: '',
    description: ''
  });

  const dispatch = useDispatch();

  const handlerClearForm = () => {
    setFormState({
      name: '',
      description: ''
    });
    setFormErrors({
      name: '',
      description: ''
    })
  }

  const closeHandler = () => {
    setShowModal(false)
    handlerClearForm()
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formState.name.trim()) {
      setFormErrors(prevState => ({
        ...prevState,
        name: 'Please enter name'
      }));
      return;
    }

    if (formErrors.description.trim().length > 200) {
      setFormErrors(prevState => ({
        ...prevState,
        description: 'Description should be maximum 200 characters long'
      }));
      return;
    }

    const newAction = {
      id: uuid(),
      name: formState.name,
      description: formState.description,
      completed: false,
      createdAt: new Date().toISOString()
    };

    dispatch(setNewAction(newAction));
    setShowAllActions(true);
    setShowModal(false);
    handlerClearForm();
  };

  return (
    <div className="create">
      <button className="create-btn" onClick={() => setShowModal(true)}>Create New Action</button>
      {showModal && (
        <div className="modal">
          <div className="modal__body">
            <Close className="modal__close-icon" onClick={closeHandler} />
            <h2 className="modal__title">Create new action</h2>
            <form action="" onSubmit={submitHandler}>
              <div className="modal__form-group">
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState(prevState => ({
                    ...prevState,
                    name: e.target.value
                  }))}
                  className={formErrors.name ? 'input-error' : ''}
                />
                {formErrors.name && <div className="error-message">{formErrors.name}</div>}
              </div>

              <div className="modal__form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  id="description"
                  value={formState.description}
                  onChange={(e) => setFormState(prevState => ({
                    ...prevState,
                    description: e.target.value
                  }))}
                  className={`modal__description ${formErrors.description ? 'input-error' : ''}`}
                />
                {formErrors.description && <div className="error-message">{formErrors.description}</div>}
              </div>

              <div className="modal__btns">
                <button className="modal__btn modal__btn-submit" type="submit">Save</button>
                <button className="modal__btn modal__btn-close" onClick={closeHandler}>Close</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateAction;
