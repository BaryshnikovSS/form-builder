import { useDrag, useDrop } from 'react-dnd';
import { Checkbox, IconButton, Radio, TextField } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { Controller } from 'react-hook-form';

export const DraggableElement = ({
  control,
  element,
  index,
  moveElement,
  removeElement,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'FORM_ITEM',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: 'FORM_ITEM',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveElement?.(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  }));

  return (
    <div
      ref={(node) => drag(drop(node))}
      key={index}
      style={{
        display: 'flex',
        alignItems: 'center',
        margin: '8px 0',
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {element.type === 'input' && (
        <Controller
          name={`input${index}`}
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              label='Input'
              variant='outlined'
              fullWidth
            />
          )}
        />
      )}
      {element.type === 'checkbox' && <Checkbox />}
      {element.type === 'radio' && <Radio />}
      {removeElement && (
        <IconButton onClick={() => removeElement?.(index)}>
          <Delete />
        </IconButton>
      )}
    </div>
  );
};

export default DraggableElement;
