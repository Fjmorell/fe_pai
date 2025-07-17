// src/presentation/pages/users/UserCreate.tsx
import {
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  BooleanInput,
  PasswordInput,
} from 'react-admin';

const UserCreate = () => (
  <Create>
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
      <BooleanInput source="active" defaultValue={true} />
    </SimpleForm>
  </Create>
);

export default UserCreate;
