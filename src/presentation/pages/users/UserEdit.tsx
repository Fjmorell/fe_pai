// src/presentation/pages/users/UserEdit.tsx
import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  BooleanInput,
  PasswordInput,
} from 'react-admin';

const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" label="Nombre" />
      <TextInput source="email" type="email" />
      <PasswordInput source="password" />
      <SelectInput
        source="role"
        choices={[
          { id: 'admin', name: 'Admin' },
          { id: 'user', name: 'User' },
        ]}
      />
      <BooleanInput source="active" />
    </SimpleForm>
  </Edit>
);

export default UserEdit;
