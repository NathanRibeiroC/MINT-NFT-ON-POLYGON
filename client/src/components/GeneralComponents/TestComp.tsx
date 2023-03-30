import React from 'react';
import {
    Formik,
    Field,
    Form,
    useField,
    FieldAttributes,
    FieldArray,
    FieldProps
  } from "formik";

function TestComp({ ...props }): React.FC<FieldProps> {
    const [field, meta, helpers] = useField(props);
    return (
        <div>
            <input id="email" type="email"/>
        </div>
    );
}
export default TestComp;