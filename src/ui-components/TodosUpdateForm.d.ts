/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Todos } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TodosUpdateFormInputValues = {
    name?: string;
    email?: string;
};
export declare type TodosUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TodosUpdateFormOverridesProps = {
    TodosUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TodosUpdateFormProps = React.PropsWithChildren<{
    overrides?: TodosUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    todos?: Todos;
    onSubmit?: (fields: TodosUpdateFormInputValues) => TodosUpdateFormInputValues;
    onSuccess?: (fields: TodosUpdateFormInputValues) => void;
    onError?: (fields: TodosUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TodosUpdateFormInputValues) => TodosUpdateFormInputValues;
    onValidate?: TodosUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TodosUpdateForm(props: TodosUpdateFormProps): React.ReactElement;
