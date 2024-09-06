import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AffirmationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="text" source="text" />
      </SimpleForm>
    </Create>
  );
};
