import { useDrop } from 'react-dnd';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { DraggableElement } from '../DraggableElement';

export const DropZoneFrom = ({
  onDrop,
  formElements = [],
  moveElement,
  removeElement,
  onSubmit,
}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'FORM_ELEMENT',
    drop: (item) => onDrop?.(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const { control, register, handleSubmit } = useForm();

  const message = isOver ? 'Drop to add item' : 'Drag form elements here';

  return (
    <form
      ref={drop}
      style={{
        border: '1px solid #ccc',
        padding: '20px',
        minHeight: '200px',
      }}
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      {formElements.length > 0 ? (
        <>
          {formElements.map((element, index) => (
            <DraggableElement
              index={index}
              element={element}
              register={register}
              control={control}
              moveElement={moveElement}
              removeElement={removeElement}
            />
          ))}
          {onSubmit && (
            <Button
              type='submit'
              variant='contained'
              color='primary'
            >
              SUBMIT
            </Button>
          )}
        </>
      ) : (
        message
      )}
    </form>
  );
};

export default DropZoneFrom;
