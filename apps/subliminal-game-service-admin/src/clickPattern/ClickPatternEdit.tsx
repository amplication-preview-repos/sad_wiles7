import * as React from "react";
import { Edit, SimpleForm, EditProps, DateTimeInput } from "react-admin";

export const ClickPatternEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <DateTimeInput label="time" source="time" />
      </SimpleForm>
    </Edit>
  );
};
