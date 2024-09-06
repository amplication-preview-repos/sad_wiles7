import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AffirmationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="text" source="text" />
      </SimpleForm>
    </Edit>
  );
};
