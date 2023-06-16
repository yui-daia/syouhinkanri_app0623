/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TodosCreateFormInputValues = {
    name?: string;
    email?: string;
};
export declare type TodosCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TodosCreateFormOverridesProps = {
    TodosCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TodosCreateFormProps = React.PropsWithChildren<{
    overrides?: TodosCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TodosCreateFormInputValues) => TodosCreateFormInputValues;
    onSuccess?: (fields: TodosCreateFormInputValues) => void;
    onError?: (fields: TodosCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TodosCreateFormInputValues) => TodosCreateFormInputValues;
    onValidate?: TodosCreateFormValidationValues;
} & React.CSSProperties>;
export default function TodosCreateForm(props: TodosCreateFormProps): React.ReactElement;
