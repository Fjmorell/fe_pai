// src/presentation/pages/users/UserList.tsx
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  BooleanField,
  EditButton,
} from 'react-admin';

const UserList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" label="Nombre" />
      <EmailField source="email" />
      <TextField source="role" />
      <BooleanField source="active" label="Activo" />
      <EditButton />
    </Datagrid>
  </List>
);

export default UserList;
